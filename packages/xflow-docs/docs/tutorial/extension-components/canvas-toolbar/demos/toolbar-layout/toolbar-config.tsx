import { createToolbarConfig } from '@antv/xflow'
import { IconStore } from '@antv/xflow'
import { PlusCircleOutlined } from '@ant-design/icons'

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
