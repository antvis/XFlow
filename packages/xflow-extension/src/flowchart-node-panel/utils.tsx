import React from 'react'
import { uuidv4 } from '@antv/xflow-core'
import { isNumber } from 'lodash'
import { NodeComponent } from './node-components'
import { NODE_HEIGHT, NODE_WIDTH, NODEPOOL } from './constants'

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

export const getRegisterNode = registerNodes => {
  /* return (nodes || []).map(item => {
    const { name, popover, label = '', width = NODE_HEIGHT, height = NODE_HEIGHT, ports } = item
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
    }
  }) */
  const treeData = {}
  registerNodes.forEach(item => {
    const nodes = item.nodes.map(node => {
      const { name, popover, label = '', width = NODE_HEIGHT, height = NODE_HEIGHT, ports } = node
      const id = uuidv4() // 暂不使用上层数据
      return {
        parentId: '',
        id,
        renderKey: name,
        name,
        label,
        popoverContent: popover,
        width,
        height,
        ports: ports || getPorts(),
        originData: { ...item },
      }
    })
    treeData[item.type] = {
      title: item.title,
      nodes,
    }
  })
  return treeData
}

export const nodeService = async registerNode => {
  const customNodes = getRegisterNode(registerNode)

  /* return [
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
  ] */
  const treeData = {
    ...customNodes,
    common: {
      title: '通用节点',
      nodes: [],
    },
    flowchart: {
      title: '流程图节点',
      nodes: [],
    },
  };
  NODEPOOL.forEach(({ name, ports, width = NODE_WIDTH, height = NODE_HEIGHT, label = '', type }) => {
    treeData[type]?.nodes?.push({
      parentId: '',
      id: uuidv4(), // 不会被使用
      renderKey: name,
      // name: `${name.replace(/\s+/g, '-')}`,
      name,
      label,
      popoverContent: () => name,
      width,
      height,
      ports: getPorts(ports),
    });
  });
  console.log(treeData)
  return treeData;
}

export const setNodeRender = (config, nodes = []) => {
  console.log(nodes, "nodes")
  // 自定义节点
  if (nodes?.length) {
    nodes.forEach(item => {
      const { name, component } = item
      config.setNodeRender(name, component)
    })
  }
  /** 默认节点，通过 Terminal 标识，避免多次调用*/
  if (!config.nodeRender.get('Terminal')) {
    NODEPOOL.forEach(item => {
      //config.setNodeRender(item.name, NodesComponent[`${item.name.replace(/\s+/g, '')}Node`])
      config.setNodeRender(item.name, props => <NodeComponent {...props} name={item.name} />)
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

export const createRoundedPath = (paths: (string | number)[][]) => {
  if (!paths.length) {
    return null
  }
  let path = ''
  // @ts-ignore
  paths.forEach(item => {
    path += item.join(' ')
  })

  return path
}

// 将16进制表示颜色转变为gba表示
// 例如 getGradientColor('#FF0000') ===> 'rgb(255, 0, 0)'
export const getGradientColor = color => {
  if (!color) return
  const r = parseInt(color[1] + color[2], 16)
  const g = parseInt(color[3] + color[4], 16)
  const b = parseInt(color[5] + color[6], 16)
  return `rgb(${r}, ${g}, ${b})`
}
