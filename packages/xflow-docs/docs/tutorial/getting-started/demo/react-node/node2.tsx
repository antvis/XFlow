import React from 'react'
import { NsGraphConfig, useAppContext } from '@antv/xflow'
import './node2.less'

const Node2: NsGraphConfig.INodeRender = props => {
  const ctx = useAppContext()
  // console.log(ctx,props)
  return (
    <div className="node2-container">
      <div>{'React节点2'}</div>
    </div>
  )
}
export default Node2
