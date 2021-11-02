/* eslint-disable @typescript-eslint/no-redeclare */
import 'reflect-metadata'
/** Application 扩展依赖 */
import { registerGraphModule } from './graph-provider'
import type { GraphConfig } from './config'
import { registerGraphConfig } from './config'
import { Module } from 'mana-syringe'

/** 依赖扩展模块，必须要加载 */
export const createX6GraphModule = (config: GraphConfig) => {
  return Module(register => {
    /** 注册 GraphProvider */
    registerGraphModule(register)
    /** 注册 GraphProvider 配置 */
    registerGraphConfig(register, config)
  })
}
