import { inject, injectable, postConstruct } from 'mana-syringe'
import type { IContext, IArgsBase } from '../../command/interface'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import { MODELS } from '../../model-service'
import type { HookHub } from '@antv/xflow-hook'
import type { IHooks } from '../../hooks/interface'
import { XFlowGraphCommands } from '../constant'

type ICommand = ICommandHandler<
  NsGraphToggleMultiSelect.IArgs,
  NsGraphToggleMultiSelect.IResult,
  NsGraphToggleMultiSelect.ICmdHooks
>

export namespace NsGraphToggleMultiSelect {
  /** Command: 用于注册named factory */
  export const command = XFlowGraphCommands.GRAPH_TOGGLE_MULTI_SELECT
  /** hookName */
  export const hookKey = 'toggleMultiSelect'
  /** hook 参数类型 */
  export interface IArgs extends IArgsBase {
    isEnable?: boolean
  }
  /** hook handler 返回类型 */
  export interface IResult {
    isEnable: boolean
  }
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    toggleMultiSelect: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsGraphToggleMultiSelect.command.id },
})
/** 画布缩放命令 */
export class GraphToggleMultiSelectCommand implements ICommand {
  /** api */
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  ctx: IContext<
    NsGraphToggleMultiSelect.IArgs,
    NsGraphToggleMultiSelect.IResult,
    NsGraphToggleMultiSelect.ICmdHooks
  >

  @postConstruct()
  init() {
    this.ctx = this.contextProvider()
  }

  /** 执行Cmd */
  execute = async () => {
    const { args, hooks: runtimeHook } = this.ctx.getArgs()
    const hooks = this.ctx.getHooks()
    const result = await hooks.toggleMultiSelect.call(
      /** 执行hooks pipeline处理args */
      args,
      /** 执行 callback */
      async handlerArgs => {
        const x6Graph = await this.ctx.getX6Graph()
        const config = await this.ctx.getGraphConfig()
        const { isEnable, modelService } = handlerArgs
        const graphEnableMultiSelectModel = await MODELS.GRAPH_ENABLE_MULTI_SELECT.getModel(
          modelService,
        )
        const needEnableRubberBand: boolean =
          typeof isEnable === 'boolean' ? isEnable : !x6Graph.isRubberbandEnabled()
        if (needEnableRubberBand) {
          x6Graph.enableRubberband()
          if (x6Graph.scroller && x6Graph.scroller.widget) {
            x6Graph.scroller.disablePanning()
          } else {
            x6Graph.disablePanning()
          }
          config.graphContainer.style.cursor = 'crosshair'
        } else {
          x6Graph.disableRubberband()
          if (x6Graph.scroller && x6Graph.scroller.widget) {
            x6Graph.scroller.enablePanning()
          } else {
            x6Graph.enablePanning()
          }
          config.graphContainer.style.cursor = 'grab'
        }
        graphEnableMultiSelectModel.setValue({ isEnable: needEnableRubberBand })
        return { isEnable: needEnableRubberBand }
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
