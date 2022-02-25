import type React from 'react'
import type { IPosition, NsGraph } from '@antv/xflow-core'
import type { GraphConfig } from '@antv/xflow-core/es/xflow-main/graph/config'
import type { Graph as X6Graph } from '@antv/x6'

export type Datum = {
  nodes?: unknown[]
  egdes?: unknown[]
}

export interface IFlowchartGraphProps {
  config?: X6Graph.Options
  style?: React.CSSProperties
  className?: string
  position?: IPosition
  useConfig?: (config: GraphConfig) => void
  /**
   * 这种几个方法应该移动到最外层，后续
   */
  /** 新增节点时回调 */
  onAddNode?: (node: NsGraph.INodeConfig) => void
  /** 新增边时回调 */
  onAddEdge?: (edge: NsGraph.IEdgeConfig) => void
  /** 节点或边更新数据时调用 */
  onConfigChange?: (params: {
    data: Datum
    type: string
    config?: NsGraph.INodeConfig | NsGraph.IEdgeConfig
  }) => void
  /** 内部使用 */
  isXFlowCanvas?: boolean
}
