import type { Node, Graph } from '@antv/x6'
import { inject, injectable } from 'mana-syringe'
import type { HookHub } from '@antv/xflow-hook'
import type { NsGraph } from '../../interface'
import type { NsNodeCmd, NsGroupCmd } from '../interface'
import type { IHooks } from '../../hooks/interface'
import type { IArgsBase } from '../../command/interface'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import { XFlowGroupCommands } from '../constant'
import { Disposable } from '../../common/disposable'
import { XFlowNodeCommands } from '../constant'

type ICommand = ICommandHandler<NsAddGroup.IArgs, NsAddGroup.IResult, NsAddGroup.ICmdHooks>

export namespace NsAddGroup {
  /** Command: 用于注册named factory */
  export const command = XFlowGroupCommands.ADD_GROUP
  /** hookName */
  export const hookKey = 'addGroup'
  /** hook 参数类型 */
  export interface IArgs extends IArgsBase {
    /** 群组节点的元数据 */
    nodeConfig: NsGraph.IGroupConfig
    /** 创建X6 Group Cell的工厂方法 */
    cellFactory?: IGroupCellFactory
    /** 返回群组节点的元数据的异步方法 */
    createService?: ICreateGroupService
  }
  /** hook handler 返回类型 */
  export interface IResult {
    /** group 的配置数据 */
    nodeConfig: NsGraph.IGroupConfig
    /** Group Cell */
    nodeCell: Node
  }
  /** add group api service 类型 */
  export interface ICreateGroupService {
    (args: IArgs): Promise<NsGraph.IGroupConfig>
  }
  /** 创建X6 Node Cell的工厂方法 */
  export interface IGroupCellFactory {
    (args: NsGraph.IGroupConfig, self: AddGroupCommand): Promise<Node>
  }
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    addGroup: HookHub<IArgs, IResult>
  }

  export const GROUP_PADDING = 12
  export const GROUP_HEADER_HEIGHT = 40
}

@injectable({
  token: { token: ICommandHandler, named: NsAddGroup.command.id },
})
/** 创建节点命令 */
export class AddGroupCommand implements ICommand {
  /** api */
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  getBBox = (node: Node, nodeConfig: NsGraph.INodeConfig, graph: Graph) => {
    const {
      groupHeaderHeight = NsAddGroup.GROUP_HEADER_HEIGHT,
      groupPadding = NsAddGroup.GROUP_PADDING,
    } = nodeConfig
    const bbox = graph.getCellsBBox(node.children)
    bbox.moveAndExpand({
      x: -groupPadding,
      y: -(groupPadding + groupHeaderHeight),
      width: groupPadding * 2,
      height: groupPadding * 2 + groupHeaderHeight,
    })
    return bbox
  }

  /** 执行Cmd */
  execute = async () => {
    const ctx = this.contextProvider()
    const { args, hooks: runtimeHook } = ctx.getArgs()
    const hooks = ctx.getHooks()

    const result = await hooks.addGroup.call(
      args,
      async handlerArgs => {
        const {
          nodeConfig,
          createService: createGroupService,
          cellFactory,
          commandService,
        } = handlerArgs
        const graph = await ctx.getX6Graph()

        const res = await commandService.executeCommand(XFlowNodeCommands.ADD_NODE.id, {
          cellFactory,
          createNodeService: createGroupService,
          nodeConfig,
        })
        const { nodeCell: groupCell } = res
          .contextProvider()
          .getResult() as NsNodeCmd.AddNode.IResult
        const { id: groupId } = groupCell
        const { groupChildren } = nodeConfig

        if (groupChildren.length) {
          groupChildren.forEach(nodeId => {
            const child = graph.getCellById(nodeId)
            if (child) {
              child.setData({
                ...child.getData(),
                group: groupId,
                isCollapsed: false,
              })
              child.prop('group', groupId)
              groupCell.addChild(child)
              graph.unselect(child)
            }
          })

          const groupBBox = this.getBBox(groupCell, nodeConfig, graph)
          groupCell.position(groupBBox.x, groupBBox.y)
          groupCell.size(groupBBox.width, groupBBox.height)
          groupCell.setZIndex(0)
          groupCell.prop('isGroup', true)
          groupCell.setData<NsGraph.INodeConfig>({
            ...groupCell.getData(),
            width: groupBBox.width,
            height: groupBBox.height,
            groupChildrenSize: { width: groupBBox.width, height: groupBBox.height },
            x: groupBBox.x,
            y: groupBBox.y,
            isGroup: true,
          })
          graph.select(groupCell)
        }

        if (nodeConfig.isCollapsed) {
          await commandService.executeCommand<NsGroupCmd.CollapseGroup.IArgs>(
            XFlowGroupCommands.COLLAPSE_GROUP.id,
            {
              nodeId: nodeConfig.id,
              isCollapsed: nodeConfig.isCollapsed,
            },
          )
        }

        /** add undo: delete node */
        ctx.addUndo(
          Disposable.create(async () => {
            commandService.executeCommand(XFlowGroupCommands.DEL_GROUP.id, {
              nodeConfig,
            })
          }),
        )

        return { nodeConfig: nodeConfig, nodeCell: groupCell }
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
