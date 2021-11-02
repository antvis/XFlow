import React from 'react'
import { Input } from 'antd'
import type { IProps, IOnKeywordChange } from './interface'
import type { NsNodeTreePanelModel } from './service'
import { usePanelContext } from '../base-panel/context'

export interface IHeaderProps extends IProps {
  onKeywordChange: IOnKeywordChange
  state: NsNodeTreePanelModel.IState
}

export const NodePanelHeader: React.FC<IHeaderProps> = props => {
  const { prefixClz, onKeywordChange } = props
  const { propsProxy } = usePanelContext<IProps>()
  const panelProps = propsProxy.getValue()

  return (
    <React.Fragment>
      <div className={`${prefixClz}-header`} style={props.style}>
        {panelProps.header && React.isValidElement(panelProps.header) && panelProps.header}
        {panelProps.searchService && (
          <div className={`${prefixClz}-header-search`}>
            <Input
              placeholder="搜索组件"
              allowClear
              onChange={e => onKeywordChange(e.target.value)}
              style={{ width: '100%', border: 0 }}
            />
          </div>
        )}
      </div>
    </React.Fragment>
  )
}
