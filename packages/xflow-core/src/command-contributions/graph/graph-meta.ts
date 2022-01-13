import { inject, injectable, postConstruct } from 'mana-syringe'
import type { NsGraph } from '../../interface'
import type { IContext, IArgsBase } from '../../command/interface'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'

import type { HookHub } from '@antv/xflow-hook'
import type { IHooks } from '../../hooks/interface'
import { XFlowGraphCommands } from '../constant'
import { MODELS } from '../../model-service'

type ICommand = ICommandHandler<NsGraphMeta.IArgs, NsGraphMeta.IResult, NsGraphMeta.ICmdHooks>

export namespace NsGraphMeta {
  /** Command Id: 用于注册named factory */
  export const command = XFlowGraphCommands.LOAD_META
  /** hookName */
  export const hookKey = 'graphMeta'
  /** hook 参数类型 */
  export interface IArgs extends IArgsBase {
    meta?: { flowId: string; [key: string]: any }
    graphMetaService?: IGraphMetaService
  }
  /** hook handler 返回类型 */
  export interface IResult extends NsGraph.IGraphMeta {
    flowId: string
  }
  /** api service 类型 */
  export interface IGraphMetaService {
    (args: IArgs): Promise<NsGraph.IGraphMeta>
  }
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    graphMeta: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsGraphMeta.command.id },
})
/** 创建节点命令 */
export class GraphMetaCommand implements ICommand {
  /** api */
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  ctx: IContext<NsGraphMeta.IArgs, NsGraphMeta.IResult, NsGraphMeta.ICmdHooks>

  @postConstruct()
  init() {
    this.ctx = this.contextProvider()
  }

  /** 执行Cmd */
  execute = async () => {
    const { args, hooks: runtimeHook } = this.ctx.getArgs()
    const hooks = this.ctx.getHooks()
    const result = await hooks.graphMeta.call(
      /** 执行hooks pipeline处理args */
      args,
      /** 执行 callback */
      async handlerArgs => {
        const { graphMetaService } = handlerArgs
        const meta = graphMetaService
          ? await graphMetaService(handlerArgs)
          : { ...handlerArgs?.meta }
        return { flowId: meta?.flowId, ...meta }
      },
      /** 外部的 hook */
      runtimeHook,
    )

    const modelService = this.ctx.getModelService()
    /** 如果已经注册，直接更新已有的值 */
    const model = await MODELS.GRAPH_META.getModel(modelService)
    model.setValue(result)

    /** 设置结果 */
    this.ctx.setResult(result)
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
