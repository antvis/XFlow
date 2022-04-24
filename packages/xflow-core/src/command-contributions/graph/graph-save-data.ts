import type { NsGraph } from '../../interface'
import type { IContext, IArgsBase } from '../../command/interface'
import type { HookHub } from '@antv/xflow-hook'
import type { IHooks } from '../../hooks/interface'
import { inject, injectable, postConstruct } from 'mana-syringe'
import { XFlowGraphCommands } from '../constant'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'

type ICommand = ICommandHandler<
  NsGraphSaveData.IArgs,
  NsGraphSaveData.IResult,
  NsGraphSaveData.ICmdHooks
>

export namespace NsGraphSaveData {
  /** Command Id: 用于注册named factory */
  export const command = XFlowGraphCommands.SAVE_GRAPH_DATA
  /** hookName */
  export const hookKey = 'saveGraphData'
  /** hook 参数类型 */
  export interface IArgs extends IArgsBase {
    includeAttrs?: boolean
    saveGraphDataService?: ISaveGraphDataService
  }
  /** hook handler 返回类型 */
  export interface IResult {}
  /** api service 类型 */
  export interface ISaveGraphDataService {
    (graphMeta: NsGraph.IGraphMeta, graphData: NsGraph.IGraphData): Promise<IResult | void>
  }
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    saveGraphData: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsGraphSaveData.command.id },
})
/** 创建节点命令 */
export class GraphSaveDataCommand implements ICommand {
  /** api */
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  ctx: IContext<NsGraphSaveData.IArgs, NsGraphSaveData.IResult, NsGraphSaveData.ICmdHooks>

  @postConstruct()
  init() {
    this.ctx = this.contextProvider()
  }

  /** 执行Cmd */
  execute = async () => {
    const ctx = this.ctx
    const args = ctx.getArgs()
    const hooks = ctx.getHooks()

    /** 执行hooks */
    await hooks.saveGraphData.call(
      /** 执行hooks pipeline处理args */
      args.args,
      /** 执行 callback */
      async handlerArgs => {
        const { saveGraphDataService, includeAttrs } = handlerArgs
        const x6Graph = await ctx.getX6Graph()
        const x6Nodes = x6Graph.getNodes()
        const x6Edges = x6Graph.getEdges()

        const nodes = x6Nodes.map(node => {
          const data = node.getData<NsGraph.INodeConfig>()
          const position = node.position()
          const size = node.size()
          const model = {
            id: node.id,
            ...data,
            ...position,
            ...size,
          }
          if (includeAttrs) {
            model.attrs = node.getAttrs()
          }
          return model
        })

        const edges = x6Edges.map(edge => {
          const data = edge.getData<NsGraph.IEdgeConfig>()
          const model = {
            id: edge.id,
            ...data,
          }
          if (includeAttrs) {
            model.attrs = edge.getAttrs()
          }
          return model
        })

        const graphData = { nodes, edges }
        const graphMeta = await this.ctx.getGraphMeta()
        /** 执行 service */
        if (saveGraphDataService) {
          const result = await saveGraphDataService(graphMeta, graphData)
          /** 设置结果 */
          if (result) {
            this.ctx.setResult(result)
          }
        }
        return {}
      },
      /** 外部的 hook */
      args.hooks,
    )

    return this
  }

  /** undo cmd */
  undo = async () => {
    this.ctx.undo()
    return this
  }

  /** redo cmd */
  redo = async () => {
    if (!this.ctx.isUndoable) {
      await this.execute()
    }
    return this
  }

  /** isUndoable */
  isUndoable(): boolean {
    return this.ctx.isUndoable()
  }
}
