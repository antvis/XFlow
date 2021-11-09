import React from 'react'
import type { NsGraph } from '@antv/xflow'
import { useAppContext } from '@antv/xflow'
import './node2.less'

const Node2: NsGraph.INodeRender = props => {
  const ctx = useAppContext()
  // console.log(ctx,props)
  return (
    <div className="node2-container">
      <div>{'React节点2'}</div>
    </div>
  )
}
export default Node2
