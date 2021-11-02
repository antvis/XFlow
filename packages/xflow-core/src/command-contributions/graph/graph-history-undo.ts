import { inject, injectable } from 'mana-syringe'
import type { HookHub } from '@antv/xflow-hook'
import type { IHooks } from '../../hooks/interface'
import type { IArgsBase } from '../../command/interface'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import { XFlowGraphCommands } from '../constant'
import { Disposable } from '../../common/disposable'

type ICommand = ICommandHandler<
  NsGraphHistoryUndo.IArgs,
  NsGraphHistoryUndo.IResult,
  NsGraphHistoryUndo.ICmdHooks
>

export namespace NsGraphHistoryUndo {
  /** Command: 用于注册named factory */
  export const command = XFlowGraphCommands.GRAPH_HISTORY_UNDO
  /** hookName */
  export const hookKey = 'historyUndo'
  /** hook 参数类型 */
  export interface IArgs extends IArgsBase {
    enabled?: boolean
  }
  /** hook handler 返回类型 */
  export interface IResult {
    err: null | string
  }
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    historyUndo: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsGraphHistoryUndo.command.id },
})
/** 开启history命令 */
export class GraphHistoryUndoCommand implements ICommand {
  /** api */
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  /** 执行Cmd */
  execute = async () => {
    const ctx = this.contextProvider()
    const { args, hooks: runtimeHook } = ctx.getArgs()
    const hooks = ctx.getHooks()

    const result = await hooks.historyUndo.call(
      args,
      async handlerArgs => {
        const graph = await ctx.getX6Graph()
        if (graph.isHistoryEnabled() === false) {
          return {
            err: 'history is disabled',
          }
        }
        graph.undo()
        ctx.addUndo(
          Disposable.create(async () => {
            const { commandService } = handlerArgs
            commandService.executeCommand(XFlowGraphCommands.GRAPH_HISTORY_REDO.id, {})
          }),
        )
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
