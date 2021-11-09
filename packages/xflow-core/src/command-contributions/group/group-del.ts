import { inject, injectable } from 'mana-syringe'
import type { HookHub } from '@antv/xflow-hook'
import type { NsGraph } from '../../interface'
import type { IHooks } from '../../hooks/interface'
import type { IArgsBase } from '../../command/interface'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import { XFlowGroupCommands } from '../constant'
import { Disposable } from '../../common/disposable'
import { XFlowNodeCommands } from '../constant'

type ICommand = ICommandHandler<NsDelGroup.IArgs, NsDelGroup.IResult, NsDelGroup.ICmdHooks>

export namespace NsDelGroup {
  /** Command: 用于注册named factory */
  export const command = XFlowGroupCommands.DEL_GROUP
  /** hook 参数类型 */
  export interface IArgs extends IArgsBase {
    /** 群组节点的元数据 */
    nodeConfig: NsGraph.IGroupConfig
    /** 更新群组节点的元数据的异步方法 */
    deleteService?: IDeleteGroupService
  }
  /** add group api service 类型 */
  export interface IDeleteGroupService {
    (args: IArgs): Promise<boolean>
  }
  /** hook handler 返回类型 */
  export interface IResult {
    err: string | null
  }
  /** hookName */
  export const hookKey = 'delGroup' as const
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    delGroup: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsDelGroup.command.id },
})
/** 创建节点命令 */
export class DelGroupCommand implements ICommand {
  /** api */
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  /** 执行Cmd */
  execute = async () => {
    const ctx = this.contextProvider()
    const { args, hooks: runtimeHook } = ctx.getArgs()
    const hooks = ctx.getHooks()

    const result = await hooks.delGroup.call(
      args,
      async handlerArgs => {
        const graph = await ctx.getX6Graph()
        const { nodeConfig, commandService, deleteService: deleteGroupService } = handlerArgs

        const { id } = nodeConfig
        const node = graph.getCellById(id)

        if (deleteGroupService) {
          const canDel = await deleteGroupService(handlerArgs)
          if (!canDel) return { err: 'service rejected' }
        }

        if (!node) {
          return { err: 'target node is not exist' }
        }
        // 不是Group的节点不能解散
        if (node.getProp('isGroup') !== true) {
          return { err: 'target node is not group' }
        }

        const { isCollapsed } = node.getData()
        if (isCollapsed) {
          await commandService.executeCommand(XFlowGroupCommands.COLLAPSE_GROUP.id, {
            nodeId: node.id,
            isCollapsed: false,
            collapsedSize: { width: 0, height: 0 },
          })
        }

        const childrens = node.getChildren()
        if (childrens) {
          childrens.forEach(child => {
            node.unembed(child)
            child.prop('group', '')
            child.setData({
              ...child.getData(),
              group: '',
            })
          })
        }

        await commandService.executeCommand(XFlowNodeCommands.DEL_NODE.id, {
          nodeConfig,
        })

        /** add undo: delete node */
        ctx.addUndo(
          Disposable.create(async () => {
            commandService.executeCommand(XFlowGroupCommands.ADD_GROUP.id, {
              nodeConfig,
            })
          }),
        )

        return { err: null }
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

export {}
