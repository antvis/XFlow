import { inject, injectable, postConstruct } from 'mana-syringe'
import type { IArgsBase, IContext } from '../../command/interface'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'

import type { HookHub } from '@antv/xflow-hook'
import type { IHooks } from '../../hooks/interface'
import { XFlowGraphCommands } from '../constant'
import { Disposable } from '../../common/disposable'
type ICommand = ICommandHandler<NsUndoCmd.IArgs, NsUndoCmd.IResult, NsUndoCmd.ICmdHooks>

export namespace NsUndoCmd {
  /** Command Id: 用于注册named factory */
  export const command = XFlowGraphCommands.UNDO_CMD
  /** hookName */
  export const hookKey = 'undoCommand'
  /** hook 参数类型 */
  export type IArgs = IArgsBase
  /** hook handler 返回类型 */
  export interface IResult {}
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    undoCommand: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsUndoCmd.command.id },
})
/** 创建节点命令 */
export class GraphUndoCommand implements ICommand {
  /** api */
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  /** api */
  ctx: IContext<NsUndoCmd.IArgs, NsUndoCmd.IResult, NsUndoCmd.ICmdHooks>

  @postConstruct()
  init() {
    this.ctx = this.contextProvider()
  }

  /** 执行Cmd */
  execute = async () => {
    const ctx = this.ctx
    const { args, hooks: runtimeHook } = ctx.getArgs()
    const hooks = ctx.getHooks()

    await hooks.undoCommand.call(
      /** 执行hooks pipeline处理args */
      args,
      /** 执行 callback */
      async () => {
        const cmds = ctx.getCommands()
        if (cmds.isUndoable) {
          cmds.undoCommand()
        }
        /** 设置结果 */
        this.ctx.addUndo(
          Disposable.create(() => {
            cmds.redoCommand()
          }),
        )
        return {}
      },
      /** 外部的 hook */
      runtimeHook,
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
