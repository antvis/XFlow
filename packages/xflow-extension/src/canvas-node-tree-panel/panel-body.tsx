import React, { useState } from 'react'
import { Tree, Empty, Popover } from 'antd'
import { FolderFilled, FolderOpenFilled } from '@ant-design/icons'
import type { Graph } from '@antv/x6'
import { Addon } from '@antv/x6'
import type {
  NsTreePanelData,
  IProps,
  ITreeNode,
  IOnFolderExpand,
  INodeFactoryArgs,
} from './interface'
import type { IModelService, IGraphCommandService, IGraphConfig, NsGraph } from '@antv/xflow-core'
import { getNodeReactComponent, useXFlowApp, XFlowConstants } from '@antv/xflow-core'
import { XFlowNode } from '../canvas-dag-extension/x6-extension/node'
const { DirectoryTree, TreeNode } = Tree

const FolderIcon = ({ expanded }: { expanded: boolean }) => {
  return expanded ? <FolderOpenFilled /> : <FolderFilled />
}

export const defaultNodeFactory = (args: INodeFactoryArgs) => {
  return new XFlowNode(args)
}

interface IConfigRenderOptions {
  graphConfig: IGraphConfig
  nodeConfig: ITreeNode
  modelService: IModelService
  commandService: IGraphCommandService
  onMouseDown: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

export const renderNode = (props: IConfigRenderOptions) => {
  const { nodeConfig, onMouseDown, graphConfig, modelService, commandService } = props

  if (!graphConfig) {
    return <div />
  }

  if (nodeConfig.renderComponent) {
    return (
      <div onMouseDown={onMouseDown}>
        {React.createElement(nodeConfig.renderComponent, {
          data: nodeConfig,
          isNodeTreePanel: true,
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

interface ITitleProps {
  prefixClz: string
  item: ITreeNode
  graphConfig: any
  modelService: IModelService
  commandService: IGraphCommandService
  popoverContent: React.ReactNode
  onMouseDown: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

export const NodeTitle = (props: ITitleProps) => {
  const [isVisible, setVisible] = useState(false)
  const [appContainer, setAppContainer] = useState<HTMLElement>()
  const { getGraphConfig } = useXFlowApp()
  getGraphConfig().then(graphConfig => {
    setAppContainer(graphConfig.appContainer)
  })

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
      {popoverContent && (
        <Popover
          placement="right"
          destroyTooltipOnHide
          content={popoverContent}
          visible={isVisible}
          onVisibleChange={val => {
            setVisible(val)
          }}
          getPopupContainer={() => appContainer || document.body}
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
      )}
      {!popoverContent && (
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
      )}
    </>
  )
}
export interface IBodyProps extends IProps {
  state: NsTreePanelData.IState
  onFolderExpand: IOnFolderExpand
}

export const NodePanelBody: React.FC<IBodyProps> = props => {
  const { x6NodeFactory, dndOptions, onNodeDrop, state, onFolderExpand, prefixClz } = props
  const { graphProvider, modelService, commandService } = useXFlowApp()
  const [graphConfig, setConfig] = React.useState<IGraphConfig>()
  const [dnd, setDnd] = React.useState<Addon.Dnd>()

  const [graph, setGraph] = React.useState<Graph>()
  graphProvider.getGraphInstance().then(x6Graph => {
    setGraph(x6Graph)
  })

  React.useEffect(() => {
    graphProvider.getGraphOptions().then(x6GraphConfig => {
      setConfig(x6GraphConfig)
    })

    if (!graph) {
      return
    }
    const dndInstance = new Addon.Dnd({
      scaled: false,
      animation: false,
      ...dndOptions,
      target: graph,
      /** 这里考虑到需要新增群组的需求，不使用x6的getDropNod方法
       * 在validateNode时调用command添加
       */
      validateNode: async droppingNode => {
        const nodeConfig = {
          ...droppingNode.getData<NsGraph.INodeConfig>(),
          ...droppingNode.getPosition(),
        }
        if (onNodeDrop) {
          await onNodeDrop(nodeConfig, commandService, modelService)
        } else {
          console.error('onNodeDrop method is required in NodeTree Panel')
        }
        return false
      },
    })
    setDnd(dndInstance)
  }, [commandService, dndOptions, graph, graphProvider, modelService, onNodeDrop])

  const onMouseDown = React.useCallback(
    (nodeConfig: NsGraph.INodeConfig) => (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (!graph || !dnd || !graphConfig) {
        return
      }
      const renderKey = graphConfig.nodeTypeParser(nodeConfig)
      const reactComponent = nodeConfig.renderComponent
        ? nodeConfig.renderComponent
        : graphConfig.nodeRender.get(renderKey)
      const wrappedComponent = getNodeReactComponent(reactComponent, commandService, modelService)
      const nodeData = {
        data: nodeConfig,
        width: nodeConfig.width || 180,
        height: nodeConfig.height || 40,
        view: graphConfig.graphId,
        component: wrappedComponent,
      }
      const x6Node = x6NodeFactory ? x6NodeFactory(nodeData) : defaultNodeFactory(nodeData)
      dnd.start(x6Node, e.nativeEvent as any)
    },
    [commandService, dnd, graph, graphConfig, modelService, x6NodeFactory],
  )

  const renderTree = React.useCallback(
    (treeList: ITreeNode[] = []) => {
      return treeList.map(item => {
        const { isDirectory, children, popoverContent } = item

        if (isDirectory) {
          return (
            <TreeNode
              icon={FolderIcon}
              key={item.id}
              title={item.label}
              className={`${prefixClz}-tree-folder`}
            >
              {renderTree(children)}
            </TreeNode>
          )
        }

        return (
          <TreeNode
            isLeaf
            key={item.id}
            className={`${prefixClz}-tree-leaf`}
            icon={<span />}
            title={
              <NodeTitle
                item={item}
                onMouseDown={onMouseDown(item)}
                popoverContent={popoverContent}
                prefixClz={prefixClz}
                modelService={modelService}
                commandService={commandService}
                graphConfig={graphConfig}
              />
            }
          />
        )
      })
    },
    [commandService, graphConfig, modelService, onMouseDown, prefixClz],
  )

  return (
    <React.Fragment>
      <div className={`${prefixClz}-body`} style={props.style}>
        {!state.keyword && (
          <DirectoryTree
            showIcon
            selectable={false}
            autoExpandParent={false}
            onExpand={onFolderExpand}
            expandedKeys={state.expandedKeys}
            className={`${prefixClz}-tree`}
          >
            {renderTree(state.treeData)}
          </DirectoryTree>
        )}
        {state.searchList.length > 0 && (
          <ul className={`${prefixClz}-body-list`}>
            {state.searchList.map(treeNode => (
              <li className={`${prefixClz}-body-list-item`}>
                <NodeTitle
                  item={treeNode}
                  onMouseDown={onMouseDown(treeNode)}
                  popoverContent={treeNode.popoverContent}
                  prefixClz={prefixClz}
                  modelService={modelService}
                  commandService={commandService}
                  graphConfig={graphConfig}
                />
              </li>
            ))}
          </ul>
        )}

        {state.keyword && state.searchList.length === 0 && <Empty style={{ marginTop: '48px' }} />}
      </div>
    </React.Fragment>
  )
}
