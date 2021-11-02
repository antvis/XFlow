import React from 'react'
import type { IProps } from './interface'
import type { NsNodeTreePanelModel } from './service'
import { usePanelContext } from '../base-panel/context'

export interface IFooterProps extends IProps {
  state: NsNodeTreePanelModel.IState
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
