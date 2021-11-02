import 'reflect-metadata'
import { singleton, inject, contrib, Contribution } from 'mana-syringe'

import debounce from 'lodash/debounce'
import cloneDeep from 'lodash/cloneDeep'
import isBoolean from 'lodash/isBoolean'

import { Disposable, DisposableCollection } from '../common/disposable'
import { IFrontendApplicationContribution } from '../xflow-main/interface'
import type { NsModel } from '../common/rx-model'
import { RxModel } from '../common/rx-model'
import { IGraphCommandService } from '../command'
import { IModelService } from '../model-service'

import type {
  IToolbarItemOptions,
  IToolbarOptions,
  IToolbarGroupOptions,
  IRegisterToolbarItemFunction,
  IStandaloneToolbarService,
} from './interface'
import { IToolbarService, IToolbarContribution } from './interface'

/**
 * Main, shared registry for toolbar items.
 */
@singleton({ contrib: [IFrontendApplicationContribution, IToolbarService] })
export class ToolbarRegistry implements IFrontendApplicationContribution {
  /** disposables */
  protected readonly toDispose = new DisposableCollection()
  /** 储存所有toolbar items */
  protected toolbarItems: Map<string, IToolbarItemOptions> = new Map()
  /** CommandRegistry */
  @inject(IGraphCommandService)
  protected readonly commandService: IGraphCommandService
  /** IModelService */
  @inject(IModelService)
  protected readonly modelService: IModelService
  /** ToolbarItems的扩展 */
  @contrib(IToolbarContribution)
  protected readonly contributionProvider: Contribution.Provider<IToolbarContribution>
  /** 注册ToolbarRegistry的onChange的事件 */
  protected readonly onDidChangeEvent = new RxModel<null>(null)
  /** 通过ToolbarRegistry.onDidChange监听ToolbarRegistry items的变化  */
  readonly onDidChange: NsModel.IWatch<void> = this.onDidChangeEvent.watch
  /** debounce in order to avoid to fire more than once in the same tick */
  protected fireOnDidChange = debounce(() => this.onDidChangeEvent.setValue(undefined), 16)
  /** App启动时，收集Toolbar扩展点的注册项 */
  onStart(): void {
    const contributions = this.contributionProvider.getContributions()
    for (const contribution of contributions) {
      contribution.registerToolbarItems(this)
    }
  }
  /**
   * App 销毁时调用
   * dispose toolbarProvider
   */
  onStop(): void {
    this.toDispose.dispose()
  }
  /**
   * 注册ToolbarItem
   * item所需的command需要提前在command registry注册
   * @param config IToolbarItem
   */
  registerItem(config: IToolbarItemOptions) {
    if (this.toolbarItems.has(config.id)) {
      console.warn(`ToolbarRegistry ${config.id} is duplicated, in`, config)
    }
    /** 注册 */
    this.toolbarItems.set(config.id, config)
    /** 通知更新 */
    this.fireOnDidChange()
    const toDispose = new DisposableCollection(
      Disposable.create(() => this.fireOnDidChange()),
      Disposable.create(() => this.toolbarItems.delete(config.id)),
    )
    return toDispose
  }
  /**
   * 批量注册可单独dispose的扩展项目
   * @param externalRegisterFn IRegisterMenuFunction
   */
  registerDisposableToolbar = (externalRegisterFn: IRegisterToolbarItemFunction) => {
    const toDispose = new DisposableCollection()
    const disposableRegistry: IStandaloneToolbarService = {
      registerToolbarItem: config => {
        const disposable = this.registerItem(config)
        toDispose.push(disposable)
        return disposable
      },
    }
    externalRegisterFn(disposableRegistry)
    this.toDispose.push(toDispose)
    return toDispose
  }
  /**
   * 获取 ToolbarModel
   * @param toolbarConfig IToolbarOptions
   */
  getToolbarModel = (toolbarConfig: IToolbarOptions) => {
    const { layout, mainGroups = [], extraGroups = [] } = toolbarConfig
    return new RxModel({
      layout,
      mainGroups: this.createToolbarGroupModel(mainGroups),
      extraGroups: this.createToolbarGroupModel(extraGroups),
    })
  }
  /**
   * 创建 ToolbarModel
   * @param groups IToolbarGroupOptions[]
   */
  protected createToolbarGroupModel = (groups: IToolbarGroupOptions[]) => {
    const groupModels = groups.map(group => {
      const { items = [] } = group
      return {
        ...group,
        items: items.map(item => this.createToolbarModel({ id: item.id })).filter(i => !!i),
      }
    })

    return groupModels
  }
  /**
   * 创建 ToolbarModel
   * @param option IToolbarItem
   */
  protected createToolbarModel(option: Partial<IToolbarItemOptions>) {
    const item = cloneDeep(this.toolbarItems.get(option.id))
    const isEnabled = isBoolean(item.isEnabled) ? item.isEnabled : true
    const isVisible = isBoolean(item.isVisible) ? item.isVisible : true
    const toolbarItem: IToolbarItemOptions = {
      ...item,
      isEnabled: isEnabled,
      isVisible: isVisible,
      iconName: item.iconName,
      text: item.text,
    }
    return toolbarItem
  }
}
