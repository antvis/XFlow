---
title: 全局状态
group:
  path: /models
  title: MODELS 全局状态
  order: 3
nav:
  title: API
  path: /api
  order: 2
---

## MODELS 是什么？

XFlow 内置了常用的 Model 在事件回调和渲染 UI 组件时使用， Model 通过监听画布（X6）的事件来更新内部的值，组件通过订阅 Model 的变化可以实现组件渲染的更新。

## XFlow MODELS

内置了以下这些 Model

```tsx | pure
/** 画布是否已开启多选 */
export namespace GRAPH_ENABLE_MULTI_SELECT {
  export const id = 'GRAPH_ENABLE_MULTI_SELECT'
  export type IState = {
    isEnable: boolean
  }
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
  export type IState = { flowId: string; [key: string]: any }
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
```

## 如何获取内置的 Model？

```tsx | pure
// 如何使用？
import { MODELS } from '@antv/xflow'
// 使用models
const getModel = async () => {
  // 使用model中的值，类型是：MODELS.GRAPH_SCALE.IState
  const graphScaleModel = await MODELS.GRAPH_SCALE.useModel(modelService)
}
```

Model 的类型如下：

```tsx | pure
import { NsModel } from '@antv/xflow'

/** NsModel.IModel的类型 */
export interface IModel<T> {
  /** 传入一个回调函数来订阅model的变化 */
  watch: IWatch<T>
  /** 更新model: 支持传值或者传入更新函数 */
  setValue: ISetValue<T>
  /** 获取model的值 */
  getValue: () => T | EmptyType
  /** 是否有非空的值 */
  hasValidValue: () => boolean
  /** 通过Promise获取一个非空值 */
  getValidValue: () => Promise<T>
}
```

## 如何获取内置 Model 的值？

使用 useValue 来获取 Model 中的值

```tsx | pure
// 如何使用？
import { MODELS } from '@antv/xflow'
// 使用models
const getModel = async () => {
  // 使用model中的值
  const graphScale = await MODELS.GRAPH_SCALE.useValue(modelService)
  // graphScale的类型是：MODELS.GRAPH_SCALE.IState
  console.log(graphScale)
}
```

## 如何在 UI 中订阅 Model 的变化？

### useModelAsync

下面通过 useModelAsync 的 Hook 在 UI 组件中订阅了 XFlow 内部的状态

```tsx | pure
// 如何使用？
import { MODELS, useXFlowApp, useModelAsync } from '@antv/xflow'
export const Demo: React.FC = () => {
  const app = useXFlowApp()
  const [modelValue] = useModelAsync<MODELS.SELECTED_NODES.IState>({
    // 异步获取Model
    getModel: async () => MODELS.SELECTED_NODES.getModel(app.modelService),
    // 初始值
    initialState: [],
  })
  return <div>选中节点数量：{modelValue.length} </div>
}
```
