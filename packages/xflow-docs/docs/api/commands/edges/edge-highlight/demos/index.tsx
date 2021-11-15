import React from 'react'
import { XFlow, XFlowCanvas, IAppLoad, IApplication, NsGraph, createGraphConfig } from '@antv/xflow'
import { XFlowGraphCommands, XFlowEdgeCommands, NsGraphCmd, NsEdgeCmd } from '@antv/xflow'
import { Graph as X6Graph } from '@antv/x6'
import './index.less'


export const useGraphConfig = createGraphConfig(config => {
  config.setX6Config({ grid: true })
  config.setNodeRender('NODE1', props => <div className="react-node">{props.data?.info}</div>)
})

let appRef: IApplication;

const Demo: React.FC<{}> = () => {
  const onLoad: IAppLoad = async (app: IApplication) => {
    appRef = app
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
      {
        id: 'down2',
        x: 550,
        y: 150,
        width: 120,
        height: 40,
        renderKey: 'NODE1',
        info: 'React节点2',
      },
    ]
    const edges: NsGraph.IEdgeConfig[] = [
      { 
        id: 'root1-down1', 
        source: 'root1',
        target: 'down1',
        label: '1:N',
      },
      { 
        id: 'root1-down2', 
        source: 'root1',
        target: 'down2',
        label: 'N:N',
      },
    ]
    const graphData = { nodes, edges }

    app.executeCommand(XFlowGraphCommands.GRAPH_RENDER.id, {
      graphData,
    } as NsGraphCmd.GraphRender.IArgs)

    const graphInstance: X6Graph = await app.getGraphInstance()
    graphInstance.on('edge:click', ({ edge }) => {
      const edgeData = edge?.getData();
      app.executeCommand(XFlowEdgeCommands.HIGHLIGHT_EDGE.id, {
        edgeId: edgeData.id,
        strokeColor: '#873bf4',
        strokeWidth: 4,
      } as NsEdgeCmd.HighlightEdge.IArgs)
    })
  }
  return (
    <XFlow onLoad={onLoad} className="xflow-edge-highlight-demo">
      <div className="btn">
        {'请用鼠标点击连线, 会触发连线高亮'}
      </div>
      <XFlowCanvas config={useGraphConfig()} />
    </XFlow>
  )
}
export default Demo
