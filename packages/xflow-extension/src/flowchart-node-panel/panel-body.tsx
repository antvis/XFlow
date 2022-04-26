import type { Graph } from '@antv/x6'
import type { NsGraph } from '@antv/xflow-core'
import type { NsPanelData } from './service'
import type { IProps, IFlowchartNode } from './interface'
import type { ITreeNode } from '../canvas-node-tree-panel/interface'
import React, { useCallback } from 'react'
import { Empty, Collapse } from 'antd'
import { Addon } from '@antv/x6'
import { getNodeReactComponent, useXFlowApp, uuidv4, XFlowNodeCommands } from '@antv/xflow-core'
import { getProps } from '../flowchart-canvas/utils'
import { NodeTitle, defaultNodeFactory } from '../canvas-node-tree-panel/panel-body'
import { isArray } from 'lodash'

const { Panel } = Collapse

export interface IBodyProps extends IProps {
  state: NsPanelData.IState
}

export const NodePanelBody: React.FC<IBodyProps> = props => {
  const {
    x6NodeFactory,
    dndOptions,
    state,
    prefixClz,
    defaultActiveKey = ['official'],
    showOfficial = true,
  } = props

  const registerNode = props.registerNode
    ? isArray(props.registerNode)
      ? props.registerNode
      : [props.registerNode]
    : []

  const { graphProvider, modelService, commandService } = useXFlowApp()

  const [dnd, setDnd] = React.useState<Addon.Dnd>()
  /** 获取graph实例 */
  const [graph, setGraph] = React.useState<Graph>()
  graphProvider.getGraphInstance().then(x6Graph => {
    setGraph(x6Graph)
  })

  let graphConfig = undefined
  graphProvider.getGraphOptions().then(x6GraphConfig => {
    graphConfig = x6GraphConfig
  })

  const onNodeDrop = useCallback(
    async node => {
      const { ports } = node
      const nodeConfig = {
        ...node,
        id: `node-${uuidv4()}`,
        zIndex: 10,
        ports: {
          ...ports,
          items: ports.items?.map(item => ({
            ...item,
            id: uuidv4(),
          })),
        },
      }
      const args = {
        nodeConfig,
      }
      await commandService.executeCommand(XFlowNodeCommands.ADD_NODE.id, args)
      const onAddNode = getProps('onAddNode')
      if (typeof onAddNode === 'function') {
        onAddNode(nodeConfig)
      }
    },
    [commandService],
  )

  React.useEffect(() => {
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
        await onNodeDrop(nodeConfig)
        return false
      },
    })
    setDnd(dndInstance)
  }, [commandService, dndOptions, graph, modelService, onNodeDrop])

  const onMouseDown = React.useCallback(
    (nodeConfig: NsGraph.INodeConfig) => (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (!graph || !dnd || !graphConfig) {
        return
      }
      const renderKey = graphConfig.nodeTypeParser(nodeConfig)
      const { width = 180, height = 40 } = nodeConfig
      const reactComponent = graphConfig.nodeRender.get(renderKey)
      const wrappedComponent = getNodeReactComponent(reactComponent, commandService, modelService)
      const nodeData = {
        data: nodeConfig,
        width,
        height,
        view: graphConfig.graphId,
        component: wrappedComponent,
      }
      const x6Node = x6NodeFactory ? x6NodeFactory(nodeData) : defaultNodeFactory(nodeData)
      dnd.start(x6Node, e.nativeEvent as any)
    },
    [commandService, dnd, graph, graphConfig, modelService, x6NodeFactory],
  )

  const renderTree = React.useCallback(
    (list: IFlowchartNode[] = []) => {
      return list.map(item => {
        const { popoverContent } = item
        return (
          <NodeTitle
            item={item as ITreeNode}
            key={item.id}
            onMouseDown={onMouseDown(item)}
            popoverContent={popoverContent}
            prefixClz={prefixClz}
            modelService={modelService}
            commandService={commandService}
            graphConfig={graphConfig}
          />
        )
      })
    },
    [commandService, graphConfig, modelService, onMouseDown, prefixClz],
  )
  const officialNode = state.nodeList.filter(item => !item.isCustom)
  const searchOfficialNode = state.searchList.filter(item => !item.isCustom)
  const customNode = (key: string) => {
    return state.nodeList.filter(item => item.isCustom && item.parentKey === key)
  }
  const searchCustomNode = (key: string) => {
    return state.searchList.filter(item => item.isCustom && item.parentKey === key)
  }

  return (
    <React.Fragment>
      <div className={`${prefixClz}-body`}>
        <Collapse defaultActiveKey={defaultActiveKey} style={{ border: 'none' }}>
          {showOfficial && (
            <Panel header="通用节点" key="official" style={{ border: 'none' }}>
              {!state.keyword && (
                <div className={`${prefixClz}-official`}>{renderTree(officialNode)}</div>
              )}
              {state.searchList.length > 0 && (
                <div className={`${prefixClz}-official`}>{renderTree(searchOfficialNode)}</div>
              )}
            </Panel>
          )}
          {registerNode?.length > 0 &&
            registerNode.map(
              item =>
                !item.hidden &&
                item.nodes.length > 0 && (
                  <Panel header={item.title} key={item.key} style={{ border: 'none' }}>
                    {!state.keyword && (
                      <div className={`${prefixClz}-custom`}>
                        {renderTree(customNode(item.key))}
                      </div>
                    )}
                    {state.searchList.length > 0 && (
                      <div className={`${prefixClz}-custom`}>
                        {renderTree(searchCustomNode(item.key))}
                      </div>
                    )}
                  </Panel>
                ),
            )}
        </Collapse>
        {state.keyword && state.searchList.length === 0 && <Empty style={{ marginTop: '48px' }} />}
      </div>
    </React.Fragment>
  )
}
