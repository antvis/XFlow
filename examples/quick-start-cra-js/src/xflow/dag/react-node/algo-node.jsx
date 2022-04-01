import React from 'react'
import {
  DatabaseOutlined,
  RedoOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons'
import { NsGraphStatusCommand } from '@antv/xflow'
import './algo-node.less'

const fontStyle = { fontSize: '16px', color: '#3057e3' }
export const AlgoIcon = props => {
  if (props.hide) {
    return null
  }
  switch (props.status) {
    case NsGraphStatusCommand.StatusEnum.PROCESSING:
      return <RedoOutlined spin style={{ color: '#c1cdf7', fontSize: '16px' }} />
    case NsGraphStatusCommand.StatusEnum.ERROR:
      return <CloseCircleOutlined style={{ color: '#ff4d4f', fontSize: '16px' }} />
    case NsGraphStatusCommand.StatusEnum.SUCCESS:
      return <CheckCircleOutlined style={{ color: '#39ca74cc', fontSize: '16px' }} />
    case NsGraphStatusCommand.StatusEnum.WARNING:
      return <ExclamationCircleOutlined style={{ color: '#faad14', fontSize: '16px' }} />
    case NsGraphStatusCommand.StatusEnum.DEFAULT:
      return <InfoCircleOutlined style={{ color: '#d9d9d9', fontSize: '16px' }} />
    default:
      return null
  }
}

export const AlgoNode = props => {
  return (
    <div className={`xflow-algo-node ${props.isNodeTreePanel ? 'panel-node' : ''}`}>
      <span className="icon">
        <DatabaseOutlined style={fontStyle} />
      </span>
      <span className="label">{props.data.label}</span>
      <span className="status">
        <AlgoIcon status={props.data && props.data.status} hide={props.isNodeTreePanel} />
      </span>
    </div>
  )
}
