import { inject, injectable, postConstruct } from 'mana-syringe'
import type { Node as X6Node } from '@antv/x6'
import type { HookHub } from '@antv/xflow-hook'
import type { IHooks } from '../../hooks/interface'
import { XFlowNodeCommands } from '../constant'
import type { NsGraph } from '../../interface'
import type { IContext, IArgsBase } from '../../command/interface'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'

type ICommand = ICommandHandler<NsCenterNode.IArgs, NsCenterNode.IResult, NsCenterNode.ICmdHooks>

export namespace NsCenterNode {
  export const command = XFlowNodeCommands.CENTER_NODE
  export const hookKey = 'centerNode'
  export interface IArgs extends IArgsBase {
    nodeConfig: NsGraph.INodeConfig
  }
  export interface IResult {
    x6Node: X6Node
  }
  export interface ICmdHooks extends IHooks {
    centerNode: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsCenterNode.command.id },
})
/** 节点在画布居中命令 */
export class CenterNodeCommand implements ICommand {
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  ctx: IContext<NsCenterNode.IArgs, NsCenterNode.IResult, NsCenterNode.ICmdHooks>

  @postConstruct()
  init() {
    this.ctx = this.contextProvider()
  }

  execute = async () => {
    const { args, hooks: runtimeHook } = this.ctx.getArgs()
    const hooks = this.ctx.getHooks()

    const result = await hooks.centerNode.call(
      args,
      async handlerArgs => {
        const x6Graph = await this.ctx.getX6Graph()
        const { nodeConfig } = handlerArgs

        const x6Node = x6Graph?.getCellById(nodeConfig?.id) as X6Node
        x6Graph?.centerCell(x6Node)

        return { x6Node }
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
