import React from 'react'
import { RxModel, NsModel } from '../common/rx-model'

/** 判断model是否Mount */
const isRefMounted = (ref: React.RefObject<boolean>) => {
  return ref && ref.current
}

/** 用于判断model是否Mount */
const useIsMoutedRef = () => {
  /** 记录当前组件的加载状态 */
  const ref = React.useRef(true)
  React.useEffect(() => {
    return () => {
      ref.current = false
    }
  }, [])
  return ref
}

/** 将model和react绑定 */
export const useModel = <T,>(model: RxModel<T>) => {
  /** 记录当前组件的加载状态 */
  const ref = useIsMoutedRef()
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
  }, [model])
  const value = state
  const canRender = NsModel.isValidValue(value)
  const setValue = React.useCallback<NsModel.ISetValue<T>>(val => model.setValue(val), [model])
  return [value, setValue, canRender] as [T, NsModel.ISetValue<T>, boolean]
}
/** 在组件内新建一个model */
export const useComponentCtx = <T,>(initialState: T) => {
  const model = React.useMemo(() => new RxModel(initialState), [initialState])
  /** model 和 state 绑定触发view刷新 */
  const [modelValue, setModelValue, canRender] = useModel(model)
  /** unMount时dispose */
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
