import React from 'react'
import type { IAppLoad, NsGraph, NsGraphCmd } from '@antv/xflow'
import { XFlow, XFlowCanvas, createGraphConfig, XFlowGraphCommands } from '@antv/xflow'
import './index.less'
import '@antv/xflow/dist/index.css'

export const useGraphConfig = createGraphConfig(config => {
  config.setX6Config({ grid: true })
  config.setNodeRender('NODE1', props => <div className="react-node">{props.data?.text}</div>)
  config.setNodeTypeParser(node => node?.renderKey)
})

const Demo: React.FC<{}> = () => {
  const onLoad: IAppLoad = async app => {
    const nodes: NsGraph.INodeConfig[] = [
      { id: 'root1', width: 150, height: 40, renderKey: 'NODE1', text: '节点1' },
      { id: 'down1', width: 150, height: 40, renderKey: 'NODE1', text: '节点2' },
      { id: 'down2', width: 150, height: 40, renderKey: 'NODE1', text: '节点3' },
      { id: 'down3', width: 150, height: 40, renderKey: 'NODE1', text: '节点4' },
    ]
    const edges: NsGraph.IEdgeConfig[] = [
      { id: 'root1-down1', source: 'root1', target: 'down1', label: '1:1' },
      { id: 'root1-down2', source: 'root1', target: 'down2', label: '1:N' },
      { id: 'root1-down3', source: 'root1', target: 'down3', label: 'N:N' },
    ]
    const graphData = { nodes, edges }

    await app.executeCommand(XFlowGraphCommands.GRAPH_LAYOUT.id, {
      graphData,
      layoutType: 'dagre',
      layoutOptions: {
        type: 'dagre',
        rankdir: 'LR',
        nodesep: 10,
        ranksep: 80,
      },
    } as NsGraphCmd.GraphLayout.IArgs)

    await app.executeCommand(XFlowGraphCommands.GRAPH_RENDER.id, {
      graphData,
    } as NsGraphCmd.GraphRender.IArgs)
  }

  return (
    <XFlow onLoad={onLoad} className="xflow-graph-layout-demo">
      <XFlowCanvas config={useGraphConfig()} />
    </XFlow>
  )
}
export default Demo
