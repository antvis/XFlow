import { createModelServiceConfig } from '@antv/xflow'

export const NS_LOADING_STATE = {}
NS_LOADING_STATE.id = 'test'

export const useModelServiceConfig = createModelServiceConfig(config => {
  config.registerModel(registry => {
    return registry.registerModel({
      id: NS_LOADING_STATE.id,
      getInitialValue: () => {
        return true
      },
    })
  })
})

export const useLoadingState = async contextService => {
  const ctx = await contextService.awaitModel(NS_LOADING_STATE.id)
  return ctx.getValidValue()
}
