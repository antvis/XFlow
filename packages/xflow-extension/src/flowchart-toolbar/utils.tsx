import type {
  IModelService,
  IToolbarItemOptions,
  NsGroupCmd,
  NsGraphCmd,
  NsNodeCmd,
} from '@antv/xflow-core'
import {
  uuidv4,
  XFlowGroupCommands,
  XFlowNodeCommands,
  XFlowGraphCommands,
  MODELS,
  IconStore,
} from '@antv/xflow-core'
import type { Cell } from '@antv/x6'
import { Modal } from 'antd'
import {
  UngroupOutlined,
  SaveOutlined,
  GroupOutlined,
  GatewayOutlined,
  UndoOutlined,
  RedoOutlined,
  VerticalAlignTopOutlined,
  VerticalAlignBottomOutlined,
  CopyOutlined,
  SnippetsOutlined,
  ClearOutlined,
} from '@ant-design/icons'
import React from 'react'

/** 注册icon 类型 */
export const registerIcon = () => {
  IconStore.set('SaveOutlined', SaveOutlined)
  IconStore.set('UndoOutlined', UndoOutlined)
  IconStore.set('RedoOutlined', RedoOutlined)
  IconStore.set('VerticalAlignTopOutlined', VerticalAlignTopOutlined)
  IconStore.set('VerticalAlignBottomOutlined', VerticalAlignBottomOutlined)
  IconStore.set('GatewayOutlined', GatewayOutlined)
  IconStore.set('GroupOutlined', GroupOutlined)
  IconStore.set('UngroupOutlined', UngroupOutlined)
  IconStore.set('CopyOutlined', CopyOutlined)
  IconStore.set('SnippetsOutlined', SnippetsOutlined)
  IconStore.set('ClearOutlined', ClearOutlined)
}

const GROUP_NODE_RENDER_ID = 'GROUP_NODE_RENDER_ID'

export namespace NSToolbarConfig {
  /** toolbar依赖的状态 */
  export interface IToolbarState {
    isMultiSelctionActive: boolean
    isGroupSelected: boolean
    isNodeSelected: boolean
    isUndoable: boolean
    isRedoable: boolean
    cells: Cell[]
  }

