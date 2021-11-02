import type { Disposable } from '../common/disposable'
import type { Graph as X6Graph } from '@antv/x6'
import { Syringe } from 'mana-syringe'
import type { NsModel } from '../common/rx-model'
import type { Token } from '../common/types'
import type { Deferred } from '../common/deferred'

/**
 * Model Service Token
 */
export const IModelService = Syringe.defineToken('IModelService')

/**
 * Model Service 类型
 */
export interface IModelService {
  /** 注册模型 */
  registerModel: <T>(options: IModelOptions<T>) => Disposable
  /** 异步获取模型：promise会在模型注册成功后resolve */
  awaitModel: <T = any>(token: Token<T>) => Promise<NsModel.IModel<T>>
  /** 同步获取模型，没有注册的token会返回undefined */
  findDeferredModel: <T = any>(token: Token<T>) => undefined | Deferred<NsModel.IModel<T>>
}

/**
 * register Model 需要的Options
 */
export interface IModelOptions<T = any> {
  /** token */
  id: Token<T>
  /** 模型的值 */
  modelFactory?: () => NsModel.IModel<T>
  /** 模型的值 */
  getInitialValue?: () => T | null
  /** 绑定模型的事件 */
  watchChange?: (self: NsModel.IModel<T>, modelService: IModelService) => Promise<Disposable>
}

/**
 * 在 extensions 中实现这个扩展点来注册更多的Model
 */
export const IModelContribution = Syringe.defineToken('IModelContribution')

/**
 * 扩展Model
 */
export interface IModelContribution {
  /**
   * 注册Model
   * @param registry the toolbar registry.
   */
  registerModel: (registry: IModelService) => void
}

export type Writeable<T> = { -readonly [P in keyof T]: T[P] }

/** ui组件上使用model*/
export interface IUseModel<T = any> {
  (model: NsModel.IModel<T>, registry: IModelService): void
}

/** 注册runtime的model扩展*/
export interface IModelRegisterFunction {
  (registry: IModelService, graph: X6Graph): Disposable
}
export const IModelOptionProvider = Symbol('IModelOptionProvider')
export interface IProviderOptions {
  modelRegisterFunc: IModelRegisterFunction
}
export interface IModelOptionProvider {
  getOption: () => Promise<IProviderOptions>
}
