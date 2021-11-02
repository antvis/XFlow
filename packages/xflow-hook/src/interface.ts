/** 定义一个hook，注册的逻辑放在handler中  */
export interface IHook<Args = any, Result = any> {
  name: string
  handler: (
    args: Args,
    mainHandler?: IMainHandler<Args, Result>,
  ) => Promise<null | void | IMainHandler<Args, Result>>
  after?: string
  before?: string
}

/** 运行时的hook参数 */
export type IRuntimeHook<Args = any, Result = any> = IHook<Args, Result> | IHook<Args, Result>[]

/** IHookHub的handler回调  */
export interface IMainHandler<Args = any, Result = any> {
  (args: Args): Promise<Result>
}

/** hookhub是多个hook的集合 */
export interface IHookHub<Args, Result> {
  /** 注册hook */
  registerHook: (hookConfig: IHook) => Disposable
  /** 执行所有hook */
  call: (
    args: Args,
    handler: IMainHandler<Args, Result>,
    hookMetas?: IRuntimeHook<Args>,
  ) => Promise<Result | undefined>
}

/** hooks 执行的策略 */
export enum ScheduleTypeEnum {
  /** pipeline串行执行：所有async任务完成后再执行回调 */
  'ASYNC_SRRIES' = 'ASYNC_SRRIES',
  /** async并行执行：等待Promise.all所有async任务后再执行回调 */
  'ASYNC_PARALLEL' = 'ASYNC_PARALLEL',
}

/** 执行的策略  */
export interface ScheduleOptions {
  type: ScheduleTypeEnum
  options: any
}

/** 可Dispose的对象 */
export interface Disposable {
  /**
   * Dispose this object.
   */
  dispose: () => void
}
