import type { HookHub } from '@antv/xflow-hook'
import type { Graph as X6Graph } from '@antv/x6'
import type { IHooks } from '../../hooks/interface'
import type { IArgsBase, IContext } from '../../command/interface'
import { inject, injectable, postConstruct } from 'mana-syringe'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import { XFlowGraphCommands } from '../constant'

type ICommand = ICommandHandler<NsGraphUpdate.IArgs, NsGraphUpdate.IResult, NsGraphUpdate.ICmdHooks>

interface IGrid {
  visible?: boolean //是否显示网格
  type?: 'dot' | 'mesh' //网格线条样式
  color?: string //网格颜色
  size?: number //网格大小
  thickness?: number //网格线条宽度
}

interface IPreGrid extends Omit<IGrid, 'color'> {
  args: {
    color: string
  }
}

interface IBackground {
  color: string //背景颜色
  image?: string //背景图片
  position?: string //背景图片位置
  size?: string //背景图片大小
  repeat?: string //背景图片重复方式
  opacity?: number //背景图片透明度
}

export namespace NsGraphUpdate {
  /** Command: 用于注册named factory */
  export const command = XFlowGraphCommands.GRAPH_UPDATE
  /** hookName */
  export const hookKey = 'graphUpdate'
  /** hook 参数类型 */
  export interface IArgs extends IArgsBase {
    grid?: IGrid
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

  updateGrid = (graph: X6Graph, grid: IGrid) => {
    const preGridConfig = graph.options.grid as IPreGrid
    const { visible, size, type = preGridConfig.type, color = preGridConfig.args.color } = grid
    if (visible === true) {
      graph.showGrid()
    } else if (visible === false) {
      graph.hideGrid()
    }
    size && graph.setGridSize(size)
    graph.drawGrid({
      type: type,
      args: {
        color: color,
      },
    })
  }

  updateBackground = (graph: X6Graph, background: IBackground) => {
    const preBackground = graph.options.background as IBackground
    const {
      color = preBackground.color,
      position = preBackground.position,
      size = preBackground.size,
      repeat = preBackground.repeat,
      opacity = preBackground.opacity,
    } = background

    //当传入的 image 为空字符串时，认为删除图片
    const image = background.image ?? preBackground.image
    graph.drawBackground({
      color,
      image,
      position,
      size,
      repeat,
      opacity,
    })
  }

  /** 执行Cmd */
  execute = async () => {
    const ctx = this.contextProvider()
    const { args, hooks: runtimeHook } = ctx.getArgs()
    const hooks = ctx.getHooks()
    const result = await hooks.graphUpdate.call(
      args,
      async handlerArgs => {
        const graph = await this.ctx.getX6Graph()
        const { grid, background } = handlerArgs
        grid && this.updateGrid(graph, grid)
        background && this.updateBackground(graph, background)
        return { err: null }
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
