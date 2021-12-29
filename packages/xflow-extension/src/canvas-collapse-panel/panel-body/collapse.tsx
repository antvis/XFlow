import React from 'react'
import { isReactComponent } from '@antv/xflow-core'
import type { NsGraph, IGraphConfig, IModelService, IGraphCommandService } from '@antv/xflow-core'
import type { ICollapsePanel, IOnActiveKeyChange, IPanelNode } from '../interface'
import { CaretRightOutlined } from '@ant-design/icons'
import { PanelNode } from './panel-node'
import { Empty } from 'antd'

interface ISearchList {
  prefixClz: string
  modelService: IModelService
  commandService: IGraphCommandService
  graphConfig: IGraphConfig
  onActiveKeyChange: IOnActiveKeyChange
  onMouseDown: (
    nodeConfig: NsGraph.INodeConfig,
  ) => (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
  collapseData: ICollapsePanel[]
}

export const CollapseList: React.FC<ISearchList> = props => {
  const {
    onActiveKeyChange,
    collapseData,
    prefixClz,
    onMouseDown,
    modelService,
    commandService,
    graphConfig,
  } = props

  const renderHeader = (item: ICollapsePanel) => {
    const { header, extra, icon, isCollapsed } = item
    const onClick = (e: React.MouseEvent) => {
      e.preventDefault()
      onActiveKeyChange(item.id)
    }
    return (
      <div className={`xflow-collapse-header`} onClick={onClick}>
        <div className={`xflow-collapse-header-icon`}>
          {isReactComponent(icon) ? (
            React.createElement(icon, { isCollapsed })
          ) : (
            <CaretRightOutlined rotate={isCollapsed ? 0 : 90} style={{ fontSize: '12px' }} />
          )}
        </div>
        <div className={`xflow-collapse-header-label`}>
          {isReactComponent(header) ? React.createElement(header, item) : header}
        </div>
        <div className={`xflow-collapse-header-extra`}>
          {isReactComponent(extra) ? React.createElement(extra, item) : extra}
        </div>
      </div>
    )
  }

  const renderChildren = (children: IPanelNode[]) => {
    return (
      <div className={`xflow-collapse-content`}>
        {children.map(item => {
          return (
            <div
              className={`xflow-collapse-content-item ${item.isDisabled ? 'disabled' : ''}`}
              key={item.id}
            >
              <PanelNode
                item={item}
                onMouseDown={onMouseDown(item)}
                popoverContent={item.popoverContent}
                prefixClz={prefixClz}
                modelService={modelService}
                commandService={commandService}
                graphConfig={graphConfig}
              />
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <ul className="xflow-collapse-list">
      {collapseData.length === 0 && <Empty style={{ marginTop: '24px' }} />}
      {collapseData.map(collapseItem => {
        const { children = [], isCollapsed, render } = collapseItem
        const clz = isCollapsed ? 'close' : 'open'
        return (
          <li className={`xflow-collapse-list-item ${clz}`} key={collapseItem.id}>
            {renderHeader(collapseItem)}
            {isReactComponent(render)
              ? React.createElement(render, collapseItem)
              : renderChildren(children)}
          </li>
        )
      })}
    </ul>
  )
}
