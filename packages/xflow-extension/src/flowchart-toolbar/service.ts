import { createToolbarConfig } from '../canvas-toolbar'
import { NSToolbarConfig, registerIcon } from './utils'
export const useToolbarConfig = createToolbarConfig((toolbarConfig, proxy) => {
  //const { commandService } = useXFlowApp()
  const props = proxy.getValue()
  const { getCustomRenderComponent } = props
  console.log(props, '@')
  registerIcon()
  /** 生产 toolbar item */
  toolbarConfig.setToolbarModelService(async (toolbarModel, modelService, toDispose) => {
    const updateToolbarModel = async () => {
      const state = await NSToolbarConfig.getToolbarState(modelService)
      const toolbarItems = await NSToolbarConfig.getToolbarItems(state)

      toolbarModel.setValue(toolbar => {
        toolbar.mainGroups = toolbarItems
      })
    }
    const models = await NSToolbarConfig.getDependencies(modelService)
    const subscriptions = models.map(model => {
      return model.watch(async () => {
        updateToolbarModel()
      })
    })
    toDispose.pushAll(subscriptions)
  })
  if (getCustomRenderComponent) {
    toolbarConfig.setCustomToolbarRender(async (modelService, updateComponent) => {
      const customRender = getCustomRenderComponent({ modelService })
      updateComponent(customRender)
      return null
    })
  }
})
