import React from 'react'
import {} from 'antd'
import { PlusCircleOutlined, DeleteOutlined, LinkOutlined } from '@ant-design/icons'
import './index.less'

interface Props {
  onAddNodeClick: () => void
  onDeleteNodeClick: () => void
  onConnectEdgeClick: () => void
}

const GraphToolbar = (props: Props) => {
  const { onAddNodeClick, onDeleteNodeClick, onConnectEdgeClick } = props
  return (
    <div className="xflow-er-solution-toolbar">
      <div className="icon" onClick={() => onAddNodeClick()}>
        <span>添加节点</span>
        <PlusCircleOutlined />
      </div>
      <div className="icon" onClick={() => onConnectEdgeClick()}>
        <span>添加关系</span>
        <LinkOutlined />
      </div>
      <div className="icon" onClick={() => onDeleteNodeClick()}>
        <span>删除节点/连线</span>
        <DeleteOutlined />
      </div>
    </div>
  )
}

export default GraphToolbar
