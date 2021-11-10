/**
 * title: 基础使用
 * desc: ｜
 *    获取app, 分别使用Model/Command/X6Graph <br>
 */
import React from 'react'
import { XFlow, XFlowCanvas } from '@antv/xflow'
import CustomPanel from './custom-panel'
import './index.less'
import { useGraphConfig, onLoad } from './graph-config'
import '@antv/xflow/dist/index.css'
/**  Demo Props  */
export interface IDemoProps {
  anything: string
}

const XFlowDemo: React.FC<IDemoProps> = props => {
  const graphConfig = useGraphConfig(props)
  return (
    <XFlow onLoad={onLoad} className="xflow-workspace">
      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 290, right: 0 }} />
      <CustomPanel position={{ top: 0, bottom: 0, left: 0, width: 290 }} />
    </XFlow>
  )
}

export default XFlowDemo
