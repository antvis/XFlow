import { Syringe } from 'mana-syringe'
import type { IRegisterHookFn, IRegisterHookHubFn, IHookService } from '../hooks/interface'
import { IHookContribution } from '../hooks/interface'
import type { ICmdHooks, ICommandContributionConfig } from './interface'
import { disposableNoop } from '../common/utils'
export interface IConfig {
  createModule?: (...args: any[]) => Syringe.Module
}

export const CONFIG_TYPE = 'CommandConfig'

export const getDefaultContributions = () => {
  return [] as ICommandContributionConfig[]
}

export interface IRegisterCommandContribution {
  (): ICommandContributionConfig[]
}

export class CommandConfig implements IHookContribution<ICmdHooks> {
  private getContributions: IRegisterCommandContribution

  constructor() {
    this.getContributions = getDefaultContributions
  }

  setCommandContributions = (fn: IRegisterCommandContribution) => {
    this.getContributions = fn
  }

  getCommandContributions = () => {
    return this.getContributions()
  }

  registerHook = async (hooks: ICmdHooks) => {
    if (this.registerHookFn) {
      return this.registerHookFn(hooks)
    }
    return disposableNoop
  }

  registerHookHub = async (registry: IHookService<ICmdHooks>) => {
    if (this.registerHookHubFn) {
      return this.registerHookHubFn(registry)
    }
    return disposableNoop
  }
  /** 设置CONFIG类型 */
  readonly CONFIG_TYPE = CONFIG_TYPE

  /** 注册 command hook */
  private registerHookFn: IRegisterHookFn<ICmdHooks>
  /** set command hook fn */
  setRegisterHookFn = (fn: IRegisterHookFn<ICmdHooks>) => {
    this.registerHookFn = fn
  }
  /** 注册 command hook hub */
  private registerHookHubFn: IRegisterHookHubFn<ICmdHooks>
  /** 注册 command hook hub */
  setRegisterHookHubFn = (fn: IRegisterHookHubFn<ICmdHooks>) => {
    this.registerHookHubFn = fn
  }
  /** 获取config的所有配置*/
  getConfig = async () => {
    return {
      registerHookFn: this.registerHookFn,
      getContributions: this.getContributions,
      CONFIG_TYPE: this.CONFIG_TYPE,
    }
  }
}

/** 提供一个工厂方法 */
export const createCommandConfig = () => {
  return new CommandConfig()
}

export const registerCommandConfig = (register: Syringe.Register, commandConfig: CommandConfig) => {
  register<CommandConfig>({
    token: CommandConfig,
    contrib: [IHookContribution],
    lifecycle: Syringe.Lifecycle.singleton,
    useDynamic: () => {
      return commandConfig
    },
  })
}
