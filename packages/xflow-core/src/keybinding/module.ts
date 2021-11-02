/* eslint-disable @typescript-eslint/no-redeclare */
import 'reflect-metadata'
/** Application 扩展依赖 */
/** 扩展Toolbar注册 */
import type { KeybindingConfig } from './config'
/** Toolbar扩展点依赖 */
import { KeyBindingRegistry } from './keybinding-registry'
import { IKeyBindingContribution, IKeyBindingOptionProvider } from './interface'
import { Contribution, Module, Syringe } from 'mana-syringe'

export const registerKeybindingConfig = (register: Syringe.Register, config: KeybindingConfig) => {
  register<IKeyBindingOptionProvider>(IKeyBindingOptionProvider, {
    useDynamic: () => {
      return {
        getOption: async () => {
          return config.getConfig()
        },
      }
    },
    lifecycle: Syringe.Lifecycle.singleton,
  })
}

/** 依赖扩展模块，必须要加载 */
export const createModule = (keyBindingConfig: KeybindingConfig) => {
  return Module(register => {
    /** 绑定 context 配置 */
    registerKeybindingConfig(register, keyBindingConfig)

    /** 注册 IContextContribution */
    Contribution.register(register, IKeyBindingContribution)

    /** 注册 KeyBindingRegistry 到 IFrontendApplicationContribution  */
    /** 注册 KeyBindingRegistry */
    /** 注册 KeyBindingRegistry alias  IKeybindingService */
    register(KeyBindingRegistry)
  })
}
