import { inject, injectable, postConstruct } from 'mana-syringe'
import type { Edge as X6Edge } from '@antv/x6'
import type { HookHub } from '@antv/xflow-hook'
import type { IHooks } from '../../hooks/interface'
import type { IContext, IArgsBase } from '../../command/interface'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import { XFlowEdgeCommands } from '../constant'
import { Disposable } from '../../common/disposable'
import type { NsEdgeCmd } from '../interface'

type ICommand = ICommandHandler<NsFrontEdge.IArgs, NsFrontEdge.IResult, NsFrontEdge.ICmdHooks>

export namespace NsFrontEdge {
  export const command = XFlowEdgeCommands.FRONT_EDGE
  export const hookKey = 'frontEdge'

  export interface IArgs extends IArgsBase {
    edgeId: string
  }
  export interface IResult {}
  export interface ICmdHooks extends IHooks {
    frontEdge: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsFrontEdge.command.id },
})
/** 边前置命令(始终在画布最前方) */
export class FrontEdgeCommand implements ICommand {
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  ctx: IContext<NsFrontEdge.IArgs, NsFrontEdge.IResult, NsFrontEdge.ICmdHooks>

  @postConstruct()
  init() {
    this.ctx = this.contextProvider()
  }

  execute = async () => {
    const { args, hooks: runtimeHook } = this.ctx.getArgs()
    const hooks = this.ctx.getHooks()

    const result = await hooks.frontEdge.call(
      args,
      async handlerArgs => {
        const x6Graph = await this.ctx.getX6Graph()
        const { edgeId } = handlerArgs
        const x6Edge = x6Graph?.getCellById(edgeId) as X6Edge
        if (!x6Edge) {
          console.error(edgeId, 'this edgeId is not exist')
        } else {
          x6Edge.toFront()
          /** frontEdge undo */
          this.ctx.addUndo(
            Disposable.create(async () => {
              handlerArgs.commandService.executeCommand(XFlowEdgeCommands.BACK_EDGE.id, {
                edgeId,
              } as NsEdgeCmd.BackEdge.IArgs)
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
