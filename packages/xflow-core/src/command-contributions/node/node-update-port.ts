import type { Node as X6Node, Graph as X6Graph } from '@antv/x6'
import type { HookHub } from '@antv/xflow-hook'
import type { NsGraph } from '../../interface'
import type { IHooks } from '../../hooks/interface'
import type { IArgsBase } from '../../command/interface'
import type { PortManager } from '@antv/x6/es/model/port'

import { inject, injectable } from 'mana-syringe'
import { XFlowNodeCommands } from '../constant'
import { Disposable } from '../../common/disposable'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'

type ICommand = ICommandHandler<
  NsUpdateNodePort.IArgs,
  NsUpdateNodePort.IResult,
  NsUpdateNodePort.ICmdHooks
>

export namespace NsUpdateNodePort {
  /** Command: 用于注册named factory */
  export const command = XFlowNodeCommands.UPDATE_NODE_PORT
  /** hookName */
  export const hookKey = 'updateNodePort'
  /** hook 参数类型 */
  export interface IArgs extends IArgsBase {
    node: X6Node | string
    options?: X6Node.SetOptions
    updatePorts: (
      ports: PortManager.PortMetadata[],
      node: X6Node,
      graph: X6Graph,
    ) => Promise<PortManager.PortMetadata[] | false>
  }
  /** hook handler 返回类型 */
  export interface IResult {
    err?: string
    ports?: PortManager.PortMetadata[]
  }
  /** add node api service 类型 */
  export interface ICreateNodeService {
    (args: IArgs): Promise<NsGraph.INodeConfig | boolean>
  }
  /** 创建X6 Node Cell的工厂方法 */
  export interface INodeCellFactory {
    (args: NsGraph.INodeConfig, self: UpdateNodePort): Promise<Node>
  }
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    updateNodePort: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsUpdateNodePort.command.id },
})
/** 创建节点命令 */
export class UpdateNodePort implements ICommand {
  /** api */
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  getCell = (graph: X6Graph, node: string | X6Node) => {
    if (typeof node === 'string') {
      return graph.getCellById(node)
    }
    return node
  }

  getNodeConfig = (x6Node: X6Node) => {
    const data = x6Node.getData()
    const position = x6Node.getPosition()
    const size = x6Node.getSize()
    return {
      ...data,
      ...position,
      ...size,
    } as NsGraph.INodeConfig
  }

  isNodeAnchors(ports: any): ports is NsGraph.INodeAnchor {
    return Array.isArray(ports)
  }

  isPortMetaData(ports: any): ports is NsGraph.INodePortMeta {
    return ports.items && Array.isArray(ports.items)
  }

  updatePortsOfNodeConfig = (
    cell: X6Node,
    ports: NsGraph.INodeAnchor[],
    options: X6Node.SetOptions,
  ) => {
    const nodeConfig = this.getNodeConfig(cell)
    if (this.isNodeAnchors(nodeConfig.ports)) {
      nodeConfig.ports = [...ports]
    }
    if (this.isPortMetaData(nodeConfig.ports)) {
      nodeConfig.ports.items = [...ports]
    }
    cell.setData(nodeConfig, options)
  }

  /** 执行Cmd */
  execute = async () => {
    const ctx = this.contextProvider()
    const { args, hooks: runtimeHook } = ctx.getArgs()
    const hooks = ctx.getHooks()
    const graph = await ctx.getX6Graph()

    const result = await hooks.updateNodePort.call(
      args,
      async handlerArgs => {
        const { node, updatePorts, options, commandService } = handlerArgs
        const cell = this.getCell(graph, node) as X6Node
        if (!cell || cell.isEdge()) {
          console.error('node_is _not_exsit', node)
          return { err: 'node_is _not_exsit' }
        }
        const currentPorts = (cell as X6Node).getPorts()
        const nextPorts = await updatePorts([...currentPorts], cell, graph)
        if (nextPorts === false) {
          return { err: 'service rejected' }
        }
        cell.setPropByPath('ports/items', nextPorts, { rewrite: true, ...options })
        /** update nodeConfig */
        this.updatePortsOfNodeConfig(cell, nextPorts as NsGraph.INodeAnchor[], options)
        /** add undo */
        ctx.addUndo(
          Disposable.create(async () => {
            commandService.executeCommand<NsUpdateNodePort.IArgs>(
              XFlowNodeCommands.UPDATE_NODE_PORT.id,
              { node, updatePorts: async () => currentPorts },
            )
          }),
        )
        return { ports: nextPorts }
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
