import React from 'react'
import type { Disposable } from '../common/disposable'
import { RxModel, NsModel } from './rx-model'

/** 判断model是否Mount */
const isRefMounted = (ref: React.RefObject<boolean>) => {
  return ref && ref.current
}
/** 用于判断model是否Mount */
export const useIsMountedRef = () => {
  /** 记录当前组件的加载状态 */
  const ref = React.useRef(true)
  React.useEffect(() => {
    return () => {
      ref.current = false
    }
  }, [])
  return ref
}

/** 判断model是否Mount */
export const useModel = <T,>(model: RxModel<T>) => {
  /** 记录当前组件的加载状态 */
  const ref = useIsMountedRef()
  const [state, setState] = React.useState(model.getValue())
  React.useEffect(() => {
    const disposeable = model.watch(val => {
      if (isRefMounted(ref)) {
        setState(val)
      }
    })
    return () => {
      disposeable.dispose()
    }
    /* eslint-disable-next-line  */
  }, [setState])
  const value = state
  const canRender = NsModel.isValidValue(value)
  const setValue = React.useCallback<NsModel.ISetValue<T>>(val => model.setValue(val), [model])
  return [value, setValue, canRender] as [T, NsModel.ISetValue<T>, boolean]
}

/** 在组件内部新建一个model */
export const createComponentModel = <T,>(initialState: T) => {
  /* eslint-disable-next-line  */
  const model = React.useMemo(() => new RxModel(initialState), [])
  /** model 和 state 绑定触发view刷新 */
  /* eslint-disable-next-line  */
  const [modelValue, setModelValue, canRender] = useModel(model)
  /** unMount时dispose */
  /* eslint-disable-next-line  */
  React.useEffect(() => {
    return () => {
      model.dispose()
    }
  }, [model])
  return [modelValue, setModelValue, model, canRender] as [
    T,
    NsModel.ISetValue<T>,
    RxModel<T>,
    boolean,
  ]
}

/**
 * useModelAsync：
 * watch model的值，
 * 把model的值通过useState和组件状态关联起来
 */
export const useModelAsync = <T extends any, InitialState = T>(args: {
  getModel: () => Promise<NsModel.IModel<T>>
  initialState: InitialState
}) => {
  const { getModel, initialState } = args
  /** 记录当前组件的加载状态 */
  const isMountedRef = useIsMountedRef()
  const modelRef = React.useRef<NsModel.IModel<T>>()
  /** 订阅 model */
  const [state, setState] = React.useState<T | InitialState>(initialState)
  React.useEffect(() => {
    let d: Disposable
    getModel().then(async model => {
      modelRef.current = model
      const newState = await model.getValidValue()
      if (!isMountedRef.current) {
        return
      }
      setState(newState)
      d = model.watch(val => {
        if (isMountedRef.current) {
          setState(val)
        }
      })
    })
    return () => {
      if (d && d.dispose) {
        d.dispose()
      }
    }
    /* eslint-disable-next-line  */
  }, [])

  return [state, setState, modelRef.current] as [
    T | InitialState,
    React.Dispatch<React.SetStateAction<T>>,
    NsModel.IModel<T>,
  ]
}
