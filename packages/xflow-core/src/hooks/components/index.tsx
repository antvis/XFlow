import React from 'react'
import { XFlowHookConfig, createModule } from '../module'
import { useExtensionRegistry } from '../../xflow-main/components/extension-context'
import { HookConfig } from '../config'

export interface IProps {
  config?: XFlowHookConfig
  XFlowModuleType?: string
}

export const HookRegistry: React.FC<IProps> = props => {
  /** 获取配置中心 */
  const extensionRegistry = useExtensionRegistry()
  /** 获取ContextService的配置 */
  const hookConfig = React.useMemo<XFlowHookConfig>(
    () => (props.config ? props.config : new XFlowHookConfig()),
    // 不要移除：保证config只生成一次
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  React.useEffect(() => {
    const disposable = extensionRegistry.addCoreModule({
      config: hookConfig,
      createModule,
    })
    return () => {
      disposable.dispose()
      hookConfig.dispose()
    }
  }, [extensionRegistry, hookConfig])
  return null
}

interface IValueProxy<T> {
  getValue: () => T
}

export const createHookConfig =
  <T extends unknown = any>(addOptions: (config: HookConfig, container: IValueProxy<T>) => void) =>
  (value?: T) => {
    /** bridge config and value */
    const valueContainer = React.useMemo(() => ({ getValue: () => ({} as T) }), [])
    valueContainer.getValue = () => value

    const hookConfig = React.useMemo(() => {
      const config = new HookConfig()
      addOptions(config, valueContainer)
      return config
    }, [valueContainer])

    return hookConfig
  }
