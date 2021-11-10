import React from 'react'
import type { IModuleConfig } from '@antv/xflow-core'
import { useExtensionRegistry } from '@antv/xflow-core'
import { createFlowExtensionModule } from '../module'

export const FlowGraphExtension: React.FC = () => {
  /** 获取扩展Registry */
  const extensionRegistry = useExtensionRegistry()
  const config = React.useMemo<IModuleConfig>(
    () => ({
      CONFIG_TYPE: 'DAG_EXTENSION',
      getConfig: async () => {},
    }),
    [],
  )

  React.useEffect(() => {
    /** 注册 extension 到 Registry */
    const disposable = extensionRegistry.addExtension({
      config: config,
      createModule: createFlowExtensionModule,
    })
    /** 添加 classname */
    extensionRegistry.addContainerClassNames('flow-extension-container')

    return () => {
      disposable.dispose()
    }
  }, [config, extensionRegistry])

  return null
}
