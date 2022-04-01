import { XFlowGraphCommands, ManaSyringe } from '@antv/xflow'
import { ICommandContextProvider } from '@antv/xflow'
import { CustomCommands } from './constants'

export const NsDeployDagCmd = {}
/** Command: 用于注册named factory */
NsDeployDagCmd.command = CustomCommands.DEPLOY_SERVICE
/** hook name */
NsDeployDagCmd.hookKey = 'deployDag'

@ManaSyringe.injectable()
/** 部署画布数据 */
export class DeployDagCommand {
  /** api */
  @ManaSyringe.inject(ICommandContextProvider) contextProvider

  /** 执行Cmd */
  execute = async () => {
    const ctx = this.contextProvider()
    const { args } = ctx.getArgs()
    const hooks = ctx.getHooks()

    const result = await hooks.deployDag.call(args, async handlerArgs => {
      const { commandService, deployDagService } = handlerArgs
      /** 执行Command */
      await commandService.executeCommand(XFlowGraphCommands.SAVE_GRAPH_DATA.id, {
        saveGraphDataService: async (meta, graph) => {
          await deployDagService(meta, graph)
        },
      })
      return { success: true }
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

  isUndoable() {
    const ctx = this.contextProvider()
    return ctx.isUndoable()
  }
}
