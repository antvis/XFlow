---
title: NsGraph 图数据结构
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

|                                                   名称 |                                                                                          说明 |
| -----------------------------------------------------: | --------------------------------------------------------------------------------------------: |
|       [NsGraph](/docs/api/interface#nsgraph-namespace) |                                                                       XFlow 的 基础 namespace |
|   [NsGraph.IGraphMeta](/docs/api/interface#igraphmeta) | Graph 元数据 <br> 除了图的 Id 之外，可能包括这些业务属性：画布名称/创建时间/更新时间/用户权限 |
|   [NsGraph.IGraphData](/docs/api/interface#igraphmeta) |                                                                            图数据包括节点和边 |
| [NsGraph.INodeConfig](/docs/api/interface#inodeconfig) |                                                                                  节点配置类型 |
| [NsGraph.IEdgeConfig](/docs/api/interface#iedgeconfig) |                                                                                  边的配置类型 |
| [NsGraph.INodeAnchor](/docs/api/interface#inodeanchor) |                                                                                节点的锚点配置 |

```tsx | pure
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

  /** 边配置 */
  export interface IEdgeConfig {
    // ...
  }

  /** 锚点配置 */
  export interface INodeAnchor {
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
  /** 边的上游节点的锚点Id */
  targetPortId?: string
  /** 边上label */
  label?: string
  /** 边上渲染React组件的key */
  renderKey?: string
  /** 边上渲染内容的宽度 */
  edgeContentWidth?: number
  /** 边上渲染内容的高度 */
  edgeContentHeigt?: number
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
