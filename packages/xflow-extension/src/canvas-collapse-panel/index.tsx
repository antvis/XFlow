import type { IProps, ILayoutProps } from './interface'
import React from 'react'
import { useXflowPrefixCls } from '@antv/xflow-core'
import { WorkspacePanel } from '../base-panel'
import { CollapsePanelBody } from './panel-body'
import { NodePanelHeader } from './panel-header'
import { NodePanelFooter } from './panel-footer'
import { usePanelLyaoutStyle } from './utils'
import { useCollapsePanelData } from './service'
import { NsCollapsePanelModel } from './interface'
import * as NsNodeCollapsePanel from './interface'

const CollapsePanelMain: React.FC<IProps> = props => {
  const { headerStyle, bodyStyle, footerStyle } = usePanelLyaoutStyle(props as ILayoutProps)
  const { state, onActiveKeyChange, onKeywordChange } = useCollapsePanelData(props)

  return (
    <>
      <NodePanelHeader
        {...props}
        state={state}
        style={headerStyle}
        onKeywordChange={onKeywordChange}
      />
      <CollapsePanelBody
        {...props}
        state={state}
        style={bodyStyle}
        onActiveKeyChange={onActiveKeyChange}
      />
      <NodePanelFooter {...props} state={state} style={footerStyle} />
    </>
  )
}

const NodeCollapsePanel: React.FC<IProps> = props => {
  const prefixClz = useXflowPrefixCls('collapse-panel')
  return (
    <WorkspacePanel {...props} className={prefixClz}>
      <CollapsePanelMain {...props} prefixClz={prefixClz} />
    </WorkspacePanel>
  )
}

export {
  NodeCollapsePanel,
  NsCollapsePanelModel,
  NsNodeCollapsePanel,
  IProps as INodeCollapsePanelProps,
}
