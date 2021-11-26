import React from 'react'
import type { IModuleConfig } from '@antv/xflow-core'
import { useExtensionRegistry } from '@antv/xflow-core'
import { createFlowchartExtensionModule } from '../module'

export const FlowchartExtension: React.FC<{}> = () => {
  /** 获取扩展Registry */
  const extensionRegistry = useExtensionRegistry()
  const config = React.useMemo<IModuleConfig>(
    () => ({
      CONFIG_TYPE: 'FLOWCHART_EXTENSION',
      getConfig: async () => {},
    }),
    [],
  )
  React.useEffect(() => {
    /** 注册 extension 到 Registry */
    const disposable = extensionRegistry.addExtension({
      config: config,
      createModule: createFlowchartExtensionModule,
    })
    /** 添加 classname */
    extensionRegistry.addContainerClassNames('flowchart-extension-container')

    return () => {
      disposable.dispose()
    }
  }, [config, extensionRegistry])

  return null
}
