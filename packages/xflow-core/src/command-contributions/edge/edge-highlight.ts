import { inject, injectable, postConstruct } from 'mana-syringe'
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
    strokeColor: string
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
        const { edgeId, strokeColor, strokeWidth } = handlerArgs

        const allEdges = x6Graph.getEdges()
        /** 需要高亮的连线 */
        const highlightEdge = allEdges.find(edge => edge.id === edgeId)
        /** 不需要高亮的连线 */
        const otherEdges = allEdges.filter(edge => edge.id !== edgeId)

        if (!highlightEdge) {
          console.error(edgeId, 'this edgeId is not exist')
        } else {
          const oldAttr = highlightEdge.getAttrs()
          if (oldAttr?.line?.stroke === strokeColor && oldAttr?.line?.strokeWidth === strokeWidth) {
            /** 连线已经高亮, 不需要重复操作 */
          } else {
            /** 高亮选中的连线 */
            highlightEdge?.setAttrs({
              line: {
                stroke: strokeColor,
                strokeWidth: strokeWidth || 2,
              },
            })
            /** 其余连线取消高亮状态 */
            otherEdges.forEach(edge => {
              edge.setAttrs({
                line: oldAttr?.line,
              })
            })

            /** 高亮的连线默认前置在画布最前方 */
            handlerArgs.commandService.executeCommand(XFlowEdgeCommands.FRONT_EDGE.id, {
              edgeId,
            } as NsEdgeCmd.FrontEdge.IArgs)
          }
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
