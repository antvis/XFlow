import type {
  NsNodeCmd,
  NsEdgeCmd,
  IMenuOptions,
  NsGraph,
  IArgsBase,
  HookHub,
  ICmdHooks as IHooks,
} from '@antv/xflow'
import { createCtxMenuConfig, MenuItemType } from '@antv/xflow'
import { IconStore, XFlowNodeCommands, XFlowEdgeCommands } from '@antv/xflow'
import { DeleteOutlined, EditOutlined, StopOutlined } from '@ant-design/icons'
import { MockApi } from './service'

import type { IGraphCommand } from '@antv/xflow'

/** 节点命令 */
export namespace CustomCommands {
  const category = '节点操作'
  /** 清除画布 */
  export const CLEAR_GRAPH: IGraphCommand = {
    id: 'xflow:clear-graph',
    label: '清除',
    category,
  }
  /** 导出 */
  export const EXPORT_GRAPH: IGraphCommand = {
    id: 'xflow:export-graph',
    label: '导出',
    category,
  }
  /** 重命名节点弹窗 */
  export const SHOW_RENAME_MODAL: IGraphCommand = {
    id: 'xflow:rename-node-modal',
    label: '打开重命名弹窗',
    category,
  }
}
export namespace NsRenameNodeCmd {
  /** Command: 用于注册named factory */
  export const command = CustomCommands.SHOW_RENAME_MODAL
  /** hook name */
  export const hookKey = 'renameNode'
  /** hook 参数类型 */
  export interface IArgs extends IArgsBase {
    nodeConfig: NsGraph.INodeConfig
    updateNodeNameService: IUpdateNodeNameService
  }
  export interface IUpdateNodeNameService {
    (newName: string, nodeConfig: NsGraph.INodeConfig, meta: NsGraph.IGraphMeta): Promise<{
      err: string | null
      nodeName: string
    }>
  }
  /** hook handler 返回类型 */
  export interface IResult {
    err: string | null
    preNodeName?: string
    currentNodeName?: string
  }
  /** hooks 类型 */
  export interface ICmdHooks extends IHooks {
    renameNode: HookHub<IArgs, IResult>
  }
}

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
