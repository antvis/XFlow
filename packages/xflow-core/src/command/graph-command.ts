import { contrib, Contribution, singleton } from 'mana-syringe'
import { RxModel } from '../common/rx-model'
import { Disposable, DisposableCollection } from '../common/disposable'
import { IFrontendApplicationContribution } from '../xflow-main/interface'
import type {
  ICommandHandler,
  IGraphCommand,
  ICommandFactory,
  IGraphPipelineCommand,
  ICommandRegisterFunction,
} from './interface'
import { IGraphCommandService, IGraphCommandContribution } from './interface'
import type { IRuntimeHook } from '@antv/xflow-hook/es/interface'
import 'reflect-metadata'

export namespace NCommand {
  /* Determine whether object is a Command */
  export function is(arg: IGraphCommand | any): arg is IGraphCommand {
    return !!arg && arg === Object(arg) && 'id' in arg
  }

  /** Comparator function for when sorting commands */
  export function compareCommands(a: IGraphCommand, b: IGraphCommand): number {
    if (a.label && b.label) {
      const aCommand = (a.category ? `${a.category}: ${a.label}` : a.label).toLowerCase()
      const bCommand = (b.category ? `${b.category}: ${b.label}` : b.label).toLowerCase()
      return aCommand.localeCompare(bCommand)
    } else {
      return 0
    }
  }

  /**
   * Determine if two commands are equal.
   *
   * @param a the first command for comparison.
   * @param b the second command for comparison.
   */
  export function equals(a: IGraphCommand, b: IGraphCommand): boolean {
    return (
      a.id === b.id && a.label === b.label && a.iconName === b.iconName && a.category === b.category
    )
  }
}

