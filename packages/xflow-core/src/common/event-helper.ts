import { Disposable } from './disposable'

interface Target {
  on: (e: any, cb: Function) => void
  off: (e: any, cb: Function) => void
}

export const disposableSubscribe = (target: Target, eventName: string, cb: Function) => {
  target.on(eventName, cb)
  return Disposable.create(() => {
    target.off(eventName, cb)
  })
}
