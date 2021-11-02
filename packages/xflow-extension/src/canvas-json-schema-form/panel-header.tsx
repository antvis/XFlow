import React from 'react'
import type { IProps } from './interface'
import { usePanelContext } from '../base-panel/context'
export interface IHeaderProps extends IProps {
  hasSchema: boolean
}

export const PanelHeader: React.FC<IHeaderProps> = props => {
  const { prefixClz, hasSchema } = props
  const { propsProxy } = usePanelContext<IProps>()
  const panelProps = propsProxy.getValue()

  if (hasSchema) {
    return null
  }

  return (
    <React.Fragment>
      <div className={`${prefixClz}-header`} style={props.style}>
        {panelProps.header && React.isValidElement(panelProps.header) && panelProps.header}
        {!panelProps.header && (
          <div className={`${prefixClz}-header-title`}>{panelProps.headerText || 'Panel'}</div>
        )}
      </div>
    </React.Fragment>
  )
}
