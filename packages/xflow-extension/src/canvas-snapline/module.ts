import 'reflect-metadata'
/** Application 扩展依赖 */

import { ManaSyringe } from '@antv/xflow-core'
import { HookContribution } from './contributions/hook'

export interface IConfig {}

/** 依赖扩展模块，必须要加载 */
const createModule = () => {
  return ManaSyringe.Module(register => {
    /** 扩展 runtime hook */
    register(HookContribution)
  })
}

export { createModule }
