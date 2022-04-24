import { createCtxMenuConfig, MenuItemType } from '@antv/xflow'
import { IconStore, XFlowNodeCommands, XFlowEdgeCommands } from '@antv/xflow'
import { DeleteOutlined, EditOutlined, StopOutlined } from '@ant-design/icons'

/** 节点命令 */
export const CustomCommands = {}
{
  const category = '节点操作'
  /** 清除画布 */
  CustomCommands.CLEAR_GRAPH = {
    id: 'xflow:clear-graph',
    label: '清除',
    category,
  }
  /** 导出 */
  CustomCommands.EXPORT_GRAPH = {
    id: 'xflow:export-graph',
    label: '导出',
    category,
  }
  /** 重命名节点弹窗 */
  CustomCommands.SHOW_RENAME_MODAL = {
    id: 'xflow:rename-node-modal',
    label: '打开重命名弹窗',
    category,
  }
}

export const NsRenameNodeCmd = {}
// {
/** Command: 用于注册named factory */
NsRenameNodeCmd.command = CustomCommands.SHOW_RENAME_MODAL
/** hook name */
NsRenameNodeCmd.hookKey = 'renameNode'

/** menuitem 配置 */
export const NsMenuItemConfig = {}
// {
/** 注册菜单依赖的icon */
IconStore.set('DeleteOutlined', DeleteOutlined)
IconStore.set('EditOutlined', EditOutlined)
IconStore.set('StopOutlined', StopOutlined)

NsMenuItemConfig.DELETE_EDGE = {
  id: XFlowEdgeCommands.DEL_EDGE.id,
  label: '删除边',
  iconName: 'DeleteOutlined',
  onClick: async ({ target, commandService }) => {
    commandService.executeCommand(XFlowEdgeCommands.DEL_EDGE.id, {
      edgeConfig: target.data,
    })
  },
}

NsMenuItemConfig.DELETE_NODE = {
  id: XFlowNodeCommands.DEL_NODE.id,
  label: '删除节点',
  iconName: 'DeleteOutlined',
  onClick: async ({ target, commandService }) => {
    commandService.executeCommand(XFlowNodeCommands.DEL_NODE.id, {
      nodeConfig: { id: target.data.id },
    })
  },
}

NsMenuItemConfig.EMPTY_MENU = {
  id: 'EMPTY_MENU_ITEM',
  label: '暂无可用',
  isEnabled: false,
  iconName: 'DeleteOutlined',
}

NsMenuItemConfig.SEPARATOR = {
  id: 'separator',
  type: MenuItemType.Separator,
}
// }

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
          submenu: [NsMenuItemConfig.DELETE_NODE],
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
