import { inject, singleton, contrib, Contribution } from 'mana-syringe'
import { DisposableCollection, Disposable } from '../common/disposable'
import { IFrontendApplicationContribution } from '../xflow-main/interface'
import { IGraphProvider } from '../xflow-main/graph/graph-provider'
import type { IKeyBinding, IKeybindingRegistry } from './interface'
import { IKeyBindingOptionProvider, IKeyBindingService, IKeyBindingContribution } from './interface'
import { IGraphCommandService } from '../command/interface'
import { IModelService } from '../model-service/interface'

@singleton({ contrib: [IFrontendApplicationContribution, IKeyBindingService] })
export class KeyBindingRegistry implements IFrontendApplicationContribution, IKeybindingRegistry {
  /** disposables */
  private toDispose = new DisposableCollection()
  /** disposables */
  private keyBindingMap = new Map<string, IKeyBinding>()
  /** disposables */
  private enabledKeyBindingMap = new Map<string, Disposable>()
  /** KeyBinding 配置 */
  @inject(IKeyBindingOptionProvider)
  private optionProvider: IKeyBindingOptionProvider
  /** GraphCommandRegistry 用于执行 */
  @inject(IGraphCommandService)
  private commandService: IGraphCommandService
  /** IModelService 实例 */
  @inject(IModelService)
  private modelService: IModelService
  /** context 扩展点 */
  @contrib(IKeyBindingContribution)
  protected readonly contributionProvider: Contribution.Provider<IKeyBindingContribution>
  /**
   *  app启动时, 注册keybinding的扩展
   */
  onStart(): void {
    const contributions = this.contributionProvider.getContributions()
    for (const contribution of contributions) {
      contribution.registerKeybinding(this)
    }
    this.registerExternalKeybindings()
  }
  /**
   * app停止的逻辑
   */
  onStop(): void {
    this.toDispose.dispose()
  }

  /** 注册用户定义在config中的keybinding */
  protected registerExternalKeybindings = async () => {
    const { registerKeybindingFunc } = await this.optionProvider.getOption()
    return registerKeybindingFunc(this)
  }

  /** 注册可Dispose的Keybinding */
  registerKeybinding = (keybindings: IKeyBinding[] = []) => {
    const toDispose = new DisposableCollection()
    keybindings.forEach(keybinding => {
      /** 注册 Keybinding config */
      this.keyBindingMap.set(keybinding.id, keybinding)
      /** enable Keybinding */
      this.enableKeyBindings(keybinding.id).then(d => {
        toDispose.push(
          Disposable.create(() => {
            d.dispose()
            this.keyBindingMap.delete(keybinding.id)
          }),
        )
      })
    })
    this.toDispose.push(toDispose)
    return toDispose
  }

  /**
   * 启用keybinding, 用于触发command
   * @param id contextId
   */
  enableKeyBindings = async (keybindingId: string) => {
    /** 清理同样的键盘事件 */
    this.disableKeyBindings([keybindingId])
    const keybinding = this.keyBindingMap.get(keybindingId)
    const graph = await this.getX6Graph()
    /**
     * x6文档：https://x6.antv.vision/zh/docs/api/graph/keyboard
     * x6源码：packages/x6/src/graph/keyboard.ts
     */
    const handler = this.runCommand(keybinding)
    graph.bindKey(keybinding.keybinding, handler)
    /** 注册disposable */
    const toDispose = Disposable.create(() => {
      graph.unbindKey(keybinding.keybinding)
      this.enabledKeyBindingMap.delete(keybinding.id)
    })
    /** 注册disposable */
    this.enabledKeyBindingMap.set(keybinding.id, toDispose)
    return toDispose
  }
  /**
   * 禁用keybinding
   */
  disableKeyBindings = (ids: string[]) => {
    ids.forEach(id => {
      const disposable = this.enabledKeyBindingMap.get(id)
      if (disposable) {
        disposable.dispose()
      }
    })
  }
  /**
   * 执行command
   */
  protected runCommand = (keybinding: IKeyBinding) => async (e: KeyboardEvent) => {
    await keybinding.callback(keybinding, this.modelService, this.commandService, e)
  }

  /**
   * 获取画布实例
   */
  private getX6Graph = async () => {
    const graphInstance = await this.graphProvider.getGraphInstance()
    return graphInstance
  }

  @inject(IGraphProvider)
  protected readonly graphProvider: IGraphProvider
}
