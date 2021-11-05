import React from 'react'
import { useXFlowApp } from '@antv/xflow-core'
import type { IProps } from './interface'
import type { NsJsonSchemaFormModel } from './service'
import { usePanelContext } from '../base-panel/context'

export interface IFooterProps extends IProps {
  state: NsJsonSchemaFormModel.IState
  prefixClz?: string
}

export const PanelFooter: React.FC<IFooterProps> = props => {
  const { state } = props
  const { propsProxy } = usePanelContext<IProps>()
  const panelProps = propsProxy.getValue()
  const app = useXFlowApp()
  /** 是否有 custom footer */
  const isValidFooterFC = panelProps.footer && typeof panelProps.footer === 'function'

  return (
    <React.Fragment>
      <div className={`${props.prefixClz}-footer`} style={props.style}>
        {isValidFooterFC &&
          React.createElement(panelProps.footer, {
            ...props,
            headerStyle: {},
            bodyStyle: {},
            footerStyle: props.style,
            targetData: state.targetData,
            targetType: state.targetType,
            modelService: app.modelService,
            commandService: app.commandService,
          })}
        {!panelProps.footer && (
          <div className={`${props.prefixClz}-footer-title`}>{panelProps.footerText}</div>
        )}
      </div>
    </React.Fragment>
  )
}
