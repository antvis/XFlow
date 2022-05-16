import type { Graph as X6Graph, Node as X6Node, Edge as X6Edge } from '@antv/x6'
import type { HookHub } from '@antv/xflow-hook'
import type { NsGraph } from '../../interface'
import type { NsEdgeCmd, NsNodeCmd, NsGroupCmd } from '../interface'
import type { IHooks } from '../../hooks/interface'
import type { IContext, IArgsBase } from '../../command/interface'
import { isEqual } from 'lodash'
import { inject, injectable, postConstruct } from 'mana-syringe'
import {
  XFlowGraphCommands,
  XFlowNodeCommands,
  XFlowEdgeCommands,
  XFlowGroupCommands,
} from '../constant'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'

type ICommand = ICommandHandler<NsGraphRender.IArgs, NsGraphRender.IResult, NsGraphRender.ICmdHooks>

export namespace NsGraphUtils {
  export function isNodeEqual(
    curNodeConfig: NsGraph.INodeConfig,
    nextNodeConfig: NsGraph.INodeConfig,
  ) {
    /** XFlow默认的判断节点是否相等的逻辑 */
    return isEqual(curNodeConfig, nextNodeConfig)
  }

  export function isEdgeEqual(
    curEdgeConfig: NsGraph.IEdgeConfig,
    nextEdgeConfig: NsGraph.IEdgeConfig,
  ) {
    /** XFlow默认的判断边是否相等的逻辑 */
    return isEqual(curEdgeConfig, nextEdgeConfig)
  }
}

export namespace NsGraphRender {
  /** Command: 用于注册named factory */
  export const command = XFlowGraphCommands.GRAPH_RENDER
  /** hookName */
  export const hookKey = 'graphRender'

  export interface IArgs extends IArgsBase {
    /** 画布渲染之前的钩子(比如从服务端获取数据、对数据做布局处理等) */
    beforeRender?: (graphMeta?: NsGraph.IGraphMeta) => Promise<NsGraph.IGraphData>
    /** 画布渲染完成之后的钩子 */
    afterRender?: (
      graphData: NsGraph.IGraphData,
      graphMeta?: NsGraph.IGraphMeta,
    ) => Promise<any> | undefined

    /** 画布渲染数据(nodes、edges) */
    graphData: NsGraph.IGraphData

    /** 用户自定义方法判断节点内容是否相等 */
    isNodeEqual?: (
      curNodeConfig: NsGraph.INodeConfig,
      nextNodeConfig: NsGraph.INodeConfig,
    ) => boolean
    /** 用户自定义方法判断边内容是否相等 */
    isEdgeEqual?: (
      curEdgeConfig: NsGraph.IEdgeConfig,
      nextEdgeConfig: NsGraph.IEdgeConfig,
    ) => boolean
  }

  export interface IResult {}

  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    graphRender: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsGraphRender.command.id },
})
/** 画布渲染命令 */
export class GraphRenderCommand implements ICommand {
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  ctx: IContext<NsGraphRender.IArgs, NsGraphRender.IResult, NsGraphRender.ICmdHooks>

  @postConstruct()
  init() {
    this.ctx = this.contextProvider()
  }

  execute = async () => {
    const { args, hooks: runtimeHook } = this.ctx.getArgs()
    const hooks = this.ctx.getHooks()

    const result = await hooks.graphRender.call(
      args,
      async handlerArgs => {
        const x6Graph = await this.ctx.getX6Graph()
        const graphMeta = await this.ctx.getGraphMeta()
        const { beforeRender, graphData, isNodeEqual, isEdgeEqual, afterRender } = handlerArgs

        /** 如果用户自定义beforeRender方法 */
        beforeRender && beforeRender(graphMeta)

        await this.doLoadGraph(x6Graph, graphData, isNodeEqual, isEdgeEqual)

        /** 如果用户自定义afterRender方法 */
        afterRender && afterRender(graphData, graphMeta)

        return {}
      },
      runtimeHook,
    )

    /** 设置结果 */
    this.ctx.setResult(result)

    return this
  }

  undo = async () => {
    this.ctx.undo()
    return this
  }

  redo = async () => {
    if (!this.ctx.isUndoable) {
      await this.execute()
    }
    return this
  }

  isUndoable(): boolean {
    return this.ctx.isUndoable()
  }

