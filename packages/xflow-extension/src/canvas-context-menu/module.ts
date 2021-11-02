import 'reflect-metadata'
/** Application 扩展依赖 */
import { Module } from 'mana-syringe'
import { CanvasContextMenuContribution } from './contributions/model'
import { ContextMenuConfig } from './config'

/** 依赖扩展模块，必须要加载 */
const createModule = (config: ContextMenuConfig) => {
  return Module(register => {
    /** 扩展 runtime hook */
    register(CanvasContextMenuContribution)
    register(ContextMenuConfig, { useValue: config })
  })
}

export { createModule }
