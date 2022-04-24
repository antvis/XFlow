import { ICommandContextProvider, ManaSyringe } from '@antv/xflow'
import { CustomCommands } from './constants'

const { inject, injectable } = ManaSyringe

export const NsTestCmd = {}

NsTestCmd.command = CustomCommands.TEST_ASYNC_CMD
NsTestCmd.hookKey = 'testCmd'

@injectable()
/** 创建节点命令 */
export class TestAsyncCommand {
  /** api */
  @inject(ICommandContextProvider) contextProvider

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

  isUndoable() {
    const ctx = this.contextProvider()
    return ctx.isUndoable()
  }
}

export default TestAsyncCommand
