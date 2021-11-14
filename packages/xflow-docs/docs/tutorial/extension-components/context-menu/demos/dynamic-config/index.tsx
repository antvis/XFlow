/**
 *  title: 动态渲染：不同的节点有不同的菜单
 *  desc: |
 *    可以根据不同的节点数据，动态的生成不同的Menu Items <br>
 */
import React from 'react'
import { XFlow, XFlowCanvas, CanvasContextMenu } from '@antv/xflow'
import { onLoad, useGraphConfig } from './graph-config'
import { useMenuConfig } from './menu-config'

import './index.less'
import '@antv/xflow/dist/index.css'

/**  Demo Props  */
export interface IDemoProps {
  anything: string
}

const XFlowDemo: React.FC<IDemoProps> = props => {
  const graphConfig = useGraphConfig(props)
  const menucConfig = useMenuConfig(props)

  return (
    <XFlow onLoad={onLoad} className="xflow-workspace">
      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 0, right: 0 }}>
        <CanvasContextMenu config={menucConfig} />
      </XFlowCanvas>
    </XFlow>
  )
}

export default XFlowDemo
