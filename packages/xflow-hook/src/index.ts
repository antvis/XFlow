import type { Disposable, IHook, IHookHub, IRuntimeHook, ScheduleOptions } from './interface'
import { ScheduleTypeEnum } from './interface'
import { ErrorUtils, HookUtils, Deferred } from './utils'

export { ScheduleTypeEnum } from './interface'
export type {
  Disposable,
  IHook,
  IHookHub,
  IRuntimeHook,
  IMainHandler,
  ScheduleOptions,
} from './interface'

export class HookHub<Args = any, Result = Args | null> implements IHookHub<Args, Result> {
  /** hooks */
  private hookMap: Map<string, IHook<Args, Result>>
  /** scheduleType */
  private scheduleType: ScheduleTypeEnum = ScheduleTypeEnum.ASYNC_SRRIES

  constructor(options?: ScheduleOptions) {
    this.hookMap = new Map()
    if (options && options.type) {
      this.scheduleType = options.type
    }
  }
  /** hasRegistered */
  hasHook = (hookName: string): boolean => {
    return this.hookMap.has(hookName)
  }
  /** getHooks */
  getHooks = (
    runtimeHooks: IRuntimeHook<Args, Result> = [],
    sort = true,
  ): IHook<Args, Result>[] => {
    const hooks = HookUtils.normalize(runtimeHooks, this.hookMap)
    if (!sort) {
      return hooks
    }
    return HookUtils.sort(hooks, this.hookMap)
  }
  /** registerHook */
  registerHook = (hookMeta: IHook<Args, Result>): Disposable => {
    if (this.hookMap.has(hookMeta.name)) {
      console.error(`${hookMeta.name} is duplicated in hookmap`)
    }
    this.hookMap.set(hookMeta.name, hookMeta)
    return {
      dispose: () => {
        this.hookMap.delete(hookMeta.name)
      },
    }
  }
  /** registerHook */
  call = async (
    args: Args,
    main: (mainArgs: Args) => Promise<Result> = async mainArgs => mainArgs as unknown as Result,
    runtimeHook: IRuntimeHook<Args, Result> = [],
  ): Promise<Result | undefined> => {
    // TODO: 这里加cache
    const hooks = this.getHooks(runtimeHook, true)
    const scheduler = this.schedulers[this.scheduleType]
    return scheduler(args, main, hooks)
  }
  /** 执行hook的scheduler */
  private schedulers = {
    /** pipeline执行 */
    [ScheduleTypeEnum.ASYNC_SRRIES]: async (
      args: Args,
      main: (args: Args) => Promise<Result>,
      hooks: IHook<Args, Result>[] = [],
    ) => {
      let callback: null | ((args: Args) => Promise<Result>) = main
      /** 用 hook 加工 args  */
      for (const hook of hooks) {
        if ([0, 1].includes(hook.handler.length)) {
          await hook.handler.call(this, args)
          continue
        }
        if ([2].includes(hook.handler.length) && callback !== null) {
          // eslint-disable-next-line @typescript-eslint/no-shadow
          const result: void | null | ((args: Args) => Promise<Result>) = await hook.handler.call(
            this,
            args,
            callback,
          )
          /** 如果返回为null，则直接中断执行 */
          if (result === null) {
            callback = null
            break
          } else if (typeof result === 'function') {
            callback = result
            continue
          }
        }
        const err = ErrorUtils.InvalidHookArguments(hook)
        throw err
      }
      /** 检查是否被替换为null */
      if (callback) {
        return await callback.call(this, args)
      }
    },
    [ScheduleTypeEnum.ASYNC_PARALLEL]: async (
      args: Args,
      main: (args: Args) => Promise<Result>,
      hooks: IHook<Args, Result>[] = [],
    ) => {
      /** 同时触发 hook */
      const promises = hooks.map(hook => {
        if ([0, 1].includes(hook.handler.length)) {
          return hook.handler.call(this, args)
        }
        if ([2].includes(hook.handler.length)) {
          return hook.handler.call(this, args, main)
        }
        throw ErrorUtils.InvalidHookArguments(hook)
      })
      const defer = new Deferred()
      Promise.all(promises).then(res => defer.resolve(res))
      /** 检查是否被替换 */
      if (main) {
        return await main.call(this, defer as any as Args)
      }
    },
  } as const
}
