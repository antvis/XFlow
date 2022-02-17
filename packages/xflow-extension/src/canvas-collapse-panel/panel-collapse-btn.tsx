import React from 'react'
import type { IProps } from './interface'
import { CaretLeftOutlined } from '@ant-design/icons'

export interface ICollapseBtnProps extends IProps {
  isCollapsed: boolean
  onCollapseBtnClick: () => void
}

/** collapseBtn */
export const NodePanelCollapseBtn: React.FC<ICollapseBtnProps> = props => {
  const { prefixClz, onCollapseBtnClick, isCollapsed, collapseButtonStyle, style } = props

  return (
    <React.Fragment>
      <div
        className={`${prefixClz}-header`}
        style={{ ...style, ...collapseButtonStyle }}
        onClick={onCollapseBtnClick}
      >
        <CaretLeftOutlined rotate={isCollapsed ? 180 : 0}/>
      </div>
    </React.Fragment>
  )
}
