import { inject, injectable, postConstruct } from 'mana-syringe'
import type { Graph as X6Graph } from '@antv/x6'
import { Node as X6Node } from '@antv/x6'
import type { HookHub } from '@antv/xflow-hook'
import isBoolean from 'lodash/isBoolean'
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
    nodeConfig?: NsGraph.INodeConfig
    /** 更新节点元数据 */
    setNodeConfig?: ISetNodeConfig
    /** setOptions:https://x6.antv.vision/zh/docs/api/model/cell/#setdata */
    options?: X6Node.SetOptions
    /** 更新节点的服务 */
    updateNodeService?: IUpdateNodeService
  }

  export const XFlowNodeSetOptions: X6Node.SetOptions = { overwrite: true }
  export interface ISetNodeConfig {
    node: string | X6Node
    callback: (node: NsGraph.INodeConfig) => Promise<NsGraph.INodeConfig>
  }
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

  setNodeConfig = (x6Node: X6Node, nodeConfig: NsGraph.INodeConfig, options: X6Node.SetOptions) => {
    x6Node.setData(nodeConfig, options)
    x6Node.setPosition(nodeConfig?.x || 0, nodeConfig?.y || 0)
    x6Node.setSize(
      nodeConfig?.width || NsUpdateNode.NODE_WIDTH,
      nodeConfig?.height || NsUpdateNode.NODE_HEIGHT,
    )
    x6Node.angle(nodeConfig?.angle || 0, {
      absolute: true,
    })

    if (isBoolean(nodeConfig?.visible)) {
      x6Node.setVisible(nodeConfig?.visible)
    }

    // SVG 元素更新label
    if (!(x6Node instanceof ReactShape) && !!x6Node.getAttrByPath('text/text')) {
      x6Node.setAttrByPath('text/text', nodeConfig.label)
    }

    // 支持nodeAttrs
    if (nodeConfig.attrs) {
      x6Node.setAttrs(nodeConfig.attrs)
    }

    // 更新ports
    if (Array.isArray(nodeConfig.ports)) {
      x6Node.setPropByPath('ports/items', nodeConfig.ports, { rewrite: true, ...options })
    }
  }

  getNodeConfig = (x6Node: X6Node) => {
    const data = x6Node.getData()
    const position = x6Node.getPosition()
    const size = x6Node.getSize()
    return {
      ...data,
      ...position,
      ...size,
    }
  }

  getNodeCell = (x6Graph: X6Graph, handlerArgs: NsUpdateNode.IArgs) => {
    const { nodeConfig, setNodeConfig } = handlerArgs
    let nodeId: string = ''
    if (setNodeConfig && setNodeConfig.node && typeof setNodeConfig.node === 'string') {
      nodeId = setNodeConfig.node
    } else if (nodeConfig && nodeConfig.id && typeof nodeConfig.id === 'string') {
      nodeId = nodeConfig.id
    }
    if (nodeId) {
      return x6Graph?.getCellById(nodeId) as X6Node
    }
    if (setNodeConfig && setNodeConfig.node instanceof X6Node) {
      return setNodeConfig.node
    }
  }

  getNextNodeConfig = async (handlerArgs: NsUpdateNode.IArgs, x6Node: X6Node) => {
    if (handlerArgs && handlerArgs.setNodeConfig && handlerArgs.setNodeConfig.callback) {
      const nodeData = this.getNodeConfig(x6Node)
      return handlerArgs.setNodeConfig.callback(nodeData)
    }
    return handlerArgs.nodeConfig
  }

  execute = async () => {
    const { args, hooks: runtimeHook } = this.ctx.getArgs()
    const hooks = this.ctx.getHooks()
    const result = await hooks.updateNode.call(
      args,
      async handlerArgs => {
        const { options = NsUpdateNode.XFlowNodeSetOptions } = handlerArgs
        const graph = await this.ctx.getX6Graph()
        const x6Node = this.getNodeCell(graph, handlerArgs)
        const nextNodeConfig = await this.getNextNodeConfig(handlerArgs, x6Node)
        this.setNodeConfig(x6Node, nextNodeConfig, options)
        return {
          nodeConfig: nextNodeConfig,
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
