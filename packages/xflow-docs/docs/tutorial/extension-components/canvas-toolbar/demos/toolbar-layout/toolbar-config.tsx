import { createToolbarConfig, IToolbarItemOptions } from '@antv/xflow'
import { XFlowGraphCommands, XFlowNodeCommands, IconStore } from '@antv/xflow'
import { SaveOutlined, PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons'
import { Popconfirm } from 'antd'
import { NsGraphCmd, NsNodeCmd } from '@antv/xflow'

IconStore.set('PlusCircleOutlined', PlusCircleOutlined)

export const useToolbarConfig1 = createToolbarConfig(toolbarConfig => {
  /** 生产 toolbar item */
  toolbarConfig.setToolbarModelService(async toolbarModel => {
    toolbarModel.setValue(toolbar => {
      toolbar.mainGroups = [
        {
          name: 'main',
          items: [
            {
              id: '1',
              iconName: 'PlusCircleOutlined',
              tooltip: 'vertical',
            },
            {
              id: '2',
              iconName: 'PlusCircleOutlined',
              tooltip: 'vertical',
            },
          ],
        },
      ]
      toolbar.extraGroups = [
        {
          name: 'extra',
          items: [
            {
              id: '3',
              iconName: 'PlusCircleOutlined',
              tooltip: 'vertical',
            },
          ],
        },
      ]
    })
  })
})
export const useToolbarConfig2 = createToolbarConfig(toolbarConfig => {
  /** 生产 toolbar item */
  toolbarConfig.setToolbarModelService(async toolbarModel => {
    toolbarModel.setValue(toolbar => {
      toolbar.mainGroups = [
        {
          name: 'main',
          items: [
            {
              id: '1',
              text: '添加节点',
              iconName: 'PlusCircleOutlined',
              tooltip: 'horizontal',
            },
            {
              id: '2',
              text: '添加节点',
              iconName: 'PlusCircleOutlined',
              tooltip: 'horizontal',
            },
          ],
        },
      ]
      toolbar.extraGroups = [
        {
          name: 'extra',
          items: [
            {
              id: '3',
              iconName: 'PlusCircleOutlined',
              text: '添加节点',
              tooltip: '添加节点，配置extraGroups',
            },
          ],
        },
      ]
    })
  })
})
export const useToolbarConfig3 = createToolbarConfig(toolbarConfig => {
  /** 生产 toolbar item */
  toolbarConfig.setToolbarModelService(async toolbarModel => {
    toolbarModel.setValue(toolbar => {
      toolbar.mainGroups = [
        {
          name: 'main',
          items: [
            {
              id: '1',
              text: '添加节点',
              iconName: 'PlusCircleOutlined',
              tooltip: 'horizontal-center',
            },
            {
              id: '2',
              text: '添加节点',
              iconName: 'PlusCircleOutlined',
              tooltip: 'horizontal-center',
            },
          ],
        },
      ]
      toolbar.extraGroups = [
        {
          name: 'extra',
          items: [
            {
              id: '3',
              iconName: 'PlusCircleOutlined',
              text: '添加节点',
              tooltip: '添加节点，配置extraGroups',
            },
          ],
        },
      ]
    })
  })
})
