import React from 'react'
import { XFlow, XFlowCanvas, IAppLoad, IApplication, NsGraph, createGraphConfig } from '@antv/xflow'
import { XFlowGraphCommands, XFlowEdgeCommands, NsGraphCmd, NsEdgeCmd } from '@antv/xflow'
import './index.less'


export const useGraphConfig = createGraphConfig(config => {
  config.setX6Config({ grid: true })
  config.setNodeRender('NODE1', props => <div className="react-node">{props.data?.info}</div>)
  config.setEdgeRender('EDGE1', props => <div className="react-edge">{props.data.info}</div>)
})

let appRef: IApplication;

const Demo: React.FC<{}> = () => {
  const onLoad: IAppLoad = async app => {
    appRef = app

    const nodes: NsGraph.INodeConfig[] = [
      {
        id: 'root11',
        x: 200,
        y: 50,
        width: 120,
        height: 40,
        renderKey: 'NODE1',
        info: 'React节点1',
      },
      {
        id: 'down11',
        x: 550,
        y: 50,
        width: 120,
        height: 40,
        renderKey: 'NODE1',
        info: 'React节点2',
      },
      {
        id: 'root12',
        x: 200,
        y: 120,
        width: 120,
        height: 40,
        renderKey: 'NODE1',
        info: 'React节点1',
      },
      {
        id: 'down12',
        x: 550,
        y: 120,
        width: 120,
        height: 40,
        renderKey: 'NODE1',
        info: 'React节点2',
      },
    ]
    const edges: NsGraph.IEdgeConfig[] = [
      { 
        id: 'root11-down11', 
        source: 'root11',
        target: 'down11',
        label: 'text'
      },
      { 
        id: 'root12-down12',
        source: 'root12',
        target: 'down12',
        edgeContentWidth: 60,
        edgeContentHeight: 30, 
        info: 'text',
        renderKey: 'EDGE1',
      },
    ]
    const graphData = { nodes, edges }

    /** 执行画布渲染命令 */
    app.executeCommand(XFlowGraphCommands.GRAPH_RENDER.id, {
      graphData,
    } as NsGraphCmd.GraphRender.IArgs)
  }
  return (
    <XFlow onLoad={onLoad} className="xflow-edge-update-demo">
      <div className="btn">
        <div
          className="div"
          onClick={() => {
            appRef.executeCommand(XFlowEdgeCommands.UPDATE_EDGE.id, {
              edgeConfig: { id: 'root11-down11', label: 'new-text' },
            } as NsEdgeCmd.UpdateEdge.IArgs)
          }}
        >
          {'更新连线上label的内容'}
        </div>
        <div 
          className="div"
          onClick={() => {
            appRef.executeCommand(XFlowEdgeCommands.UPDATE_EDGE.id, {
              edgeConfig: { 
                id: 'root12-down12',
                source: 'root12',
                target: 'down12',
                edgeContentWidth: 60,
                edgeContentHeight: 30, 
                info: 'new-text',
                renderKey: 'EDGE1',
              },
            } as NsEdgeCmd.UpdateEdge.IArgs)
          }}
        >
          {'更新连线上react节点的内容'}
        </div>
      </div>
      <XFlowCanvas config={useGraphConfig()} />
    </XFlow>
  )
}
export default Demo
