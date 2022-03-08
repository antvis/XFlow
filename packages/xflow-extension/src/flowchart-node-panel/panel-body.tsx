import type { Graph } from '@antv/x6'
import type { NsGraph } from '@antv/xflow-core'
import type { NsPanelData } from './service'
import type { IProps, IFlowchartNode } from './interface'
import type { ITreeNode } from '../canvas-node-tree-panel/interface'
import React, { useCallback } from 'react'
import { Empty, Collapse } from 'antd'
import { Addon } from '@antv/x6'
import { getNodeReactComponent, useXFlowApp, uuidv4, XFlowNodeCommands } from '@antv/xflow-core'
import { setNodeRender } from './utils'
import { getProps } from '../flowchart-canvas/utils'
import { NodeTitle, defaultNodeFactory } from '../canvas-node-tree-panel/panel-body'

const { Panel } = Collapse

export interface IBodyProps extends IProps {
  state: NsPanelData.IState
  visibleNodeTypes: string[]
}

export const NodePanelBody: React.FC<IBodyProps> = props => {
  const {
    x6NodeFactory,
    dndOptions,
    state,
    prefixClz,
    defaultActiveKey = ['common', 'flowchart'],
    visibleNodeTypes,
    registerNode
  } = props
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
    setNodeRender(getProps('graphConfig'), registerNode)
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

  const { treeData, searchNodes } = state;
  //treeData 是异步获取的, 初次渲染时 treeData 对象为空
  if (Object.keys(treeData).length === 0) return null;

  return (
    <React.Fragment>
      <div className={`${prefixClz}-body`}>
        <Collapse defaultActiveKey={defaultActiveKey} style={{ border: 'none' }}>
          {visibleNodeTypes.map((type) => {
            return (
              <Panel header={`${treeData[type]?.title}`} key={type} style={{ border: 'none' }}>
                {!state.keyword && <div className={`${prefixClz}-node-list`}>{renderTree(treeData[type]?.nodes)}</div>}

                {state.keyword && searchNodes[type]?.length > 0 && (
                  <div className={`${prefixClz}-node-list`}>{renderTree(searchNodes[type])}</div>
                )}
                {state.keyword && searchNodes[type] && searchNodes[type].length === 0 && (
                  <Empty style={{ marginTop: '24px' }} />
                )}
              </Panel>
            );
          })}
        </Collapse>
      </div>
    </React.Fragment>
  )
}
