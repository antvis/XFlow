/* eslint-disable @typescript-eslint/no-redeclare */
import 'reflect-metadata'
/** Command */
import { GraphCommandRegistry } from './graph-command'
import { IGraphCommandContribution } from '../command/interface'
/** Command 扩展依赖 */
import { Module, Contribution } from 'mana-syringe'

export const commandRegistryModule = Module(register => {
  /** 声明 GraphCommandRegistry */
  Contribution.register(register, IGraphCommandContribution)
  /** 将 GraphCommandRegistry 注册成 IFrontendApplicationContribution 的扩展 */
  /** 将 IGraphCommandContribution 注册成为扩展点 */
  register(GraphCommandRegistry)
})
