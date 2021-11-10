import { inject, injectable, postConstruct } from 'mana-syringe'
import type { NsGraph } from '../../interface'
import type { IContext, IArgsBase } from '../../command/interface'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'

import type { HookHub } from '@antv/xflow-hook'
import type { IHooks } from '../../hooks/interface'
import { XFlowGraphCommands } from '../constant'

type ICommand = ICommandHandler<NsGraphZoom.IArgs, NsGraphZoom.IResult, NsGraphZoom.ICmdHooks>

export namespace NsGraphZoom {
  /** Command: 用于注册named factory */
  export const command = XFlowGraphCommands.GRAPH_ZOOM
  /** zoom options */
  export const MAX_SCALE = 1.5
  export const MIN_SCALE = 0.05
  /** default zoom options */
  export const defaultZoomOptions: NsGraphZoom.IArgs['zoomOptions'] = {
    maxScale: NsGraphZoom.MAX_SCALE,
    minScale: NsGraphZoom.MIN_SCALE,
  }

  /** hookName */
  export const hookKey = 'graphZoom'
  /** hook 参数类型 */
  export interface IArgs extends IArgsBase {
    /** 缩放因子 */
    factor: number | 'fit' | 'real'
    /** 缩放配置项 */
    zoomOptions?: NsGraph.ZoomOptions
    /** 自适应Padding参数(边距) */
    zoomFitPadding?: number
  }
  /** hook handler 返回类型 */
  export interface IResult {
    factor: number | 'fit' | 'real'
    zoomOptions: NsGraph.ZoomOptions
    zoomFitPadding: number
  }
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    graphZoom: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsGraphZoom.command.id },
})
/** 画布缩放命令 */
export class GraphZoomCommand implements ICommand {
  /** api */
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  ctx: IContext<NsGraphZoom.IArgs, NsGraphZoom.IResult, NsGraphZoom.ICmdHooks>

  @postConstruct()
  init() {
    this.ctx = this.contextProvider()
  }

  /** 执行Cmd */
  execute = async () => {
    const { args, hooks: runtimeHook } = this.ctx.getArgs()
    const hooks = this.ctx.getHooks()
    const result = await hooks.graphZoom.call(
      /** 执行hooks pipeline处理args */
      args,
      /** 执行 callback */
      async handlerArgs => {
        const x6Graph = await this.ctx.getX6Graph()
        const {
          factor,
          zoomFitPadding = 12,
          zoomOptions = NsGraphZoom.defaultZoomOptions,
        } = handlerArgs
        if (typeof factor === 'number') {
          x6Graph?.zoom(factor, zoomOptions || {})
        } else if (factor === 'fit') {
          x6Graph?.zoomToFit({ ...zoomOptions, padding: zoomFitPadding })
        } else if (factor === 'real') {
          x6Graph?.scale(1)
          x6Graph?.centerContent()
        }
        return { factor, zoomFitPadding, zoomOptions }
      },
      /** execute command 时创建的hook */
      runtimeHook,
    )

    /** 设置结果 */
    this.ctx.setResult(result)
    return this
  }

  /** undo cmd */
  undo = async () => {
    this.ctx.undo()
    return this
  }

  /** redo cmd */
  redo = async () => {
    if (!this.ctx.isUndoable) {
      await this.execute()
    }
    return this
  }

  /** isUndoable */
  isUndoable(): boolean {
    return this.ctx.isUndoable()
  }
}
