/**
 *  title: 基础使用（右键删除节点/删除边/画布菜单）
 *  desc: |
 *    可以在节点/边/画布上配置菜单 <br>
 *    菜单配置中可以配置点击时执行 xflow 命令 <br>
 *    点击查看 [所有可用的命令](/api/commands) <br>
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
