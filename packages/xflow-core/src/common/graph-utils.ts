import type { Cell, Node, Edge } from '@antv/x6'
import type { NsGraph } from '../interface'

export const node2Json = (cell: Node) => {
  const children = cell.getChildren()
  const size = cell.getSize()
  const data = cell.getData<NsGraph.INodeConfig>() || ({} as NsGraph.INodeConfig)
  const position = cell.getPosition()
  const groupId = cell.getParentId()
  const { isCollapsed } = data
  const groupCollapsedSize = data.groupCollapsedSize || (isCollapsed ? size : null)
  return {
    ...data,
    id: cell.id,
    width: size.width,
    height: size.height,
    x: position.x,
    y: position.y,
    group: groupId,
    groupChildren: children ? children.map(child => child.id) : null,
    groupCollapsedSize,
  }
}

export const edge2Json = (cell: Edge) => {
  const data = cell.getData<any>() || {}
  return {
    id: cell.id,
    ...data,
  }
}

export const cellsToJson = (cells: Cell<Cell.Properties>[]) => {
  const nodes: NsGraph.INodeConfig[] = []
  const edges: NsGraph.IEdgeConfig[] = []

  const cell2Json = (cell: Cell) => {
    if (cell.isNode()) {
      nodes.push(node2Json(cell))
    }
    if (cell.isEdge()) {
      edges.push(edge2Json(cell))
    }
  }
  cells.map(cell => {
    return cell2Json(cell)
  })

  return {
    nodes,
    edges,
  }
}
