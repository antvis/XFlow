import { DND_RENDER_ID, NODE_WIDTH, NODE_HEIGHT, EDGE_NODE_RENDER_ID } from './constant'
import { uuidv4, NsGraph, NsGraphStatusCommand } from '@antv/xflow'
/** mock 后端接口调用 */
export const MockApi = {}

const NODE_COMMON_PROPS = {
  renderKey: DND_RENDER_ID,
  width: NODE_WIDTH,
  height: NODE_HEIGHT,
}

const EDGE_COMMON_PROPS = {
  renderKey: EDGE_NODE_RENDER_ID,
}

/** 查图的meta元信息 */
MockApi.queryGraphMeta = async args => {
  console.log('queryMeta', args)
  return { ...args, flowId: args.meta.flowId }
}
/** 加载图数据的api */
MockApi.loadGraphData = async meta => {
  const nodes = [
    {
      ...NODE_COMMON_PROPS,
      id: 'node1',
      label: '算法节点-1',
      ports: [
        {
          id: 'node1-input-1',
          type: NsGraph.AnchorType.INPUT,
          group: NsGraph.AnchorGroup.TOP,
          tooltip: '输入桩',
        },
        {
          id: 'node1-output-1',
          type: NsGraph.AnchorType.OUTPUT,
          group: NsGraph.AnchorGroup.BOTTOM,
          tooltip: '输出桩',
        },
      ],
    },
    {
      ...NODE_COMMON_PROPS,
      id: 'node2',
      label: '算法节点-2',
      ports: [
        {
          id: 'node2-input-1',
          type: NsGraph.AnchorType.INPUT,
          group: NsGraph.AnchorGroup.TOP,
          tooltip: '输入桩',
          // connected: true,
        },
        {
          id: 'node2-output-1',
          type: NsGraph.AnchorType.OUTPUT,
          group: NsGraph.AnchorGroup.BOTTOM,
          tooltip: '输出桩',
        },
      ],
    },
    {
      ...NODE_COMMON_PROPS,
      id: 'node3',
      label: '算法节点-3',
      ports: [
        {
          id: 'node3-input-1',
          type: NsGraph.AnchorType.INPUT,
          group: NsGraph.AnchorGroup.TOP,
          tooltip: '输入桩',
          // connected: true,
        },
        {
          id: 'node3-output-1',
          type: NsGraph.AnchorType.OUTPUT,
          group: NsGraph.AnchorGroup.BOTTOM,
          tooltip: '输出桩',
        },
      ],
    },
    {
      ...NODE_COMMON_PROPS,
      id: 'node4',
      label: '算法节点-4',
      ports: [
        {
          id: 'node4-input-1',
          type: NsGraph.AnchorType.INPUT,
          group: NsGraph.AnchorGroup.TOP,
          tooltip: '输入桩',
          // connected: true,
        },
        {
          id: 'node4-output-1',
          type: NsGraph.AnchorType.OUTPUT,
          group: NsGraph.AnchorGroup.BOTTOM,
          tooltip: '输出桩',
        },
      ],
    },
  ]
  const edges = [
    {
      ...EDGE_COMMON_PROPS,
      id: uuidv4(),
      source: 'node1',
      target: 'node2',
      sourcePortId: 'node1-output-1',
      targetPortId: 'node2-input-1',
      label: '边1',
      content: 'kkdjfkd',
    },
    {
      ...EDGE_COMMON_PROPS,
      id: uuidv4(),
      source: 'node1',
      target: 'node3',
      sourcePortId: 'node1-output-1',
      targetPortId: 'node3-input-1',
      label: '边2',
      content: 'kkdjfkd2',
    },
    {
      ...EDGE_COMMON_PROPS,
      id: uuidv4(),
      source: 'node1',
      target: 'node4',
      sourcePortId: 'node1-output-1',
      targetPortId: 'node4-input-1',
      label: '边3',
      content: 'kkdjfkd3',
    },
  ]
  return {
    nodes,
    edges,
  }
}
/** 保存图数据的api */
MockApi.saveGraphData = async (meta, graphData) => {
  console.log('saveGraphData api', meta, graphData)
  return {
    success: true,
    data: graphData,
  }
}
/** 部署图数据的api */
MockApi.deployDagService = async (meta, graphData) => {
  console.log('deployService api', meta, graphData)
  return {
    success: true,
    data: graphData,
  }
}

