import React from 'react'
import { createDagExtensionModule } from '../module'
import type { IModuleConfig } from '@antv/xflow-core'
import { useExtensionRegistry, XFlowAppExtensionModule } from '@antv/xflow-core'
import type { IProps } from '../interface'

export const DagGraphExtension: React.FC<IProps> = props => {
  /** 获取扩展Registry */
  const extensionRegistry = useExtensionRegistry()
  React.useEffect(() => {
    /** 添加 container的classname */
    extensionRegistry.addContainerClassNames('dag-extension-container')
    const layout = props.layout || 'TB'
    extensionRegistry.addContainerClassNames(
      layout === 'TB' ? 'layout-top-bottom' : 'layout-left-right',
    )
  }, [extensionRegistry, props.layout])

  const config = React.useMemo<IModuleConfig>(
    () => ({
      CONFIG_TYPE: 'DAG_EXTENSION',
      getConfig: async () => props,
    }),
    [props],
  )

  return <XFlowAppExtensionModule<IProps> config={config} createModule={createDagExtensionModule} />
}
