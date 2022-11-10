import React, { useEffect, useState } from 'react'
import { XFlow, XFlowGraph, GraphData, NodeMeta, EdgeMeta } from '@antv/xflow'

const defaultNodeOptions: NodeMeta = {
  width: 100,
  height: 40,
  attrs: {
    body: {
      stroke: "#8f8f8f",
      strokeWidth: 1,
      fill: "#fff",
      rx: 6,
      ry: 6
    },
  }
}

const defaultEdgeOptions: EdgeMeta = {
  attrs: {
    line: {
      stroke: "#8f8f8f",
      strokeWidth: 1
    }
  }
}

const graphConfig = {
  background: {
    color: "#F2F7FA"
  },
}

export default () => {
  const [data, setData] = useState<GraphData>([]);

  const getGraphData = () => {
    setData([
      {
        id: '1',
        shape: 'rect',
        x: 100,
        y: 100,
        label: 'source',
      },
      {
        id: '2',
        shape: 'rect',
        x: 300,
        y: 300,
        label: 'target',
      },
      {
        id: '3',
        shape: 'edge',
        source: '1',
        target: '2',
        label: 'text'
      }
    ])
  };

  useEffect(() => {
    getGraphData()
  }, [])

  return (
    <div className="container">
      <XFlow>
        <XFlowGraph
          data={data}
          defaultNodeOptions={defaultNodeOptions}
          defaultEdgeOptions={defaultEdgeOptions}
          configs={graphConfig}
          centerContent
        />
    </XFlow>
    </div>
  )
}