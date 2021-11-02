import React from 'react'
import { createModule } from '../module'
import { useExtensionRegistry } from '../../xflow-main/components/extension-context'

export interface IProps {}

export const MenuRegistry: React.FC<IProps> = props => {
  const {} = props
  /** 获取配置中心 */
  const extensionRegistry = useExtensionRegistry()

  React.useEffect(() => {
    const disposable = extensionRegistry.addCoreModule({
      config: { CONFIG_TYPE: 'MenuRegistry', getConfig: async () => {} },
      createModule,
    })
    return () => {
      disposable.dispose()
    }
    /* eslint-disable-next-line  */
  }, [])

  return null
}

MenuRegistry.defaultProps = { XFlowModuleType: 'MenuRegistry' }
