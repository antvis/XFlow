import { DND_RENDER_ID, NODE_WIDTH, NODE_HEIGHT } from './constant'
import { uuidv4, NsGraph } from '@antv/xflow'
import type { NsNodeCmd, NsEdgeCmd, NsGraphCmd } from '@antv/xflow'

/** mock 后端接口调用 */
export namespace MockApi {
  export const NODE_COMMON_PROPS = {
    renderKey: DND_RENDER_ID,
    width: NODE_WIDTH,
    height: NODE_HEIGHT,
  } as const

  /** 查图的meta元信息 */
  export const queryGraphMeta: NsGraphCmd.GraphMeta.IArgs['graphMetaService'] = async args => {
    console.log('queryMeta', args)
    return { ...args, flowId: args.meta.flowId }
  }
  /** 加载图数据的api */
  export const loadGraphData = async (meta: NsGraph.IGraphMeta) => {
    console.log(meta)
    const nodes: NsGraph.INodeConfig[] = [
      {
        ...NODE_COMMON_PROPS,
        id: 'node1',
        label: '流程1',
        x: 140,
        y: 210,
        des: '流程1的描述',
        ports: {
          items: [
            {
              id: 'node1-input-1',
              group: 'left',
            },
            {
              id: 'node1-output-1',
              group: 'right',
            },
          ],
        },
      },
      {
        ...NODE_COMMON_PROPS,
        id: 'node2',
        label: '流程2',
        des: '流程2的描述',
        x: 430,
        y: 120,
        ports: {
          items: [
            {
              id: 'node2-input-1',
              group: 'left',
            },
            {
              id: 'node2-output-1',
              group: 'right',
            },
          ],
        },
      },
      {
        ...NODE_COMMON_PROPS,
        id: 'node3',
        label: '流程3',
        des: '流程3的描述',
        x: 430,
        y: 290,
        ports: {
          items: [
            {
              id: 'node3-input-1',
              group: 'left',
            },
            {
              id: 'node3-output-1',
              group: 'right',
            },
          ],
        },
      },
      {
        ...NODE_COMMON_PROPS,
        id: 'node4',
        label: '流程4',
        des: '流程4的描述',
        x: 740,
        y: 210,
        ports: {
          items: [
            {
              id: 'node4-input-1',
              group: 'left',
            },
            {
              id: 'node4-output-1',
              group: 'right',
            },
          ],
        },
      },
    ]
    const edges: NsGraph.IEdgeConfig[] = [
      {
        id: uuidv4(),
        source: 'node1',
        target: 'node2',
        sourcePortId: 'node1-output-1',
        targetPortId: 'node2-input-1',
      },
      {
        id: uuidv4(),
        source: 'node1',
        target: 'node3',
        sourcePortId: 'node1-output-1',
        targetPortId: 'node3-input-1',
      },
      {
        id: uuidv4(),
        source: 'node2',
        target: 'node4',
        sourcePortId: 'node2-output-1',
        targetPortId: 'node4-input-1',
      },
      {
        id: uuidv4(),
        source: 'node3',
        target: 'node4',
        sourcePortId: 'node3-output-1',
        targetPortId: 'node4-input-1',
      },
    ]
    return { nodes, edges }
  }
  /** 保存图数据的api */
  export const saveGraphData: NsGraphCmd.SaveGraphData.IArgs['saveGraphDataService'] = async (
    meta: NsGraph.IGraphMeta,
    graphData: NsGraph.IGraphData,
  ) => {
    console.log('saveGraphData api', meta, graphData)
    return {
      success: true,
      data: graphData,
    }
  }

  /** 添加节点api */
  export const addNode: NsNodeCmd.AddNode.IArgs['createNodeService'] = async (
    args: NsNodeCmd.AddNode.IArgs,
  ) => {
    const { id, ports } = args.nodeConfig
    const nodeId = id || uuidv4()
    /** 这里添加连线桩 */ args
    const node: NsNodeCmd.AddNode.IArgs['nodeConfig'] = {
      width: 200,
      height: 60,
      ...args.nodeConfig,
      id: nodeId,
      ports: ports
        ? ports
        : {
            items: [
              {
                id: uuidv4(),
                group: NsGraph.AnchorGroup.LEFT,
              },
              {
                id: uuidv4(),
                group: NsGraph.AnchorGroup.RIGHT,
              },
            ] as NsGraph.INodeAnchor[],
          },
    }
    return node
  }

  /** 删除节点的api */
  export const delNode: NsNodeCmd.DelNode.IArgs['deleteNodeService'] = async args => {
    console.info('delNode service running, del node:', args.nodeConfig.id)
    return true
  }

  /** 添加边的api */
  export const addEdge: NsEdgeCmd.AddEdge.IArgs['createEdgeService'] = async args => {
    console.info('addEdge service running, add edge:', args)
    const { edgeConfig } = args
    return {
      ...edgeConfig,
      id: uuidv4(),
    }
  }

  /** 删除边的api */
  export const delEdge: NsEdgeCmd.DelEdge.IArgs['deleteEdgeService'] = async args => {
    console.info('delEdge service running, del edge:', args)
    return true
  }
}
