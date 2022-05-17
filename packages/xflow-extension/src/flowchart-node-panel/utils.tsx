import type { GraphConfig } from '@antv/xflow-core'
import { uuidv4 } from '@antv/xflow-core'
import { isNumber } from 'lodash'
import { setProps, getProps } from '../flowchart-canvas/utils'
import * as NodesComponent from './nodes'
import { NODE_HEIGHT, NODE_WIDTH, NODEPOOL } from './constants'
import type { IRegisterNode } from './interface'
import { isArray } from 'lodash'

/** 和 graph config 注册的节点保持一致 */
const getAnchorStyle = (position: string) => {
  return {
    position: { name: position },
    attrs: {
      circle: {
        r: 4,
        magnet: true,
        stroke: '#31d0c6',
        strokeWidth: 2,
        fill: '#fff',
        style: {
          visibility: 'hidden',
        },
      },
    },
    zIndex: 10,
  }
}

const getPorts = (position = ['top', 'right', 'bottom', 'left']) => {
  return {
    items: position.map(name => {
      return { group: name, id: uuidv4() }
    }),
    groups: {
      top: getAnchorStyle('top'),
      right: getAnchorStyle('right'),
      bottom: getAnchorStyle('bottom'),
      left: getAnchorStyle('left'),
    },
  }
}

export const getRegisterNode = nodes => {
  return (nodes || []).map(item => {
    const {
      name,
      popover,
      label = '',
      width = NODE_HEIGHT,
      height = NODE_HEIGHT,
      ports,
      parentKey,
    } = item
    const id = uuidv4() // 暂不使用上层数据
    return {
      id,
      renderKey: name,
      name,
      label,
      popoverContent: popover,
      width,
      height,
      ports: ports || getPorts(),
      originData: { ...item },
      isCustom: true,
      parentKey,
    }
  })
}

export const nodeService = async nodes => {
  const customNodes = getRegisterNode(nodes)

  return [
    ...customNodes,
    ...NODEPOOL.map(({ name, ports, width = NODE_WIDTH, height = NODE_HEIGHT, label = '' }) => {
      return {
        id: uuidv4(), // 不会被使用
        renderKey: name,
        name,
        label,
        popoverContent: () => name,
        width,
        height,
        ports: getPorts(ports),
      }
    }),
  ]
}

export const registerCustomNode = (panelConfigs?: IRegisterNode | IRegisterNode[]) => {
  const registerNodes: IRegisterNode[] = (
    panelConfigs ? (isArray(panelConfigs) ? panelConfigs : [panelConfigs]) : []
  ) as IRegisterNode[]
  let nodes = []
  registerNodes.forEach(item => {
    nodes = nodes.concat(
      item.nodes.map(node => ({
        ...node,
        parentKey: item.key,
      })),
    )
  })

  if (nodes.length) {
    setProps({
      registerNode: nodes,
    })
  }
  const graphConfig = getProps('graphConfig')
  const registerNode = getProps('registerNode')
  if (!graphConfig || !registerNode?.length) {
    return
  }
  registerNode.forEach(item => {
    const { name, component } = item
    graphConfig.setNodeRender(name, component)
  })
}

export const setNodeRender = (graphConfig: any) => {
  /** props 共享 */
  registerCustomNode()
  /** 默认节点，通过 Terminal 标识，避免多次调用*/
  if (!graphConfig.nodeRender.get('Terminal')) {
    NODEPOOL.forEach(item => {
      ;(graphConfig as GraphConfig).setNodeRender(
        item.name,
        NodesComponent[`${item.name.replace(/\s+/g, '')}Node`],
      )
    })
  }
}

type IPath = [string, number, number, number, number]
// 创建节点路径
export const createPath = (paths: (string | number)[][], offsetX = 0, offsetY = 0) => {
  if (!paths.length) {
    return null
  }
  let path = ''
  // @ts-ignore
  paths.forEach((item: IPath) => {
    const [c, x, y, c2x, c2y] = item
    path += isNumber(y) ? ` ${c} ${x + offsetX} ${y + offsetY}` : ` ${c}`
    if (c2y) {
      path += ` ${c2x + offsetX} ${c2y + offsetY}`
    }
  })

  return path
}
