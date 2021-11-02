import { inject, injectable, postConstruct } from 'mana-syringe'
import type { Edge as X6Edge } from '@antv/x6'
import type { HookHub } from '@antv/xflow-hook'
import type { IContext, IArgsBase } from '../../command/interface'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import type { IHooks } from '../../hooks/interface'
import { XFlowEdgeCommands } from '../constant'
import type { NsEdgeCmd } from '.'

type ICommand = ICommandHandler<
  NsHighlightEdge.IArgs,
  NsHighlightEdge.IResult,
  NsHighlightEdge.ICmdHooks
>

export namespace NsHighlightEdge {
  export const command = XFlowEdgeCommands.HIGHLIGHT_EDGE
  export const hookKey = 'highlightEdge'

  export interface IArgs extends IArgsBase {
    /** 边唯一id */
    edgeId: string
    /** 边高亮颜色 */
    stroke: string
    /** 边高亮宽度 */
    strokeWidth?: number
  }
  export interface IResult {}
  export interface ICmdHooks extends IHooks {
    highlightEdge: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsHighlightEdge.command.id },
})
/** 连线高亮 */
export class HighlightEdgeCommand implements ICommand {
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  ctx: IContext<NsHighlightEdge.IArgs, NsHighlightEdge.IResult, NsHighlightEdge.ICmdHooks>

  @postConstruct()
  init() {
    this.ctx = this.contextProvider()
  }

  execute = async () => {
    const { args, hooks: runtimeHook } = this.ctx.getArgs()
    const hooks = this.ctx.getHooks()

    const result = await hooks.highlightEdge.call(
      args,
      async handlerArgs => {
        const x6Graph = await this.ctx.getX6Graph()
        const { edgeId, stroke, strokeWidth } = handlerArgs
        const x6Edge = x6Graph?.getCellById(edgeId) as X6Edge
        if (!x6Edge) {
          console.error(edgeId, 'this edgeId is not exist')
        } else {
          x6Edge?.setAttrs({
            line: {
              stroke: stroke || '#7c68fc',
              strokeWidth: strokeWidth || 2,
            },
          })
          /** 高亮的连线默认前置在画布最前方 */
          handlerArgs.commandService.executeCommand(XFlowEdgeCommands.FRONT_EDGE.id, {
            edgeId,
          } as NsEdgeCmd.FrontEdge.IArgs)
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
