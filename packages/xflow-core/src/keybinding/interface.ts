import type { Disposable } from '../common/disposable'
import type { IGraphCommandService } from '../command/interface'

import type { IModelService } from '../model-service/interface'
import { Syringe } from 'mana-syringe'

export const IKeyBindingService = Symbol('IKeyBindingService')
export interface IKeyBindingService {
  registerKeybinding: (keybindings: IKeyBinding[]) => Disposable
}

/** 实现这个扩展点来注册更多的keybinding */
export const IKeyBindingContribution = Syringe.defineToken('IKeyBindingContribution')
/** 扩展keybinding */
export interface IKeyBindingContribution {
  /**
   * 注册keybinding
   * @param registry KeyBindingRegistry.
   */
  registerKeybinding: (registry: IKeyBindingService) => Disposable
}

/** keybinding item的 cmdOptions 字段 */
export interface ICmdExecutor {
  (
    item: IKeyBinding,
    modelService: IModelService,
    cmd: IGraphCommandService,
    e: KeyboardEvent,
  ): Promise<void>
}

export interface IKeyBinding {
  /** keybinding的唯一标识  */
  id: string
  /**
   * Unique command identifier of the command to be triggered by this keybinding.
   */
  command?: string
  /**
   * 快捷键
   * https://craig.is/killing/mice
   * https://x6.antv.vision/zh/docs/api/graph/keyboard#bindkey
   */
  keybinding: string | string[]
  /**
   * 执行command时的参数
   */
  callback: ICmdExecutor
}

export interface IKeybindingRegistry {
  registerKeybinding: (configs: IKeyBinding[]) => Disposable
}

export interface IRegisterKeybindingFunction {
  (registry: IKeybindingRegistry): Disposable
}

export interface IKeyBindingOptionProvider {
  getOption: () => Promise<{ registerKeybindingFunc: IRegisterKeybindingFunction }>
}

export const IKeyBindingOptionProvider = Symbol('IKeyBindingOptionProvider')
