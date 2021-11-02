import type { Disposable } from '../common/disposable'
import type { HookHub } from '@antv/xflow-hook'
import type { IHooks } from './interface'
import { singleton, Contribution, contrib } from 'mana-syringe'
import { DisposableCollection } from '../common/disposable'
import { IFrontendApplicationContribution } from '../xflow-main/interface'
import { initHooks, IHookService, IHookContribution } from './interface'

@singleton({ contrib: [IFrontendApplicationContribution, IHookService] })
export class HookRegistry<T extends IHooks>
  implements IFrontendApplicationContribution, IHookService<T>
{
  /** disposables */
  private toDispose = new DisposableCollection()

  /** hooks */
  hooks: T

  constructor() {
    this.hooks = initHooks() as T
  }

  /** hooks */
  hookProvider = () => this.hooks

  /** 注册hook插件 */
  registerHook = (fn: (hooks: T) => Disposable) => {
    return fn(this.hooks)
  }

  /** 注册hook  */
  registerHookHub = (hookName: string, hook: HookHub) => {
    this.hooks[hookName] = hook
    return {
      dispose: () => {
        delete this.hooks[hookName]
      },
    }
  }

  /** hook扩展 */
  @contrib(IHookContribution)
  protected readonly contributionProvider: Contribution.Provider<IHookContribution<T>>

  /** app启动时，收集hook扩展点的注册项 */
  onStart = async () => {
    const contributions = this.contributionProvider.getContributions()
    for (const contribution of contributions) {
      contribution.registerHookHub(this)
    }
    for (const contribution of contributions) {
      contribution.registerHook(this.hooks)
    }
  }

  /** app的停止逻辑 */
  onStop(): void {
    this.toDispose.dispose()
  }
}
