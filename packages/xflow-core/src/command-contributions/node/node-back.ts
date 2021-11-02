import { inject, injectable, postConstruct } from 'mana-syringe'
import type { Node as X6Node } from '@antv/x6'
import type { HookHub } from '@antv/xflow-hook'
import type { IHooks } from '../../hooks/interface'
import type { IContext, IArgsBase } from '../../command/interface'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import { XFlowNodeCommands } from '../constant'
import { Disposable } from '../../common/disposable'
import type { NsNodeCmd } from '../interface'

type ICommand = ICommandHandler<NsBackNode.IArgs, NsBackNode.IResult, NsBackNode.ICmdHooks>

export namespace NsBackNode {
  /** command */
  export const command = XFlowNodeCommands.BACK_NODE
  /** hook 参数类型 */
  export interface IArgs extends IArgsBase {
    nodeId: string
  }
  /** hook handler 返回类型 */
  export interface IResult {}
  /** hook key */
  export const hookKey = 'backNode'
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    backNode: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsBackNode.command.id },
})
/** 节点前置命令(始终在画布最前方) */
export class BackNodeCommand implements ICommand {
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  ctx: IContext<NsBackNode.IArgs, NsBackNode.IResult, NsBackNode.ICmdHooks>

  @postConstruct()
  init() {
    this.ctx = this.contextProvider()
  }

  execute = async () => {
    const { args, hooks: runtimeHook } = this.ctx.getArgs()
    const hooks = this.ctx.getHooks()

    const result = await hooks.backNode.call(
      args,
      async handlerArgs => {
        const x6Graph = await this.ctx.getX6Graph()
        const { nodeId } = handlerArgs
        const x6Node = x6Graph?.getCellById(nodeId) as X6Node
        if (!x6Node) {
          console.error(nodeId, 'this nodeId is not exist')
        } else {
          x6Node.toBack()
          /** backNode undo */
          this.ctx.addUndo(
            Disposable.create(async () => {
              handlerArgs.commandService.executeCommand(XFlowNodeCommands.FRONT_NODE.id, {
                nodeId,
              } as NsNodeCmd.FrontNode.IArgs)
            }),
          )
        }
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
