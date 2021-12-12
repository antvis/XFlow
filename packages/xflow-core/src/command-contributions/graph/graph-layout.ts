import { inject, injectable, postConstruct } from 'mana-syringe'
import type { ILayout } from '@antv/layout/es/layout/types'
import type { HookHub } from '@antv/xflow-hook'
import type { IHooks } from '../../hooks/interface'
import type { NsGraph } from '../../interface'
import type { IContext, IArgsBase } from '../../command/interface'
import * as AntvLayout from '@antv/layout'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import { XFlowGraphCommands } from '../constant'

type ICommand = ICommandHandler<NsGraphLayout.IArgs, NsGraphLayout.IResult, NsGraphLayout.ICmdHooks>

/** 画布图数据执行布局算法命令 */
export namespace NsGraphLayout {
  /** Command: 用于注册named factory */
  export const command = XFlowGraphCommands.GRAPH_LAYOUT
  /** hookName */
  export const hookKey = 'graphLayout'

  export interface IArgs extends IArgsBase {
    /** XFlow自带AntV布局类型 */
    layoutType?: ILayout.LayoutTypes
    /** XFlow自带AntV布局对应参数 */
    layoutOptions?: ILayout.LayoutOptions
    /** 需要执行布局算法的数据 */
    graphData?: NsGraph.IGraphData
    /** 用户自定义布局 */
    customLayout?: (graphData: NsGraph.IGraphData) => Promise<NsGraph.IGraphData>
  }

  export interface IResult {
    /** 执行完布局算法后的画布图数据(每一个节点拥有x,y) */
    graphData: NsGraph.IGraphData
  }

  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    graphLayout: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsGraphLayout.command.id },
})
/** 画布布局命令 */
export class GraphLayoutCommand implements ICommand {
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  ctx: IContext<NsGraphLayout.IArgs, NsGraphLayout.IResult, NsGraphLayout.ICmdHooks>

  @postConstruct()
  init() {
    this.ctx = this.contextProvider()
  }

  /** 执行cmd */
  execute = async () => {
    const { args, hooks: runtimeHook } = this.ctx.getArgs()
    const hooks = this.ctx.getHooks()

    const result = await hooks.graphLayout.call(
      args,
      async handlerArgs => {
        const { layoutType, layoutOptions, customLayout } = handlerArgs
        /** XFlow内置AntV通用布局 */
        const innerLayout = (graphData: NsGraph.IGraphData) => {
          const clz = AntvLayout.Layouts[layoutType]
          const antVLayout = new clz({
            ...layoutOptions,
          })
          return antVLayout.layout(graphData)
        }
        const layoutFunc = customLayout || innerLayout
        await layoutFunc(handlerArgs.graphData)

        return { graphData: handlerArgs.graphData }
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
