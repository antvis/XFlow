import type { IRegisterHookHubFn, IRegisterHookFn } from './interface'
import type { IModuleConfig } from '../xflow-main/interface'

export const noop = () => {
  return {
    dispose: () => {},
  }
}
export namespace NsXFlowHook {
  export const CONFIG_TYPE = 'XFlowHook'
}

export class HookConfig implements IModuleConfig {
  /** CONFIG_TYPE */
  readonly CONFIG_TYPE = NsXFlowHook.CONFIG_TYPE

  public time = Date.now()

  /** 外部注册hook的方法 */
  private hookRegisterFunc?: IRegisterHookFn

  /** 外部注册hookhub的方法 */
  private hookhubRegisterFn?: IRegisterHookHubFn

  /** 提供一个runtime注册hook的方式 */
  setRegisterHook = (fn: IRegisterHookFn) => {
    this.hookRegisterFunc = fn
  }

  /** 这里在canvas上提供一个runtime注册hookhub的方式 */
  setRegisterHookhub = (fn: IRegisterHookHubFn) => {
    this.hookhubRegisterFn = fn
  }

  getConfig = async () => {
    const options = {
      CONFIG_TYPE: this.CONFIG_TYPE,
      hookRegisterFn: this.hookRegisterFunc || noop,
      hookhubRegisterFn: this.hookhubRegisterFn || noop,
    }
    return options
  }

  dispose = () => {}
}
