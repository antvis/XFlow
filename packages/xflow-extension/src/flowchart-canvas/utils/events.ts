import {
  XFlowNodeCommands,
  IModelService,
  IGraphCommandService,
  XFlowEdgeCommands,
} from '@antv/xflow-core'
import { get } from 'lodash'
import { onConfigChange, getGraphInstance } from './util'
import { Node } from '@antv/x6'

/** 节点移动时，实时更新位置信息，内置之后可去掉 */
export const movedNode = async (e: any, cmds: IGraphCommandService, ctx: IModelService) => {
  const { node } = e
  if (!node) {
    return
  }

  const { data } = node
  // 更新组内元素
  if (data?.groupChildren) {
    const x6Graph = getGraphInstance()
    data?.groupChildren.forEach(async (id: string) => {
      const currentNode = x6Graph.getCellById(id) as Node
      const position = currentNode.getPosition?.()
      if (currentNode && position) {
        await cmds.executeCommand(XFlowNodeCommands.UPDATE_NODE.id, {
          nodeConfig: {
            ...currentNode.data,
            ...position,
            ...currentNode.getSize(),
          },
        })
      }
    })
  }
  const nodeConfig = {
    ...node.data,
    ...node.getPosition(),
    ...node.getSize(),
  }
  await cmds.executeCommand(XFlowNodeCommands.UPDATE_NODE.id, {
    nodeConfig,
  })
  onConfigChange({ type: 'move:node', config: nodeConfig })
}

/** 修改节点大小 */
export const resizeNode = async (e: any, cmds: IGraphCommandService, ctx: IModelService) => {
  const { node } = e
  if (!node) {
    return
  }
  const nodeConfig = {
    ...node.data,
    ...node.getPosition(),
    ...node.size(),
  }
  await cmds.executeCommand(XFlowNodeCommands.UPDATE_NODE.id, {
    nodeConfig,
  })
  onConfigChange({ type: 'resize:node', config: nodeConfig })
}

const getContainer = e => {
  let currentNode = e?.e?.currentTarget
  if (!currentNode) {
    return document.getElementsByClassName('xflow-canvas-root')
  }
  let containter = null
  while (!containter) {
    const current = currentNode.getElementsByClassName('xflow-canvas-root')
    if (current?.length > 0) {
      containter = current
    }
    currentNode = currentNode.parentNode
  }
  return containter
}

/** 设置 ports visible */
export const changePortsVisible = (visible: boolean, e?: any) => {
  const containers = getContainer(e)
  Array.from(containers).forEach((container: HTMLDivElement) => {
    const ports = container.querySelectorAll('.x6-port-body') as NodeListOf<SVGAElement>
    const graph = getGraphInstance()
    // 选中中节点时不展示链接桩
    const isSelectedNode = graph.getSelectedCells()?.[0]?.isNode()
    for (let i = 0, len = ports.length; i < len; i = i + 1) {
      ports[i].style.visibility = !isSelectedNode && visible ? 'visible' : 'hidden'
    }
  })
}

/** 高亮边 */
export const setEdgeSelected = (e: any, cmds: IGraphCommandService, ctx: IModelService) => {
  const { edge } = e
  if (!edge) {
    return
  }
}

/** 添加辅助工具 */
export const addTools = async (e: any, cmds: IGraphCommandService, ctx: IModelService) => {
  const { edge } = e
  if (!edge) {
    return
  }
  edge.addTools('vertices', 'ondbclick')
}

/** 移除辅助工具 */
export const removeTools = async (e: any, cmds: IGraphCommandService, ctx: IModelService) => {
  const { edge } = e
  if (!edge) {
    return
  }
  if (edge.hasTools('ondbclick')) {
    cmds.executeCommand(XFlowEdgeCommands.UPDATE_EDGE.id, {
      edgeConfig: {
        ...get(edge, 'data'),
        vertices: edge.getVertices(),
      },
    })
    edge.removeTools()
  }
}
