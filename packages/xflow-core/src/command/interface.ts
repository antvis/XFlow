// utils
import { Syringe } from 'mana-syringe'
import type { Disposable, DisposableCollection } from '../common/disposable'
// graph
import type { Graph as X6Graph } from '@antv/x6'
import type { IGraphConfig } from '../xflow-main/graph/config'
// model
import type { NsModel, RxModel } from '../common/rx-model'
import type { IModelService } from '../model-service'
// hooks
import type { IHooks } from '../command-contributions/interface'
import type { IRuntimeHook } from '@antv/xflow-hook/es/interface'
import type { NsGraph } from '../interface'

/**
 * A command is a unique identifier of a function
 * which can be executed by a user via a keyboard shortcut,
 * a menu action or directly.
 */
export interface IGraphCommand {
  /**
   * A unique identifier of this command.
   */
  id: string
  /**
   * A label of this command.
   */
  label?: string
  /**
   * An icon class of this command.
   */
  iconName?: string
  /**
   * A category of this command.
   */
  category?: string
}

/** Command 状态 */
export interface ICommandState {
  /**
   * cmd是否可以执行
   */
  isEnabled: boolean
  /**
   * cmd是否可见
   */
  isVisible: boolean
}

/**
 * IGraphCommandService
 * 声明执行Command的接口
 */
export const IGraphCommandService = Symbol('IGraphCommandService')
export interface IGraphCommandService {
  /** event：可以监听CommandService的变化 */
  watchChange: NsModel.IWatch<null>
  /** 撤销命令 */
  undoCommand: () => Promise<void>
  /** 重做命令 */
  redoCommand: () => Promise<void>
  /** 是否可重做 */
  isRedoable: boolean
  /** 是否可撤销 */
  isUndoable: boolean
  /** 执行原子命令：会在undo stack中push cmd */
  executeCommand: <Args = any, Result = any>(
    commandId: string,
    args: Args,
    hooks?: IRuntimeHook<Args, Result>,
  ) => Promise<ICommandHandler<Args, Result> | undefined>
  /** 用pipeline执行命令 */
  executeCommandPipeline: (
    cmdOptions: IGraphPipelineCommand[],
  ) => Promise<ICommandHandler | undefined>
  /** 执行撤销命令：不会在undo stack中push新的command记录 */
  executeUndoCommand: <Args, Result = any>(
    commandId: string,
    args: Args,
    hooks?: IRuntimeHook<Args, Result>,
  ) => Promise<ICommandHandler<Args, Result> | undefined>
  /** 注册Command */
  registerCommand: (command: IGraphCommand, factory: ICommandFactory) => Disposable
  /** 注册Command */
  setGlobal: (key: string, value: any) => void
  /** 注册Command */
  getGlobal: (key: string) => void
}

/**
 * Command factory
 * 负责创建Command实例
 */
export interface ICommandFactory<Args = any, Result = any, ICmdHooks = IHooks> {
  /**
   * 生成一个command
   */
  createCommand: (
    commandId: string,
    args: Args,
    hooks: IRuntimeHook<Args, Result>,
  ) => ICommandHandler<Args, Result, ICmdHooks>
  /**
   * 创建cmd state
   */
  createCmdState?: (IContextService: IModelService) => Promise<RxModel<ICommandState>>
  /**
   * cmd是否可用的state
   */
  cmdState?: RxModel<ICommandState>
}
/**
 * Command Handler 的 Token
 */
export const ICommandHandler = Syringe.defineToken('ICommandHandler')
/**
 * Command Handler
 * 负责Command的执行逻辑
 */
export interface ICommandHandler<Args = any, Result = any, ICmdHooks = IHooks> {
  /**
   * 执行cmd返回的disposables
   *
   * Reject if a command cannot be executed.
   */
  execute: () => Promise<ICommandHandler>
  /**
   * 执行 undo
   */
  undo: () => Promise<ICommandHandler>
  /**
   * 执行 redo
   */
  redo: () => Promise<ICommandHandler>
  /**
   * isUndoable
   */
  isUndoable: () => boolean
  /**
   * 获取执行cmd的context
   */
  contextProvider: () => IContext<Args, Result, ICmdHooks>
}

