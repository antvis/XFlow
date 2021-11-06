/**
 * title: 支持搜索
 * desc: |
 *  配置 searchService 会支持搜索 <br>
 */
import React from 'react'
import { XFlow, XFlowCanvas, NodeTreePanel, NsNodeTreePanel } from '@antv/xflow'
import { onLoad, useGraphConfig } from './graph-config'
import * as TreeConfig from './dnd-tree-config'

import './index.less'
import { searchService } from './dnd-tree-config'

const XFlowDemo: React.FC<{}> = props => {
  const graphConfig = useGraphConfig(props)

  return (
    <XFlow onLoad={onLoad} className="xflow-workspace">
      <NodeTreePanel
        searchService={searchService}
        onNodeDrop={TreeConfig.onNodeDrop}
        treeDataService={TreeConfig.treeDataService}
        position={{ top: 0, bottom: 0, left: 0, width: 290 }}
      />
      <XFlowCanvas
        config={graphConfig}
        position={{ top: 0, bottom: 0, left: 290, right: 0 }}
      ></XFlowCanvas>
    </XFlow>
  )
}

export default XFlowDemo
