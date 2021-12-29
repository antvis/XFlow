import type { IPanelNode } from '../interface'
import type { IGraphCommandService, IGraphConfig, IModelService } from '@antv/xflow-core'
import React from 'react'
import { XFlowConstants } from '@antv/xflow-core'
import { Popover } from 'antd'

interface INodeRenderOptions {
  graphConfig: IGraphConfig
  nodeConfig: IPanelNode
  modelService: IModelService
  commandService: IGraphCommandService
  onMouseDown: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

export const renderNode = (props: INodeRenderOptions) => {
  const { nodeConfig, onMouseDown, graphConfig, modelService, commandService } = props

  if (!graphConfig) {
    return <div />
  }

  if (nodeConfig.renderComponent) {
    return (
      <div onMouseDown={onMouseDown}>
        {React.createElement(nodeConfig.renderComponent, {
          data: nodeConfig,
          isNodePanel: true,
        })}
      </div>
    )
  }
  const renderKey = graphConfig.nodeTypeParser(nodeConfig) || XFlowConstants.XFLOW_DEFAULT_NODE
  const reactComponent = graphConfig.nodeRender.get(renderKey)
  return (
    <div onMouseDown={onMouseDown}>
      {React.createElement(reactComponent, {
        commandService,
        modelService,
        data: nodeConfig,
        isNodeTreePanel: true,
      })}
    </div>
  )
}

interface INodeProps {
  prefixClz: string
  item: IPanelNode
  graphConfig: IGraphConfig
  modelService: IModelService
  commandService: IGraphCommandService
  popoverContent: React.ReactNode
  onMouseDown: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

export const PanelNode: React.FC<INodeProps> = props => {
  const [isVisible, setVisible] = React.useState(false)
  const {
    prefixClz,
    graphConfig,
    commandService,
    modelService,
    popoverContent,
    onMouseDown,
    item,
  } = props
  return (
    <>
      {popoverContent ? (
        <Popover
          placement="right"
          destroyTooltipOnHide
          content={popoverContent}
          visible={isVisible}
          onVisibleChange={val => {
            setVisible(val)
          }}
        >
          <div
            className={`${prefixClz}-node-wrapper`}
            onMouseEnter={() => {
              setVisible(true)
            }}
          >
            {renderNode({
              graphConfig,
              commandService: commandService,
              onMouseDown,
              modelService,
              nodeConfig: item,
            })}
          </div>
        </Popover>
      ) : (
        <div className={`${prefixClz}-node-wrapper`}>
          {renderNode({
            graphConfig,
            commandService: commandService,
            onMouseDown,
            modelService,
            nodeConfig: item,
          })}
        </div>
      )}
    </>
  )
}
