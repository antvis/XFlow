/**
 * title: 基础使用
 * desc: |
 *   把节点和边组合成群组 <br>
 */
import React from 'react'
import { XFlow, XFlowCanvas } from '@antv/xflow'
import { FormPanel } from './form'
import { useGraphConfig, onLoad } from './config-graph'
import './index.less'

/**  Demo Props  */
export interface IDemoProps {
  anything: string
}

const XFlowDemo: React.FC<IDemoProps> = props => {
  const graphConfig = useGraphConfig(props)

  return (
    <XFlow onLoad={onLoad} className="xflow-workspace">
      <FormPanel />
      <XFlowCanvas config={graphConfig} position={{ top: 0, left: 230, right: 0, bottom: 0 }} />
    </XFlow>
  )
}

export default XFlowDemo
