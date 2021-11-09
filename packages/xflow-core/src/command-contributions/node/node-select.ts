import type { HookHub } from '@antv/xflow-hook'
import type { IHooks } from '../../hooks/interface'
import type { IContext, IArgsBase } from '../../command/interface'
import { inject, injectable, postConstruct } from 'mana-syringe'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import { XFlowNodeCommands } from '../constant'

type ICommand = ICommandHandler<NsSelectNode.IArgs, NsSelectNode.IResult, NsSelectNode.ICmdHooks>

export namespace NsSelectNode {
  export const command = XFlowNodeCommands.SELECT_NODE
  export const hookKey = 'selectNode'

  export interface IArgs extends IArgsBase {
    /** 选中的节点id */
    nodeIds: string[]
    /** 取消所有节点的选中状态 */
    resetSelection?: boolean
  }

  export interface IResult {}

  export interface ICmdHooks extends IHooks {
    selectNode: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsSelectNode.command.id },
})
/** 节点更新命令 */
export class SelectNodeCommand implements ICommand {
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  ctx: IContext<NsSelectNode.IArgs, NsSelectNode.IResult, NsSelectNode.ICmdHooks>

  @postConstruct()
  init() {
    this.ctx = this.contextProvider()
  }

  execute = async () => {
    const { args, hooks: runtimeHook } = this.ctx.getArgs()
    const hooks = this.ctx.getHooks()

    const result = await hooks.selectNode.call(
      args,
      async handlerArgs => {
        const x6Graph = await this.ctx.getX6Graph()
        const currentSelectionIds = x6Graph.getSelectedCells().map(node => node.id)
        const { nodeIds, resetSelection, commandService } = handlerArgs
        if (resetSelection) {
          x6Graph.resetSelection(nodeIds)
        } else {
          x6Graph.select(nodeIds)
        }
        this.ctx.addUndo({
          dispose: () => {
            commandService.executeUndoCommand<NsSelectNode.IArgs>(
              XFlowNodeCommands.SELECT_NODE.id,
              {
                nodeIds: currentSelectionIds,
                resetSelection: true,
              },
            )
          },
        })
        return {}
      },
      runtimeHook,
    )

    this.ctx.setResult(result)
    return this
  }

  undo = async () => {
    this.ctx.undo()
    return this
  }

  redo = async () => {
    if (!this.ctx.isUndoable) {
      await this.execute()
    }
    return this
  }

  isUndoable(): boolean {
    return this.ctx.isUndoable()
  }
}
