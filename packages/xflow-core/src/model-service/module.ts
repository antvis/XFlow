/* eslint-disable @typescript-eslint/no-redeclare */
import 'reflect-metadata'
import { Contribution, Module, Syringe } from 'mana-syringe'
/** Application 扩展  */
import type { ModelServiceConfig } from './config'
import { ModelRegistry } from './model-registry'
/**  model service 扩展  */
import { IModelContribution, IModelOptionProvider } from './interface'
import { CommandModelContribution } from './contributions/command-model'
import { GraphModelContribution } from './contributions/graph-model'

/** 模块 */
export const modelServiceModule = Module(register => {
  /** 注册 IModelService Contribution */
  Contribution.register(register, IModelContribution)

  /** 注册 ModelRegistry 到 IFrontendApplicationContribution  */
  /** 注册 ModelRegistry alias IModelService Service */
  register(ModelRegistry)

  /** 注册 Graph 相关的ModelService  */
  register(GraphModelContribution)

  /** 注册 Command 相关的ModelService  */
  register(CommandModelContribution)
})

export const registerModelServiceConfig = (
  register: Syringe.Register,
  config: ModelServiceConfig,
) => {
  register({
    token: IModelOptionProvider,
    useDynamic: () => {
      return {
        getOption: async () => {
          return config.getConfig()
        },
      } as IModelOptionProvider
    },
    lifecycle: Syringe.Lifecycle.singleton,
  })
}

/** 组件的 config 模块，必须要加载 */
export const createModule = (config: ModelServiceConfig) => {
  return Module(register => {
    /** 绑定 ModelService  配置 */
    registerModelServiceConfig(register, config)
  })
}
