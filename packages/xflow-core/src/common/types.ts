export type MaybeArray<T> = T | T[]
export type MaybePromise<T> = T | PromiseLike<T>

export type Writeable<T> = { -readonly [P in keyof T]: T[P] }
export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer I)[] ? RecursivePartial<I>[] : RecursivePartial<T[P]>
}
export type Simplify<T> = Pick<T, keyof T>
export type Newable<T> = new (...args: any[]) => T
export type ClassOf<T> = Newable<T>
export type Abstract<T> = {
  prototype: T
}
export type Token<T> = string | symbol | Newable<T> | Abstract<T>
