import { uuidv4, NsGraph, NsNodeCmd, NsEdgeCmd } from '@antv/xflow'

export namespace MockGraphApi {
  /** 查图的meta元信息 */
  export const queryGraphMeta = async (args: any) => {
    console.log('queryMeta', args)
    return { ...args, flowId: args.flowId }
  }

  /** 添加节点api */
  export const addNode: NsNodeCmd.AddNode.IArgs['createNodeService'] = async args => {
    const nodeId = args.nodeConfig.id || uuidv4()
    /** 这里添加连线桩 */
    const nodeConfig: NsGraph.INodeConfig = {
      width: 190,
      height: 40,
      ...args.nodeConfig,
      id: nodeId,
      ports: args.nodeConfig.ports
        ? args.nodeConfig.ports
        : {
            items: [
              {
                id: uuidv4(),
                type: NsGraph.AnchorType.INPUT,
                group: NsGraph.AnchorGroup.TOP,
                tooltip: '输入桩',
              },
              {
                id: uuidv4(),
                type: NsGraph.AnchorType.OUTPUT,
                group: NsGraph.AnchorGroup.BOTTOM,
                tooltip: '输出桩',
              },
            ] as NsGraph.INodeAnchor[],
          },
    }
    return nodeConfig
  }

  /** 删除节点的api */
  export const delNode = async (id: string) => {
    console.info('delNode service running, del node:', id)
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
  export const delEdge = async (edge: NsGraph.IEdgeConfig) => {
    console.info('addEdge service running, add edge:', edge)
    return {
      ...edge,
      id: uuidv4(),
      succcess: true,
    }
  }
}
