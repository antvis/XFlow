/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ObjectExt } from '@antv/x6';

type mpObj<T> = { [k in keyof T | string | number | symbol]: any };

export function apply<L, R>(
  target: mpObj<L>,
  patchItem: mpObj<R>,
): Partial<L> & Partial<R>;
export function apply<L, R>(target: mpObj<L>, patchItem: mpObj<R>): R;
export function apply<L, R>(target: mpObj<L>, patchItem: mpObj<R>): {};
export function apply<L, R>(target: mpObj<L>, patchItem: null): null;
export function apply<L, R>(target: mpObj<L>, patchItem: string): string;
export function apply<L, R>(target: mpObj<L>, patchItem: number): number;
export function apply<L, R>(target: mpObj<L>, patchItem: undefined): undefined;
export function apply<L, R>(target: mpObj<L>, patchItem: R[]): R[];

export function apply(target: any, patchItem: any): any {
  /**
   * If the patch is anything other than an object,
   * the result will always be to replace
   * the entire target with the entire patch.
   */
  if (typeof patchItem !== 'object' || Array.isArray(patchItem) || !patchItem) {
    return JSON.parse(JSON.stringify(patchItem)); //return new instance of variable
  }

  if (
    typeof patchItem === 'object' &&
    patchItem.toJSON !== undefined &&
    typeof patchItem.toJSON === 'function'
  ) {
    return patchItem.toJSON();
  }
  /** Also, it is not possible to
   * patch part of a target that is not an object,
   * such as to replace just some of the values in an array.
   */
  let targetResult = target;
  if (typeof target !== 'object') {
    //Target is empty/not an object, so basically becomes patch, minus any null valued sections (becomes {} + patch)
    targetResult = { ...patchItem };
  }

  Object.keys(patchItem).forEach((k) => {
    if (!targetResult.hasOwnProperty(k)) targetResult[k] = patchItem[k]; //This ensure the key exists and TS can't throw a wobbly over an undefined key
    if (patchItem[k] === null) {
      delete targetResult[k];
    } else {
      targetResult[k] = apply(targetResult[k], patchItem[k]);
    }
  });
  return targetResult;
}

export function flatten(obj: any, delim = '/', stop?: (val: any) => boolean) {
  const ret: { [key: string]: any } = {};

  Object.keys(obj).forEach((key) => {
    const val = obj[key];
    let deep = ObjectExt.isPlainObject(val);
    if (deep && stop && stop(val)) {
      deep = false;
    }

    if (deep) {
      const flatObject = flatten(val, delim, stop);
      Object.keys(flatObject).forEach((flatKey) => {
        ret[key + delim + flatKey] = flatObject[flatKey];
      });
    } else {
      ret[key] = val;
    }
  });

  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) {
      continue;
    }
  }

  return ret;
}
