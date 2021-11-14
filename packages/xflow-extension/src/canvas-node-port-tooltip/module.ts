import { ManaSyringe } from '@antv/xflow-core'
import 'reflect-metadata'
/** Application 扩展依赖 */

import { NodePortTooltipContribution } from './contributions/node-port'

/** 依赖扩展模块，必须要加载 */
const createModule = () => {
  return ManaSyringe.Module(register => {
    /** 扩展 runtime hook */
    register(NodePortTooltipContribution)
  })
}

export { createModule }
