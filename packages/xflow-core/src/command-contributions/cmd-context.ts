import type { Disposable } from '../common/disposable'
import type { Graph } from '@antv/x6'
import type { IHooks } from '../hooks/interface'
import type { IRuntimeHook } from '@antv/xflow-hook/es/interface'
import type { ICommandHandler, IContext } from '../command/interface'
import type { NsGraph } from '../interface'
import { injectable, inject, postConstruct } from 'mana-syringe'
import { DisposableCollection } from '../common/disposable'
import { IGraphProvider } from '../xflow-main/graph/graph-provider'
import { IModelService, MODELS } from '../model-service'
import { IGraphCommandService } from '../command/interface'
import { IHookService } from '../hooks'

@injectable()
export class CmdContext<Args = any, Result = any, Hooks extends IHooks = IHooks>
  implements IContext<Args, Result, Hooks> {
  /** undos 存在这里 */
  protected toDispose = new DisposableCollection()

  @inject(IGraphProvider)
  protected readonly graphProvider: IGraphProvider

  @inject(IHookService)
  protected readonly hookService: IHookService<Hooks>

  @inject(IGraphCommandService)
  protected readonly commandService: IGraphCommandService

  @inject(IModelService)
  protected readonly modelService: IModelService

  /** command handler的参数 */
  private args: Args

  /** command handler的runtimeHook */
  private runtimeHooks: IRuntimeHook = []

  /** command handler的执行结果 */
  private result: Result

  /** command handler的实例 */
  public handlerInstance: ICommandHandler<Args, Result, Hooks>

  /** x6 实例的缓存 */
  private graph: Graph

  /** graph meta */
  private graphMeta: NsGraph.IGraphMeta

  @postConstruct()
  init() {
    this.getGraphMeta().then(meta => {
      this.graphMeta = meta
    })
  }

  /** 获取 x6 实例 */
  getX6Graph = async () => {
    if (this.graph) return this.graph
    const graphInstance = await this.graphProvider.getGraphInstance()
    this.graph = graphInstance
    return graphInstance
  }
  /** 获取 graph */
  getGraphConfig = async () => {
    return this.graphProvider.getGraphOptions()
  }
  /** 获取 graphMeta */
  getGraphMeta = async () => {
    const service = this.getModelService()
    const meta = this.graphMeta || (await MODELS.GRAPH_META.useValue(service))
    return meta
  }
  /** 设置参数 */
  setArgs = (args: Args, runtimeHooks: IRuntimeHook = []) => {
    this.args = args
    this.runtimeHooks = runtimeHooks
    return { args, hooks: runtimeHooks }
  }
  /** 获取参数 */
  getArgs = () => {
    /** 注入graph meta */
    const args = {
      ...this.args,
      modelService: this.getModelService(),
      commandService: this.getCommands(),
      getGraphMeta: this.getGraphMeta,
      getX6Graph: this.getX6Graph,
      getGraphConfig: this.getGraphConfig,
    }
    return { args: args, hooks: this.runtimeHooks }
  }
  /** 设置执行结果 */
  setResult = (result: Result) => {
    this.result = result
    return this.result
  }
  /** 获取执行结果 */
  getResult = () => {
    return this.result
  }
  /** hooks */
  getHooks = () => {
    return this.hookService.hookProvider()
  }
  /** 获取Command Service */
  getCommands = () => {
    return this.commandService
  }
  /** 获取Context Service */
  getModelService = () => {
    return this.modelService
  }
  /** 添加undo */
  addUndo = (disposable: Disposable | Disposable[]) => {
    if (!Array.isArray(disposable)) {
      return this.addUndo([disposable])
    }
    this.toDispose.pushAll(disposable)
  }
  /** 执行undo */
  undo = async () => {
    await this.toDispose.dispose()
  }
  /** 是否可以执行undo */
  isUndoable = () => {
    return !this.toDispose.disposed
  }
  /** 获取 toDispose */
  getDisposables = () => this.toDispose
  /** 设置的共享变量 可以在command间共享 */
  setGlobal = <T extends unknown = any>(key: string, value: T) => {
    this.commandService.setGlobal(key, value)
  }
  /** 获取共享变量 */
  getGlobal = <T extends unknown = any>(key: string) => {
    return this.commandService.getGlobal(key) as T
  }
}
