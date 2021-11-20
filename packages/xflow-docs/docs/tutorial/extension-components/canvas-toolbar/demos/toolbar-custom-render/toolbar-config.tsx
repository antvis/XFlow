import type { IModelService, IToolbarItemOptions } from '@antv/xflow'
import { createToolbarConfig } from '@antv/xflow'
import { MODELS, XFlowNodeCommands, IconStore } from '@antv/xflow'
import { SaveOutlined, PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
export namespace NSToolbarConfig {
  /** 注册icon 类型 */
  IconStore.set('PlusCircleOutlined', PlusCircleOutlined)
  IconStore.set('DeleteOutlined', DeleteOutlined)
  IconStore.set('SaveOutlined', SaveOutlined)

  /** toolbar依赖的状态 */
  export interface IState {
    isNodeSelected: boolean
  }

  /** 获取toolbar依赖的状态 */
  export const getToolbarState = async (modelService: IModelService) => {
    // nodes
    const nodes = await MODELS.SELECTED_NODES.useValue(modelService)
    return {
      isNodeSelected: nodes.length > 0,
    } as IState
  }
  /** toolbar依赖的配置项 */
  export const getToolbarItems = async (state: IState) => {
    const toolbarGroup1: IToolbarItemOptions[] = []
    toolbarGroup1.push({
      id: XFlowNodeCommands.MOVE_NODE.id,
      text: '选中节点时会使用自定义渲染',
      iconName: 'DeleteOutlined',
      tooltip: '选中节点时会触发自定义渲染',
      isEnabled: state.isNodeSelected,
    })

    return [{ name: 'toolbar', items: toolbarGroup1 }]
  }
}

/** toolbar依赖的配置项 */
export const useToolbarConfig = createToolbarConfig(toolbarConfig => {
  /** 生产 toolbar item */
  toolbarConfig.setToolbarModelService(async (toolbarModel, modelService, toDispose) => {
    // 更新toolbar model
    const updateToolbarState = async () => {
      const toolbarState = await NSToolbarConfig.getToolbarState(modelService)
      const toolbarItems = await NSToolbarConfig.getToolbarItems(toolbarState)
      toolbarModel.setValue(toolbar => {
        toolbar.mainGroups = toolbarItems
      })
    }

    // 监听对应的model
    const model = await MODELS.SELECTED_NODES.getModel(modelService)
    const d = model.watch(() => {
      updateToolbarState()
    })
    toDispose.push(d)
  })

  toolbarConfig.setCustomToolbarRender(async (modelService, updateComponent) => {
    const model = await MODELS.SELECTED_NODES.getModel(modelService)
    model.watch(nodes => {
      if (nodes.length > 0) {
        const CustomRender = () => (
          <div className="custom-toolbar">
            <Button> 支持自定义渲染 </Button>
          </div>
        )
        updateComponent(CustomRender)
      } else {
        updateComponent(null)
      }
    })
    return null
  })
})