  export const getDependencies = async (modelService: IModelService) => {
    return [
      await MODELS.SELECTED_NODES.getModel(modelService),
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
    // undo redo
    const isUndoable = await MODELS.HISTORY_UNDOABLE.useValue(modelService)
    const isRedoable = await MODELS.HISTORY_REDOABLE.useValue(modelService)

    // 能否复制
    const cells = await MODELS.SELECTED_CELLS.useValue(modelService)

    return {
      isUndoable,
      isRedoable,
      isNodeSelected: isNormalNodesSelected,
      isGroupSelected,
      isMultiSelctionActive,
      cells,
    } as IToolbarState
  }

  export const getToolbarItems = async (
    state: IToolbarState,
    registerToolbarItems?: IToolbarItemOptions[],
  ) => {
    if (registerToolbarItems) {
      return [
        {
          name: 'graphData',
          items: registerToolbarItems,
        },
      ]
    }

    const toolbarGroup: IToolbarItemOptions[] = []
    /** 撤销 */
    toolbarGroup.push({
      tooltip: '撤销',
      iconName: 'UndoOutlined',
      id: XFlowGraphCommands.GRAPH_HISTORY_UNDO.id,
      isEnabled: state.isUndoable,
      onClick: async ({ commandService }) => {
        commandService.executeCommand<NsGraphCmd.GraphHistoryUndo.IArgs>(
          XFlowGraphCommands.GRAPH_HISTORY_UNDO.id,
          {},
        )
      },
    })

    /** 重做 */
    toolbarGroup.push({
      tooltip: '重做',
      iconName: 'RedoOutlined',
      id: XFlowGraphCommands.GRAPH_HISTORY_REDO.id,
      isEnabled: state.isRedoable,
      onClick: async ({ commandService }) => {
        commandService.executeCommand<NsGraphCmd.GraphHistoryRedo.IArgs>(
          XFlowGraphCommands.GRAPH_HISTORY_REDO.id,
          {},
        )
      },
    })

    /** FRONT_NODE */
    toolbarGroup.push({
      tooltip: '置前',
      iconName: 'VerticalAlignTopOutlined',
      id: XFlowNodeCommands.FRONT_NODE.id,
      isEnabled: state.isNodeSelected,
      onClick: async ({ commandService, modelService }) => {
        const node = await MODELS.SELECTED_NODE.useValue(modelService)
        commandService.executeCommand<NsNodeCmd.FrontNode.IArgs>(XFlowNodeCommands.FRONT_NODE.id, {
          nodeId: node?.id,
        })
      },
    })

    /** BACK_NODE */
    toolbarGroup.push({
      tooltip: '置后',
      iconName: 'VerticalAlignBottomOutlined',
      id: XFlowNodeCommands.BACK_NODE.id,
      isEnabled: state.isNodeSelected,
      onClick: async ({ commandService, modelService }) => {
        const node = await MODELS.SELECTED_NODE.useValue(modelService)
        commandService.executeCommand<NsNodeCmd.FrontNode.IArgs>(XFlowNodeCommands.BACK_NODE.id, {
          nodeId: node?.id,
        })
      },
    })

    /** 开启框选 */
    toolbarGroup.push({
      tooltip: '开启框选',
      iconName: 'GatewayOutlined',
      id: XFlowGraphCommands.GRAPH_TOGGLE_MULTI_SELECT.id,
      active: state.isMultiSelctionActive,
      onClick: async ({ commandService }) => {
        commandService.executeCommand<NsGraphCmd.GraphToggleMultiSelect.IArgs>(
          XFlowGraphCommands.GRAPH_TOGGLE_MULTI_SELECT.id,
          {},
        )
      },
    })

    /** 新建群组 */
    toolbarGroup.push({
      tooltip: '新建群组',
      iconName: 'GroupOutlined',
      id: XFlowGroupCommands.ADD_GROUP.id,
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
    toolbarGroup.push({
      tooltip: '解散群组',
      iconName: 'UngroupOutlined',
      id: XFlowGroupCommands.DEL_GROUP.id,
      isEnabled: state.isGroupSelected,
      onClick: async ({ commandService, modelService }) => {
        const cell = await MODELS.SELECTED_NODE.useValue(modelService)
        const nodeConfig = cell.getData()
        commandService.executeCommand<NsGroupCmd.AddGroup.IArgs>(XFlowGroupCommands.DEL_GROUP.id, {
          nodeConfig: nodeConfig,
        })
      },
    })

    /** 复制  */
    toolbarGroup.push({
      tooltip: '复制',
      iconName: 'CopyOutlined',
      id: XFlowGraphCommands.GRAPH_COPY.id,
      isEnabled: state.cells.length > 0,
      onClick: async ({ commandService }) => {
        commandService.executeCommand<NsGraphCmd.GraphCopySelection.IArgs>(
          XFlowGraphCommands.GRAPH_COPY.id,
          {},
        )
      },
    })

    /** 粘贴 */
    toolbarGroup.push({
      tooltip: '粘贴',
      iconName: 'SnippetsOutlined',
      id: XFlowGraphCommands.GRAPH_PASTE.id,
      onClick: async ({ commandService }) => {
        commandService.executeCommand<NsGraphCmd.GraphPasteSelection.IArgs>(
          XFlowGraphCommands.GRAPH_PASTE.id,
          {},
        )
      },
    })

    /** 保存数据 */
    toolbarGroup.push({
      tooltip: '保存',
      iconName: 'SaveOutlined',
      id: XFlowGraphCommands.SAVE_GRAPH_DATA.id,
      onClick: async ({ commandService, modelService }) => {
        commandService.executeCommand<NsGraphCmd.SaveGraphData.IArgs>(
          XFlowGraphCommands.SAVE_GRAPH_DATA.id,
          {
            saveGraphDataService:async (meta, graphData) => {
              const visibleNodeTypesModel =await modelService.awaitModel('visibleNodeTypes')
              const visibleNodeTypes = visibleNodeTypesModel.getValue()
              console.log(graphData, visibleNodeTypes)
              return null
            },
          },
        )
      },
    })

    toolbarGroup.push({
      tooltip: '清空画布',
      iconName: 'ClearOutlined',
      id: 'clearGraph',
      onClick: async ({ commandService }) => {
        Modal.confirm({
          content: '是否确定清空画布?',
          okText: '确定',
          cancelText: '取消',
          onOk: () => {
            commandService.executeCommand<NsGraphCmd.GraphRender.IArgs>(
              XFlowGraphCommands.GRAPH_RENDER.id,
              {
                graphData: { nodes: [], edges: [] },
              },
            )
          },
        })
      },
    })

    return [
      {
        name: 'graphData',
        items: toolbarGroup,
      },
    ]
  }
}
