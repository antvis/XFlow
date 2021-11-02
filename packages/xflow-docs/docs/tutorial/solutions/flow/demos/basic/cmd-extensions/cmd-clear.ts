import { inject, injectable } from 'mana-syringe'
import { ICmdHooks as IHooks } from '@antv/xflow'
import { HookHub } from '@antv/xflow-hook'
import { IArgsBase, ICommandHandler, ICommandContextProvider } from '@antv/xflow'
import { CustomCommands } from './constants'
import { Disposable } from '@antv/xflow'

type ICommand = ICommandHandler<
  NsClearGraphCmd.IArgs,
  NsClearGraphCmd.IResult,
  NsClearGraphCmd.ICmdHooks
>

export namespace NsClearGraphCmd {
  /** Command: 用于注册named factory */
  export const command = CustomCommands.CLEAR_GRAPH
  /** hook name */
  export const hookKey = 'clearGraph'
  /** hook 参数类型 */
  export interface IArgs extends IArgsBase {}
  /** hook handler 返回类型 */
  export interface IResult {}
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    clearGraph: HookHub<IArgs, IResult>
  }
}

@injectable()
/** 部署画布数据 */
export class ClearGraphCommand implements ICommand {
  /** api */
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  /** 执行Cmd */
  execute = async () => {
    const ctx = this.contextProvider()
    const { args, hooks: runtimeHook } = ctx.getArgs()
    const hooks = ctx.getHooks()

    const result = await hooks.clearGraph.call(args, async args => {
      const graph = await ctx.getX6Graph()
      const cells = graph.getCells()
      graph.clearCells()

      ctx.addUndo(
        Disposable.create(async () => {
          graph.resetCells(cells)
        }),
      )

      return {}
    })

    ctx.setResult(result)
    return this
  }

  /** undo cmd */
  undo = async () => {
    if (this.isUndoable()) {
      const ctx = this.contextProvider()
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
