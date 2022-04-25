import type { Graph } from '@antv/x6'
import type { NsGraph } from '../interface'
import type { Disposable } from '../common/disposable'
import type { IGraphCommandService } from '../command/interface'
import type { IModelService } from '../model-service/interface'
import { HookHub } from '@antv/xflow-hook'
import { Syringe } from 'mana-syringe'
import type { EventArgs } from '@antv/x6/es/graph/events'
import type { IGraphConfig } from '../xflow-main/graph/config'
export interface IRegisterHookFn<T = IHooks> {
  (hooks: T): Disposable
}

export interface IRegisterHookHubFn<T = IHooks> {
  (registry: IHookService<T>): Disposable
}

/**
 * extension 应该实现这个扩展点来注册更多的hook
 */
export const IHookService = Syringe.defineToken('IHookService')
export interface IHookService<T = IHooks> {
  registerHookHub: (hookName: string, hook: HookHub) => Disposable
  registerHook: (registerHookFunc: IRegisterHookFn<T>) => Disposable
  hookProvider: () => T
}

/**
 * extension 应该实现这个扩展点来注册更多的hook
 */
export const IHookContribution = Syringe.defineToken('IHookContribution')
/**
 * 扩展hook
 */
export interface IHookContribution<T extends IHooks> {
  /**
   * 注册hook
   * @param registry the HookRegistry.
   */
  registerHook: (hooks: T) => Promise<Disposable>
  /**
   * 注册hookhub
   * @param registry the HookRegistry.
   */
  registerHookHub: (registry: IHookService<T>) => Promise<Disposable>
}

/** 内置的Hooks */
export type IEvent<Key extends keyof EventArgs> = NsGraph.IEvent<Key>
export type IEventCollection = NsGraph.IEvent[]
export type IEventSubscription = Disposable[]

export interface IGeneralAppService {
  graph: Graph
  commandService: IGraphCommandService
  modelService: IModelService,
  options: IGraphConfig
}

export const initHooks = () => ({
  graphOptions: new HookHub<Graph.Options>(),
  reactNodeRender: new HookHub<Map<string, NsGraph.INodeRender>>(),
  reactEdgeLabelRender: new HookHub<Map<string, NsGraph.IEdgeRender>>(),
  afterGraphInit: new HookHub<IGeneralAppService>(),
  beforeGraphDestroy: new HookHub<IGeneralAppService>(),
  x6Events: new HookHub<IEventCollection, IEventSubscription>(),
})

export type IHooks = ReturnType<typeof initHooks>
