export class Deferred<T> {
  isResolved: boolean = false

  isRejected: boolean = false

  resolve!: (value?: T) => void

  reject!: (err?: any) => void

  promise: Promise<T>

  constructor() {
    this.promise = new Promise<T>((resolve, reject) => {
      this.resolve = (...args) => {
        this.isResolved = true
        resolve(...args)
      }
      this.reject = (...args) => {
        this.isRejected = true
        reject(...args)
      }
    })
  }
}
