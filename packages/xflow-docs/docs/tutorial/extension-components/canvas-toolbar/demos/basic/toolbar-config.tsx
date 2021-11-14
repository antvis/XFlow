import type { IToolbarItemOptions } from '@antv/xflow'
import { createToolbarConfig } from '@antv/xflow'
import { XFlowGraphCommands, XFlowNodeCommands, IconStore } from '@antv/xflow'
import { SaveOutlined, PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons'
import { message } from 'antd'
import type { NsGraphCmd, NsNodeCmd } from '@antv/xflow'

namespace NsConfig {
  /** 注册icon 类型 */
  IconStore.set('PlusCircleOutlined', PlusCircleOutlined)
  IconStore.set('DeleteOutlined', DeleteOutlined)
  IconStore.set('SaveOutlined', SaveOutlined)
  /** nodeId */
  let id = 1
  /** 获取toobar配置项 */
  export const getToolbarItems = async () => {
    const toolbarGroup1: IToolbarItemOptions[] = []
    const toolbarGroup2: IToolbarItemOptions[] = []
    /** 保存数据 */
    toolbarGroup1.push({
      id: XFlowNodeCommands.ADD_NODE.id,
      iconName: 'PlusCircleOutlined',
      tooltip: '添加节点',
      onClick: async ({ commandService }) => {
        const nodeName = `Node-${id}`
        commandService.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {
          nodeConfig: {
            id: nodeName,
            label: nodeName,
            x: 100 + id * 5,
            y: 50 + id * 5,
            width: 160,
            height: 32,
          },
        })
        id += 1
      },
    })
    toolbarGroup1.push({
      id: XFlowNodeCommands.MOVE_NODE.id,
      iconName: 'DeleteOutlined',
      tooltip: '删除节点',
      isEnabled: false,
    })

    /** 保存数据 */
    toolbarGroup2.push({
      id: XFlowGraphCommands.SAVE_GRAPH_DATA.id,
      iconName: 'SaveOutlined',
      tooltip: '保存数据',
      onClick: async ({ commandService }) => {
        commandService.executeCommand<NsGraphCmd.SaveGraphData.IArgs>(
          XFlowGraphCommands.SAVE_GRAPH_DATA.id,
          {
            saveGraphDataService: async (meta, data) => {
              console.log(data)
              message.success('nodes count:' + data.nodes.length)
            },
          },
        )
      },
    })

    return [
      { name: 'nodeGroup', items: toolbarGroup1 },
      { name: 'graphGroup', items: toolbarGroup2 },
    ]
  }
}

/** wrap出一个hook */
export const useToolbarConfig = createToolbarConfig(toolbarConfig => {
  /** 生产 toolbar item */
  toolbarConfig.setToolbarModelService(async toolbarModel => {
    const toolbarItems = await NsConfig.getToolbarItems()
    toolbarModel.setValue(toolbar => {
      toolbar.mainGroups = toolbarItems
    })
  })
})
