import 'reflect-metadata'
/** Application 扩展依赖 */
import { Module } from 'mana-syringe'
import { HookContribution } from './contributions/hook'

import type { IMinimapOptions } from './interface'
import { IMinimapConfigProvider } from './interface'
import type { IModuleConfig } from '@antv/xflow-core'

/** 依赖扩展模块，必须要加载 */
const createModule = (config: IModuleConfig<IMinimapOptions>) => {
  return Module(register => {
    register<IMinimapConfigProvider>(IMinimapConfigProvider, { useDynamic: () => config })
    /** 扩展 runtime hook */
    register(HookContribution)
  })
}

export { createModule }
