import { inject, injectable, postConstruct } from 'mana-syringe'
import type { NsGraph } from '../../interface'
import type { IArgsBase, IContext } from '../../command/interface'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'

import type { HookHub } from '@antv/xflow-hook'
import type { IHooks } from '../../hooks/interface'
import { XFlowGraphCommands } from '../constant'
import { Disposable } from '../../common/disposable'

type ICommand = ICommandHandler<NsRedoCmd.IArgs, NsRedoCmd.IResult, NsRedoCmd.ICmdHooks>

export namespace NsRedoCmd {
  /** Command Id: 用于注册named factory */
  export const command = XFlowGraphCommands.REDO_CMD
  /** hookName */
  export const hookKey = 'redoCommand'
  /** hook 参数类型 */
  export type IArgs = IArgsBase
  /** hook handler 返回类型 */
  export interface IResult {}
  /** api service 类型 */
  export interface ICreateNodeService {
    (node: NsGraph.INodeConfig): Promise<NsGraph.INodeConfig>
  }
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    redoCommand: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsRedoCmd.command.id },
})
/** 创建节点命令 */
export class GraphRedoCommand implements ICommand {
  /** api */
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  ctx: IContext<NsRedoCmd.IArgs, NsRedoCmd.IResult, NsRedoCmd.ICmdHooks>

  @postConstruct()
  init() {
    this.ctx = this.contextProvider()
  }

  /** 执行Cmd */
  execute = async () => {
    const ctx = this.ctx
    const { args, hooks: runtimeHook } = ctx.getArgs()
    const hooks = ctx.getHooks()

    await hooks.redoCommand.call(
      /** 执行hooks pipeline处理args */
      args,
      /** 执行 callback */
      async () => {
        const cmds = ctx.getCommands()
        if (cmds.isRedoable) {
          cmds.redoCommand()
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
