import { createModelServiceConfig, Disposable, IModelService } from '@antv/xflow'

export namespace NS_LOADING_STATE {
  export const id = 'test'
  export interface IState {
    loading: boolean
  }
}

export const useModelServiceConfig = createModelServiceConfig(config => {
  config.registerModel(registry => {
    return registry.registerModel({
      id: NS_LOADING_STATE.id,
      getInitialValue: () => ({
        loading: true,
      }),
      watchChange: async self => {
        return Disposable.create(() => {})
      },
    })
  })
})

export const useLoadingState = async (modelService: IModelService) => {
  const ctx = await modelService.awaitModel<NS_LOADING_STATE.IState>(NS_LOADING_STATE.id)
  return ctx.getValidValue()
}
