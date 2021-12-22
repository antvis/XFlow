/**
 * title: 自定义渲染节点
 * desc: |
 *  如果左侧面板和画布的节点表现一致则使用renderkey来自定义 <br>
 *  如果左侧面板节点和画布节点的渲染不一致，可以使用treeDataService返回的renderComponent字段来自定义 <br>
 */
import React from 'react'
import { XFlow, XFlowCanvas, NodeCollapsePanel } from '@antv/xflow'
import { onLoad, useGraphConfig } from './graph-config'
import * as panelConfig from './dnd-panel-config'
import './index.less'
import '@antv/xflow/dist/index.css'

const XFlowDemo: React.FC<{}> = props => {
  const graphConfig = useGraphConfig(props)

  return (
    <XFlow onLoad={onLoad} className="xflow-workspace">
      <NodeCollapsePanel
        header={<h4 className="dnd-panel-header"> 组件面板 </h4>}
        footer={<div> Foorter </div>}
        onNodeDrop={panelConfig.onNodeDrop}
        nodeDataService={panelConfig.nodeDataService}
        position={{ top: 0, bottom: 0, left: 0, width: 290 }}
      />
      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 290, right: 0 }} />
    </XFlow>
  )
}

export default XFlowDemo
