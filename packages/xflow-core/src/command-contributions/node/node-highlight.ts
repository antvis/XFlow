import { inject, injectable, postConstruct } from 'mana-syringe'
import type { Node as X6Node, Edge as X6Edge } from '@antv/x6'
import type { HookHub } from '@antv/xflow-hook'
import type { IContext, IArgsBase } from '../../command/interface'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import type { IHooks } from '../../hooks/interface'
import { XFlowEdgeCommands, XFlowNodeCommands } from '../constant'
import type { NsEdgeCmd } from '../edge'

type ICommand = ICommandHandler<
  NsHighlightNode.IArgs,
  NsHighlightNode.IResult,
  NsHighlightNode.ICmdHooks
>

export namespace NsHighlightNode {
  export const command = XFlowNodeCommands.HIGHLIGHT_NODE
  export const hookKey = 'highlightNode'

  export interface IArgs extends IArgsBase {
    /** 节点唯一id */
    nodeId: string
    /** 节点高亮边框颜色 */
    stroke: string
    /** 节点高亮边框宽度 */
    strokeWidth?: number
    /** 是否联动高亮节点的关联边 */
    isHighlightRelatedLines?: boolean
    /** 边高亮颜色 */
    edgeStroke?: string
    /** 边高亮宽度 */
    edgeStrokeWidth?: number
  }
  export interface IResult {
    err: string | null
  }
  export interface ICmdHooks extends IHooks {
    highlightNode: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsHighlightNode.command.id },
})
/** 节点高亮 */
export class HighlightNodeCommand implements ICommand {
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  ctx: IContext<NsHighlightNode.IArgs, NsHighlightNode.IResult, NsHighlightNode.ICmdHooks>

  @postConstruct()
  init() {
    this.ctx = this.contextProvider()
  }

  execute = async () => {
    const { args, hooks: runtimeHook } = this.ctx.getArgs()
    const hooks = this.ctx.getHooks()

    const result = await hooks.highlightNode.call(
      args,
      async handlerArgs => {
        const x6Graph = await this.ctx.getX6Graph()
        const { nodeId, stroke, strokeWidth } = handlerArgs
        const x6Node = x6Graph?.getCellById(nodeId) as X6Node
        if (!x6Node) {
          console.error(nodeId, 'this nodeId is not exist')
          return { err: 'this nodeId is not exist' }
        } else {
          /** 高亮节点 */
          x6Node?.setAttrs({
            body: {
              stroke: stroke || '#7c68fc',
              strokeWidth: strokeWidth || 2,
            },
          })
          /** 节点关联的连线, 联动高亮 */
          if (handlerArgs?.isHighlightRelatedLines) {
            const { edgeStroke, edgeStrokeWidth } = handlerArgs
            const allEdges = x6Graph?.getEdges()
            allEdges.forEach((x6Edge: X6Edge) => {
              const x6EdgeData = x6Edge?.getData<any>()
              handlerArgs?.commandService.executeCommand(XFlowEdgeCommands.HIGHLIGHT_EDGE.id, {
                edgeId: x6EdgeData?.id,
                strokeColor: edgeStroke,
                strokeWidth: edgeStrokeWidth,
              } as NsEdgeCmd.HighlightEdge.IArgs)
            })
          }
        }
        return { err: null }
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
