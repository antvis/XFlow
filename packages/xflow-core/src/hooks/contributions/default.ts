import { DisposableCollection, Disposable } from '../../common/disposable'
import { HookConfig } from '../config'
import type { IHookService } from '../index'
import { singleton, inject } from 'mana-syringe'
import type { IHooks } from '../interface'
import { IHookContribution } from '../interface'
export namespace NsGraphEventPlugin {
  export const pluginId = 'GraphEventPlugin'
}

/**
 * 内置的hook contribution
 * 处理 config上的runtime的注册项
 */
@singleton({ contrib: IHookContribution })
export class RuntimeContribution implements IHookContribution<IHooks> {
  toDispose = new DisposableCollection()

  /** 通过optionProvider获取配置 */
  @inject(HookConfig) hookConfig: HookConfig

  registerHook = async hooks => {
    const { hookRegisterFn } = await this.hookConfig.getConfig()
    const d = hookRegisterFn(hooks)
    return Disposable.create(() => {
      d.dispose()
    })
  }

  registerHookHub = async (registry: IHookService<IHooks>) => {
    const { hookhubRegisterFn } = await this.hookConfig.getConfig()
    const d = hookhubRegisterFn(registry)
    return Disposable.create(() => {
      d.dispose()
    })
  }
}
