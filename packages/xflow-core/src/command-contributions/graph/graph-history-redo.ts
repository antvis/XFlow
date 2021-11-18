import { inject, injectable } from 'mana-syringe'
import type { HookHub } from '@antv/xflow-hook'
import type { IHooks } from '../../hooks/interface'
import type { IArgsBase } from '../../command/interface'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import { XFlowGraphCommands } from '../constant'
import { Disposable } from '../../common/disposable'

type ICommand = ICommandHandler<
  NsGraphHistoryRedo.IArgs,
  NsGraphHistoryRedo.IResult,
  NsGraphHistoryRedo.ICmdHooks
>

export namespace NsGraphHistoryRedo {
  /** Command: 用于注册named factory */
  export const command = XFlowGraphCommands.GRAPH_HISTORY_REDO
  /** hookName */
  export const hookKey = 'historyRedo'
  /** hook 参数类型 */
  export type IArgs = IArgsBase
  /** hook handler 返回类型 */
  export interface IResult {
    err: null | string
  }
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    historyRedo: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsGraphHistoryRedo.command.id },
})
/** 创建节点命令 */
export class GraphHistoryRedoCommand implements ICommand {
  /** api */
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  /** 执行Cmd */
  execute = async () => {
    const ctx = this.contextProvider()
    const { args, hooks: runtimeHook } = ctx.getArgs()
    const hooks = ctx.getHooks()

    const result = await hooks.historyRedo.call(
      args,
      async handlerArgs => {
        const graph = await ctx.getX6Graph()
        if (graph.isHistoryEnabled() === false) {
          return {
            err: 'history is disabled',
          }
        }
        graph.redo()
        ctx.addUndo(
          Disposable.create(async () => {
            const { commandService } = handlerArgs
            commandService.executeCommand(XFlowGraphCommands.GRAPH_HISTORY_UNDO.id, {})
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
