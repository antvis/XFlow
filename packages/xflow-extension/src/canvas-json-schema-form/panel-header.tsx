import React from 'react'
import type { IProps } from './interface'
import { useXFlowApp } from '@antv/xflow-core'
import { usePanelContext } from '../base-panel/context'
import type { NsJsonSchemaFormModel } from './service'
export interface IHeaderProps extends IProps {
  hasSchema: boolean
  state: NsJsonSchemaFormModel.IState
  prefixClz: string
}

export const PanelHeader: React.FC<IHeaderProps> = props => {
  const { prefixClz, hasSchema, state } = props
  const { propsProxy } = usePanelContext<IProps>()
  const panelProps = propsProxy.getValue()
  const app = useXFlowApp()
  /** form会使用tab做为header，需要让出位置*/
  if (hasSchema) {
    return null
  }
  /** 是否有 custom header */
  const isValidHeaderFC = panelProps.header && typeof panelProps.header === 'function'

  return (
    <React.Fragment>
      <div className={`${prefixClz}-header`} style={props.style}>
        {isValidHeaderFC &&
          React.createElement(panelProps.header, {
            ...props,
            headerStyle: props.style,
            bodyStyle: {},
            footerStyle: {},
            targetData: state.targetData,
            targetType: state.targetType,
            modelService: app.modelService,
            commandService: app.commandService,
          })}
        {!panelProps.header && (
          <div className={`${prefixClz}-header-title`}>{panelProps.headerText || 'Panel'}</div>
        )}
      </div>
    </React.Fragment>
  )
}
