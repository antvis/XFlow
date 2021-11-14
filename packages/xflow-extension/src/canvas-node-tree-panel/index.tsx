import type { IProps, IPanelProps } from './interface'
import React from 'react'
import { useXflowPrefixCls } from '@antv/xflow-core'
import { WorkspacePanel } from '../base-panel'
import { NodePanelBody } from './panel-body'
import { NodePanelHeader } from './panel-header'
import { NodePanelFooter } from './panel-footer'
import { usePanelLyaoutStyle } from './utils'
import { useTreePanelData, NsNodeTreePanelModel } from './service'
import * as NsNodeTreePanel from './interface'

const NodeTreePanelMain: React.FC<IProps> = props => {
  const { headerStyle, bodyStyle, footerStyle } = usePanelLyaoutStyle(props as IPanelProps)
  const { state, onFolderExpand, onKeywordChange } = useTreePanelData(props)

  return (
    <>
      <NodePanelHeader
        {...props}
        state={state}
        style={headerStyle}
        onKeywordChange={onKeywordChange}
      />
      <NodePanelBody {...props} state={state} style={bodyStyle} onFolderExpand={onFolderExpand} />
      <NodePanelFooter {...props} state={state} style={footerStyle} />
    </>
  )
}

const NodeTreePanel: React.FC<IProps> = props => {
  const prefixClz = useXflowPrefixCls('node-dnd-panel')
  return (
    <WorkspacePanel {...props} className={prefixClz}>
      <NodeTreePanelMain {...props} prefixClz={prefixClz} />
    </WorkspacePanel>
  )
}

export { NodeTreePanel, NsNodeTreePanelModel, NsNodeTreePanel, IProps as INodeTreePanelProps }