  private doLoadGraph = async (
    x6Graph: X6Graph,
    graphData: NsGraph.IGraphData,
    isNodeEqual?: (curNode: NsGraph.INodeConfig, nextNode: NsGraph.INodeConfig) => boolean,
    isEdgeEqual?: (curEdge: NsGraph.IEdgeConfig, nextEdge: NsGraph.IEdgeConfig) => boolean,
  ) => {
    if (!x6Graph?.isFrozen()) {
      x6Graph?.freeze()
    }

    const commandService = this.ctx.getCommands()

    const {
      addNodeConfigs,
      addEdgeConfigs,
      // retainNodes,
      // retainEdges,
      removeNodes,
      removeEdges,
      updateNodes,
      updateEdges,
    } = this.graphDataDiff(x6Graph, graphData, isNodeEqual, isEdgeEqual)

    /** 更新节点/边 */
    for (const updateNode of updateNodes) {
      const nodeData = updateNode?.getData()
      await commandService.executeCommand(XFlowNodeCommands.UPDATE_NODE.id, {
        nodeConfig: nodeData,
      })
    }
    for (const updateEdge of updateEdges) {
      const edgeData = updateEdge?.getData()
      await commandService.executeCommand(XFlowEdgeCommands.UPDATE_EDGE.id, {
        edgeConfig: edgeData,
      })
    }

    /** 新增节点/边 */
    for (const nodeConfig of addNodeConfigs) {
      await commandService.executeCommand<NsNodeCmd.AddNode.IArgs>(
        XFlowNodeCommands.ADD_NODE.id,
        {
          nodeConfig,
          options: {
            isRenderGraph: true,
          },
        },
        {
          name: 'remove servcie',
          handler: async args => {
            delete args.createNodeService
          },
        },
      )
    }

    await commandService.executeCommand<NsGroupCmd.InitGroup.IArgs>(
      XFlowGroupCommands.INIT_GROUP.id,
      {
        graphData: { nodes: addNodeConfigs, edges: [] },
      },
    )

    for (const edgeConfig of addEdgeConfigs) {
      await commandService.executeCommand<NsEdgeCmd.AddEdge.IArgs>(
        XFlowEdgeCommands.ADD_EDGE.id,
        {
          edgeConfig,
          options: {
            isRenderGraph: true,
          },
        },
        {
          name: 'remove servcie',
          handler: async args => {
            delete args.createEdgeService
          },
        },
      )
    }

    /** 删除节点/边/群组 */
    for (const removeNode of removeNodes) {
      const nodeData = removeNode?.getData<NsGraph.INodeConfig>()

      if (nodeData.isGroup) {
        await commandService.executeCommand(XFlowGroupCommands.DEL_GROUP.id, {
          nodeConfig: nodeData,
        })
      } else {
        await commandService.executeCommand(XFlowNodeCommands.DEL_NODE.id, { nodeConfig: nodeData })
      }
    }
    for (const removeEdge of removeEdges) {
      const edgeData = removeEdge?.getData()
      await commandService.executeCommand(XFlowEdgeCommands.DEL_EDGE.id, { edgeConfig: edgeData })
    }

    if (x6Graph?.isFrozen()) {
      x6Graph?.unfreeze()
    }
  }

  /**
   * 画布内容Diff
   * @param x6Graph x6画布实例
   * @param graphData 画布数据
   * @param isNodeEqual 允许用户自定义判断节点是否相等
   * @param isEdgeEqual 允许用户自定义判断边是否相等
   */
  private graphDataDiff(
    x6Graph: X6Graph,
    graphData: NsGraph.IGraphData,
    isNodeEqual?: (curNode: NsGraph.INodeConfig, nextNode: NsGraph.INodeConfig) => boolean,
    isEdgeEqual?: (curEdge: NsGraph.IEdgeConfig, nextNode: NsGraph.IEdgeConfig) => boolean,
  ) {
    const { nodes: nodeConfigs, edges: edgeConfigs } = graphData

    /** 新增节点数据 */
    const addNodeConfigs: NsGraph.INodeConfig[] = []
    nodeConfigs.forEach(nodeConfig => {
      const findNode = x6Graph.getCellById(nodeConfig?.id)
      if (!findNode) {
        addNodeConfigs.push(nodeConfig)
      }
    })
    /** 保持、更新、移除节点 */
    const retainNodes: X6Node[] = []
    const updateNodes: X6Node[] = []
    const removeNodes: X6Node[] = []
    const allNodes = x6Graph.getNodes()
    allNodes.forEach(x6Node => {
      const findNodeConfig = nodeConfigs.find(nodeConfig => nodeConfig?.id === x6Node?.id)
      if (!findNodeConfig) {
        removeNodes.push(x6Node)
      } else {
        let judgeResult = true
        if (isNodeEqual) {
          /** 如果用户自定义节点是否相等的方法 */
          judgeResult = isNodeEqual(x6Node?.data, findNodeConfig)
        } else {
          /** XFlow默认的判断节点是否相等的逻辑 */
          if (x6Node?.data && findNodeConfig) {
            judgeResult = NsGraphUtils.isNodeEqual(x6Node?.data, findNodeConfig)
          }
        }
        if (!judgeResult) {
          x6Node.setData(findNodeConfig, {
            deep: false,
          })
        }
        judgeResult === true ? retainNodes.push(x6Node) : updateNodes.push(x6Node)
      }
    })

    /** 新增边数据 */
    const addEdgeConfigs: NsGraph.IEdgeConfig[] = []
    edgeConfigs.forEach(edgeConfig => {
      const findEdge = x6Graph.getCellById(edgeConfig?.id)
      if (!findEdge) {
        addEdgeConfigs.push(edgeConfig)
      }
    })
    /** 保持、更新、移除节点 */
    const retainEdges: X6Edge[] = []
    const updateEdges: X6Edge[] = []
    const removeEdges: X6Edge[] = []
    const allEdges = x6Graph.getEdges()
    allEdges.forEach(x6Edge => {
      const findEdgeConfig = edgeConfigs.find(edgeConfig => edgeConfig?.id === x6Edge?.id)
      if (!findEdgeConfig) {
        removeEdges.push(x6Edge)
      } else {
        let judgeResult = true
        if (isEdgeEqual) {
          /** 如果用户自定义边是否相等的方法 */
          judgeResult = isEdgeEqual(x6Edge?.data, findEdgeConfig)
        } else {
          /** XFlow默认的判断边是否相等的逻辑 */
          if (x6Edge?.data && findEdgeConfig) {
            judgeResult = NsGraphUtils.isEdgeEqual(x6Edge?.data, findEdgeConfig)
          }
        }
        if (!judgeResult) {
          x6Edge.setData(findEdgeConfig, {
            deep: false,
          })
        }
        judgeResult === true ? retainEdges.push(x6Edge) : updateEdges.push(x6Edge)
      }
    })

    return {
      addNodeConfigs,
      addEdgeConfigs,
      retainNodes,
      retainEdges,
      removeNodes,
      removeEdges,
      updateNodes,
      updateEdges,
    }
  }
}
