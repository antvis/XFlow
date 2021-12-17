import type { IHook } from './interface'
import toposort from 'toposort'

export namespace ErrorUtils {
  export enum ErrorEnum {
    'INVALID_HOOK_BEFORE' = 'INVALID_HOOK_BEFORE',
    'INVALID_HOOK_AFTER' = 'INVALID_HOOK_AFTER',
    'INVALID_HOOK_ARGS_LENGTH' = 'INVALID_HOOK_ARGS_LENGTH',
  }

  export class HookError extends Error {
    private code: string
    contexts: Record<string, any>
    constructor(code: string, message: string | string[], ...contexts: any[]) {
      if (Array.isArray(message)) {
        message = message
          .filter(function (line) {
            return !!line
          })
          .join(' ')
      }
      super(`${code}: ${message}`)
      if ((Error as any).captureStackTrace) {
        ;(Error as any).captureStackTrace(this, HookError)
      }
      this.code = code
      this.contexts = {}
      contexts.forEach(context => {
        if (typeof context === 'object') {
          Object.entries(context).forEach(pair => {
            const [key, value] = pair
            if (key !== 'key' && value) {
              this.contexts[key] = JSON.parse(JSON.stringify(value))
            }
          })
        }
      })
    }
    toString() {
      return `${this.code}: ${this.message}`
    }
  }
  const createError = (code: string, message: string[], ...args: any[]) => {
    return new HookError(code, message, ...args)
  }
  export const HookBeforeError = () => {
    return createError(ErrorEnum.INVALID_HOOK_BEFORE, [
      'hook require a before dependency but not exist in hookmap',
    ])
  }
  export const HookAfterError = () => {
    return createError(ErrorEnum.INVALID_HOOK_AFTER, [
      'hook require a after dependency but not exist in hookmap',
    ])
  }
  export const InvalidHookArguments = (hook: IHook) => {
    return createError(ErrorEnum.INVALID_HOOK_ARGS_LENGTH, [
      'hook handlers must have 0 to 2 arguments',
      `but got ${hook.handler.length}`,
    ])
  }
}

export namespace HookUtils {
  /** 处理 runtime hooks */
  export const normalize = (
    hookConfig: IHook | IHook[] = [],
    hookMap: Map<string, IHook>,
  ): IHook[] => {
    const runtimeHook = Array.isArray(hookConfig) ? hookConfig : [hookConfig]
    const innerHooks: IHook[] = []
    hookMap.forEach(val => {
      innerHooks.push(val)
    })

    return [...innerHooks, ...runtimeHook].filter(item => item && !!item.handler)
  }
  /** 排序 hooks */
  export const sort = (hooks: IHook[] = [], hookMap: Map<string, IHook>): IHook[] => {
    const edges: [IHook, IHook][] = []
    hooks.forEach(hook => {
      if (hook.before) {
        if (!hookMap.has(hook.before)) {
          throw ErrorUtils.HookBeforeError()
        }
        const edge = [hook, hookMap.get(hook.before)] as [IHook, IHook]
        edges.push(edge)
      }
      if (hook.after) {
        if (!hookMap.has(hook.after)) {
          throw ErrorUtils.HookBeforeError()
        }
        const edge = [hookMap.get(hook.after), hook] as [IHook, IHook]
        edges.push(edge)
      }
    })
    const sortedHooks = toposort.array(hooks, edges)
    return sortedHooks
  }
}

export class Deferred<T> {
  isResolved: boolean = false

  isRejected: boolean = false

  resolve!: (value: T) => void

  reject!: (err: any) => void

  promise: Promise<T>

  constructor() {
    this.promise = new Promise<T>((resolve, reject) => {
      this.resolve = args => {
        this.isResolved = true
        resolve(args)
      }
      this.reject = args => {
        this.isRejected = true
        reject(args)
      }
    })
  }
}
