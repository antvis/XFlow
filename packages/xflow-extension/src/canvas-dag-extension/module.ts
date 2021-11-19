import 'reflect-metadata'
/** Application 扩展依赖 */
import { ManaSyringe } from '@antv/xflow-core'
import { DagHooksContribution } from './contributions/dag'
import { QueryGraphStatusCommand } from './contributions/command'
export * from './x6-extension/edge'
export * from './x6-extension/node'
/** 依赖扩展模块，必须要加载 */
const createDagExtensionModule = () => {
  return ManaSyringe.Module(register => {
    /** 扩展 runtime hook */
    register(DagHooksContribution)
    register(QueryGraphStatusCommand)
  })
}

export { createDagExtensionModule }
