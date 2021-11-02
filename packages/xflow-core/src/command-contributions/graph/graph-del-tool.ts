import type { Cell, Node } from '@antv/x6'
import { inject, injectable } from 'mana-syringe'
import type { HookHub } from '@antv/xflow-hook'
import type { NsGraph } from '../../interface'
import type { IHooks } from '../../hooks/interface'
import type { IArgsBase } from '../../command/interface'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import { XFlowGraphCommands } from '../constant'

type ICommand = ICommandHandler<
  NsGraphDelTool.IArgs,
  NsGraphDelTool.IResult,
  NsGraphDelTool.ICmdHooks
>

export namespace NsGraphDelTool {
  /** Command: 用于注册named factory */
  export const command = XFlowGraphCommands.GRAPH_DEL_TOOL
  /** hookName */
  export const hookKey = 'delTool'
  /** hook 参数类型 */
  export interface IArgs extends IArgsBase {
    cellId: string
    toolName: string
    toolConfig?: Cell.SetOptions
  }
  /** hook handler 返回类型 */
  export interface IResult {
    err: null | string
  }
  /** add node api service 类型 */
  export interface ICreateNodeService {
    (args: IArgs): Promise<NsGraph.INodeConfig>
  }
  /** 创建X6 Node Cell的工厂方法 */
  export interface INodeCellFactory {
    (args: NsGraph.INodeConfig, self: GraphDelToolCommand): Promise<Node>
  }
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    delTool: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsGraphDelTool.command.id },
})
/** 创建节点命令 */
export class GraphDelToolCommand implements ICommand {
  /** api */
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  /** 执行Cmd */
  execute = async () => {
    const ctx = this.contextProvider()
    const { args, hooks: runtimeHook } = ctx.getArgs()
    const hooks = ctx.getHooks()

    const result = await hooks.delTool.call(
      args,
      async handlerArgs => {
        const { cellId, toolName, toolConfig } = handlerArgs
        const graph = await ctx.getX6Graph()
        const cell = graph.getCellById(cellId)
        if (cell) {
          if (toolName === '*') {
            cell.removeTools(toolConfig)
          } else {
            cell.removeTool(toolName, toolConfig)
          }
        }
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
