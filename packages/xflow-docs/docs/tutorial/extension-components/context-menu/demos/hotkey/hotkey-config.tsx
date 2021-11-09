import type { Edge, Node } from '@antv/x6'
import { createKeybindingConfig, MODELS, XFlowEdgeCommands, XFlowNodeCommands } from '@antv/xflow'
import type { NsEdgeCmd, NsNodeCmd } from '@antv/xflow'

/**  keybindings  */
export const useKeybindingConfig = createKeybindingConfig((config, getProps) => {
  config.setKeybindingFunc(reg => {
    return reg.registerKeybinding([
      {
        id: 'delete node or edge',
        keybinding: 'backspace',
        callback: async function (item, modelService, cmd, e) {
          const cells = await MODELS.SELECTED_CELLS.useValue(modelService)
          const nodes = cells.filter((cell): cell is Edge => cell.isEdge())
          const edges = cells.filter((cell): cell is Node => cell.isNode())
          // 调用删除Edge的Command
          const delEdge = (cell: Edge) => {
            return cmd.executeCommand<NsEdgeCmd.DelEdge.IArgs>(XFlowEdgeCommands.DEL_EDGE.id, {
              edgeConfig: { ...cell.getData(), id: cell.id },
            })
          }
          // 调用删除Node的Command
          const delNode = (cell: Node) => {
            return cmd.executeCommand<NsNodeCmd.DelNode.IArgs>(XFlowNodeCommands.DEL_NODE.id, {
              nodeConfig: {
                ...cell.getData(),
                id: cell.id,
              },
            })
          }
          if (cells.length === 0) {
            console.warn('没有选中的节点')
          }
          // 先删除edges
          await Promise.all(nodes.map(cell => delEdge(cell)))
          // 先删除nodes
          await Promise.all(edges.map(cell => delNode(cell)))
        },
      },
    ])
  })
})
