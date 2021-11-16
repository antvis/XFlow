import { IPosition, NsGraph } from '@antv/xflow-core'
import { Graph } from '@antv/x6'

export type Datum = {
  nodes?: unknown[]
  egdes?: unknown[]
}

export interface IFlowchartGraphProps {
  config?: any
  style?: React.CSSProperties
  className?: string

  position?: IPosition
  /**
   * 这种几个方法应该移动到最外层，后续
   */
  /** 新增节点时回调 */
  onAddNode?: (node: NsGraph.INodeConfig) => void
  /** 新增边时回调 */
  onAddEdge?: (node: NsGraph.IEdgeConfig) => void
  /** 节点或边更新数据时调用 */
  onConfigChange?: (params: {
    data: Datum
    type: string
    config?: NsGraph.INodeConfig | NsGraph.IEdgeConfig
  }) => void
  /** 内部使用 */
  isXFlowCanvas?: boolean
}
