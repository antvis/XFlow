import type { IToolbarGroupOptions } from '@antv/xflow'
import { IconStore, createToolbarConfig } from '@antv/xflow'
import { SaveOutlined, ClearOutlined } from '@ant-design/icons'
import { CustomCommands } from './cmd-extensions/constants'

namespace NSToolbarConfig {
  IconStore.set('SaveOutlined', SaveOutlined)
  IconStore.set('ClearOutlined', ClearOutlined)
  export const getMenuOptions = async () => {
    const options: IToolbarGroupOptions[] = [
      {
        name: 'firstGroup',
        items: [
          {
            iconName: 'ClearOutlined',
            id: CustomCommands.CLEAR_GRAPH.id,
            text: CustomCommands.CLEAR_GRAPH.label,
            onClick: ({ commandService }) => {
              commandService.executeCommand(CustomCommands.CLEAR_GRAPH.id, {})
            },
          },
          {
            iconName: 'SaveOutlined',
            id: CustomCommands.EXPORT_GRAPH.id,
            text: CustomCommands.EXPORT_GRAPH.label,
            onClick: ({ commandService }) => {
              commandService.executeCommand(CustomCommands.EXPORT_GRAPH.id, {})
            },
          },
        ],
      },
    ]
    return options
  }
}

export const useToolbarConfig = createToolbarConfig(toolbarConfig => {
  /** 生产 toolbar item */
  toolbarConfig.setToolbarModelService(async toolbarModel => {
    const updateToolbarModel = async () => {
      const toolbarItems = await NSToolbarConfig.getMenuOptions()
      toolbarModel.setValue(toolbar => {
        toolbar.mainGroups = toolbarItems
      })
    }
    updateToolbarModel()
  })
})
