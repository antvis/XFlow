import type { Model, Node } from '@antv/x6'
import type { HookHub } from '@antv/xflow-hook'
import type { NsGraph } from '../../interface'
import type { IHooks } from '../../hooks/interface'
import type { IArgsBase } from '../../command/interface'
import type { NsNodeCmd } from '../interface'

import { inject, injectable } from 'mana-syringe'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import { getNodeReactComponent } from '../components/context'
import { XFlowNodeCommands } from '../constant'
import { Disposable } from '../../common/disposable'
import { XFLOW_DEFAULT_NODE } from '../../constants'

type ICommand = ICommandHandler<NsAddNode.IArgs, NsAddNode.IResult, NsAddNode.ICmdHooks>

export namespace NsAddNode {
  /** Command: 用于注册named factory */
  export const command = XFlowNodeCommands.ADD_NODE
  /** hookName */
  export const hookKey = 'addNode'
  /** hook 参数类型 */
  export interface IArgs extends IArgsBase {
    /** 节点的元数据 */
    nodeConfig: NsGraph.INodeConfig
    /** X6 Model Options：https://x6.antv.vision/zh/docs/api/graph/model/#addnode */
    options?: Model.AddOptions
    /** 创建X6 Node Cell的工厂方法 */
    cellFactory?: INodeCellFactory
    /** 创建Node的服务 */
    createNodeService?: ICreateNodeService
  }

  /** hook handler 返回类型 */
  export interface IResult {
    err?: string
    /** 节点的元数据 */
    nodeConfig?: NsGraph.INodeConfig
    /** X6的Cell */
    nodeCell?: Node
  }
  /** add node api service 类型 */
  export interface ICreateNodeService {
    (args: IArgs): Promise<NsGraph.INodeConfig | boolean>
  }
  /** 创建X6 Node Cell的工厂方法 */
  export interface INodeCellFactory {
    (args: NsGraph.INodeConfig, self: AddNodeCommand): Promise<Node>
  }
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    addNode: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsAddNode.command.id },
})
/** 创建节点命令 */
export class AddNodeCommand implements ICommand {
  /** api */
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  /** 执行Cmd */
  execute = async () => {
    const ctx = this.contextProvider()
    const { args, hooks: runtimeHook } = ctx.getArgs()
    const hooks = ctx.getHooks()

    const result = await hooks.addNode.call(
      args,
      async handlerArgs => {
        const { createNodeService, cellFactory, commandService, options } = handlerArgs
        const graph = await ctx.getX6Graph()
        let rawNode: NsGraph.INodeConfig = handlerArgs.nodeConfig
        // 通过createNodeService来获取诸如nodeId的信息，如果返回的nodeid为空则不添加到画布
        if (createNodeService) {
          const res = await createNodeService(handlerArgs)
          if (typeof res === 'boolean') {
            return { err: 'createNodeService rejected' }
          }
          rawNode = res
        }

        const nodeConfig = await this.processNodeConfig(rawNode)

        let x6NodeCell: Node
        const eventOptions = { ...options, isCommand: true }
        if (cellFactory) {
          /** 使用参数中的工厂方法 */
          const cell = await cellFactory(nodeConfig, this)
          x6NodeCell = graph.addNode(cell, eventOptions)
        } else {
          x6NodeCell = graph.addNode(nodeConfig, eventOptions)
        }

        /** add undo: delete node */
        ctx.addUndo(
          Disposable.create(async () => {
            const nodeData = {
              id: x6NodeCell.id,
              ...x6NodeCell.getData<NsGraph.INodeConfig>(),
            }
            commandService.executeCommand(XFlowNodeCommands.DEL_NODE.id, {
              nodeConfig: nodeData,
            } as NsNodeCmd.AddNode.IArgs)
          }),
        )
        return { nodeConfig: nodeConfig, nodeCell: x6NodeCell }
      },
      runtimeHook,
    )
    ctx.setResult(result)

    return this
  }

  processNodeConfig = async (nodeConfig: NsGraph.INodeConfig) => {
    const ctx = this.contextProvider()
    /**
     * 1. react shape node 逻辑
     * 2. X6不会处理data数据, 仅透传。可以通过x6Node?.getData()方法获取这份数据
     */
    nodeConfig.data = { ...nodeConfig }

    /** 非 react shape */
    if (nodeConfig.shape) {
      return nodeConfig
    }

    /** react shape 使用react-portal-view提高性能 */
    if (!nodeConfig.view) {
      const graphConfig = await ctx.getGraphConfig()
      nodeConfig.view = graphConfig.graphId
    }
    /** 获取 react component */
    if (!nodeConfig.component) {
      const reactComponent = await this.getNodeReactComponent(nodeConfig)
      const commands = ctx.getCommands()
      const modelService = ctx.getModelService()
      nodeConfig.shape = 'react-shape'
      nodeConfig.component = getNodeReactComponent(reactComponent, commands, modelService)
    }
    return nodeConfig
  }

  getNodeReactComponent = async (nodeConfig: NsGraph.INodeConfig) => {
    const ctx = this.contextProvider()
    const hooks = ctx.getHooks()

    /** 获取Graph Config中用户预设的节点渲染需要的React组件 */
    const graphConfig = await ctx.getGraphConfig()
    /** 通过hooks获取更多的组件 */
    const renderMap = await hooks.reactNodeRender.call(graphConfig.nodeRender)
    /** 获取renderKey，没有renderKey时使用默认Key */
    const renderKey = graphConfig.nodeTypeParser(nodeConfig) || XFLOW_DEFAULT_NODE
    /** 获取组件 */
    const reactComponent = renderMap.get(renderKey)
    if (!reactComponent) {
      console.error(
        'react node component is missing:',
        graphConfig.nodeRender,
        renderKey,
        reactComponent,
      )
    }
    return reactComponent
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
