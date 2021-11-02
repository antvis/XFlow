import React from 'react'
import { createModule } from '../module'
import { useExtensionRegistry } from '../../xflow-main/components/extension-context'

export interface IProps {}

export const ToolbarRegistry: React.FC<IProps> = props => {
  const {} = props
  /** 获取配置中心 */
  const extensionRegistry = useExtensionRegistry()

  React.useEffect(() => {
    const disposable = extensionRegistry.addCoreModule({
      config: { CONFIG_TYPE: 'ToolbarRegistry', getConfig: async () => {} },
      createModule,
    })
    return () => {
      disposable.dispose()
    }
  }, [extensionRegistry])

  return null
}

ToolbarRegistry.defaultProps = { XFlowModuleType: 'ToolbarRegistry' }
