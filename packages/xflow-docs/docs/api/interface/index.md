---
title: NsGraph 图数据结构
order: 1
group:
  path: /interface
  title: Interface 接口定义
  order: 1
nav:
  title: API
  path: /api
  order: 1
---

## NsGraph namespace

|                                                名称 |                                                                                          说明 |
| --------------------------------------------------: | --------------------------------------------------------------------------------------------: |
|         [NsGraph](/api/interface#nsgraph-namespace) |                                                                       XFlow 的 基础 namespace |
|     [NsGraph.IGraphMeta](/api/interface#igraphmeta) | Graph 元数据 <br> 除了图的 Id 之外，可能包括这些业务属性：画布名称/创建时间/更新时间/用户权限 |
|     [NsGraph.IGraphData](/api/interface#igraphmeta) |                                                                            图数据包括节点和边 |
|   [NsGraph.INodeConfig](/api/interface#inodeconfig) |                                                                                  节点配置类型 |
|   [NsGraph.IEdgeConfig](/api/interface#iedgeconfig) |                                                                                  边的配置类型 |
|   [NsGraph.INodeAnchor](/api/interface#inoderender) |                                                                                节点的锚点配置 |
| [NsGraph.IGroupConfig](/api/interface#IGroupConfig) |                                                                                  群组节点配置 |
|             [NsGraph.IEvent](/api/interface#ievent) |                                                                                Graph 事件配置 |
|   [NsGraph.INodeRender](/api/interface#inoderender) |                                                                                ReactNode 组件 |
|   [NsGraph.IEdgeRender](/api/interface#iedgerender) |                                                                               ReactLabel 组件 |

```tsx | pure
/** 如何引入？ */
import { NsGraph } from '@antv/xflow'

/** 类型说明 */
export namespace NsGraph {
  /** Graph元数据：除了图的Id之外，可能包括这些业务属性：画布名称/创建时间/更新时间/用户权限 */
  export interface IGraphMeta {
    // ...
  }

  /** 图数据包括节点配置和边配置 */
  export interface IGraphData {
    // ...
  }

  /** 节点配置 */
  export interface INodeConfig {
    // ...
  }

  /** 群组节点配置 */
  export interface IGroupConfig {
    // ...
  }

  /** 边配置 */
  export interface IEdgeConfig {
    // ...
  }

  /** 锚点配置 */
  export interface INodeAnchor {
    // ...
  }

  /** 事件配置 */
  export interface IEvent {
    // ...
  }

  /** 节点React组件类型 */
  export interface INodeRender {
    // ...
  }

  /** 边Label组件类型 */
  export interface IEdgeRender {
    // ...
  }
}
```

### IGraphMeta

图的基础元数据，除了 flowId 之外，可能包括这些业务属性：画布名称/创建时间/更新时间/用户权限/画布

```tsx | pure
export interface IGraphMeta {
  /** 画布id */
  flowId: string
  [key: string]: any
}
```

### IGraphData

图数据包括节点和边

```tsx | pure
/**  */
export interface IGraphData {
  nodes: INodeConfig[]
  edges: IEdgeConfig[]
}
```

### INodeConfig

节点配置类型

```tsx | pure
/** 边数据 */
export interface INodeConfig {
  /** 节点的唯一标识 */
  id: string
  /** 节点在画布的位置: x */
  x?: number
  /** 节点在画布的位置: y */
  y?: number
  /** 节点的渲染宽度 */
  width?: number
  /** 节点的渲染高度 */
  height?: number
  /** 节点名 */
  label?: string
  /** 节点React组件的key */
  renderKey?: string
  /** 用户自定义字段 */
  [key: string]: any
}
```

## IGroupConfig

群组节点配置类型，群组也是节点，所以 extends 节点的所有属性

```tsx | pure
/** 群组节点信息 */
export interface IGroupConfig extends INodeConfig {
  /** 是否折叠 */
  isCollapsed?: boolean
  /** group 折叠后的大小 */
  groupCollapsedSize?: { width: number; height: number }
  /** group 未折叠的大小 */
  groupChildrenSize?: { width: number; height: number }
  /** 子节点元素集合 */
  groupChildren?: string[]
  /** group Header */
  groupHeaderHeight?: number
  /** group 内边距 */
  groupPadding?: number
}
```

### IEdgeConfig

边的配置类型

```tsx | pure
/** 边数据 */
export interface IEdgeConfig {
  /** 边的唯一标识 */
  id: string
  /** 边的上游节点id */
  source: string
  /** 边的下游节点id */
  target: string
  /** 边的上游节点的锚点Id */
  sourcePortId?: string
  /** 边的下游节点的锚点Id */
  targetPortId?: string
  /** 边上label */
  label?: string
  /** 边上渲染React组件的key */
  renderKey?: string
  /** 边上渲染内容的宽度 */
  edgeContentWidth?: number
  /** 边上渲染内容的高度 */
  edgeContentHeight?: number
  /** 用户自定义字段 */
  [key: string]: any
}
```

### INodeAnchor

节点的锚点配置

```tsx | pure
export interface INodeAnchor extends PortManager {
  /** uuid */
  id: string
  /** position enum NsGraph.AnchorGroup */
  group: AnchorGroup
  /** position enum NsGraph.AnchorType */
  type: AnchorType
  /** tooltip */
  tooltip: string
  /** 用户自定义字段 */
  [key: string]: any
}
```

#### AnchorGroup

内置的 Anchor 位置分组配置： 上下左右

```tsx | pure
/** Anchor 位置分组： 上下左右 */
export enum AnchorGroup {
  TOP = 'top',
  BOTTOM = 'bottom',
  RIGHT = 'right',
  LEFT = 'left',
}
```

#### AnchorType

Anchor 输入/输出类型，用于有向无环图

```tsx | pure
/** Anchor 数据类型：输入/输出 */
export enum AnchorType {
  INPUT = 'input',
  OUTPUT = 'output',
}
```

### IEvent

画布事件配置项：包含事件名和事件回调

```tsx | pure
export interface IEvent<Key extends keyof EventArgs = any> {
  eventName: Key
  callback: (
    x6Event: EventArgs[Key],
    commands: IGraphCommandService,
    contextService: IContextService,
  ) => void
}
```

### INodeRender

React Node 组件

```tsx | pure
export type INodeRender<T extends NsGraph.INodeConfig = any> = React.FC<INodeProps<T>>
```

### INodeProps

React Node 组件的 Props

```tsx | pure
export interface INodeProps<T extends NsGraph.INodeConfig> {
  cell: X6Node
  data: T
  size: { width: number; height: number }
  position: { x: number; y: number }
}
```

### IEdgeRender

React EdgeLabel 组件

```tsx | pure
export type IEdgeRender<T extends IEdgeConfig = any> = React.FC<IEdgeProps<T>>
```

### IEdgeProps

React EdgeLabel 组件的 Props

```tsx | pure
export interface IEdgeProps<T extends NsGraph.IEdgeConfig> {
  cell: X6Edge
  data: T
}
```
