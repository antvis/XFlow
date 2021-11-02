import 'reflect-metadata'
/** Application 扩展依赖 */
import { Module } from 'mana-syringe'
import { HookContribution } from './contributions/hook'

export interface IConfig {}

/** 依赖扩展模块，必须要加载 */
const createModule = () => {
  return Module(register => {
    /** 扩展 runtime hook */
    register(HookContribution)
  })
}

export { createModule }
