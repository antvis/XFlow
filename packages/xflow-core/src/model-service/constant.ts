import type { Node, Edge, CellView, Cell } from '@antv/x6'
import type { NsGraph } from '../interface'
import type { Token } from '../common/types'
import type { IModelService } from './interface'

/** existModel的Utils */
export const isModelExistUtil =
  <T>(token: Token<T>) =>
  (modelService: IModelService) => {
    const defer = modelService.findDeferredModel<T>(token)
    return defer && defer.promise ? true : false
  }
/** useModel的Utils */
export const getModelUtil =
  <T>(token: Token<T>) =>
  async (modelService: IModelService) => {
    return await modelService.awaitModel<T>(token)
  }
/** useModel的Utils */
export const useModelValueUtil =
  <T>(token: Token<T>) =>
  async (modelService: IModelService) => {
    const model = await modelService.awaitModel<T>(token)
    return model.getValidValue()
  }
/** 画布是否已开启多选 */
export namespace GRAPH_ENABLE_MULTI_SELECT {
  export const id = 'GRAPH_ENABLE_MULTI_SELECT'
  export type IState = {
    isEnable: boolean
  }
  export const getModel = getModelUtil<IState>(id)
  export const useValue = useModelValueUtil<IState>(id)
}
/** 画布是否全屏 */
export namespace GRAPH_FULLSCREEN {
  export const id = 'GRAPH_FULLSCREEN'
  export type IState = boolean
  export const getModel = getModelUtil<IState>(id)
  export const useValue = useModelValueUtil<IState>(id)
}
/** 画布已选中节点 */
export namespace IS_NODE_SELECTED {
  export const id = 'IS_NODE_SELECTED'
  export type IState = boolean
  export const getModel = getModelUtil<IState>(id)
  export const useValue = useModelValueUtil<IState>(id)
}
/** 画布选中节点是Group */
export namespace IS_GROUP_SELECTED {
  export const id = 'IS_GROUP_SELECTED'
  export type IState = boolean
  export const getModel = getModelUtil<IState>(id)
  export const useValue = useModelValueUtil<IState>(id)
}
/** 画布选中节点是Group */
export namespace IS_NORMAL_NODES_SELECTED {
  export const id = 'IS_NORMAL_NODES_SELECTED'
  export type IState = boolean
  export const getModel = getModelUtil<IState>(id)
  export const useValue = useModelValueUtil<IState>(id)
}
/** 画布选中Cell状态，保存最后一个选中的节点 */
export namespace SELECTED_CELL {
  export const id = 'LAST_SELECTED_CELL'
  export type IState = Cell | null
  export const getModel = getModelUtil<IState>(id)
  export const useValue = useModelValueUtil<IState>(id)
}
/** 画布选中CellS状态 */
export namespace SELECTED_CELLS {
  export const id = 'SELECTED_CELLS'
  export type IState = Cell[]
  export const getModel = getModelUtil<IState>(id)
  export const useValue = useModelValueUtil<IState>(id)
}

/** 画布选中节点状态， 如有多个节点则保存最后一个选中的节点 */
export namespace SELECTED_NODE {
  export const id = 'LAST_SELECTED_NODE'
  export type IState = Node<Node.Properties> | null
  export const getModel = getModelUtil<IState>(id)
  export const useValue = useModelValueUtil<IState>(id)
}
/** 画布选中节点状态 */
export namespace SELECTED_NODES {
  export const id = 'SELECTED_NODES'
  export type IState = Node<Node.Properties>[]
  export const getModel = getModelUtil<IState>(id)
  export const useValue = useModelValueUtil<IState>(id)
}
/** 画布选中边状态 */
export namespace SELECTED_EDGES {
  export const id = 'SELECTED_EDGES'
  export type IState = Edge<Edge.Properties>[]
  export const getModel = getModelUtil<IState>(id)
  export const useValue = useModelValueUtil<IState>(id)
}
/** 画布选中GROUP List */
export namespace SELECTED_GROUPS {
  export const id = 'SELECTED_GROUPS'
  export type IState = Node<Node.Properties>[]
  export const getModel = getModelUtil<IState>(id)
  export const useValue = useModelValueUtil<IState>(id)
}
/** 画布节点右键菜单状态 */
export namespace CONTEXTMENU_NODE {
  export const id = 'CONTEXTMENU_NODE'
  export type IState = Node<Node.Properties> | null
  export const getModel = getModelUtil<IState>(id)
  export const useValue = useModelValueUtil<IState>(id)
}
/** 画布边右键菜单状态 */
export namespace CONTEXTMENU_EDGE {
  export const id = 'CONTEXTMENU_EDGE'
  export type IState = Edge<Edge.Properties> | null
  export const getModel = getModelUtil<IState>(id)
  export const useValue = useModelValueUtil<IState>(id)
}
/** 画布右键菜单状态 */
export namespace CONTEXTMENU_TARGET {
  export const id = 'CONTEXTMENU_TARGET'
  export type IState = ContextMenuInfo | null
  export interface ContextMenuInfo {
    type: TargetType
    data: CellView.EventArgs['cell:contextmenu']
    anchor: { x: number; y: number }
    cell: Cell
  }
  export type TargetType = 'node' | 'edge' | 'blank' | 'null'
  export const getModel = getModelUtil<IState>(id)
  export const useValue = useModelValueUtil<IState>(id)
}
/** 画布元数据状态 */
export namespace GRAPH_META {
  export const id = 'GRAPH_META'
  export type IState = NsGraph.IGraphMeta
  export const getModel = getModelUtil<IState>(id)
  export const useValue = useModelValueUtil<IState>(id)
}
/** 画布缩放状态 */
export namespace GRAPH_SCALE {
  export const id = 'GRAPH_SCALE'
  export type IState = {
    zoomFactor: number
    sx?: number
    sy?: number
    ox?: number
    oy?: number
  }
  export const getModel = getModelUtil<IState>(id)
  export const useValue = useModelValueUtil<IState>(id)
}
/** COMMAND REDO STACK的状态*/
export namespace COMMAND_REDOABLE {
  export const id = 'COMMAND_REDOABLE'
  export type IState = boolean
  export const getModel = getModelUtil<IState>(id)
  export const useValue = useModelValueUtil<IState>(id)
}
/** COMMAND UNDO STACK的状态*/
export namespace COMMAND_UNDOABLE {
  export const id = 'COMMAND_UNDOABLE'
  export type IState = boolean
  export const getModel = getModelUtil<IState>(id)
  export const useValue = useModelValueUtil<IState>(id)
}
/** COMMAND 执行结果的状态*/
export namespace COMMAND_GLOBALS {
  export const id = 'COMMAND_GLOBALS'
  export type IState = Map<string, any>
  export const getModel = getModelUtil<IState>(id)
  export const useValue = useModelValueUtil<IState>(id)
}

/** History Undo Redo */
export namespace HISTORY_UNDOABLE {
  export const id = 'HISTORY_UNDOABLE'
  export type IState = boolean
  export const getModel = getModelUtil<IState>(id)
  export const useValue = useModelValueUtil<IState>(id)
}
export namespace HISTORY_REDOABLE {
  export const id = 'HISTORY_REDOABLE'
  export type IState = boolean
  export const getModel = getModelUtil<IState>(id)
  export const useValue = useModelValueUtil<IState>(id)
}
