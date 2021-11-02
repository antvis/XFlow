import React from 'react'
import type { IProps } from './interface'
import type { NsJsonSchemaFormModel } from './service'
import { usePanelContext } from '../base-panel/context'

export interface IFooterProps extends IProps {
  state: NsJsonSchemaFormModel.IState
}

export const PanelFooter: React.FC<IFooterProps> = props => {
  const { propsProxy } = usePanelContext<IProps>()
  const panelProps = propsProxy.getValue()

  return (
    <React.Fragment>
      <div className={`${props.prefixClz}-footer`} style={props.style}>
        {panelProps.footer && React.isValidElement(panelProps.footer) && panelProps.footer}
        {!panelProps.footer && (
          <div className={`${props.prefixClz}-footer-title`}>{panelProps.footerText}</div>
        )}
      </div>
    </React.Fragment>
  )
}
