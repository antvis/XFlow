import React from 'react'
import { createModule } from '../module'
import { ModelServiceConfig } from '../config'
import { useExtensionRegistry } from '../../xflow-main/components/extension-context'

export interface IProps {
  config?: ModelServiceConfig
  XFlowModuleType?: string
}

export const ModelServiceRegistry: React.FC<IProps> = props => {
  const { config } = props
  /** 获取配置中心 */
  const extensionRegistry = useExtensionRegistry()
  /** 获取ModelService的配置 */
  const modelServiceConfig = React.useMemo<ModelServiceConfig>(
    () => (config ? config : new ModelServiceConfig()),
    /* eslint-disable-next-line  */
    [],
  )

  React.useEffect(() => {
    const disposable = extensionRegistry.addCoreModule({
      config: modelServiceConfig,
      createModule,
    })
    modelServiceConfig.setMountState()
    return () => {
      disposable.dispose()
      modelServiceConfig.dispose()
    }
  }, [])

  return null
}

ModelServiceRegistry.defaultProps = { XFlowModuleType: 'ModelServiceConfig' }

export const createModelServiceConfig =
  <T extends unknown = any>(addOptions: (config: ModelServiceConfig, getValue: () => T) => void) =>
  (value?: T) => {
    /** bridge config and value */
    const valueContainer = React.useMemo(() => ({ getValue: () => ({} as T) }), [])
    valueContainer.getValue = () => value

    const hookConfig = React.useMemo(() => {
      const config = new ModelServiceConfig()
      addOptions(config, valueContainer.getValue)
      return config
    }, [])

    return hookConfig
  }
