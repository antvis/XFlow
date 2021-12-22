import React from 'react'
import { Empty } from 'antd'
import type { NsGraph, IGraphConfig, IModelService, IGraphCommandService } from '@antv/xflow-core'
import type { IPanelNode } from '../interface'
import { PanelNode } from './panel-node'

interface ISearchList {
  prefixClz: string
  modelService: IModelService
  commandService: IGraphCommandService
  graphConfig: IGraphConfig
  onMouseDown: (
    nodeConfig: NsGraph.INodeConfig,
  ) => (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
  searchResult: IPanelNode[]
}

export const SearchResult: React.FC<ISearchList> = props => {
  const { searchResult, prefixClz, onMouseDown, modelService, commandService, graphConfig } = props

  if (searchResult.length === 0) {
    return <Empty style={{ marginTop: '24px' }} />
  }

  return (
    <ul className={`xflow-collapse-search-list`}>
      {searchResult.map(item => (
        <li
          className={`xflow-collapse-search-list-item ${item.isDisabled ? 'disabled' : ''}`}
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
        </li>
      ))}
    </ul>
  )
}
