import type { SyringeModule } from 'mana-syringe'
import type { MaybePromise } from '../common/types'
import type { FrontendApplication } from './application'
import { Syringe } from 'mana-syringe'

/** 模块的Config接口 */
export interface IModuleConfig<T = any> {
  CONFIG_TYPE: string
  getConfig: () => Promise<T>
  [key: string]: any
}
/**
 * 模块的接口
 * 包含配置和创建模块的函数
 */
export interface IExtensionModule<T = any> {
  createModule: (config: IModuleConfig<T>) => SyringeModule
  config: IModuleConfig<T>
}

export const IFrontendApplicationContribution = Syringe.defineToken(
  'IFrontendApplicationContribution',
)

export interface IFrontendApplicationContribution {
  /**
   * Called when the application is started. The application shell is not attached yet when this method runs.
   * Should return a promise if it runs asynchronously.
   */
  onStart?: (app: FrontendApplication) => MaybePromise<void>

  /**
   * Called when an application is stopped or unloaded.
   *
   * Note that this is implemented using `window.beforeunload` which doesn't allow any asynchronous code anymore.
   * I.e. this is the last tick.
   */
  onStop?: (app: FrontendApplication) => void
}
