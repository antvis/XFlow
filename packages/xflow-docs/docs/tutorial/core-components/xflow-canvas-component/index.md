---
title: XFlowCanvas 画布组件
order: 3
group:
  path: /tutorial-core-components
  title: 画布组件
  order: 4
nav:
  title: 教程
  path: /docs
  order: 1
---

## XFlowCanvas 画布组件

XFlowCanvas 画布组件负责渲染 X6 的画布，

```tsx | pure
export interface IProps {
  /** 核心模块Graph的配置，用于配置X6的Grpah.Options和绑定Graph的事件 */
  config?: GraphConfig
  /** 通过top/bottom/left/right来定位 */
  position?: IPosition
  /** 画布组件容器的className */
  className?: string
  /** 画布组件容器的style */
  style?: React.CSSProperties
}
```

## 组件示例

<code src="./demos/index.tsx" classname="component-demo" />

## 核心配置项

|     名称 |                                关联 api | 必选 | 描述                        |
| -------: | --------------------------------------: | ---: | --------------------------- |
|   config | [createGraphConfig](#creategraphconfig) |    ✓ | 配置 Graph                  |
| position |    [IPosition](/api/interface/position) |    ✓ | 配置 画布相对于工作台的位置 |

## createGraphConfig

提供了 createGraphConfig 来生成 graphConfig, 方便我们把 graphConfig 在单独的文件中配置。

```tsx | pure
import { createGraphConfig } from '@antv/xflow'

export const useGraphConfig = createGraphConfig((config, getProps) => {
  /** 下面详细介绍config上的api */
})

const Demo = props => {
  const graphConfig = useGraphConfig(props)
  return (
    <XFlow onLoad={onLoad}>
      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 0, right: 0 }} />
    </XFlow>
  )
}
```

## config

### 基础 api

|                 名称 |                                            类型 | 必选 | 描述                       |
| -------------------: | ----------------------------------------------: | ---: | -------------------------- |
|          setX6Config |             (options: X6Graph.Options) => void; |      | 配置 GraphOptions          |
|            setEvents |                 (events: GraphEvent[]) => void; |      | 配置 GraphEvents           |
| setDefaultNodeRender | (component: NsGraphConfig.INodeRender) => void; |    ✓ | 默认的 画布节点 React 组件 |
| setDefaultEdgeRender | (component: NsGraphConfig.IEdgeRender) => void; |      | 默认的 边 label React 组件 |

### 高级 api

|              名称 |                                                               类型 | 必选 | 描述                               |
| ----------------: | -----------------------------------------------------------------: | ---: | ---------------------------------- |
|     setNodeRender | (renderKey: string, component: NsGraphConfig.INodeRender) => void; |      | 设置 renderKey 和对应的 React 组件 |
|     setEdgeRender | (renderKey: string, component: NsGraphConfig.IEdgeRender) => void; |      | 设置 renderKey 和对应的 React 组件 |
| setNodeTypeParser |       (parser: (nodeData: NsGraph.INodeConfig) => string) => void; |    ✓ | 设置解析 node render key 的 parser |
| setEdgeTypeParser |       (parser: (edgeData: NsGraph.INodeConfig) => string) => void; |      | 设置解析 edge render key 的 parser |

## position

[position](http://localhost:8000/api/interface/config#iposition) 属性是利用 css 的绝对定位把画布定位在我们想要的地方。

|   名称 |   类型 |                       描述 | 必选 |
| -----: | -----: | -------------------------: | ---- |
|    top | number | 画布距离工作台上边缘的距离 | -    |
| bottom | number | 画布距离工作台下边缘的距离 | -    |
|  right | number | 画布距离工作台右边缘的距离 | -    |
|   left | number | 画布距离工作台左边缘的距离 | -    |
|  width | number |                   组件宽度 | -    |
| height | number |                   画布高度 | -    |

### API

#### setX6Config

在[默认配置](/api/interface/graph)不满足需求时,可以通过 setX6Config 来覆盖默认的配置。

```tsx | pure
export const useGraphConfig = createGraphConfig(config => {
  /** 可用配置项参考: https://x6.antv.vision/zh/docs/api/graph/graph */
  config.setX6Config({
    grid: true,
  })
})
```

#### setEvents

配置监听 X6 画布的事件，所有事件类型参考这里： [GraphEvents（X6 事件）](https://x6.antv.vision/zh/docs/tutorial/intermediate/events), 我们提供了 IEvent 的类型定义来提供类型提示。

```tsx | pure
export const useGraphConfig = createGraphConfig(config => {
  const event: IEvent<'node:click'> = {
    eventName: 'node:click',
    callback: (eventArgs, command, modelService) => {
      console.log('node:click', e)
    },
  }
  /**  这里绑定事件  */
  config.setEvents([event])
})
```

#### setDefaultNodeRender

配置渲染画布节点的默认 React 组件

```tsx | pure
import { NsGraphConfig } from '@antv/xflow'

/** 画布的React节点组件 */
export const DefaulttReactNode: NsGraphConfig.INodeRender = props => {
  return <div className="xflow-react-node">{props.data.label}</div>
}

export const useGraphConfig = createGraphConfig(config => {
  /** 设置画布的React节点组件 */
  graphConfig.setDefaultNodeRender(DefaulttReactNode)
})
```

节点内部可以通过 appContext 使用 XFlow 的核心模块:[IGraphCommandService](/api/interface/command#igraphcommandservice) 和 [IModelService](/api/interface/model#imodelservice)

```tsx | pure
import { NsGraphConfig, useAppContext } from '@antv/xflow'

interface IAppContext {
  cell: X6Node | X6Edge
  commands: IGraphCommandService
  modelService: IModelService
}

const Node1: NsGraphConfig.INodeRender = props => {
  const ctx: IAppContext = useAppContext()
  const { data } = props
  return <div className="react-node">{data.label}</div>
}
export const useGraphConfig = createGraphConfig(config => {
  graphConfig.setDefaultNodeRender(Node1)
})
```
