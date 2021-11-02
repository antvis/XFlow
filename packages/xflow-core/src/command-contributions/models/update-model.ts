import { inject, injectable } from 'mana-syringe'
import { createDraft, finishDraft } from 'immer'
import type { HookHub } from '@antv/xflow-hook'
import type { IArgsBase } from '../../command/interface'
import { ICommandHandler, ICommandContextProvider } from '../../command/interface'
import { XFlowModelCommands } from '../constant'
import { Disposable } from '../../common/disposable'
import type { IHooks } from '../../hooks/interface'
import type { NsModel } from '../../common/rx-model'

import type { IModelService } from '../../model-service'

type ICommand = ICommandHandler<
  NsUpdateModelCommand.IArgs,
  NsUpdateModelCommand.IResult,
  NsUpdateModelCommand.ICmdHooks
>

export namespace NsUpdateModelCommand {
  /** Command: 用于注册named factory */
  export const command = XFlowModelCommands.UPDATE_MODEL
  /** hookName */
  export const hookKey = 'updateModel'
  /** hook 参数类型 */
  export interface IArgs<T = any> extends IArgsBase {
    getModel: (modelService: IModelService) => Promise<NsModel.IModel<T>>
    updateModel: ISetValue<T>
  }
  /** hook handler 返回类型 */
  export interface IResult<T = any> {
    model: NsModel.IModel<T>
    /** X6的Cell */
    value: T
  }
  /** add node api service 类型 */
  export interface ISetValue<T> {
    (value: T): Promise<void>
  }
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    updateModel: HookHub<IArgs, IResult>
  }
}

@injectable({
  token: { token: ICommandHandler, named: NsUpdateModelCommand.command.id },
})
/** 创建节点命令 */
export class UpdateModelCommand implements ICommand {
  /** api */
  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']

  /** 执行Cmd */
  execute = async () => {
    const ctx = this.contextProvider()
    const { args, hooks: runtimeHook } = ctx.getArgs()
    const hooks = ctx.getHooks()

    const result = await hooks.updateModel.call(
      args,
      async handlerArgs => {
        const { updateModel, getModel, modelService } = handlerArgs
        const model = await getModel(modelService)
        const currentValue = model.getValue()
        const draft = createDraft(currentValue)
        await updateModel(draft)
        const newValue = finishDraft(draft)
        model.setValue(newValue)
        ctx.addUndo(
          Disposable.create(async () => {
            model.setValue(newValue)
          }),
        )
        return { model, value: newValue }
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

export const execCmd = () => {}
