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

# XFlowCanvas 画布组件

XFlowCanvas是 XFlow 最核心的画布组件, 它封装了 X6 提供的画布, 提供默认画布配置项、透传X6支持的所有事件并提供类型推导, 同时也允许用户自定义需要渲染的React节点和连线上需要渲染的React内容。


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

## 画布配置信息

`GraphConfig` 是 XFlowCanvas画布组件的配置类, 已经默认生成实例并设置了初始值。如果想自定义GrpahConfig, 可以通过createGraphConfig方法覆写, 相关API如下:

|              名称 |                                                              类型 | 必选 | 描述                               |
|----------------: | -----------------------------------------------------------------:| ---: | ---------------------------------- |
|      setX6Config |            (options: X6Graph.Options) => void;                   |      | 配置 GraphOptions          |
|    setNodeRender |(renderKey: string, component: NsGraphConfig.INodeRender) => void;|      | 设置 renderKey 和对应 React 组件 |
|    setEdgeRender |(renderKey: string, component: NsGraphConfig.IEdgeRender) => void;|      | 设置 renderKey 和对应 React 组件 |
|setNodeTypeParser |      (parser: (nodeData: NsGraph.INodeConfig) => string) => void;|      | 设置解析 node render key 的 parser |
|setEdgeTypeParser |      (parser: (edgeData: NsGraph.INodeConfig) => string) => void;|      | 设置解析 edge render key 的 parser |
|        setEvents |                (events: GraphEvent[]) => void;                   |      | 配置 GraphEvents                  |


### 设置画布配置项

在[默认配置](/api/interface/graph)不满足需求时，可以通过 setX6Config 方法来覆盖默认的配置。

```tsx | pure
export const useGraphConfig = createGraphConfig(config => {
  /** 可用配置项参考: https://x6.antv.vision/zh/docs/api/graph/graph */
  config.setX6Config({
    /** 画布网格 */
    grid: true,
    /** 画布缩放等级 */
    scaling: {
      min: 0.2,
      max: 3,
    },
    /** 画布滚轮缩放 */
    mousewheel: {
      enabled: true,
      /** 将鼠标位置作为中心缩放 */
      zoomAtMousePosition: true,
    },
  })
})
```

### 设置需要渲染的React节点

XFlow 默认会使用 `NSGraph.INodeConfig` 设置的renderKey来确定需要渲染哪个React节点, 如下代码所示, renderKey是 NODE1, 对应的React组件是 Node1。

```tsx | pure
export const useGraphConfig = createGraphConfig(config => {
  /**  renderKey是NODE1, 对应的React组件是 <Node1 /> */
  config.setNodeRender('NODE1', props => <Node1 {...props} />)
})
```

### 设置连线上需要渲染的React内容

XFlow 支持在连线上渲染复杂的React内容, 默认会使用 `NSGraph.IEdgeConfig` 设置的renderKey来确定需要渲染哪个React连线内容。如下代码所示, renderKey是 EDGE1, 对应的React组件是 Edge1。

需要注意的是, 如果连线上不需要渲染任何内容, 或者只是渲染简单的文本, 则只需要在NSGraphConfig中传入比如label="1:N"即可, 并不需要做如下配置。

```tsx | pure
export const useGraphConfig = createGraphConfig(config => {
  /**  renderKey是EDGE1, 对应的React组件是 <Edge1 /> */
  config.setEdgeRender('EDGE1', props => <Edge1 {...props} />)
})
```

### 监听画布相关事件

XFlow 支持监听 X6 画布(graph、node、edge、group)的事件，所有事件类型参考这里: [GraphEvents（X6 事件）](https://x6.antv.vision/zh/docs/tutorial/intermediate/events), 我们提供了 IEvent 类型定义来提供类型提示。

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

## 画布位置IPosition

`position`属性是利用 css 的绝对定位把画布定位在 XFlow工作空间的任意位置。

|   名称  |   类型 |  必选 |                     描述 |
| -----: | -----: |----| -------------------------: |
|    top | number |-   | 画布距离工作台上边缘的距离    |
| bottom | number |-   | 画布距离工作台下边缘的距离    |
|  right | number |-   | 画布距离工作台右边缘的距离    |
|   left | number |-   | 画布距离工作台左边缘的距离    |
|  width | number |-   |                组件宽度    |
| height | number |-   |                画布高度    |

## 画布样式className

允许传入自定义的classname来定义画布的样式。


## 使用小Tip

如果想在节点内部使用[IGraphCommandService](/api/interface/command#igraphcommandservice) 和 [IModelService](/api/interface/model#imodelservice), 来执行命令或者使用全局保存的状态, 则使用方式如下:

```tsx | pure
import { NsGraph, useAppContext } from '@antv/xflow'

interface IAppContext {
  cell: X6Node | X6Edge
  commands: IGraphCommandService
  modelService: IModelService
}

const Node1: NsGraph.INodeRender = props => {
  const ctx: IAppContext = useAppContext()
  const { data } = props
  return <div className="react-node">{data.label}</div>
}
```