import { Deferred } from '../common/deferred'
import type { IKeyBinding, IRegisterKeybindingFunction } from './interface'
import type { IModuleConfig } from '../xflow-main/interface'
import { Disposable } from '../common/disposable'
export namespace NsContext {
  export const CONFIG_TYPE = 'CONTEXT_CONFIG'

  export interface IRenderConfig {
    keybindings: IKeyBinding[]
  }
}

const noop = () => Disposable.create(() => {})
export class KeybindingConfig implements IModuleConfig {
  /** CONFIG_TYPE */
  readonly CONFIG_TYPE = NsContext.CONFIG_TYPE
  /** 外部注册context的方法 */
  private keybindingFunc: IRegisterKeybindingFunction = noop
  /** 是否已加载 */
  private isMounted = new Deferred<boolean>()

  setKeybindingFunc = (fn: IRegisterKeybindingFunction) => {
    this.keybindingFunc = fn
  }

  setMountState = () => {
    this.isMounted.resolve(true)
  }

  getConfig = async () => {
    await this.isMounted.promise
    return {
      CONFIG_TYPE: this.CONFIG_TYPE,
      registerKeybindingFunc: this.keybindingFunc,
    }
  }

  dispose = () => {
    this.keybindingFunc = noop
    this.isMounted = new Deferred()
  }
}
