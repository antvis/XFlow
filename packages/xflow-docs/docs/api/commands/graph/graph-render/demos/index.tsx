import React from 'react'
import type { NsGraph, NsGraphCmd, IAppLoad } from '@antv/xflow'
import { XFlow, XFlowCanvas, createGraphConfig, XFlowGraphCommands } from '@antv/xflow'
import '@antv/xflow/dist/index.css'
import './index.less'

/** graphConfig hook */
export const useGraphConfig = createGraphConfig(config => {
  config.setX6Config({ grid: true })
  config.setNodeRender('NODE1', props => <div className="react-node">{props.data?.info}</div>)
  config.setNodeTypeParser(node => node?.renderKey)
})

const Demo: React.FC<{}> = () => {
  const onLoad: IAppLoad = async app => {
    const nodes: NsGraph.INodeConfig[] = [
      {
        id: 'root1',
        x: 200,
        y: 50,
        width: 120,
        height: 40,
        renderKey: 'NODE1',
        info: 'React节点1',
      },
      {
        id: 'down1',
        x: 550,
        y: 50,
        width: 120,
        height: 40,
        renderKey: 'NODE1',
        info: 'React节点2',
      },
    ]
    const edges: NsGraph.IEdgeConfig[] = [
      { id: 'root1-down1', source: 'root1', target: 'down1', label: 'text' },
    ]
    const graphData = { nodes, edges }

    /** 执行画布渲染命令 */
    app.executeCommand(XFlowGraphCommands.GRAPH_RENDER.id, {
      graphData,
    } as NsGraphCmd.GraphRender.IArgs)
  }
  return (
    <XFlow onLoad={onLoad} className="xflow-render-graph-demo">
      <XFlowCanvas config={useGraphConfig()} />
    </XFlow>
  )
}
export default Demo
