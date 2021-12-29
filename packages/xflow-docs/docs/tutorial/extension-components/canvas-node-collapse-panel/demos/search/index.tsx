/**
 * title: 支持搜索
 * desc: |
 *  配置 searchService 会支持搜索 <br>
 */
import React from 'react'
import { XFlow, XFlowCanvas, NodeCollapsePanel } from '@antv/xflow'
import { onLoad, useGraphConfig } from './graph-config'
import * as panelConfig from './dnd-config'

import './index.less'
import '@antv/xflow/dist/index.css'

const XFlowDemo: React.FC<{}> = props => {
  const graphConfig = useGraphConfig(props)

  return (
    <XFlow onLoad={onLoad} className="xflow-workspace">
      <NodeCollapsePanel
        searchService={panelConfig.searchService}
        onNodeDrop={panelConfig.onNodeDrop}
        nodeDataService={panelConfig.nodeDataService}
        position={{ top: 0, bottom: 0, left: 0, width: 290 }}
      />
      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 290, right: 0 }} />
    </XFlow>
  )
}

export default XFlowDemo
