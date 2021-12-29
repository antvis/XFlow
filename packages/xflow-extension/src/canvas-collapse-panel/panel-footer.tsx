import React from 'react'
import { usePanelContext } from '../base-panel/context'
import type { IProps } from './interface'
import type { NsCollapsePanelModel } from './interface'

export interface IFooterProps extends IProps {
  state: NsCollapsePanelModel.IState
}

export const NodePanelFooter: React.FC<IFooterProps> = props => {
  const { prefixClz } = props
  const { propsProxy } = usePanelContext<IProps>()
  const panelProps = propsProxy.getValue()

  return (
    <React.Fragment>
      <div className={`${prefixClz}-footer`} style={props.style}>
        {panelProps.footer && React.isValidElement(panelProps.footer) && panelProps.footer}
      </div>
    </React.Fragment>
  )
}
