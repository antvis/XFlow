import type { GraphData, NodeMeta, EdgeMeta } from '../types'
import { ObjectExt, Node, Edge } from '@antv/x6'

export const preprocess = (
  model: GraphData,
  nodeOptions: NodeMeta = {},
  edgeOptions: EdgeMeta = {},
): GraphData => {
  model.forEach((item) => {
    const { shape } = item
    if (shape) {
      if (Node.registry.exist(shape)) {
        ObjectExt.merge(item, nodeOptions)
      }
      if (Edge.registry.exist(shape)) {
        ObjectExt.merge(item, edgeOptions)
      }
    }
  })
  return model
}
