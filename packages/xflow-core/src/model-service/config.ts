import { Deferred } from '../common/deferred'
import { Disposable } from '../common/disposable'
import type { IModelRegisterFunction } from './interface'
import type { IModuleConfig } from '../xflow-main/interface'

export namespace NsModelServiceConfig {
  export const CONFIG_TYPE = 'MODEL_SERVICE_CONFIG'
}

const disposableNoop = () => Disposable.create(() => {})

export class ModelServiceConfig implements IModuleConfig {
  /** CONFIG_TYPE */
  readonly CONFIG_TYPE = NsModelServiceConfig.CONFIG_TYPE

  /** 外部注册context的方法 */
  private registerModelFn?: IModelRegisterFunction = disposableNoop

  /** CONFIG_TYPE */
  private isMounted = new Deferred<boolean>()

  registerModel = (registerModel: IModelRegisterFunction) => {
    this.registerModelFn = registerModel
  }

  setMountState = () => {
    this.isMounted.resolve(true)
  }

  getConfig = async () => {
    await this.isMounted.promise
    return {
      CONFIG_TYPE: this.CONFIG_TYPE,
      modelRegisterFunc: this.registerModelFn || disposableNoop,
    }
  }

  dispose = () => {
    this.registerModelFn = disposableNoop
    this.isMounted = new Deferred()
  }
}
