/**
 * title: 基础使用
 * desc: |
 *  treeDataService:返回平铺的树结构 <br>
 *  通过parentId将node组织到对应文件夹下, parentId 为空的节点是文件夹节点 <br>
 *  支持popoverContent属性  <br>
 *  onNodeDrop 回调时时，要求使用命令创建节点  <br>
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
