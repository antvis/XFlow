/* eslint-disable @typescript-eslint/no-redeclare */
import 'reflect-metadata'

/** Application */
import { FrontendApplication, IFrontendApplicationContribution } from './application'

/** Command 模块 */
import { commandRegistryModule } from '../command/module'
import { modelServiceModule } from '../model-service/module'

/** Extension 注册中心 */
import { ExtensionRegistry } from './components/extension-registry'

/** 类型定义 */
import { Contribution, Container, Module } from 'mana-syringe'

export { ExtensionRegistry }

export type ICreateApp = (registry: ExtensionRegistry) => FrontendApplication

/** application */
const appMainModule = Module(register => {
  /** 声明IFrontendApplicationContribution扩展点*/
  Contribution.register(register, IFrontendApplicationContribution)
  /** 声明 FrontendApplication */
  register(FrontendApplication)
})

export const initApp: ICreateApp = (moduleRegistry: ExtensionRegistry) => {
  const extensions = moduleRegistry.getAllExtensions()
  const container = new Container()

  /** command */
  /** react renderer */
  /** 批量创建 extension module */
  const modules = extensions.map(module => {
    const { createModule, config } = module
    return createModule(config)
  })

  /** 单独加载 appMainModule */
  container.load(appMainModule)
  /** 单独加载 commandRegistryModule */
  container.load(commandRegistryModule)
  // /** 单独加载 modelServiceModule */
  container.load(modelServiceModule)

  /**
   * 批量加载 extension module
   * 包括：menu/toolbar/keybinding/graph
   */
  modules.forEach(module => {
    container.load(module)
  })

  const app = container.get(FrontendApplication)
  return app
}
