import React from 'react'
import { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons'
import type { NsGraph } from '../../../interface'
import { useXFlowApp } from '../../components/app-context'
import { XFlowGroupCommands } from '../../../command-contributions/constant'
export const XFlowDefaultGroupNode: NsGraph.INodeRender = props => {
  const { cell } = props
  const app = useXFlowApp()
  const isCollapsed = props.data.isCollapsed || false
  const onExpand = (e: React.MouseEvent) => {
    e.preventDefault()
    app.executeCommand(XFlowGroupCommands.COLLAPSE_GROUP.id, {
      nodeId: cell.id,
      isCollapsed: false,
    })
  }
  const onCollapse = (e: React.MouseEvent) => {
    e.preventDefault()
    app.executeCommand(XFlowGroupCommands.COLLAPSE_GROUP.id, {
      nodeId: cell.id,
      isCollapsed: true,
      gap: 3,
    })
  }

  return (
    <div className="xflow-default-group-node">
      <div className="xflow-group-header">
        <div className="header-left">{props.data.label}</div>
        <div className="header-right">
          {isCollapsed && <PlusSquareOutlined onClick={onExpand} />}
          {!isCollapsed && <MinusSquareOutlined onClick={onCollapse} />}
        </div>
      </div>
    </div>
  )
}

XFlowDefaultGroupNode.displayName = 'XFlowDefaultGroupNode'
