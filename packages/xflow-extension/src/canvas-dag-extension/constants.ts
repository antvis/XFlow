import type { DisposableCollection } from '@antv/xflow-core'
import type { IGraphCommand } from '@antv/xflow-core'
import { getModelUtil, useModelValueUtil } from '@antv/xflow-core/es/model-service/constant'

export const EDGE_PATH_TYPE = {
  /** node 水平 */
  HORIRONTAL_NODE: 'xflow-node-horizontal-edge',
  /** Node 垂直 */
  VERTICAL_NODE: 'xflow-node-vertical-edge',
  /** Group 垂直 */
  VERTICAL_GROUP: 'xflow-group-vertical-edge',
} as const

export const XFLOW_SHAPE = {
  EDGE: 'xflow-edge',
} as const

export const XFLOW_NODE_SHAPE = 'XFLOW_NODE_SHAPE'

export const EDGE_PROCESSING_CLASSNAME = 'processing'

export const NODE_DEFAULT_WIDTH = 160

export const NODE_DEFAULT_HEIGHT = 32

/** 画布状态 */
export namespace GRAPH_STATUS_INFO {
  /** Model id */
  export const id = 'GRAPH_STATUS_INFO'
  /** 类型 */
  export enum StatusEnum {
    SUCCESS = 'success',
    PROCESSING = 'processing',
    ERROR = 'error',
    DEFAULT = 'default',
    WARNING = 'warning',
  }
  export interface INodeStatus {
    status: StatusEnum
    [key: string]: any
  }
  export interface IState {
    graphStatus: StatusEnum
    statusMap: Map<string, INodeStatus>
    subscription: DisposableCollection
  }
  /** Model Utils */
  export const getModel = getModelUtil<IState>(id)
  export const useValue = useModelValueUtil<IState>(id)
}

export namespace XFlowDagCommands {
  //更新节点的状态
  export const QUERY_GRAPH_STATUS: IGraphCommand = {
    id: 'xflow:query-graph-status',
    label: '查询画布节点状态',
  }
}
