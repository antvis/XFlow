import type { IToolbarItemOptions } from '@antv/xflow'
import { XFlowNodeCommands, createToolbarConfig } from '@antv/xflow'
import { IconStore } from '@antv/xflow'
import { SaveOutlined, PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons'
import { Popconfirm } from 'antd'
import React from 'react'

export namespace NSToolbarConfig {
  /** 注册icon 类型 */
  IconStore.set('PlusCircleOutlined', PlusCircleOutlined)
  IconStore.set('DeleteOutlined', DeleteOutlined)
  IconStore.set('SaveOutlined', SaveOutlined)

  export const getToolbarItems = async () => {
    const textToolbarGroup: IToolbarItemOptions[] = []
    const iconToolbarGroup: IToolbarItemOptions[] = []
    /** 保存数据 */
    textToolbarGroup.push({
      id: XFlowNodeCommands.MOVE_NODE.id + 'text only',
      text: '添加节点',
      tooltip: '添加节点，text=添加节点, group1',
    })
    textToolbarGroup.push({
      id: XFlowNodeCommands.MOVE_NODE.id + 'text',
      iconName: 'PlusCircleOutlined',
      text: '添加节点',
      tooltip: '添加节点，text + iconName, group1 ',
    })
    iconToolbarGroup.push({
      id: XFlowNodeCommands.ADD_NODE.id + 'icon',
      icon: <PlusCircleOutlined />,
      tooltip: '添加节点，直接传递图标组件 (icon: PlusCircleOutlined), group2',
    })
    iconToolbarGroup.push({
      id: XFlowNodeCommands.ADD_NODE.id + 'iconName',
      iconName: 'PlusCircleOutlined',
      tooltip: "添加节点，全局 IconStore 注册 'PlusCircleOutlined' 后指定 iconName, group2",
    })
    iconToolbarGroup.push({
      id: XFlowNodeCommands.MOVE_NODE.id + 'tooltip',
      iconName: 'PlusCircleOutlined',
      tooltip: '添加节点， tooltip 配置, group2',
    })
    iconToolbarGroup.push({
      id: XFlowNodeCommands.MOVE_NODE.id + 'disabled',
      iconName: 'PlusCircleOutlined',
      tooltip: '添加节点， isEnabled=false, group2',
      isEnabled: false,
    })
    iconToolbarGroup.push({
      id: XFlowNodeCommands.MOVE_NODE.id + 'visible',
      iconName: 'PlusCircleOutlined',
      tooltip: '添加节点 isVisible=true, group2',
      isVisible: false,
    })
    iconToolbarGroup.push({
      id: XFlowNodeCommands.MOVE_NODE.id + 'active',
      iconName: 'PlusCircleOutlined',
      tooltip: '添加节点 active=true, group2',
      active: true,
    })
    iconToolbarGroup.push({
      id: XFlowNodeCommands.MOVE_NODE.id + 'custom render',
      iconName: 'PlusCircleOutlined',
      tooltip: '添加节点 自定义渲染添加一个Popconfirm, group2',
      onClick: args => {
        console.log('toolbar onClick args', args)
      },
      render: props => {
        return (
          <Popconfirm
            title="are you sure"
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
      { name: 'textToolbarGroup', items: textToolbarGroup },
      { name: 'iconToolbarGroup', items: iconToolbarGroup },
    ]
  }
  export const getExtraToolbarItems = async () => {
    const toolbarGroup: IToolbarItemOptions[] = []
    /** 保存数据 */
    toolbarGroup.push({
      id: XFlowNodeCommands.MOVE_NODE.id + 'text only',
      text: '添加节点',
      tooltip: '添加节点，配置extraGroups',
    })

    return [{ name: 'extra', items: toolbarGroup }]
  }
}
export const useToolbarConfig = createToolbarConfig(toolbarConfig => {
  /** 生产 toolbar item */
  toolbarConfig.setToolbarModelService(async toolbarModel => {
    const toolbarItems = await NSToolbarConfig.getToolbarItems()
    const extraToolbarItems = await NSToolbarConfig.getExtraToolbarItems()
    toolbarModel.setValue(toolbar => {
      toolbar.mainGroups = toolbarItems
      toolbar.extraGroups = extraToolbarItems
    })
  })
})