@singleton({
  contrib: [IFrontendApplicationContribution, IGraphCommandService],
})
export class GraphCommandRegistry
  implements IGraphCommandService, IFrontendApplicationContribution
{
  /**
   * undo cmd后将命令存储在队列中给redo调用
   */
  protected readonly redoStack: ICommandHandler[] = []
  /**
   * executeCommand后将命令存储在队列中给undo调用
   */
  protected readonly undoStack: ICommandHandler[] = []
  /**
   * 储存所有注册的command
   */
  protected readonly commands = new Map<string, IGraphCommand>()
  /**
   * 储存所有注册的command factory
   */
  protected readonly factories = new Map<string, ICommandFactory>()
  /**
   * 储存所有注册的command handler disposables
   */
  protected readonly disposables = new Map<string, DisposableCollection>()
  /**
   * 监听cmdregistry的变化
   */
  private readonly cmdChangeEvent = new RxModel<null>(null)

  /**
   * 监听cmdregistry的变化
   */
  public get watchChange() {
    return this.cmdChangeEvent.watch
  }
  /**
   * 在Command实例间共享变量
   */
  readonly Globals = new RxModel(new Map())
  /** 设置command间的共享变量 */
  setGlobal = (key: string, value: any) => {
    this.Globals.setValue(map => {
      map.set(key, value)
    })
  }
  /** 获取共享变量 */
  getGlobal = (key: string) => {
    const map = this.Globals.getValue() as Map<string, any>
    return map.get(key)
  }
  constructor(
    @contrib(IGraphCommandContribution)
    protected readonly contributionProvider: Contribution.Provider<IGraphCommandContribution>,
  ) {}

  onStart(): void {
    const contributions = this.contributionProvider.getContributions()
    for (const contribItem of contributions) {
      contribItem.registerGraphCommands(this)
    }
  }

  async executeCommandPipeline(cmdOptions: IGraphPipelineCommand[]) {
    let res: ICommandHandler = null
    for (const cmdOption of cmdOptions) {
      const cmdCtx = res?.contextProvider()
      const { args, hooks } = await cmdOption?.getCommandOption(cmdCtx)
      res = await this.executeCommand(cmdOption?.commandId, args, hooks)
    }
    /* 触发事件回调 */
    this.cmdChangeEvent.setValue(null)
    return res
  }

  /** 执行 Command：会在undo stack中push cmd */
  async executeCommand<Args = any, Result = any>(
    commandId: string,
    cmdArgs: Args,
    hook: IRuntimeHook<Args, Result> = [],
  ) {
    const factory = this.getFactory(commandId)
    if (factory) {
      const cmd = (await factory.createCommand(commandId, cmdArgs, hook)) as ICommandHandler<
        Args,
        Result
      >
      await cmd.execute()
      if (cmd.isUndoable()) {
        this.undoStack.push(cmd)
      }
      /* 触发事件回调 */
      this.cmdChangeEvent.setValue(null)
      return cmd
    }
    throw Object.assign(
      new Error(
        `The command '${commandId}' cannot be executed. There are no active handlers available for the command.`,
      ),
      { code: 'NO_ACTIVE_HANDLER' },
    )
  }
  /** 执行 unod Command：不会在undo stack中push新的command记录 */
  async executeUndoCommand<T = any>(
    commandId: string,
    cmdArgs: T,
    hook: IRuntimeHook<T, any> = [],
  ) {
    const factory = this.getFactory(commandId)
    if (factory) {
      const cmd = await factory.createCommand(commandId, cmdArgs, hook)
      await cmd.execute()
      return cmd
    }
    throw Object.assign(
      new Error(
        `The command '${commandId}' cannot be executed. There are no active handlers available for the command.`,
      ),
      { code: 'NO_ACTIVE_HANDLER' },
    )
  }

  /**
   * Execute the active handler for the given command and arguments.
   *
   * Reject if a command cannot be executed.
   */
  async createCommand<T = any>(commandId: string, cmdArgs: T, hook: IRuntimeHook<T, any> = []) {
    const factory = this.getFactory(commandId)
    if (factory) {
      const cmd = await factory.createCommand(commandId, cmdArgs, hook)
      return cmd
    }
    throw Object.assign(
      new Error(
        `The command '${commandId}' cannot be executed. There are no active handlers available for the command.`,
      ),
      { code: 'NO_ACTIVE_HANDLER' },
    )
  }

  /**
   * 执行undo stack中最后一条Command
   */
  public undoCommand = async () => {
    /* 获取可以undo的Command */
    const cmd = this.undoStack.pop()
    if (!cmd) {
      console.error('empty undo stack')
      return
    }
    /* 执行命令的undo方法 */
    await cmd.undo()
    /* 执行后塞到redo的栈中 */
    this.redoStack.push(cmd)
    /* 触发事件回调 */
    this.cmdChangeEvent.setValue(null)
  }

  /**
   * 执行redo stack中最后一条Command
   */
  public redoCommand = async () => {
    /* 获取可以redo的Command */
    const cmd = this.redoStack.pop()
    if (!cmd) {
      console.error('empty undo stack')
      return
    }
    /* 执行命令的undo */
    await cmd.redo()
    /* 执行后塞到undo的栈中 */
    this.undoStack.push(cmd)
    /* 触发事件回调 */
    this.cmdChangeEvent.setValue(null)
  }

  /**
   * 检查是否注册了Command
   */
  get isUndoable() {
    return this.undoStack.length > 0
  }

  /**
   * 检查是否注册了Command
   */
  get isRedoable() {
    return this.redoStack.length > 0
  }

  /**
   * 检查是否注册了Command
   */
  hasCommand(commandId: string) {
    return this.commands.has(commandId)
  }
  /**
   * Get a command for the given command identifier.
   */
  getCommand(id: string): IGraphCommand | undefined {
    return this.commands.get(id)
  }

  /**
   * Register the given command and handler if present.
   *
   * Throw if a command is already registered for the given command identifier.
   */
  registerCommand(command: IGraphCommand, factory: ICommandFactory): Disposable {
    if (this.factories.has(command.id)) {
      console.warn(`A command ${command.id} is already registered.`)
      return Disposable.NULL
    }
    const toDispose = new DisposableCollection(
      this.doRegisterCommand(command),
      this.registerFactory(command.id, factory),
      Disposable.create(() => this.disposables.delete(command.id)),
    )
    this.disposables.set(command.id, toDispose)
    return toDispose
  }

  /**
   * 注册一批可单独dispose的Command
   * @param externalRegisterFn ICommandRegisterFunction
   */
  registerDisposableCommand = (externalRegisterFn: ICommandRegisterFunction) => {
    const toDispose = new DisposableCollection()
    const disposableRegistry: Pick<IGraphCommandService, 'registerCommand'> = {
      registerCommand: (command: IGraphCommand, factory: ICommandFactory) => {
        const disposable = this.registerCommand(command, factory)
        toDispose.push(disposable)
        return disposable
      },
    }
    externalRegisterFn(disposableRegistry)
    return toDispose
  }

  protected doRegisterCommand(command: IGraphCommand): Disposable {
    this.commands.set(command.id, command)
    return Disposable.create(() => this.disposables.delete(command.id))
  }
  /**
   * Unregister command from the registry
   *
   * @param command
   */
  unregisterCommand(command: IGraphCommand): void
  /**
   * Unregister command from the registry
   *
   * @param id
   */

  unregisterCommand(commandOrId: IGraphCommand | string): void {
    const id = NCommand.is(commandOrId) ? commandOrId.id : commandOrId
    const disposableCmd = this.disposables.get(id)
    if (disposableCmd) {
      disposableCmd.dispose()
    }
  }
  /**
   * 检查commandId是否有Factory
   */
  hasFactory(commandId: string) {
    const factory = this.factories.get(commandId)
    return !!factory
  }

  /**
   * Get a visible handler for the given command or `undefined`.
   */
  getFactory(commandId: string): ICommandFactory | undefined {
    const factory = this.factories.get(commandId)
    return factory
  }
  /**
   * Register the given handler for the given command identifier.
   *
   * If there is already a handler for the given command
   * then the given handler is registered as more specific, and
   * has higher priority during enablement, visibility and toggle state evaluations.
   */
  registerFactory(commandId: string, factory: ICommandFactory, force: boolean = false): Disposable {
    if (this.hasFactory(commandId) && force === false) {
      console.error('cannot register command:', commandId)
    }
    this.factories.set(commandId, factory)
    return Disposable.create(() => {
      this.factories.delete(commandId)
    })
  }

  /**
   * Returns with all handlers for the given command. If the command does not have any handlers,
   * or the command is not registered, returns an empty array.
   */
  getAllFactories() {
    return Array.from(this.factories.entries())
  }
}
