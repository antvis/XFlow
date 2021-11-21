import type { Observable } from 'rxjs'
import { BehaviorSubject, asyncScheduler } from 'rxjs'
import { throttleTime, filter, distinctUntilChanged } from 'rxjs/operators'
import { Disposable, DisposableCollection } from './disposable'
import type { Draft } from 'immer'
import { produce, setAutoFreeze, enableMapSet } from 'immer'
import { Deferred } from './deferred'

// docs:https://immerjs.github.io/immer/map-set
enableMapSet()
// https://immerjs.github.io/immer/freezing
setAutoFreeze(false)

export namespace NsModel {
  /** model的类型 */
  export interface IModel<T> {
    /** 传入一个回调函数来订阅model的变化 */
    watch: IWatch<T>
    /** 更新model: 支持传值或者传入更新函数 */
    setValue: ISetValue<T>
    /** 获取model的值 */
    getValue: () => T | EmptyType
    /** 是否有非空的值 */
    hasValidValue: () => boolean
    /** 通过Promise获取一个非空值 */
    getValidValue: () => Promise<T>
  }
  /** 更新model的方法 */
  export interface ISetValue<T> {
    /** 直接设置一个新的值 */
    (value: T): void
    /** 通过函数的参数获取state，并通过immer的方式来更新这个state */
    (producer: (s: Draft<T>) => void): void
  }
  /** 订阅model的方法 */
  export interface IWatch<T> {
    (
      /** onChange时会执行的回调 */
      cb: (value: T) => void,
      /** 可以对事件流进行的处理 */
      pipeFunction?: (observable: Observable<T | EmptyType>) => Observable<T>,
    ): Disposable
  }

  /**
   * observable 空值，当作model ready的变量
   * 空值不会触发subscrition
   */
  export const EMPTY_VALUE = Symbol('EMPTY_MODEL_VALUE')
  /** Empty Value 类型 */
  export type EmptyType = typeof EMPTY_VALUE
  /** 判断是否是空 */
  export function isValidValue<T>(val: unknown): val is T {
    return val !== EMPTY_VALUE
  }

  /** 默认的对事件性能优化方法：只在value不同时才触发，同时增加throttle */
  export function defaultPipeFunction<T>(observable: Observable<T | EmptyType>) {
    return observable.pipe(
      distinctUntilChanged(),
      filter(item => isValidValue<T>(item)),
      throttleTime(17, asyncScheduler, { leading: false, trailing: true }),
    ) as Observable<T>
  }
}

export class RxModel<T = any> implements NsModel.IModel<T> {
  /** 储存类型 */
  private subject$: BehaviorSubject<T | NsModel.EmptyType>

  /** 最大监听数量 */
  private maxSubscription: number

  /** disposable */
  private toDispose = new DisposableCollection()

  /** 初始化 */
  constructor(
    initialValue: T | NsModel.EmptyType = NsModel.EMPTY_VALUE,
    maxSubscription: number = 30,
  ) {
    this.subject$ = new BehaviorSubject<T | NsModel.EmptyType>(initialValue || NsModel.EMPTY_VALUE)
    this.maxSubscription = maxSubscription
    this.toDispose.push(
      Disposable.create(() => {
        this.subject$.complete()
        this.subject$.unsubscribe()
        // @ts-ignore
        this.subject$ = null
      }),
    )
  }

  /** 监听model变化 */
  public watch: NsModel.IWatch<T> = (
    cb: (value: T) => void,
    pipeFunction: (
      observable: Observable<T | NsModel.EmptyType>,
    ) => Observable<T> = NsModel.defaultPipeFunction,
  ) => {
    if (this.subject$.observers.length + 1 > this.maxSubscription) {
      console.warn(`${this.subject$} reach maxSubscription limitation, please check`)
    }
    const observable = pipeFunction ? pipeFunction(this.subject$) : this.subject$
    const subscription = observable.subscribe(cb)
    return Disposable.create(() => {
      subscription.unsubscribe()
    })
  }

  /** 获取model的值 */
  public getValue = () => {
    return this.subject$.getValue()
  }

  /** 更新model */
  public setValue: NsModel.ISetValue<T> = value => {
    if (!this.subject$) {
      return
    }
    if (typeof value === 'function') {
      const currentValue = this.subject$.getValue()
      const nextState = produce(currentValue, draft => {
        value(draft)
      })
      if (NsModel.isValidValue<T>(nextState)) {
        this.setValue(nextState)
      }
      return
    }
    this.subject$.next(value)
  }

  /** 是否已有值 */
  public hasValidValue: () => boolean = () => {
    const value = this.getValue()
    return NsModel.isValidValue<T>(value)
  }

  /** 获取非空的值 */
  public getValidValue = async () => {
    const deffer = new Deferred<T>()
    /** 返回非空的值 */
    if (this.hasValidValue()) {
      return this.getValue() as T
    }
    /** 返回会resolve非空值的Promise */
    const d = this.watch(val => {
      if (NsModel.isValidValue<T>(val)) {
        deffer.resolve(val)
        d.dispose()
      }
    })
    return deffer.promise
  }

  /** disposable */
  public dispose = () => {
    this.toDispose.dispose()
  }
}
