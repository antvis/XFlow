import { inject, injectable, postConstruct } from 'mana-syringe'
import type { Node as X6Node } from '@antv/x6'
import type { HookHub } from '@antv/xflow-hook'
import type { IHooks } from '../../hooks/interface'
import { XFlowNodeCommands } from '../constant'
import type { NsGraph } from '../../interface'
import type { IContext, IArgsBase } from '../../command/interface'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import { ReactShape } from '@antv/x6-react-shape'

type ICommand = ICommandHandler<NsUpdateNode.IArgs, NsUpdateNode.IResult, NsUpdateNode.ICmdHooks>

export namespace NsUpdateNode {
  export const command = XFlowNodeCommands.UPDATE_NODE
  export const hookKey = 'updateNode'

  export interface IArgs extends IArgsBase {
    /** 节点的新元数据 */
    nodeConfig: NsGraph.INodeConfig
    /** setOptions:https://x6.antv.vision/zh/docs/api/model/cell/#setdata */
    options: X6Node.SetOptions
    /** 更新节点的服务 */
    updateNodeService?: IUpdateNodeService
  }

  export const XFlowNodeSetOptions: X6Node.SetOptions = { overwrite: true }
  export interface IResult {
    nodeConfig: NsGraph.INodeConfig
    nodeCell: X6Node
  }

  export interface IUpdateNodeService {
    (args: IArgs): Promise<NsGraph.INodeConfig>
  }

  export interface ICmdHooks extends IHooks {
    updateNode: HookHub<IArgs, IResult>
  }

  export const NODE_WIDTH = 200
  export const NODE_HEIGHT = 40
}

@injectable({
  token: { token: ICommandHandler, named: NsUpdateNode.command.id },
})
/** 节点更新命令 */
export class UpdateNodeCommand implements ICommand {
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  ctx: IContext<NsUpdateNode.IArgs, NsUpdateNode.IResult, NsUpdateNode.ICmdHooks>

  @postConstruct()
  init() {
    this.ctx = this.contextProvider()
  }

  execute = async () => {
    const { args, hooks: runtimeHook } = this.ctx.getArgs()
    const hooks = this.ctx.getHooks()

    const result = await hooks.updateNode.call(
      args,
      async handlerArgs => {
        const x6Graph = await this.ctx.getX6Graph()
        const { nodeConfig, options = NsUpdateNode.XFlowNodeSetOptions } = handlerArgs

        const x6Node = x6Graph?.getCellById(nodeConfig?.id) as X6Node
        x6Node.setData(nodeConfig, options)
        x6Node.setPosition(nodeConfig?.x || 0, nodeConfig?.y || 0)
        x6Node.setSize(
          nodeConfig?.width || NsUpdateNode.NODE_WIDTH,
          nodeConfig?.height || NsUpdateNode.NODE_HEIGHT,
        )

        if (!(x6Node instanceof ReactShape) && !!x6Node.getAttrByPath('text/text')) {
          x6Node.setAttrByPath('text/text', nodeConfig.label)
        }

        // 支持nodeAttrs
        if (nodeConfig.attrs) {
          x6Node.setAttrs(nodeConfig.attrs)
        }
        return {
          nodeConfig,
          nodeCell: x6Node,
        }
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
