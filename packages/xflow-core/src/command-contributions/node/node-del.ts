import { inject, injectable } from 'mana-syringe'
import { HookHub } from '@antv/xflow-hook'
import type { NsGraph } from '../../interface'
import type { IHooks } from '../../hooks/interface'
import type { IArgsBase } from '../../command/interface'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import { XFlowEdgeCommands, XFlowNodeCommands } from '../constant'
import { Disposable } from '../../common/disposable'
import type { NsNodeCmd } from '../interface'

import type { Model, Node } from '@antv/x6/es'
import type { NsEdgeCmd } from '../edge'

type ICommand = ICommandHandler<NsDelNode.IArgs, NsDelNode.IResult, NsDelNode.ICmdHooks>

export namespace NsDelNode {
  /** Command: 用于注册named factory */
  export const command = XFlowNodeCommands.DEL_NODE
  /** hook name */
  export const hookKey = 'delNode'
  /** 创建 hook */
  export const createHook = () => {
    return new HookHub<IArgs, IResult>()
  }
  /** hook 参数类型 */
  export interface IArgs extends IArgsBase {
    /** X6 Node Cell */
    x6Node?: Node
    /** Node元数据 */
    nodeConfig: NsGraph.INodeConfig
    /** X6 Model Options：https://x6.antv.vision/zh/docs/api/graph/model/#addnode */
    options?: Model.RemoveOptions
    /** 删除Node的服务 */
    deleteNodeService?: IDeleteNodeService
  }
  /** hook handler 返回类型 */
  export interface IResult {
    err: null | string
    nodeConfig?: NsGraph.INodeConfig
  }
  /** del node api service 类型, 返回true时删除 */
  export interface IDeleteNodeService {
    (args: IArgs): Promise<boolean>
  }
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    delNode: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsDelNode.command.id },
})
/** 创建节点命令 */
export class DelNodeCommand implements ICommand {
  /** api */
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  /** 执行Cmd */
  execute = async () => {
    const ctx = this.contextProvider()
    const { args, hooks: runtimeHook } = ctx.getArgs()

    const hooks = ctx.getHooks()

    const result = await hooks.delNode.call(
      args,
      async handlerArgs => {
        const { commandService, deleteNodeService, options } = handlerArgs
        const graph = await ctx.getX6Graph()

        if (deleteNodeService) {
          const canDel = await deleteNodeService(handlerArgs)
          if (!canDel) return { err: ' service rejected' }
        }

        const nodeId = (handlerArgs.x6Node || handlerArgs.nodeConfig).id
        const nodeCell = graph.getCellById(nodeId)

        if (nodeCell && nodeCell.isNode()) {
          /** 先清理连线 */
          const edges = [
            ...(graph.getIncomingEdges(nodeCell) || []),
            ...(graph.getOutgoingEdges(nodeCell) || []),
          ]

          await Promise.all(
            edges.map(edge => {
              return commandService.executeCommand(XFlowEdgeCommands.DEL_EDGE.id, {
                x6Edge: edge,
              } as NsEdgeCmd.DelEdge.IArgs)
            }),
          )
          /** 再清理节点 */
          const nodeConfig = nodeCell.getData<NsGraph.INodeConfig>()
          nodeCell.remove({ ...options, isCommand: true })

          /** add undo: delete node */
          ctx.addUndo(
            Disposable.create(async () => {
              await commandService.executeCommand(XFlowNodeCommands.ADD_NODE.id, {
                nodeConfig,
              } as NsNodeCmd.AddNode.IArgs)
              // TODO: 支持线和节点的undo
              // 通过 sequence mapping 出新的port id
              // const nodeCtx = nodeCmd.contextProvider()
              // const { nodeCell } = nodeCtx.getResult()
              // edgeCmds.forEach(async cmd => {
              //   const c = cmd.contextProvider()
              //   const { edgeConfig } = c.getResult()
              // })
            }),
          )
          return { err: null, nodeConfig }
        }
        return { err: 'node is not exist' }
      },
      runtimeHook,
    )

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

  isUndoable(): boolean {
    const ctx = this.contextProvider()
    return ctx.isUndoable()
  }
}
