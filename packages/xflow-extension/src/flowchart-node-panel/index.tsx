import React, { useState } from 'react'
import { useXflowPrefixCls } from '@antv/xflow-core'
import { DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons'
import { get } from 'lodash'
import { WorkspacePanel } from '../base-panel'
import type { IProps } from './interface'
import type { IPanelProps } from '../canvas-node-tree-panel/interface'
import { registerCustomNode } from './utils'
import { NodePanelBody } from './panel-body'
// import { NodePanelHeader } from '../canvas-node-tree-panel/panel-header'
import { NodePanelHeader } from './panel-header'
import { usePanelLyaoutStyle } from '../canvas-node-tree-panel/utils'
import { usePanelData } from './service'
import { CONTAINER_CLASS, PANEL_HEADER_HEIGHT } from './constants'
export { setGroupRender } from './group-panel'
export * from './constants'
export * from './utils'
export * from './interface'

export const NodePanelMain: React.FC<IProps> = props => {
  const {
    prefixClz,
    position = { width: 240, top: 0, bottom: 0, left: 0 },
    showHeader = true,
    ...rest
  } = props
  const { width = 200 } = position
  const { headerStyle, bodyStyle } = usePanelLyaoutStyle(props as IPanelProps)
  const { state, onKeywordChange } = usePanelData(props)

  return (
    <>
      {showHeader && (
        <WorkspacePanel
          {...rest}
          position={{
            top: 0,
            left: 0,
            height: PANEL_HEADER_HEIGHT,
            width,
          }}
        >
          <NodePanelHeader
            {...props}
            state={state}
            style={headerStyle}
            onKeywordChange={onKeywordChange}
          />
        </WorkspacePanel>
      )}
      <WorkspacePanel
        className={`${CONTAINER_CLASS}-nodes`}
        {...rest}
        position={{
          ...position,
          top: showHeader ? PANEL_HEADER_HEIGHT : 0,
        }}
      >
        <NodePanelBody {...props} state={state} style={bodyStyle} />
      </WorkspacePanel>
    </>
  )
}

export const FlowchartNodePanel: React.FC<IProps> = props => {
  registerCustomNode(get(props, 'registerNode'))
  const prefixClz = useXflowPrefixCls('node-panel')
  const [collpased, setCollpased] = useState(false)
  const { show = true, position = { width: 240, top: 40, bottom: 0, left: 0 }, ...rest } = props
  if (!show) {
    return null
  }
  const { width = 200, left } = position

  return (
    <WorkspacePanel
      className={CONTAINER_CLASS}
      position={{
        ...position,
        left: !collpased ? left : -width,
      }}
    >
      <div className={`${CONTAINER_CLASS}-wrapper`}>
        <WorkspacePanel
          className={prefixClz}
          {...rest}
          position={{
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <NodePanelMain {...props} prefixClz={prefixClz} position={position} />
        </WorkspacePanel>
        <div
          className={`${CONTAINER_CLASS}-icon`}
          style={{
            top: 21,
            right: !collpased ? -10 : -20,
            borderRadius: !collpased ? '50%' : '0 50% 50% 0',
            borderLeft: !collpased ? '' : 'none',
          }}
          onClick={() => {
            setCollpased(!collpased)
          }}
        >
          {collpased ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
        </div>
      </div>
    </WorkspacePanel>
  )
}
