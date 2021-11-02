import { inject, injectable, postConstruct } from 'mana-syringe'
import type { Node as X6Node } from '@antv/x6'
import type { HookHub } from '@antv/xflow-hook'
import type { IHooks } from '../../hooks/interface'
import type { IContext, IArgsBase } from '../../command/interface'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import { XFlowNodeCommands } from '../constant'
import { Disposable } from '../../common/disposable'
import type { NsNodeCmd } from '../interface'

type ICommand = ICommandHandler<NsFrontNode.IArgs, NsFrontNode.IResult, NsFrontNode.ICmdHooks>

export namespace NsFrontNode {
  export const command = XFlowNodeCommands.FRONT_NODE
  export const hookKey = 'frontNode'

  export interface IArgs extends IArgsBase {
    nodeId: string
  }

  export interface IResult {}

  export interface ICmdHooks extends IHooks {
    frontNode: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsFrontNode.command.id },
})
/** 节点前置命令(始终在画布最前方) */
export class FrontNodeCommand implements ICommand {
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  ctx: IContext<NsFrontNode.IArgs, NsFrontNode.IResult, NsFrontNode.ICmdHooks>

  @postConstruct()
  init() {
    this.ctx = this.contextProvider()
  }

  execute = async () => {
    const ctx = this.contextProvider()
    const { args, hooks: runtimeHook } = ctx.getArgs()
    const hooks = ctx.getHooks()

    const result = await hooks.frontNode.call(
      args,
      async handlerArgs => {
        const x6Graph = await this.ctx.getX6Graph()
        const { nodeId } = handlerArgs
        const x6Node = x6Graph?.getCellById(nodeId) as X6Node
        if (!x6Node) {
          console.error(nodeId, 'this nodeId is not exist')
        } else {
          x6Node.toFront()
          /** frontNode undo */
          ctx.addUndo(
            Disposable.create(async () => {
              handlerArgs.commandService.executeCommand(XFlowNodeCommands.BACK_NODE.id, {
                nodeId,
              } as NsNodeCmd.BackNode.IArgs)
            }),
          )
        }
        return {}
      },
      runtimeHook,
    )
    ctx.setResult(result)
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
