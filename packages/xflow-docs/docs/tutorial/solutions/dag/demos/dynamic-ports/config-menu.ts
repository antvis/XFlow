/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NsNodeCmd, NsEdgeCmd, IMenuOptions, NsGraph } from '@antv/xflow'
import type { NsRenameNodeCmd } from './cmd-extensions/cmd-rename-node-modal'
import { createCtxMenuConfig, MenuItemType } from '@antv/xflow'
import { IconStore, XFlowNodeCommands, XFlowEdgeCommands } from '@antv/xflow'
import { DeleteOutlined, EditOutlined, StopOutlined } from '@ant-design/icons'
import { CustomCommands } from './cmd-extensions/constants'
import { MockApi } from './service'

/** menuitem 配置 */
export namespace NsMenuItemConfig {
  /** 注册菜单依赖的icon */
  IconStore.set('DeleteOutlined', DeleteOutlined)
  IconStore.set('EditOutlined', EditOutlined)
  IconStore.set('StopOutlined', StopOutlined)

  export const DELETE_EDGE: IMenuOptions = {
    id: XFlowEdgeCommands.DEL_EDGE.id,
    label: '删除边',
    iconName: 'DeleteOutlined',
    onClick: async ({ target, commandService }) => {
      commandService.executeCommand<NsEdgeCmd.DelEdge.IArgs>(XFlowEdgeCommands.DEL_EDGE.id, {
        edgeConfig: target.data as NsGraph.IEdgeConfig,
      })
    },
  }

  export const DELETE_NODE: IMenuOptions = {
    id: XFlowNodeCommands.DEL_NODE.id,
    label: '删除节点',
    iconName: 'DeleteOutlined',
    onClick: async ({ target, commandService }) => {
      commandService.executeCommand<NsNodeCmd.DelNode.IArgs>(XFlowNodeCommands.DEL_NODE.id, {
        nodeConfig: { id: target.data.id },
      })
    },
  }

  export const EMPTY_MENU: IMenuOptions = {
    id: 'EMPTY_MENU_ITEM',
    label: '暂无可用',
    isEnabled: false,
    iconName: 'DeleteOutlined',
  }

  export const RENAME_NODE: IMenuOptions = {
    id: CustomCommands.SHOW_RENAME_MODAL.id,
    label: '重命名',
    isVisible: true,
    iconName: 'EditOutlined',
    onClick: async ({ target, commandService }) => {
      const nodeConfig = target.data as NsGraph.INodeConfig
      commandService.executeCommand<NsRenameNodeCmd.IArgs>(CustomCommands.SHOW_RENAME_MODAL.id, {
        nodeConfig,
        updateNodeNameService: MockApi.renameNode,
      })
    },
  }

  export const SEPARATOR: IMenuOptions = {
    id: 'separator',
    type: MenuItemType.Separator,
  }
}

export const useMenuConfig = createCtxMenuConfig(config => {
  config.setMenuModelService(async (target, model, modelService, toDispose) => {
    const { type, cell } = target
    console.log(type)
    switch (type) {
      /** 节点菜单 */
      case 'node':
        model.setValue({
          id: 'root',
          type: MenuItemType.Root,
          submenu: [NsMenuItemConfig.DELETE_NODE, NsMenuItemConfig.RENAME_NODE],
        })
        break
      /** 边菜单 */
      case 'edge':
        model.setValue({
          id: 'root',
          type: MenuItemType.Root,
          submenu: [NsMenuItemConfig.DELETE_EDGE],
        })
        break
      /** 画布菜单 */
      case 'blank':
        model.setValue({
          id: 'root',
          type: MenuItemType.Root,
          submenu: [NsMenuItemConfig.EMPTY_MENU],
        })
        break
      /** 默认菜单 */
      default:
        model.setValue({
          id: 'root',
          type: MenuItemType.Root,
          submenu: [NsMenuItemConfig.EMPTY_MENU],
        })
        break
    }
  })
})
