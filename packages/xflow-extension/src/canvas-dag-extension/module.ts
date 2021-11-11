import 'reflect-metadata'
/** Application 扩展依赖 */
import { Module } from 'mana-syringe'
import { DagHooksContribution } from './contributions/dag'

export * from './x6-extension/edge'
export * from './x6-extension/node'
/** 依赖扩展模块，必须要加载 */
const createDagExtensionModule = () => {
  return Module(register => {
    /** 扩展 runtime hook */
    register(DagHooksContribution)
  })
}

export { createDagExtensionModule }
