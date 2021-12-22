import React, { useState } from 'react'
/** 图核心组件 & 类型定义 */
import type { IAppLoad, NsGraph, IApplication, NsGraphCmd } from '@antv/xflow'
import { XFlow, XFlowCanvas, createGraphConfig, XFlowGraphCommands } from '@antv/xflow'
import './index.less'
import '@antv/xflow/dist/index.css'

export const useGraphConfig = createGraphConfig(config => {
  config.setX6Config({ grid: true })
  config.setNodeRender('NODE1', props => <div className="react-node">{props.data?.info?.text}</div>)
  config.setNodeTypeParser(node => node?.renderKey)
})

let appRef: IApplication = undefined
const Demo: React.FC<{}> = () => {
  const [graphData, setGraphData] = useState<NsGraph.IGraphData>(undefined)

  const onLoad: IAppLoad = async app => {
    appRef = app

    const nodes: NsGraph.INodeConfig[] = [
      { id: 'root1', width: 150, height: 40, renderKey: 'NODE1', info: { text: 'root1' } },
      { id: 'down1', width: 150, height: 40, renderKey: 'NODE1', info: { text: 'down1' } },
      { id: 'down2', width: 150, height: 40, renderKey: 'NODE1', info: { text: 'down2' } },
      { id: 'down3', width: 150, height: 40, renderKey: 'NODE1', info: { text: 'down3' } },
    ]
    const edges: NsGraph.IEdgeConfig[] = [
      { id: 'root1-down1', source: 'root1', target: 'down1', label: '1:1' },
      { id: 'root1-down2', source: 'root1', target: 'down2', label: '1:N' },
      { id: 'root1-down3', source: 'root1', target: 'down3', label: 'N:N' },
    ]
    setGraphData({ nodes, edges })
  }

  const zoomGraph = (key: string) => {
    if (key === '放大') {
      appRef.executeCommand(XFlowGraphCommands.GRAPH_ZOOM.id, {
        factor: 0.1,
        zoomOptions: {
          absolute: false,
          minScale: 0.1,
          maxScale: 3.0,
        },
      } as NsGraphCmd.GraphZoom.IArgs)
    }
    if (key === '缩小') {
      appRef.executeCommand(XFlowGraphCommands.GRAPH_ZOOM.id, {
        factor: -0.1,
        zoomOptions: {
          absolute: false,
          minScale: 0.1,
          maxScale: 3.0,
        },
      } as NsGraphCmd.GraphZoom.IArgs)
    }
    if (key === '画布1:1(real)') {
      appRef.executeCommand(XFlowGraphCommands.GRAPH_ZOOM.id, {
        factor: 'real',
      } as NsGraphCmd.GraphZoom.IArgs)
    }
    if (key === '适应画布(fit)') {
      appRef.executeCommand(XFlowGraphCommands.GRAPH_ZOOM.id, {
        factor: 'fit',
      } as NsGraphCmd.GraphZoom.IArgs)
    }
  }

  return (
    <XFlow
      className="xflow-graph-zoom-demo"
      graphData={graphData}
      graphLayout={{
        layoutType: 'dagre',
        layoutOptions: {
          type: 'dagre',
          rankdir: 'TB',
          nodesep: 60,
          ranksep: 40,
        },
      }}
      onLoad={onLoad}
    >
      <div className="toolbar">
        {['放大', '缩小', '画布1:1(real)', '适应画布(fit)'].map(item => (
          <div key={item} className="div" onClick={() => zoomGraph(item)}>
            {item}
          </div>
        ))}
      </div>
      <XFlowCanvas config={useGraphConfig()} />
    </XFlow>
  )
}

export default Demo
