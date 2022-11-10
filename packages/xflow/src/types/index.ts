import type { Node, Edge, Graph } from '@antv/x6'

export interface NodeMeta extends Node.Metadata {
  selectable?: boolean
  movable?: boolean
}

export interface EdgeMeta extends Edge.Metadata {
  animated?: boolean
}

export type GraphData = (NodeMeta | EdgeMeta)[]

export interface GraphOptions {
  configs: Graph.Options
  data: (NodeMeta | EdgeMeta)[]
  defaultNodeOptions?: Node.Metadata
  defaultEdgeOptions?: Edge.Metadata

  readonly?: boolean
  centerContent?: boolean
  zoomToFit?: boolean
  layout?: any // todo
}
