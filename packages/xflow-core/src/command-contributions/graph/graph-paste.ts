import type { HookHub } from '@antv/xflow-hook'
import type { NsGraph } from '../../interface'
import type { IHooks } from '../../hooks/interface'
import type { IArgsBase } from '../../command/interface'
import type { NsEdgeCmd, NsGroupCmd, NsNodeCmd } from '../interface'
import { inject, injectable } from 'mana-syringe'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import {
  XFlowGraphCommands,
  XFlowEdgeCommands,
  XFlowGroupCommands,
  XFlowNodeCommands,
} from '../constant'
import { Disposable } from '../../common/disposable'
import { LOCAL_STORAGE_KEY } from '../../constants'
import { safeJson } from '../../common/safe-json'
import { GraphMappingHelper } from '../mapping-service'

type ICommand = ICommandHandler<
  NsGraphPasteSelection.IArgs,
  NsGraphPasteSelection.IResult,
  NsGraphPasteSelection.ICmdHooks
>

export namespace NsGraphPasteSelection {
  /** Command: 用于注册named factory */
  export const command = XFlowGraphCommands.GRAPH_PASTE
  /** hookName */
  export const hookKey = 'graphPasteSelection'
  /** hook 参数类型 */
  export interface IArgs extends IArgsBase {
    position?: {
      x: number
      y: number
    }
    collapsedSize?: {
      width: number
      height: number
    }
  }
  /** hook handler 返回类型 */
  export interface IResult {
    err: null | string
  }
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    graphPasteSelection: HookHub<IArgs, IResult>
  }
}

function randomNumber(max, min = 0) {
  return Math.floor(Math.random() * (max - min) + min)
}

@injectable({
  token: { token: ICommandHandler, named: NsGraphPasteSelection.command.id },
})
/** 创建节点命令 */
export class GraphPasteSelectionCommand implements ICommand {
  /** 防止多次执行 */
  static doing = false

  /** api */
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  /** mapping */
  @inject(GraphMappingHelper) mappingHelper: GraphMappingHelper

  updateNodeCopiedProps = (position: { x: number; y: number }, nodeConfig: NsGraph.INodeConfig) => {
    let dx = randomNumber(100)
    let dy = randomNumber(100)
    if (position) {
      dx = nodeConfig.x - position.x + randomNumber(30)
      dy = nodeConfig.y - position.y + randomNumber(30)
    }
    // 修改坐标
    nodeConfig.x += dx
    nodeConfig.y += dy
    // 删除 id
    nodeConfig.originId = nodeConfig.id
    delete nodeConfig.id
    // 修改label
    nodeConfig.label = `${nodeConfig.label}_copied`
    nodeConfig.isCollapsed = false
    return nodeConfig
  }

  /** 执行Cmd */
  execute = async () => {
    const ctx = this.contextProvider()
    const { args, hooks: runtimeHook } = ctx.getArgs()
    const hooks = ctx.getHooks()
    if (GraphPasteSelectionCommand.doing) {
      return this
    }
    GraphPasteSelectionCommand.doing = true

    const result = await hooks.graphPasteSelection.call(
      args,
      async handlerArgs => {
        const { commandService, position } = handlerArgs
        const jsonString = window.localStorage.getItem(LOCAL_STORAGE_KEY)
        const plainObject = safeJson<NsGraph.IGraphData>(jsonString, {
          nodes: [],
          edges: [],
        })

        const { nodes = [], edges = [] } = plainObject
        const { normalNodes, groupNodes } = this.mappingHelper.getNodesByType(nodes)
        this.mappingHelper.addNodes(nodes)

        // 添加普通节点
        await Promise.all(
          normalNodes.map(async nodeConfig => {
            const res = await commandService.executeCommand<
              NsNodeCmd.AddNode.IArgs,
              NsNodeCmd.AddNode.IResult
            >(XFlowNodeCommands.ADD_NODE.id, {
              nodeConfig: this.updateNodeCopiedProps(position, nodeConfig),
            })
            const context = res.contextProvider()
            const cmdResult = context.getResult()
            this.mappingHelper.buildNodeMapping(nodeConfig, cmdResult.nodeConfig)
          }),
        )

        // 处理group
        await Promise.all(
          groupNodes.map(async group => {
            const groupNodeConfig = this.mappingHelper.buildGroupRelations(group)
            await commandService.executeCommand<
              NsGroupCmd.AddGroup.IArgs,
              NsGroupCmd.AddGroup.IResult
            >(XFlowGroupCommands.ADD_GROUP.id, {
              nodeConfig: this.updateNodeCopiedProps(
                position,
                groupNodeConfig,
              ) as NsGraph.IGroupConfig,
            })
          }),
        )

        // 处理连线
        await Promise.all(
          edges.map(edgeConfig => {
            const newEdge = this.mappingHelper.createEdgeBetweenNodes(edgeConfig)
            return commandService.executeCommand<
              NsEdgeCmd.AddEdge.IArgs,
              NsEdgeCmd.AddEdge.IResult
            >(XFlowEdgeCommands.ADD_EDGE.id, {
              edgeConfig: newEdge,
            })
          }),
        )

        ctx.addUndo(
          Disposable.create(async () => {
            window.localStorage.setItem(LOCAL_STORAGE_KEY, null)
          }),
        )
        return { err: null }
      },
      runtimeHook,
    )

    ctx.setResult(result)
    GraphPasteSelectionCommand.doing = false
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
