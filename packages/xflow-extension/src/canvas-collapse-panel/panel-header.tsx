import React from 'react'
import { Input } from 'antd'
import { usePanelContext } from '../base-panel/context'
import type { IProps, IOnKeywordChange, NsCollapsePanelModel } from './interface'

export interface IHeaderProps extends IProps {
  /** 关键字变化 */
  onKeywordChange: IOnKeywordChange
  /** panel state */
  state: NsCollapsePanelModel.IState
}

export const NodePanelHeader: React.FC<IHeaderProps> = props => {
  const { prefixClz, onKeywordChange, state } = props
  const { propsProxy } = usePanelContext<IProps>()
  const panelProps = propsProxy.getValue()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const panelNodes = state.collapseData.reduce((acc, item) => {
      if (item.children) {
        acc.push(...item.children)
      }
      return acc
    }, [])
    onKeywordChange(e.target.value, panelNodes)
  }
  return (
    <React.Fragment>
      <div className={`${prefixClz}-header`} style={props.style}>
        {panelProps.header && React.isValidElement(panelProps.header) && panelProps.header}
        {panelProps.searchService && (
          <div className={`${prefixClz}-header-search`}>
            <Input
              placeholder="搜索组件"
              allowClear
              onChange={e => onChange(e)}
              style={{ width: '100%', border: 0 }}
            />
          </div>
        )}
      </div>
    </React.Fragment>
  )
}
