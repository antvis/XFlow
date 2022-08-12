import type { IGraphCommandService } from '@antv/xflow-core'
import { XFlowNodeCommands, XFlowEdgeCommands } from '@antv/xflow-core'
import { get } from 'lodash'
import { onConfigChange, getGraphInstance } from './util'
import type { Node } from '@antv/x6'

/** 节点移动时，实时更新位置信息，内置之后可去掉 */
export const movedNode = async (e: any, cmds: IGraphCommandService) => {
  const { node } = e
  if (!node) {
    return
  }

  const { data } = node
  // 更新组内元素，边信息无需更新
  if (data?.groupChildren) {
    const x6Graph = getGraphInstance()
    data?.groupChildren.forEach(async (id: string) => {
      const currentNode = x6Graph.getCellById(id) as Node
      if (currentNode && currentNode.isNode()) {
        await cmds.executeCommand(XFlowNodeCommands.UPDATE_NODE.id, {
          nodeConfig: {
            ...currentNode.data,
            ...currentNode.getSize?.(),
            ...currentNode.getPosition?.(),
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
export const resizeNode = async (e: any, cmds: IGraphCommandService) => {
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

// 获取选中节点的 ports
export const getSelectedCellPorts = (eleId: string) => {
  const selectedPorts = document.getElementsByClassName('x6-node-selected')
  if (!selectedPorts) {
    return
  }
  let matchPort = selectedPorts[0]
  Array.from(selectedPorts).forEach((ele: HTMLDivElement) => {
    if (ele.getAttribute('data-cell-id') === eleId) {
      matchPort = ele
    }
  })
  return matchPort.getElementsByClassName('x6-port') as any
}

const setTransformData = (ele: HTMLElement, scale: number) => {
  const currentTransform = ele.getAttribute('transform')
  const transforms: (string | number)[] = currentTransform.split(',')
  transforms[0] = `matrix(${Number((transforms[0] as string).split('(')[1]) * scale}`
  transforms[3] = Number(transforms[3]) * scale
  ele.setAttribute('transform', transforms.join(','))
}
// 节点 ports 放大2被
export const setTransform = (elements: HTMLElement[]) => {
  if (!elements?.length) return
  const scale = 2
  elements.forEach(ele => {
    if (ele.getAttribute('data-scale')) return
    setTransformData(ele, scale)
    ele.setAttribute('data-scale', `${scale}`)
  })
}
// 重置节点 scale
export const resetTransform = () => {
  const ports = document.getElementsByClassName('x6-port')
  if (!ports) {
    return
  }
  Array.from(ports).forEach((ele: HTMLElement) => {
    const eleScale = ele.getAttribute('data-scale')
    if (eleScale) {
      setTransformData(ele, 1 / Number(eleScale))
      ele.removeAttribute('data-scale')
    }
  })
}

/** 设置 ports visible */
export const changePortsVisible = (
  visible: boolean,
  e?: any,
  showPortsOnNodeSelected?: boolean,
) => {
  if (!visible) {
    resetTransform()
  }
  const containers = getContainer(e)
  const graph = getGraphInstance()
  const selectedCell = graph.getSelectedCells()?.[0]
  // 节点选中并移入时，port transfrom scale * 2
  if (selectedCell?.isNode() && showPortsOnNodeSelected) {
    setTransform(getSelectedCellPorts(selectedCell.id))
  }
  Array.from(containers).forEach((container: HTMLDivElement) => {
    const ports = container.querySelectorAll('.x6-port-body') as NodeListOf<SVGAElement>
    // 选中中节点时不展示链接桩
    const isSelectedNode = selectedCell?.isNode()
    for (let i = 0, len = ports.length; i < len; i = i + 1) {
      ports[i].style.visibility =
        (!isSelectedNode || showPortsOnNodeSelected) && visible ? 'visible' : 'hidden'
    }
  })
}

/** 添加辅助工具 */
export const addTools = async (e: any) => {
  const { edge } = e
  if (!edge) {
    return
  }
  edge.addTools('vertices', 'ondbclick')
}

/** 移除辅助工具 */
export const removeTools = async (e: any, cmds: IGraphCommandService) => {
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
