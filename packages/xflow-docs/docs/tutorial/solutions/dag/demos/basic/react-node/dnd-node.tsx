import React from 'react'
import type { NsGraph } from '@antv/xflow'
import './dnd-node.less'

export const DndNode: NsGraph.INodeRender = props => {
  return <div className="xflow-dnd-node">{props.data.label}</div>
}
