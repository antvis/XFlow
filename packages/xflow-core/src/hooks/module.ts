import 'reflect-metadata'
/** Application 扩展依赖 */
import { HookConfig } from './config'
import { HookRegistry } from './hook-registry'
import { Contribution, Module } from 'mana-syringe'
import { RuntimeContribution } from './contributions/default'
import { GraphEventContribution } from './contributions/graph'
import { IHookContribution } from './interface'

/** 依赖扩展模块，必须要加载 */
const createModule = (config: HookConfig) => {
  return Module(register => {
    /** 注册 IGraphHookContribution 成为一个新扩展点 */
    Contribution.register(register, IHookContribution)
    /** 扩展 runtime hook */
    register(RuntimeContribution)
    /** 扩展 graph event hook */
    register(GraphEventContribution)
    /** 注册 HookRegistry 到 IFrontendApplicationContribution */
    /** 注册 HookRegistry */
    register(HookRegistry)
    /** 注册 XFlowHookConfig */
    register(HookConfig, { useValue: config })
  })
}

export { HookRegistry, createModule, IHookContribution, HookConfig as XFlowHookConfig }
