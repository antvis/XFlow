import { singleton, contrib, Contribution } from 'mana-syringe'
import { DisposableCollection, Disposable } from '../common/disposable'
import { IFrontendApplicationContribution } from '../xflow-main/interface'

import type { IMenuId, IMenuOptions, IRegisterMenuFunction } from './interface'
import { IMenuService, IMenuContribution } from './interface'

@singleton({ contrib: [IFrontendApplicationContribution, IMenuService] })
export class MenuRegistry implements IMenuService, IFrontendApplicationContribution {
  /** disposables */
  private toDispose = new DisposableCollection()
  /** menuMap */
  private menuMap = new Map<IMenuId, IMenuOptions>()
  /** menu扩展 */
  @contrib(IMenuContribution)
  protected readonly contributionProvider: Contribution.Provider<IMenuContribution>
  /** app启动时，收集menu扩展点的注册项 */
  onStart(): void {
    const contributions = this.contributionProvider.getContributions()
    for (const contribution of contributions) {
      contribution.registerMenu(this)
    }
  }
  /** app的停止逻辑 */
  onStop(): void {
    this.toDispose.dispose()
  }
  /**
   * 注册 menu 类型
   * @param config IMenu
   */
  registerMenu(config: IMenuOptions) {
    this.menuMap.set(config.id, config)
    return Disposable.create(() => this.menuMap.delete(config.id))
  }
  /**
   * 获取 menu
   * @param menuId menuId
   */
  getMenu = (menuId: IMenuId) => {
    return this.menuMap.get(menuId)
  }
  /**
   * 注册一批可单独dispose的扩展项目
   * @param externalRegisterFn IRegisterMenuFunction
   */
  registerDisposableMenu = (externalRegisterFn: IRegisterMenuFunction) => {
    const toDispose = new DisposableCollection()
    const disposableRegistry = {
      registerMenu: (config: IMenuOptions) => {
        const disposable = this.registerMenu(config)
        toDispose.push(disposable)
        return disposable
      },
    }
    externalRegisterFn(disposableRegistry)
    this.toDispose.push(toDispose)
    return toDispose
  }
}
