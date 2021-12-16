import { inject, injectable, postConstruct } from 'mana-syringe'
import { HookHub } from '@antv/xflow-hook'
import type { IHooks } from '../../hooks/interface'
import type { NsGraph } from '../../interface'
import type { IContext, IArgsBase } from '../../command/interface'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import { XFlowGraphCommands } from '../constant'

type ICommand = ICommandHandler<
  NsGraphLoadData.IArgs,
  NsGraphLoadData.IResult,
  NsGraphLoadData.ICmdHooks
>

/** 从服务端获取画布数据命令 */
export namespace NsGraphLoadData {
  /** Command: 用于注册named factory */
  export const command = XFlowGraphCommands.LOAD_DATA
  /** hookName */
  export const hookKey = 'loadData'
  export const createHook = () => {
    return new HookHub<IArgs, IResult>()
  }

  export interface IArgs extends IArgsBase {
    loadDataService: (meta?: NsGraph.IGraphMeta) => Promise<NsGraph.IGraphData>
    [key: string]: any
  }

  export interface IResult {
    /** 从服务端返回的数据 */
    graphData: NsGraph.IGraphData
  }

  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    loadData: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsGraphLoadData.command.id },
})
/** 画布数据获取命令 */
export class GraphLoadDataCommand implements ICommand {
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  ctx: IContext<NsGraphLoadData.IArgs, NsGraphLoadData.IResult, NsGraphLoadData.ICmdHooks>

  @postConstruct()
  init() {
    this.ctx = this.contextProvider()
  }

  /** 执行cmd */
  execute = async () => {
    const { args, hooks: runtimeHook } = this.ctx.getArgs()
    const hooks = this.ctx.getHooks()

    const result = await hooks.loadData.call(
      args,
      async handlerArgs => {
        const { loadDataService } = handlerArgs
        const graphMeta = await this.ctx.getGraphMeta()
        const graphData = await loadDataService(graphMeta)
        return { graphData }
      },
      runtimeHook,
    )

    /** 设置结果 */
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
