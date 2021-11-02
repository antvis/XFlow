import 'reflect-metadata'
/** Application 扩展依赖 */
/** Toolbar扩展点依赖 */
import { ToolbarRegistry } from './toolbar-registry'
import { Contribution, Module } from 'mana-syringe'
import { IToolbarContribution } from './interface'
export { IToolbarContribution, ToolbarRegistry }

/** 依赖扩展模块，必须要加载 */
export const createModule = () => {
  return Module(register => {
    /** 注册 IToolbarContribution扩展点 */
    Contribution.register(register, IToolbarContribution)

    /** 注册 ToolbarRegistry 到 IFrontendApplicationContribution */
    /** 注册 ToolbarRegistry */
    register(ToolbarRegistry)
  })
}
