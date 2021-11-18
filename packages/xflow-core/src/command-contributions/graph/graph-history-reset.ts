import { inject, injectable } from 'mana-syringe'
import type { HookHub } from '@antv/xflow-hook'
import type { IHooks } from '../../hooks/interface'
import type { IArgsBase } from '../../command/interface'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import { XFlowGraphCommands } from '../constant'

type ICommand = ICommandHandler<
  NsGraphHistoryReset.IArgs,
  NsGraphHistoryReset.IResult,
  NsGraphHistoryReset.ICmdHooks
>

export namespace NsGraphHistoryReset {
  /** Command: 用于注册named factory */
  export const command = XFlowGraphCommands.GRAPH_HISTORY_RESET
  /** hookName */
  export const hookKey = 'historyReset'
  /** hook 参数类型 */
  export type IArgs = IArgsBase
  /** hook handler 返回类型 */
  export interface IResult {
    err: null | string
  }
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    historyReset: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsGraphHistoryReset.command.id },
})
/** 创建清理History命令 */
export class GraphHistoryResetCommand implements ICommand {
  /** api */
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  /** 执行Cmd */
  execute = async () => {
    const ctx = this.contextProvider()
    const { args, hooks: runtimeHook } = ctx.getArgs()
    const hooks = ctx.getHooks()
    const result = await hooks.historyReset.call(
      args,
      async () => {
        const graph = await ctx.getX6Graph()
        graph.cleanHistory()
        return { err: null }
      },
      runtimeHook,
    )
    ctx.setResult(result)
    return this
  }

  /** undo cmd */
  undo = async () => {
    const ctx = this.contextProvider()
    if (this.isUndoable()) {
      ctx.undo()
    }
    return this
  }

  /** redo cmd */
  redo = async () => {
    if (!this.isUndoable()) {
      await this.execute()
    }
    return this
  }

  isUndoable(): boolean {
    const ctx = this.contextProvider()
    return ctx.isUndoable()
  }
}
