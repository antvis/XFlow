/**
 *  title: 自定义渲染
 *  desc: |
 *    内置的菜单补满足时，可以配置自定义组件 <br>
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
