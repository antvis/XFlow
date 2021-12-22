import React from 'react'
import { useGraphDnd } from './dnd-hook'
import { SearchResult } from './panel-search-list'
import { CollapseList } from './collapse'
import type { IBodyProps } from './dnd-hook'

export const CollapsePanelBody: React.FC<IBodyProps> = props => {
  const { state, prefixClz, onActiveKeyChange } = props
  const { graphConfig, onMouseDown, modelService, commandService } = useGraphDnd(props)
  const { searchResult, collapseData, keyword } = state

  return (
    <div className={`${prefixClz}-body`} style={props.style}>
      {keyword.length === 0 && (
        <CollapseList
          onActiveKeyChange={onActiveKeyChange}
          collapseData={collapseData}
          onMouseDown={onMouseDown}
          modelService={modelService}
          commandService={commandService}
          graphConfig={graphConfig}
          prefixClz={prefixClz}
        />
      )}
      {keyword.length > 0 && (
        <SearchResult
          searchResult={searchResult}
          onMouseDown={onMouseDown}
          modelService={modelService}
          commandService={commandService}
          graphConfig={graphConfig}
          prefixClz={prefixClz}
        />
      )}
    </div>
  )
}
