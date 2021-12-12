import type { NsNodeCmd, IMenuOptions, MODELS, NsGraph } from '@antv/xflow'
import { createCtxMenuConfig, MenuItemType } from '@antv/xflow'
import {} from '@antv/xflow'
import { IconStore, XFlowNodeCommands } from '@antv/xflow'
import {
  DeleteOutlined,
  EditOutlined,
  StopOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'

/** menuitem 配置 */
export namespace NsCustomMenuItems {
  /** 注册菜单依赖的icon */
  IconStore.set('DeleteOutlined', DeleteOutlined)
  IconStore.set('EditOutlined', EditOutlined)
  IconStore.set('StopOutlined', StopOutlined)
  IconStore.set('UnorderedListOutlined', UnorderedListOutlined)

  interface INode extends NsGraph.INodeConfig {
    menuItems: string[]
  }

  export const getDynamicMenuItems = (state: MODELS.CONTEXTMENU_TARGET.IState) => {
    const data = state.cell.getData<INode>()
    return {
      id: '动态渲的submenu',
      label: '动态渲染的菜单',
      iconName: 'UnorderedListOutlined',
      type: MenuItemType.Submenu,
      submenu: data.menuItems.map((item, idx) => {
        return {
          id: item + '#' + idx,
          label: item + '#' + (idx + 1),
          type: MenuItemType.Leaf,
          iconName: 'UnorderedListOutlined',
          onClick: async ({ target }) => {
            console.log('submenu is  click', target, item)
          },
        }
      }),
    }
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
    console.log(type, cell, modelService, toDispose)
    switch (type) {
      case 'node':
        model.setValue({
          id: 'root',
          type: MenuItemType.Root,
          submenu: [NsCustomMenuItems.DELETE_NODE, NsCustomMenuItems.getDynamicMenuItems(data)],
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
