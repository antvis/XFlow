import type { HookHub } from '@antv/xflow-hook'
import type { Graph as X6Graph } from '@antv/x6'
import type { IHooks } from '../../hooks/interface'
import type { IArgsBase, IContext } from '../../command/interface'
import { inject, injectable, postConstruct } from 'mana-syringe'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import { XFlowGraphCommands } from '../constant'

type ICommand = ICommandHandler<NsGraphUpdate.IArgs, NsGraphUpdate.IResult, NsGraphUpdate.ICmdHooks>

interface IGridConfig {
  visible?: boolean //是否显示网格
  type?: 'dot' | 'mesh' //网格线条样式
  color?: string //网格颜色
  size?: number //网格大小
  thickness?: number //网格线条宽度
}

interface IPreGridConfig extends Omit<IGridConfig, 'color'> {
  args: {
    color: string
  }
}

interface IBackground {
  color: string //背景颜色
  image?: string //背景图片
  opacity: string //背景透明度
}

export namespace NsGraphUpdate {
  /** Command: 用于注册named factory */
  export const command = XFlowGraphCommands.GRAPH_UPDATE
  /** hookName */
  export const hookKey = 'graphUpdate'
  /** hook 参数类型 */
  export interface IArgs extends IArgsBase {
    grid?: IGridConfig
    background?: IBackground
  }
  /** hook handler 返回类型 */
  export interface IResult {
    err: null | string
  }
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    graphUpdate: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsGraphUpdate.command.id },
})

/** 更新画布配置命令 */
export class GraphUpdateCommand implements ICommand {
  /** api */
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  ctx: IContext<NsGraphUpdate.IArgs, NsGraphUpdate.IResult, NsGraphUpdate.ICmdHooks>
  @postConstruct()
  init() {
    this.ctx = this.contextProvider()
  }

  updateGrid = (graph: X6Graph, grid: IGridConfig) => {
    const preGridConfig = graph.options.grid as IPreGridConfig
    const { visible, size, type, color } = grid
    if (visible === true) {
      graph.showGrid()
      size && graph.setGridSize(size)

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      graph.drawGrid({
        type: type || preGridConfig.type,
        args: {
          color: color || preGridConfig.args.color,
        },
      })
    } else if (visible === false) {
      graph.hideGrid()
    }
  }

  /** 执行Cmd */
  execute = async () => {
    const ctx = this.contextProvider()
    const { args, hooks: runtimeHook } = ctx.getArgs()
    const hooks = ctx.getHooks()
    const result = await hooks.graphUpdate.call(
      args,
      async handlerArgs => {
        //console.log(handlerArgs)
        const graph = await this.ctx.getX6Graph()
        /*  const graphConfig = await this.ctx.getGraphConfig();
        console.log(graphConfig) */
        const { grid, background } = handlerArgs
        grid && this.updateGrid(graph, grid)
      },
      runtimeHook,
    )
    this.ctx.setResult(result)
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
