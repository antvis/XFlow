import React, { useCallback } from 'react'
import { Empty, Collapse } from 'antd'
import { get } from 'lodash'
import { IProps, IFlowchartNode } from './interface'
import { Addon, Graph } from '@antv/x6'
import {
  NsGraph,
  getNodeReactComponent,
  useXFlowApp,
  uuidv4,
  XFlowNodeCommands,
} from '@antv/xflow-core'
import { NsPanelData } from './service'
import { setNodeRender } from './utils'
import { getProps } from '../flowchart-canvas/utils'
import { NodeTitle, defaultNodeFactory } from '../canvas-node-tree-panel/panel-body'

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
    registerNode,
    defaultActiveKey = ['official', 'custom'],
  } = props
  const { title = '复制节点' } = registerNode ?? {}
  const { graphProvider, modelService, commandService } = useXFlowApp()

  const [dnd, setDnd] = React.useState<Addon.Dnd>()
  /** 获取graph实例 */
  const [graph, setGraph] = React.useState<Graph>()
  graphProvider.getGraphInstance().then(x6Graph => {
    setGraph(x6Graph)
  })

  let graphConfig = undefined
  graphProvider.getGraphOptions().then(x6GraphConfig => {
    /** x6GraphConfig 上缺失 setNodeRender 方法  */
    setNodeRender(getProps('graphConfig'), get(props, 'registerNode.nodes', []))
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
  }, [commandService, dndOptions, graph, modelService])

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
            item={item}
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
  const customNode = state.nodeList.filter(item => item.isCustom)
  const officialNode = state.nodeList.filter(item => !item.isCustom)
  const searchCustomNode = state.searchList.filter(item => item.isCustom)
  const searchOfficialNode = state.searchList.filter(item => !item.isCustom)
  const hasCustomNode = customNode.length > 0

  return (
    <React.Fragment>
      <div className={`${prefixClz}-body`}>
        <Collapse defaultActiveKey={defaultActiveKey} style={{ border: 'none' }}>
          <Panel header="通用节点" key="official" style={{ border: 'none' }}>
            {!state.keyword && (
              <div className={`${prefixClz}-official`}>{renderTree(officialNode)}</div>
            )}
            {state.searchList.length > 0 && (
              <div className={`${prefixClz}-official`}>{renderTree(searchOfficialNode)}</div>
            )}
          </Panel>
          {hasCustomNode && (
            <Panel header={title} key="custom" style={{ border: 'none' }}>
              {!state.keyword && (
                <div className={`${prefixClz}-custom`}>{renderTree(customNode)}</div>
              )}
              {state.searchList.length > 0 && (
                <div className={`${prefixClz}-custom`}>{renderTree(searchCustomNode)}</div>
              )}
            </Panel>
          )}
        </Collapse>
        {state.keyword && state.searchList.length === 0 && <Empty style={{ marginTop: '48px' }} />}
      </div>
    </React.Fragment>
  )
}
