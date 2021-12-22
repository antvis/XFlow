import { inject, injectable } from 'mana-syringe'
import type { IArgsBase } from '../../command/interface'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import type { IHooks } from '../../hooks/interface'
import type { Node } from '@antv/x6'
import { HookHub } from '@antv/xflow-hook'
import { XFlowNodeCommands } from '../constant'
import { Disposable } from '../../common/disposable'

type ICommand = ICommandHandler<NsMoveNode.IArgs, NsMoveNode.IResult, NsMoveNode.ICmdHooks>

export namespace NsMoveNode {
  /** Command: 用于注册named factory */
  export const command = XFlowNodeCommands.MOVE_NODE
  /** hookName */
  export const hookKey = 'moveNode'
  /** 创建 hook */
  export const createHook = () => {
    return new HookHub<IArgs, IResult>()
  }
  /** hook 参数类型 */
  export interface IArgs extends IArgsBase {
    id: string
    position: {
      x?: number
      y?: number
      dx?: number
      dy?: number
      duration?: number
    }
    nodePositionService?: INodePositionService
  }
  /** hook handler 返回类型 */
  export interface IResult {
    err: null | string
    nextY?: number
    nextX?: number
  }
  /** api service 类型 */
  export interface INodePositionService {
    (args: IArgs): Promise<boolean>
  }
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    moveNode: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsMoveNode.command.id },
})
/** 创建节点命令 */
export class MoveNodeCommand implements ICommand {
  /** command api */
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  /** 执行Cmd */
  execute = async () => {
    const ctx = this.contextProvider()
    const { args, hooks: runtimeHook } = ctx.getArgs()
    const hooks = ctx.getHooks()

    const result = await hooks.moveNode.call(
      args,
      async handlerArgs => {
        const { nodePositionService } = handlerArgs

        /** nodePositionService 返回false时不更新position */
        if (nodePositionService) {
          const canMove = await nodePositionService(handlerArgs)
          if (!canMove) return { err: 'service rejected' }
        }

        const { dx = 0, dy = 0, x, y, duration = 150 } = handlerArgs.position
        const x6Graph = await ctx.getX6Graph()
        const node = x6Graph.getCellById(handlerArgs.id) as Node
        if (node) {
          let nextX = x
          let nextY = y
          const { x: preX, y: preY } = node.position()
          let undo = () => {
            node.position(preX, preY, { silent: false })
          }
          if (dx || dy) {
            nextX = dx + preX
            nextY = dy + preY
            node.translate(dx, dy, { transition: { duration } })
            undo = () => node.translate(-dx, -dy, { transition: { duration } })
          } else {
            node.position(nextX, nextY, { silent: false })
          }
          /** add undo  */
          ctx.addUndo(
            Disposable.create(() => {
              undo()
            }),
          )
          return { err: null, nextX, nextY }
        }
      },
      runtimeHook,
    )

    ctx.setResult(result)

    return this
  }

  /** undo cmd */
  undo = async () => {
    const ctx = this.contextProvider()
    if (this.isUndoable()) {
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

  isUndoable(): boolean {
    const ctx = this.contextProvider()
    return ctx.isUndoable()
  }
}
