import { DisposableCollection, Disposable } from '../common/disposable'
import { IFrontendApplicationContribution } from '../xflow-main/interface'
import { RxModel, NsModel } from '../common/rx-model'
import { Deferred } from '../common/deferred'
import { IGraphProvider } from '../xflow-main/graph/graph-provider'
import { IModelOptionProvider, IModelService, IModelContribution } from './interface'
import { contrib, Contribution, singleton, inject } from 'mana-syringe'
import type { IModelOptions } from './interface'
import type { Token } from '../common/types'

@singleton({ contrib: [IFrontendApplicationContribution, IModelService] })
export class ModelRegistry implements IFrontendApplicationContribution, IModelService {
  /** disposables */
  private toDispose = new DisposableCollection()
  /** Deferred Model Map */
  private deferredModelMap = new Map<Token<any>, Deferred<NsModel.IModel<any>>>()
  /** Model 扩展点 */
  @contrib(IModelContribution)
  protected readonly contributionProvider: Contribution.Provider<IModelContribution>
  /** app启动时，收集Model扩展点的注册项 */
  onStart(): void {
    const contributions = this.contributionProvider.getContributions()
    for (const contribution of contributions) {
      contribution.registerModel(this)
    }
    this.registerRuntimeModel()
  }
  /** app停止的逻辑 */
  onStop(): void {
    this.toDispose.dispose()
  }
  /**
   * 注册model
   * @param options IModelOptions<T>
   */
  registerModel = <T>(options: IModelOptions<T>) => {
    const { id, getInitialValue, modelFactory } = options
    const toDispose = new DisposableCollection()
    const defer = this.ensureModel(id)
    if (defer.isResolved) {
      console.error(options, 'model has been registerd')
      return
    }
    const initialValue = getInitialValue ? getInitialValue() : NsModel.EMPTY_VALUE
    const model = modelFactory
      ? modelFactory()
      : (new RxModel<T>(initialValue) as NsModel.IModel<T>)
    if (NsModel.isValidValue<T>(initialValue)) {
      defer.resolve(model)
    }
    if (options.watchChange) {
      /** 绑定watch事件 */
      options.watchChange(model, this).then(d => {
        /** createModel 后 resolve */
        if (!defer.isResolved) {
          defer.resolve(model)
        }
        this.toDispose.pushAll([d, toDispose])
        toDispose.push(d)
      })
    }
    return toDispose
  }
  /**
   * 查找 model
   * @param token: Token<T>
   */
  findDeferredModel = <T = any>(token: Token<T>) => {
    return this.deferredModelMap.get(token)
  }
  /**
   *  消费Model: await model resolve
   * @param token: Token<T>
   */
  awaitModel = <T = any>(token: Token<T>) => {
    const defer = this.ensureModel(token)
    return defer.promise as Promise<RxModel<T>>
  }
  /** model service 配置 */
  @inject(IModelOptionProvider)
  private modelOptionProvider: IModelOptionProvider
  /**
   * 注册 定义在IModelOptionProvider中的Model
   */
  registerRuntimeModel = async () => {
    const { modelRegisterFunc } = await this.modelOptionProvider.getOption()
    const graphInstance = await this.graphProvider.getGraphInstance()

    if (modelRegisterFunc) {
      modelRegisterFunc(this, graphInstance)
    }
  }
  /**
   * 确保调用时有可用的Model
   * @param id ModelId
   */
  private ensureModel = <T>(token: Token<T>) => {
    const existDeferred = this.deferredModelMap.get(token)
    if (existDeferred) {
      return existDeferred
    }
    /** 注册ModelDeferred */
    const newDeferred = new Deferred<RxModel>()
    this.deferredModelMap.set(token, newDeferred)
    this.toDispose.push(Disposable.create(() => this.deferredModelMap.delete(token)))
    return newDeferred
  }
  /** 获取Graph */
  @inject(IGraphProvider)
  protected readonly graphProvider: IGraphProvider
}
