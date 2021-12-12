import type { NsNodeCmd, NsEdgeCmd } from '@antv/xflow'
import type { IMenuOptions } from '@antv/xflow'
import type { NsGraph } from '@antv/xflow'
import { MenuItemType } from '@antv/xflow'
import { createCtxMenuConfig } from '@antv/xflow'
import { IconStore, XFlowNodeCommands, XFlowEdgeCommands } from '@antv/xflow'
import { DeleteOutlined, EditOutlined, StopOutlined } from '@ant-design/icons'
import React from 'react'

/** menuitem 配置 */
export namespace NsCustomMenuItems {
  /** 注册菜单依赖的icon */
  IconStore.set('DeleteOutlined', DeleteOutlined)
  IconStore.set('EditOutlined', EditOutlined)
  IconStore.set('StopOutlined', StopOutlined)

  export const DELETE_EDGE: IMenuOptions = {
    id: XFlowEdgeCommands.DEL_EDGE.id,
    label: '删除边',
    hotkey: 'Delete',
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
    hotkey: 'Delete',
    onClick: async ({ target, commandService }) => {
      commandService.executeCommand<NsNodeCmd.DelNode.IArgs>(XFlowNodeCommands.DEL_NODE.id, {
        nodeConfig: { id: target.data.id },
      })
    },
  }

  export const NODE_LINK: IMenuOptions = {
    id: 'NODE_LINK',
    label: 'NODE_LINK',
    render: ({ children }) => {
      return (
        <a target="_blank" href="https://x6.antv.vision/" style={{ padding: '0 16px' }}>
          一个自定义渲染的连接
        </a>
      )
    },
  }

  export const EMPTY_MENU: IMenuOptions = {
    id: 'EMPTY_MENU_ITEM',
    label: '暂无可用',
    isEnabled: false,
    iconName: 'DeleteOutlined',
    onClick: async ({ target, commandService }) => {
      commandService.executeCommand<NsNodeCmd.DelNode.IArgs>(XFlowNodeCommands.DEL_NODE.id, {
        nodeConfig: { id: target.data.id },
      })
    },
  }

  export const SEPARATOR: IMenuOptions = {
    id: 'separator',
    type: MenuItemType.Separator,
  }
}

export const useMenuConfig = createCtxMenuConfig(config => {
  config.setMenuModelService(async (data, model, modelService, toDispose) => {
    const { type, cell } = data
    console.log(type)
    switch (type) {
      case 'node':
        model.setValue({
          id: 'root',
          type: MenuItemType.Root,
          submenu: [
            NsCustomMenuItems.DELETE_NODE,
            NsCustomMenuItems.SEPARATOR,
            NsCustomMenuItems.NODE_LINK,
          ],
        })
        break
      case 'edge':
        model.setValue({
          id: 'root',
          type: MenuItemType.Root,
          submenu: [NsCustomMenuItems.DELETE_EDGE],
        })
        break
      case 'blank':
        model.setValue({
          id: 'root',
          type: MenuItemType.Root,
          submenu: [NsCustomMenuItems.EMPTY_MENU],
        })
        break
      default:
        model.setValue({
          id: 'root',
          type: MenuItemType.Root,
          submenu: [NsCustomMenuItems.EMPTY_MENU],
        })
        break
    }
  })
})
