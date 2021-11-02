import { inject, injectable, postConstruct } from 'mana-syringe'
import type { IContext, IArgsBase } from '../../command/interface'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'

import type { HookHub } from '@antv/xflow-hook'
import type { IHooks } from '../../hooks/interface'
import { XFlowGraphCommands } from '../constant'

type ICommand = ICommandHandler<NsGraphResize.IArgs, NsGraphResize.IResult, NsGraphResize.ICmdHooks>

export namespace NsGraphResize {
  /** Command: 用于注册named factory */
  export const command = XFlowGraphCommands.GRAPH_RESIZE
  /** hook 参数类型 */
  export interface IArgs extends IArgsBase {
    /** 宽度 */
    width?: number
    /** 高度 */
    height?: number
  }
  /** hook handler 返回类型 */
  export interface IResult {}
  /** hookName */
  export const hookKey = 'graphResize'
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    graphResize: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsGraphResize.command.id },
})
/** 画布resize命令 */
export class GraphResizeCommand implements ICommand {
  /** api */
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  ctx: IContext<NsGraphResize.IArgs, NsGraphResize.IResult, NsGraphResize.ICmdHooks>

  @postConstruct()
  init() {
    this.ctx = this.contextProvider()
  }

  /** 执行Cmd */
  execute = async () => {
    const { args, hooks: runtimeHook } = this.ctx.getArgs()
    const hooks = this.ctx.getHooks()
    const config = await this.ctx.getGraphConfig()
    const clientHeight = config.rootContainer.clientHeight
    const clientWidth = config.rootContainer.clientWidth
    const result = await hooks.graphResize.call(
      /** 执行hooks pipeline处理args */
      args,
      /** 执行 callback */
      async handlerArgs => {
        const x6Graph = await this.ctx.getX6Graph()
        const { width = clientWidth, height = clientHeight } = handlerArgs
        x6Graph?.resize(width, height)
        return {}
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
