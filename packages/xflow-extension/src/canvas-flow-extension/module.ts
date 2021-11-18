import 'reflect-metadata'
/** Application 扩展依赖 */
import { ManaSyringe } from '@antv/xflow-core'
import { FlowHooksContribution } from './contributions/flow'

export * from './x6-extension/node'

/** 依赖扩展模块，必须要加载 */
const createFlowExtensionModule = () => {
  return ManaSyringe.Module(register => {
    /** 扩展 runtime hook */
    register(FlowHooksContribution)
  })
}

export { createFlowExtensionModule }
