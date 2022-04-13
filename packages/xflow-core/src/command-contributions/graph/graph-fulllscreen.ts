import { inject, injectable, postConstruct } from 'mana-syringe'
import type { IContext, IArgsBase } from '../../command/interface'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import type { HookHub } from '@antv/xflow-hook'
import type { IHooks } from '../../hooks/interface'
import { XFlowGraphCommands } from '../constant'

type ICommand = ICommandHandler<
  NsGraphFullscreen.IArgs,
  NsGraphFullscreen.IResult,
  NsGraphFullscreen.ICmdHooks
>

export namespace NsGraphFullscreen {
  /** Command: 用于注册named factory */
  export const command = XFlowGraphCommands.GRAPH_FULLSCREEN
  /** hook 参数类型 */
  export interface IArgs extends IArgsBase {}
  /** hook handler 返回类型 */
  export interface IResult {
    fulllscreen: boolean
  }
  /** hookName */
  export const hookKey = 'graphFullscreen'
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    graphFullscreen: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsGraphFullscreen.command.id },
})
/** 画布Fullscreen命令 */
export class GraphFullscreenCommand implements ICommand {
  /** api */
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  ctx: IContext<NsGraphFullscreen.IArgs, NsGraphFullscreen.IResult, NsGraphFullscreen.ICmdHooks>

  @postConstruct()
  init() {
    this.ctx = this.contextProvider()
  }

  /** 执行Cmd */
  execute = async () => {
    const { args, hooks: runtimeHook } = this.ctx.getArgs()
    const hooks = this.ctx.getHooks()
    const config = await this.ctx.getGraphConfig()

    // @ts-ignore
    const { appContainer } = config
    if (!appContainer) {
      return
    }
    const result = await hooks.graphFullscreen.call(
      /** 执行hooks pipeline处理args */
      args,
      /** 执行 callback */
      async () => {
        let fulllscreen = false
        if (!document.fullscreenElement) {
          appContainer.requestFullscreen?.()
          fulllscreen = true
        } else {
          document.exitFullscreen?.()
        }
        return { fulllscreen }
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
