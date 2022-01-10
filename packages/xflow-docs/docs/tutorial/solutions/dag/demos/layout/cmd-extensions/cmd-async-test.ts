import type { ICmdHooks as IHooks } from '@antv/xflow'
import type { HookHub } from '@antv/xflow-hook'
import type { IArgsBase, ICommandHandler } from '@antv/xflow'
import { ICommandContextProvider, ManaSyringe } from '@antv/xflow'
import { CustomCommands } from './constants'

type ICommand = ICommandHandler<NsTestCmd.IArgs, NsTestCmd.IResult, NsTestCmd.ICmdHooks>

const { inject, injectable } = ManaSyringe
export namespace NsTestCmd {
  /** Command: 用于注册named factory */
  export const command = CustomCommands.TEST_ASYNC_CMD
  /** hook name */
  export const hookKey = 'testCmd'
  /** hook 参数类型 */
  export interface IArgs extends IArgsBase {
    test: any
  }
  /** hook handler 返回类型 */
  export interface IResult {
    test: any
  }
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    testCmd: HookHub<IArgs, IResult>
  }
}

@injectable()
/** 创建节点命令 */
export class TestAsyncCommand implements ICommand {
  /** api */
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  /** 执行Cmd */
  execute = async () => {
    const ctx = this.contextProvider()
    const hooks = ctx.getHooks()
    const { args, hooks: runtimeHook } = ctx.getArgs()
    const graph = await ctx.getX6Graph()
    const result = await hooks.testCmd.call(
      args,
      async handlerArgs => {
        const { commandService, modelService, graphMeta, test } = handlerArgs
        console.log(graph, commandService, modelService, graphMeta, test)
        return { test: true }
      },
      runtimeHook,
    )

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
