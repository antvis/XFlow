import 'reflect-metadata'
/** Application 扩展依赖 */
/** 扩展 menu 注册 */
import { MenuRegistry } from './menu-registry'
import { Contribution, Module } from 'mana-syringe'
import { IMenuContribution } from './interface'

/** 依赖扩展模块，必须要加载 */
export const createModule = () => {
  return Module(register => {
    /** 注册 IMenuContribution 成为一个扩展点 */
    Contribution.register(register, IMenuContribution)

    /** 注册 MenuModelRegistry 到 IFrontendApplicationContribution */
    /** 注册 MenuModelRegistry */
    register(MenuRegistry)
  })
}
