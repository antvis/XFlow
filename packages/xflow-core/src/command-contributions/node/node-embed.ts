import { inject, injectable, postConstruct } from 'mana-syringe'
import type { HookHub } from '@antv/xflow-hook'
import type { IHooks } from '../../hooks/interface'
import { Disposable } from '../../common/disposable'
import { XFlowNodeCommands } from '../constant'
import type { IContext, IArgsBase } from '../../command/interface'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'

type ICommand = ICommandHandler<NsEmbedNode.IArgs, NsEmbedNode.IResult, NsEmbedNode.ICmdHooks>

export namespace NsEmbedNode {
  export const command = XFlowNodeCommands.EMBED_NODE
  export const hookKey = 'embedNode'
  export interface IArgs extends IArgsBase {
    nodeId: string
    embedNodeIds: string[]
  }
  export interface IResult {}
  export interface ICmdHooks extends IHooks {
    embedNode: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsEmbedNode.command.id },
})
/** 添加子节点命令 */
export class EmbedNodeCommand implements ICommand {
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  ctx: IContext<NsEmbedNode.IArgs, NsEmbedNode.IResult, NsEmbedNode.ICmdHooks>

  @postConstruct()
  init() {
    this.ctx = this.contextProvider()
  }

  execute = async () => {
    const { args, hooks: runtimeHook } = this.ctx.getArgs()
    const hooks = this.ctx.getHooks()

    const result = await hooks.embedNode.call(
      args,
      async handlerArgs => {
        const x6Graph = await this.ctx.getX6Graph()
        const { nodeId, embedNodeIds } = handlerArgs
        const node = x6Graph?.getCellById(nodeId)
        if (node) {
          embedNodeIds.forEach(childNodeId => {
            const embedNode = x6Graph.getCellById(childNodeId)
            if (embedNode) {
              node.embed(embedNode)
            }
          })
        }
        this.ctx.addUndo(
          Disposable.create(async () => {
            if (node) {
              embedNodeIds.forEach(childNodeId => {
                const embedNode = x6Graph.getCellById(childNodeId)
                if (embedNode) {
                  node.unembed(embedNode)
                }
              })
            }
          }),
        )
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
