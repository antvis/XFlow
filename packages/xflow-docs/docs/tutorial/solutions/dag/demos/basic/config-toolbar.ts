import type { IToolbarItemOptions } from '@antv/xflow'
import { createToolbarConfig, XFlowGroupCommands, uuidv4 } from '@antv/xflow'
import type { IModelService } from '@antv/xflow'
import { XFlowGraphCommands, MODELS, IconStore } from '@antv/xflow'
import {
  UngroupOutlined,
  SaveOutlined,
  CloudSyncOutlined,
  GroupOutlined,
  GatewayOutlined,
  ShareAltOutlined,
} from '@ant-design/icons'
import { MockApi } from './service'
import { CustomCommands } from './cmd-extensions/constants'
import type { NsDeployDagCmd } from './cmd-extensions/cmd-deploy'
import type { NsGraphCmd, NsGroupCmd } from '@antv/xflow'
import { GROUP_NODE_RENDER_ID } from './constant'

export namespace NSToolbarConfig {
  /** 注册icon 类型 */
  IconStore.set('SaveOutlined', SaveOutlined)
  IconStore.set('CloudSyncOutlined', CloudSyncOutlined)
  IconStore.set('GatewayOutlined', GatewayOutlined)
  IconStore.set('GroupOutlined', GroupOutlined)
  IconStore.set('UngroupOutlined', UngroupOutlined)
  IconStore.set('ShareAltOutlined', ShareAltOutlined)

  /** toolbar依赖的状态 */
  export interface IToolbarState {
    isMultiSelctionActive: boolean
    isNodeSelected: boolean
    isGroupSelected: boolean
  }

  export const getDependencies = async (modelService: IModelService) => {
    return [
      await MODELS.SELECTED_CELLS.getModel(modelService),
      await MODELS.GRAPH_ENABLE_MULTI_SELECT.getModel(modelService),
    ]
  }

  /** toolbar依赖的状态 */
  export const getToolbarState = async (modelService: IModelService) => {
    // isMultiSelctionActive
    const { isEnable: isMultiSelctionActive } = await MODELS.GRAPH_ENABLE_MULTI_SELECT.useValue(
      modelService,
    )
    // isGroupSelected
    const isGroupSelected = await MODELS.IS_GROUP_SELECTED.useValue(modelService)
    // isNormalNodesSelected: node不能是GroupNode
    const isNormalNodesSelected = await MODELS.IS_NORMAL_NODES_SELECTED.useValue(modelService)

    return {
      isNodeSelected: isNormalNodesSelected,
      isGroupSelected,
      isMultiSelctionActive,
    } as NSToolbarConfig.IToolbarState
  }

  export const getToolbarItems = async (state: IToolbarState) => {
    const toolbarGroup1: IToolbarItemOptions[] = []
    const toolbarGroup2: IToolbarItemOptions[] = []
    const toolbarGroup3: IToolbarItemOptions[] = []
    /** 保存数据 */
    toolbarGroup1.push({
      id: XFlowGraphCommands.SAVE_GRAPH_DATA.id,
      iconName: 'SaveOutlined',
      tooltip: '保存数据',
      onClick: async ({ commandService }) => {
        commandService.executeCommand<NsGraphCmd.SaveGraphData.IArgs>(
          XFlowGraphCommands.SAVE_GRAPH_DATA.id,
          { saveGraphDataService: (meta, graphData) => MockApi.saveGraphData(meta, graphData) },
        )
      },
    })
    /** 部署服务按钮 */
    toolbarGroup1.push({
      iconName: 'CloudSyncOutlined',
      tooltip: '部署服务',
      id: CustomCommands.DEPLOY_SERVICE.id,
      onClick: ({ commandService }) => {
        commandService.executeCommand<NsDeployDagCmd.IArgs>(CustomCommands.DEPLOY_SERVICE.id, {
          deployDagService: (meta, graphData) => MockApi.deployDagService(meta, graphData),
        })
      },
    })
    /** 开启框选 */
    toolbarGroup2.push({
      id: XFlowGraphCommands.GRAPH_TOGGLE_MULTI_SELECT.id,
      tooltip: '开启框选',
      iconName: 'GatewayOutlined',
      active: state.isMultiSelctionActive,
      onClick: async ({ commandService }) => {
        commandService.executeCommand<NsGraphCmd.GraphToggleMultiSelect.IArgs>(
          XFlowGraphCommands.GRAPH_TOGGLE_MULTI_SELECT.id,
          {},
        )
      },
    })
    /** 新建群组 */
    toolbarGroup2.push({
      id: XFlowGroupCommands.ADD_GROUP.id,
      tooltip: '新建群组',
      iconName: 'GroupOutlined',
      isEnabled: state.isNodeSelected,
      onClick: async ({ commandService, modelService }) => {
        const cells = await MODELS.SELECTED_CELLS.useValue(modelService)
        const groupChildren = cells.map(cell => cell.id)
        commandService.executeCommand<NsGroupCmd.AddGroup.IArgs>(XFlowGroupCommands.ADD_GROUP.id, {
          nodeConfig: {
            id: uuidv4(),
            renderKey: GROUP_NODE_RENDER_ID,
            groupChildren,
            groupCollapsedSize: { width: 200, height: 40 },
            label: '新建群组',
          },
        })
      },
    })
    /** 解散群组 */
    toolbarGroup2.push({
      id: XFlowGroupCommands.DEL_GROUP.id,
      tooltip: '解散群组',
      iconName: 'UngroupOutlined',
      isEnabled: state.isGroupSelected,
      onClick: async ({ commandService, modelService }) => {
        const cell = await MODELS.SELECTED_NODE.useValue(modelService)
        const nodeConfig = cell.getData()
        commandService.executeCommand<NsGroupCmd.AddGroup.IArgs>(XFlowGroupCommands.DEL_GROUP.id, {
          nodeConfig: nodeConfig,
        })
      },
    })

    toolbarGroup3.push({
      id: XFlowGraphCommands.GRAPH_INSTANCE_COMMAND.id,
      tooltip: '可以使用 x6 graph 的命令',
      iconName: 'ShareAltOutlined',
      onClick: async ({ commandService, modelService }) => {
        commandService.executeCommand<NsGraphCmd.GraphInstanceCmd.IArgs>(
          XFlowGraphCommands.GRAPH_INSTANCE_COMMAND.id,
          {
            useGraph: async x6 => {
              const node = x6.getCellById('node-1')
              console.log(node, x6)
              return node
            },
          },
        )
      },
    })

    return [
      { name: 'graphData', items: toolbarGroup1 },
      { name: 'groupOperations', items: toolbarGroup2 },
      {
        name: 'customCmd',
        items: toolbarGroup3,
      },
    ]
  }
}
export const useToolbarConfig = createToolbarConfig(toolbarConfig => {
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
})