/** 添加节点api */
MockApi.addNode = async args => {
  console.info('addNode service running, add node:', args)
  const portItems = [
    {
      type: NsGraph.AnchorType.INPUT,
      group: NsGraph.AnchorGroup.TOP,
      tooltip: '输入桩1',
    },
    {
      type: NsGraph.AnchorType.INPUT,
      group: NsGraph.AnchorGroup.TOP,
      tooltip: '输入桩2',
    },
    {
      type: NsGraph.AnchorType.INPUT,
      group: NsGraph.AnchorGroup.TOP,
      tooltip: '输入桩3',
    },
    {
      type: NsGraph.AnchorType.OUTPUT,
      group: NsGraph.AnchorGroup.BOTTOM,
      tooltip: '输出桩',
    },
  ]

  const { id, ports = portItems, groupChildren } = args.nodeConfig
  const nodeId = id || uuidv4()
  /** 这里添加连线桩 */
  const node = {
    ...NODE_COMMON_PROPS,
    ...args.nodeConfig,
    id: nodeId,
    ports: ports.map(port => {
      return { ...port, id: uuidv4() }
    }),
  }
  /** group没有链接桩 */
  if (groupChildren && groupChildren.length) {
    node.ports = []
  }
  return node
}

/** 更新节点 name，可能依赖接口判断是否重名，返回空字符串时，不更新 */
MockApi.renameNode = async (name, node, graphMeta) => {
  console.log('rename node', node, name, graphMeta)
  return { err: null, nodeName: name }
}

/** 删除节点的api */
MockApi.delNode = async args => {
  console.info('delNode service running, del node:', args.nodeConfig.id)
  return true
}

/** 添加边的api */
MockApi.addEdge = async args => {
  console.info('addEdge service running, add edge:', args)
  const { edgeConfig } = args
  return {
    ...edgeConfig,
    id: uuidv4(),
    label: '新建边' || edgeConfig.label,
  }
}

MockApi.updateEdge = async args => {
  console.info('updateEdge service running, update edge:', args)
  return args.edgeConfig
}

/** 删除边的api */
MockApi.delEdge = async args => {
  console.info('delEdge service running, del edge:', args)
  return true
}

let runningNodeId = 0
const statusMap = {}
let graphStatus = NsGraphStatusCommand.StatusEnum.DEFAULT
MockApi.graphStatusService = async () => {
  if (runningNodeId < 4) {
    statusMap[`node${runningNodeId}`] = { status: NsGraphStatusCommand.StatusEnum.SUCCESS }
    statusMap[`node${runningNodeId + 1}`] = { status: NsGraphStatusCommand.StatusEnum.PROCESSING }
    runningNodeId += 1
    graphStatus = NsGraphStatusCommand.StatusEnum.PROCESSING
  } else {
    runningNodeId = 0
    statusMap.node4 = { status: NsGraphStatusCommand.StatusEnum.SUCCESS }
    graphStatus = NsGraphStatusCommand.StatusEnum.SUCCESS
  }
  return {
    graphStatus: graphStatus,
    statusMap: statusMap,
  }
}
MockApi.stopGraphStatusService = async () => {
  Object.entries(statusMap).forEach(([, val]) => {
    const { status } = val
    if (status === NsGraphStatusCommand.StatusEnum.PROCESSING) {
      val.status = NsGraphStatusCommand.StatusEnum.ERROR
    }
  })
  return {
    graphStatus: NsGraphStatusCommand.StatusEnum.ERROR,
    statusMap: statusMap,
  }
}
