import { inject, injectable } from 'mana-syringe'
import { ICmdHooks as IHooks } from '@antv/xflow'
import { HookHub } from '@antv/xflow-hook'
import { IArgsBase, ICommandHandler, ICommandContextProvider } from '@antv/xflow'
import { CustomCommands } from './constants'
import { DataUri } from '@antv/x6'

type ICommand = ICommandHandler<
  NsExportGraphCmd.IArgs,
  NsExportGraphCmd.IResult,
  NsExportGraphCmd.ICmdHooks
>

export namespace NsExportGraphCmd {
  /** Command: 用于注册named factory */
  export const command = CustomCommands.EXPORT_GRAPH
  /** hook name */
  export const hookKey = 'exportGraph'
  /** hook 参数类型 */
  export interface IArgs extends IArgsBase {}
  /** hook handler 返回类型 */
  export interface IResult {}
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    exportGraph: HookHub<IArgs, IResult>
  }
}

@injectable()
/** 创建节点命令 */
export class ExportGraphCmd implements ICommand {
  /** api */
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  execute = async () => {
    const ctx = this.contextProvider()
    const { args, hooks: runtimeHook } = ctx.getArgs()
    const hooks = ctx.getHooks()

    const result = await hooks.exportGraph.call(args, async args => {
      const graph = await ctx.getX6Graph()
      graph.toPNG((dataUri: string) => {
        DataUri.downloadDataUri(dataUri, 'chart.png')
      })

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
