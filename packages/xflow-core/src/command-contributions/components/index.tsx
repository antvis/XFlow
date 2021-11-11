import React from 'react'
import { useExtensionRegistry } from '../../xflow-main/components/extension-context'
import { createModule } from '../module'
import { CommandConfig } from '../config'

export interface IProps {
  config?: CommandConfig
}

export const CommandsRegistry: React.FC<IProps> = props => {
  /** 生成配置中心 */
  const extensionRegistry = useExtensionRegistry()

  /** 获取ContextMenu的配置 */
  const config = React.useMemo<CommandConfig>(
    () => (props.config ? props.config : new CommandConfig()),
    /* eslint-disable-next-line  */
    [],
  )

  React.useEffect(() => {
    extensionRegistry.addCoreModule({
      config: config,
      createModule,
    })
    /* eslint-disable-next-line  */
  }, [])

  return null
}

// 缓存props
interface IValueProxy<T> {
  getValue: () => T
}

export const createCmdConfig =
  <T extends unknown = any>(
    addOptions: (config: CommandConfig, container: IValueProxy<T>) => void,
  ) =>
  (value?: T) => {
    /** bridge config and value */
    const valueContainer = React.useMemo(() => ({ getValue: () => ({} as T) }), [])
    valueContainer.getValue = () => value

    const hookConfig = React.useMemo(() => {
      const config = new CommandConfig()
      addOptions(config, valueContainer)
      return config
    }, [valueContainer])

    return hookConfig
  }
