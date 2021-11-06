/**
 *  title: 搭配快捷键
 *  desc: |
 *    与KeyBindings组件配合，可以实现快捷键和菜单都触发Command <br>
 */
import React from 'react'
import { XFlow, XFlowCanvas, CanvasContextMenu, KeyBindings } from '@antv/xflow'
import { onLoad, useGraphConfig } from './graph-config'
import { useMenuConfig } from './menu-config'
import { useKeybindingConfig } from './hotkey-config'
import './index.less'

/**  Demo Props  */
export interface IDemoProps {
  anything: string
}

const XFlowDemo: React.FC<IDemoProps> = props => {
  const graphConfig = useGraphConfig(props)
  const menucConfig = useMenuConfig(props)
  const keybindingConfig = useKeybindingConfig(props)

  return (
    <XFlow onLoad={onLoad} className="xflow-workspace">
      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 0, right: 0 }}>
        <CanvasContextMenu config={menucConfig} />
        <KeyBindings config={keybindingConfig} />
      </XFlowCanvas>
    </XFlow>
  )
}

export default XFlowDemo
