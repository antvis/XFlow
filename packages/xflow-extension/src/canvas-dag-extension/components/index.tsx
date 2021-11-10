import React from 'react'
import { createDagExtensionModule } from '../module'
import type { IModuleConfig } from '@antv/xflow-core'
import { useExtensionRegistry, XFlowAppExtensionMoudle } from '@antv/xflow-core'

export interface IProps {}

export const DagGraphExtension: React.FC<IProps> = props => {
  /** 获取扩展Registry */
  const extensionRegistry = useExtensionRegistry()
  React.useEffect(() => {
    /** 添加 container的classname */
    extensionRegistry.addContainerClassNames('dag-extension-container')
  }, [extensionRegistry])

  const config = React.useMemo<IModuleConfig>(
    () => ({
      CONFIG_TYPE: 'DAG_EXTENSION',
      getConfig: async () => props,
    }),
    [props],
  )

  return <XFlowAppExtensionMoudle<IProps> config={config} createModule={createDagExtensionModule} />
}
