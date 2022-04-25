import { createToolbarConfig, uuidv4 } from '@antv/xflow'
import {
  XFlowGraphCommands,
  XFlowGroupCommands,
  XFlowDagCommands,
  NsGraphStatusCommand,
  MODELS,
  IconStore,
} from '@antv/xflow'
import {
  UngroupOutlined,
  SaveOutlined,
  CloudSyncOutlined,
  GroupOutlined,
  GatewayOutlined,
  PlaySquareOutlined,
  StopOutlined,
} from '@ant-design/icons'
import { MockApi } from './service'
import { CustomCommands } from './cmd-extensions/constants'
import { GROUP_NODE_RENDER_ID } from './constant'
import { Popconfirm } from 'antd'
import React from 'react'

const NSToolbarConfig = {}

IconStore.set('SaveOutlined', SaveOutlined)
IconStore.set('CloudSyncOutlined', CloudSyncOutlined)
IconStore.set('GatewayOutlined', GatewayOutlined)
IconStore.set('GroupOutlined', GroupOutlined)
IconStore.set('UngroupOutlined', UngroupOutlined)
IconStore.set('PlaySquareOutlined', PlaySquareOutlined)
IconStore.set('StopOutlined', StopOutlined)

NSToolbarConfig.getDependencies = async modelService => {
  return [
    await MODELS.SELECTED_CELLS.getModel(modelService),
    await MODELS.GRAPH_ENABLE_MULTI_SELECT.getModel(modelService),
    await NsGraphStatusCommand.MODEL.getModel(modelService),
  ]
}

/** toolbar依赖的状态 */
NSToolbarConfig.getToolbarState = async modelService => {
  // isMultiSelectionActive
  const { isEnable: isMultiSelectionActive } = await MODELS.GRAPH_ENABLE_MULTI_SELECT.useValue(
    modelService,
  )
  // isGroupSelected
  const isGroupSelected = await MODELS.IS_GROUP_SELECTED.useValue(modelService)
  // isNormalNodesSelected: node不能是GroupNode
  const isNormalNodesSelected = await MODELS.IS_NORMAL_NODES_SELECTED.useValue(modelService)
  // statusInfo
  const statusInfo = await NsGraphStatusCommand.MODEL.useValue(modelService)

  return {
    isNodeSelected: isNormalNodesSelected,
    isGroupSelected,
    isMultiSelectionActive,
    isProcessing: statusInfo.graphStatus === NsGraphStatusCommand.StatusEnum.PROCESSING,
  }
}

NSToolbarConfig.getToolbarItems = async state => {
  const toolbarGroup1 = []
  const toolbarGroup2 = []
  const toolbarGroup3 = []
  /** 保存数据 */
  toolbarGroup1.push({
    id: XFlowGraphCommands.SAVE_GRAPH_DATA.id,
    iconName: 'SaveOutlined',
    tooltip: '保存数据',
    onClick: async ({ commandService }) => {
      commandService.executeCommand(XFlowGraphCommands.SAVE_GRAPH_DATA.id, {
        saveGraphDataService: (meta, graphData) => MockApi.saveGraphData(meta, graphData),
      })
    },
  })
  /** 部署服务按钮 */
  toolbarGroup1.push({
    iconName: 'CloudSyncOutlined',
    tooltip: '部署服务',
    id: CustomCommands.DEPLOY_SERVICE.id,
    onClick: ({ commandService }) => {
      commandService.executeCommand(CustomCommands.DEPLOY_SERVICE.id, {
        deployDagService: (meta, graphData) => MockApi.deployDagService(meta, graphData),
      })
    },
  })
  /** 开启框选 */
  toolbarGroup2.push({
    id: XFlowGraphCommands.GRAPH_TOGGLE_MULTI_SELECT.id,
    tooltip: '开启框选',
    iconName: 'GatewayOutlined',
    active: state.isMultiSelectionActive,
    onClick: async ({ commandService }) => {
      commandService.executeCommand(XFlowGraphCommands.GRAPH_TOGGLE_MULTI_SELECT.id, {})
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
      commandService.executeCommand(XFlowGroupCommands.ADD_GROUP.id, {
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
      commandService.executeCommand(XFlowGroupCommands.DEL_GROUP.id, {
        nodeConfig: nodeConfig,
      })
    },
  })

  toolbarGroup3.push({
    id: XFlowDagCommands.QUERY_GRAPH_STATUS.id + 'play',
    tooltip: '开始执行',
    iconName: 'PlaySquareOutlined',
    isEnabled: !state.isProcessing,
    onClick: async ({ commandService }) => {
      commandService.executeCommand(XFlowDagCommands.QUERY_GRAPH_STATUS.id, {
        graphStatusService: MockApi.graphStatusService,
        loopInterval: 3000,
      })
    },
  })
  toolbarGroup3.push({
    id: XFlowDagCommands.QUERY_GRAPH_STATUS.id + 'stop',
    tooltip: '停止执行',
    iconName: 'StopOutlined',
    isEnabled: state.isProcessing,
    onClick: async ({ commandService }) => {
      commandService.executeCommand(XFlowDagCommands.QUERY_GRAPH_STATUS.id, {
        graphStatusService: MockApi.stopGraphStatusService,
        loopInterval: 5000,
      })
    },
    render: props => {
      return (
        <Popconfirm
          title="确定停止执行？"
          onConfirm={() => {
            props.onClick()
          }}
        >
          {props.children}
        </Popconfirm>
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
