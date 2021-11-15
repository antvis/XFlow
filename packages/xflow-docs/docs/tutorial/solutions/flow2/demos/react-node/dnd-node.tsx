import React from 'react'
import type { NsGraph } from '@antv/xflow'
import './dnd-node.less'

export const DndNode: NsGraph.INodeRender = props => {
  const { label, des } = props.data
  return (
    <div className="xflow-flow-node">
      <div className="node-title">
        <img
          src="https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*GY1bRIKjcuYAAAAAAAAAAAAAARQnAQ"
          alt=""
        />
        <span>{label}</span>
      </div>
      <div className="node-des">{des}</div>
    </div>
  )
}
