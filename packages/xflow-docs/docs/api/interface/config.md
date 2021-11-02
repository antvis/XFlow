---
title: Conifg 配置类型
group:
  path: /interface
  title: Interface 接口定义
  order: 1
nav:
  title: API
  path: /api
  order: 1
---

## 组件通用 Props

### IPosition

```tsx | pure
export interface IPosition {
  width?: number
  height?: number
  lineHeight?: number
  top?: number
  left?: number
  right?: number
  bottom?: number
}
```

## XFlowCanvas 组件

### NsGraphConfig

```tsx | pure
import { NsGraphConfig } from 'xflow'
export namespace NsGraphConfig {}
```

### NsGraphConfig.IEvent

```tsx | pure
export namespace NsGraphConfig {
  export interface IEvent<Key extends keyof EventArgs = any> {
    eventName: Key
    callback: (
      x6Event: EventArgs[Key],
      commands: IGraphCommandService,
      contextService: IContextService,
    ) => void
  }
}
```

### NsGraphConfig.INodeProps

```tsx | pure
export namespace NsGraphConfig {
  export interface INodeProps<T extends NsGraph.INodeConfig> {
    cell: X6Node
    data: T
    size: { width: number; height: number }
    position: { x: number; y: number }
  }
}
```

### NsGraphConfig.INodeRender

```tsx | pure
export namespace NsGraphConfig {
  export type INodeRender<T extends NsGraph.INodeConfig = any> = React.FC<INodeProps<T>>
}
```

### NsGraphConfig.IEdgeProps

```tsx | pure
export namespace NsGraphConfig {
  export interface IEdgeProps<T extends NsGraph.IEdgeConfig> {
    cell: X6Edge
    data: T
  }
}
```

### NsGraphConfig.IEdgeRender

```tsx | pure
export namespace NsGraphConfig {
 export type IEdgeRender<T extends NsGraph.IEdgeConfig = any> = React.FC<IEdgeProps<T>>
```

### NsGraphConfig.defaultNodeTypeParser

```tsx | pure
export namespace NsGraphConfig {
  /** 默认的Node解析函数 */
  export const defaultNodeTypeParser = (nodeData: NsGraph.INodeConfig) => nodeData.renderKey
}
```

### NsGraphConfig.defaultEdgeTypeParser

```tsx | pure
export namespace NsGraphConfig {
  /** 构造的Edge解析函数 */
  export const defaultEdgeTypeParser = (edgeData: NsGraph.IEdgeConfig) => edgeData.renderKey
}
```
