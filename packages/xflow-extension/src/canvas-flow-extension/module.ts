import 'reflect-metadata'
/** Application 扩展依赖 */
import { Module } from 'mana-syringe'
import { FlowHooksContribution } from './contributions/flow'
import { FlowGraphExtension } from './components'
export * from './x6-extension/node'

/** 依赖扩展模块，必须要加载 */
const createFlowExtensionModule = () => {
  return Module(register => {
    /** 扩展 runtime hook */
    register(FlowHooksContribution)
  })
}

export { createFlowExtensionModule, FlowGraphExtension }