/** Command Context Provider 的 Symbol 提供执行需要的各种api */
export const ICommandContextProvider = Symbol('ICommandContextProvider')
/**
 * Command Context Provider: 返回Command执行需要的IContext
 */
export interface ICommandContextProvider<Args = any, Result = any, ICmdHooks = IHooks> {
  (): IContext<Args, Result, ICmdHooks>
}
/**
 * Command Context: 提供Command执行需要的各种api
 */
export interface IContext<Args extends IArgsBase = any, Result = any, Hooks = IHooks> {
  /** 执行undo */
  undo: () => Promise<void>
  /** 添加undo */
  addUndo: (disposable: Disposable) => Disposable
  /** 是否可以undo */
  isUndoable: () => boolean
  /** 获取参数 */
  getArgs: () => { args: Args; hooks: IRuntimeHook<Args, Result> }
  /** 设置参数 */
  setArgs: (
    args: Args,
    hooks: IRuntimeHook<Args, Result>,
  ) => { args: Args; hooks: IRuntimeHook<Args, Result> }
  /** 获取结果 */
  getResult: () => Result
  /** 设置结果 */
  setResult: (result: Result) => Result
  /** 获取hooks */
  getHooks: () => Hooks
  /** 获取Graph */
  getX6Graph: () => Promise<X6Graph>
  /** 获取GraphMeta */
  getGraphMeta: () => Promise<NsGraph.IGraphMeta>
  /** 获取Graph配置 */
  getGraphConfig: () => Promise<IGraphConfig>
  /** 获取Command */
  getCommands: () => IGraphCommandService
  /** 获取ModelService */
  getModelService: () => IModelService
  /** 获取Disposables */
  getDisposables: () => DisposableCollection
  /** 设置command间的共享变量 */
  setGlobal: <T extends unknown = any>(key: string, value: T) => void
  /** 获取共享变量 */
  getGlobal: <T extends unknown = any>(key: string) => T
}

/**
 * IGraphCommandFactory
 * Command工厂方法
 */
export const IGraphCommandFactory = Symbol('IGraphCommandFactory')
export interface IGraphCommandFactory<Args = any, Result = any> {
  (cmdId: string, cmdArgs: Args, hooks?: IRuntimeHook<Args, Result>): ICommandHandler<Args, Result>
}

/**
 * Command注册扩展的Symbol
 */
export const IGraphCommandContribution = Syringe.defineToken('IGraphCommandContribution')
/**
 * Command的扩展类型
 */
export interface IGraphCommandContribution {
  /**
   * Register commands and handlers.
   */
  registerGraphCommands: (commands: IGraphCommandService) => void
}

/** 执行command需要的参数  */
export interface ICommandConfig<Args extends IArgsBase = any> {
  /** command id */
  commandId?: string
  /** command 参数 */
  args: Args
  /** command hook */
  hooks?: IRuntimeHook
}

/** 执行command参数的基类 */
export interface IArgsBase {
  commandService?: IGraphCommandService
  modelService?: IModelService
}

/** Pipeline命令参数 */
export interface IGraphPipelineCommand<
  Args extends IArgsBase = any,
  Result = any,
  ICmdHooks = IHooks
> {
  commandId: string
  getCommandOption: (ctx: IContext<Args, Result, ICmdHooks>) => Promise<ICommandConfig<Args>>
}

/** 执行command需要的参数  */
export interface IGenericCmdOptions<T = any, Args extends IArgsBase = any> {
  (item: T, modelService: IModelService, cmd: IGraphCommandService): Promise<ICommandConfig<Args>>
}

/** Command 注册函数 */
export interface ICommandRegisterFunction {
  (registry: Pick<IGraphCommandService, 'registerCommand'>): void
}
