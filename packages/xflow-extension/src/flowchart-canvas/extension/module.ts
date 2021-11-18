import 'reflect-metadata'
/** Application 扩展依赖 */
import { Module } from 'mana-syringe'
import { FlowHooksContribution } from './contributions/flow'
import { FlowchartExtension } from './components'

/** 依赖扩展模块，必须要加载 */
const createFlowchartExtensionModule = () => {
  return Module(register => {
    /** 扩展 runtime hook */
    register(FlowHooksContribution)
  })
}

export { createFlowchartExtensionModule, FlowchartExtension }
