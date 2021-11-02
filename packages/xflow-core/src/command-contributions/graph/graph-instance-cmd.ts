import type { Graph } from '@antv/x6'
import type { HookHub } from '@antv/xflow-hook'
import type { IHooks } from '../../hooks/interface'
import type { IContext, IArgsBase } from '../../command/interface'
import { inject, injectable, postConstruct } from 'mana-syringe'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import { XFlowGraphCommands } from '../constant'

type ICommand = ICommandHandler<
  NsGraphInstanceCmd.IArgs,
  NsGraphInstanceCmd.IResult,
  NsGraphInstanceCmd.ICmdHooks
>

export namespace NsGraphInstanceCmd {
  /** Command Id: 用于注册named factory */
  export const command = XFlowGraphCommands.GRAPH_INSTANCE_COMMAND
  /** hookName */
  export const hookKey = 'graphInstacneCmd'
  /** hook 参数类型 */
  export interface IArgs<Result = any> extends IArgsBase {
    useGraph: (
      graph: Graph,
      ctx: IContext<
        NsGraphInstanceCmd.IArgs<any>,
        NsGraphInstanceCmd.IResult,
        NsGraphInstanceCmd.ICmdHooks
      >,
    ) => Promise<Result>
    onSucess?: (result: Result) => Promise<any>
    onError?: (e: Error, self: ICommand) => Promise<void>
  }
  /** hook handler 返回类型 */
  export type IResult = void
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    graphInstacneCmd: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsGraphInstanceCmd.command.id },
})
/** 使用Graph Intance 的命令 */
export class GraphInstanceCommand implements ICommand {
  /** api */
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  ctx: IContext<NsGraphInstanceCmd.IArgs, NsGraphInstanceCmd.IResult, NsGraphInstanceCmd.ICmdHooks>

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
    await hooks.graphInstacneCmd.call(
      /** 执行hooks pipeline处理args */
      args.args,
      /** 执行 callback */
      async handlerArgs => {
        const { useGraph, onSucess, onError } = handlerArgs
        const x6Graph = await ctx.getX6Graph()
        try {
          const res = await useGraph(x6Graph, ctx)
          if (onSucess) {
            await onSucess(res)
          }
        } catch (error) {
          await onError(error, this)
        }
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
