import { inject, injectable } from 'mana-syringe'
import type { HookHub } from '@antv/xflow-hook'
import type { NsGraph } from '../../interface'
import type { IHooks } from '../../hooks/interface'
import type { IArgsBase } from '../../command/interface'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import { XFlowGroupCommands } from '../constant'
import { XFLOW_GROUP_DEFAULT_COLLAPSED_SIZE } from '../../constants'

type ICommand = ICommandHandler<NsInitGroup.IArgs, NsInitGroup.IResult, NsInitGroup.ICmdHooks>

export namespace NsInitGroup {
  /** Command: 用于注册named factory */
  export const command = XFlowGroupCommands.INIT_GROUP
  /** hook 参数类型 */
  export interface IArgs extends IArgsBase {
    /** 画布渲染数据(nodes、edges) */
    graphData: NsGraph.IGraphData
    collapsedSize?: { width: number; height: number }
  }
  /** hook handler 返回类型 */
  export interface IResult {}
  /** hookName */
  export const hookKey = 'initGroup' as const
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    initGroup: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsInitGroup.command.id },
})
/** 创建节点命令 */
export class InitGroupCommand implements ICommand {
  /** api */
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  /** 执行Cmd */
  execute = async () => {
    const ctx = this.contextProvider()
    const { args, hooks: runtimeHook } = ctx.getArgs()
    const hooks = ctx.getHooks()

    const result = await hooks.initGroup.call(
      args,
      async handlerArgs => {
        const { graphData, commandService } = handlerArgs
        const graph = await ctx.getX6Graph()
        const { nodes } = graphData
        const groupMap: Record<string, string[]> = {}
        nodes.forEach(node => {
          const { id, group } = node
          if (group) {
            if (groupMap[group]) {
              groupMap[group].push(id)
            } else {
              groupMap[group] = [id]
            }
          }
        })

        Object.keys(groupMap).forEach(async groupId => {
          const groupNode = graph.getCellById(groupId)
          const groupData = groupNode.getData<NsGraph.INodeConfig>()
          const childrenIds = groupMap[groupId] || []
          // 更新props
          groupNode.prop('isGroup', true)
          groupNode.setData({
            ...groupData,
            isGroup: true,
            groupChildren: childrenIds,
          })
          childrenIds.forEach(childId => {
            const child = graph.getCellById(childId)
            groupNode.embed(child)
          })
          // Group置于底层
          groupNode.toBack()
          // collapse
          const { isCollapsed, groupCollapsedSize } = groupData
          if (isCollapsed) {
            const collapsedSize =
              handlerArgs.collapsedSize || groupCollapsedSize || XFLOW_GROUP_DEFAULT_COLLAPSED_SIZE
            await commandService.executeCommand(XFlowGroupCommands.COLLAPSE_GROUP.id, {
              collapsedSize,
              isCollapsed: true,
              nodeId: groupNode.id,
            })
          }
        })

        return {}
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
