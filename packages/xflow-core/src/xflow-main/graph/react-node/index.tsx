import React from 'react'
import {
  DatabaseOutlined,
  RedoOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons'
import type { NsGraph } from '../../../interface'

const fontStyle = { fontSize: '16px', color: '#3057e3' }

/** 状态 类型 */
export enum StatusEnum {
  SUCCESS = 'success',
  PROCESSING = 'processing',
  ERROR = 'error',
  DEFAULT = 'default',
  WARNING = 'warning',
}

export const AlgoIcon: React.FC<IProps> = props => {
  if (props.hide) {
    return null
  }
  switch (props.status) {
    case StatusEnum.PROCESSING:
      return <RedoOutlined spin style={{ color: '#c1cdf7', fontSize: '16px' }} />
    case StatusEnum.ERROR:
      return <CloseCircleOutlined style={{ color: '#ff4d4f', fontSize: '16px' }} />
    case StatusEnum.SUCCESS:
      return <CheckCircleOutlined style={{ color: '#39ca74cc', fontSize: '16px' }} />
    case StatusEnum.WARNING:
      return <ExclamationCircleOutlined style={{ color: '#faad14', fontSize: '16px' }} />
    case StatusEnum.DEFAULT:
      return <InfoCircleOutlined style={{ color: '#d9d9d9', fontSize: '16px' }} />
    default:
      return null
  }
}

interface IProps {
  status: StatusEnum
  hide: boolean
}

export const XFlowDefaultNode: NsGraph.INodeRender = props => {
  const icon = React.isValidElement(props.data.icon) ? (
    props.data.icon
  ) : (
    <DatabaseOutlined style={fontStyle} />
  )
  return (
    <div className={`xflow-default-node ${props.isNodeTreePanel ? 'panel-node' : ''}`}>
      <span className="icon">{icon}</span>
      <span className="label">{props.data.label}</span>
      <span className="status">
        <AlgoIcon status={props.data && props.data.status} hide={props.isNodeTreePanel} />
      </span>
    </div>
  )
}

XFlowDefaultNode.displayName = 'XFlowDefaultNode'
