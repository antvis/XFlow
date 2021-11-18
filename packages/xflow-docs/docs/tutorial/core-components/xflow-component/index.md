---
title: XFlow 工作台组件
order: 2
group:
  path: /tutorial-core-components
  title: 画布组件
  order: 4
nav:
  title: 教程
  path: /docs
  order: 1
---

# XFlow 工作台组件

在 XFlow 中, 一切都是React组件。XFlow工作台组件是 XFlow 的核心组件之一, 可以理解为是一个图编辑应用的工作空间, 它包含了画布组件、各种交互组件等。


## 核心配置项

### 元信息Meta

XFlow支持在工作台初始化之前传入Meta元信息, 该元信息会被存储在全局的ModelService实例中, 在整个XFlow工作空间可用。[ModelService具体的使用方式](/api/models)


### 画布配置GraphConfig

XFlow 提供默认画布配置项, 也允许自定义画布配置项。具体配置项与 X6 保持一致, 详细见[X6 画布配置](https://x6.antv.vision/zh/docs/api/graph/graph)

```tsx | pure
export const useGraphConfig = createGraphConfig(config => {
  /** 预设XFlow画布配置项 */
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
  /** 预设XFlow画布需要渲染的React节点/边 */
  config.setNodeRender('NODE1', props => <Node1 {...props} />)
  config.setNodeRender('NODE2', Node2)
  config.setEdgeRender('EDGE1', props => <Edge1 {...props} />)
  config.setEdgeRender('EDGE2', props => <Edge2 {...props} />)
})
```

### 画布数据GraphData
XFlow支持直接传入GraphData即可渲染出画布内容。需要注意的是GraphData里的节点node必须要有x,y属性。另外XFlow内部会自动进行画布内容Diff, 相同节点、连线不会重新渲染。

```tsx | pure
<XFlow graphData={graphData}>
  <XFlowCanvas />
</XFlow>
```

### 布局算法Layout

XFlow 支持 AntV 旗下的常见布局算法, 详细见[@antv/layout](https://g6.antv.vision/zh/docs/api/graphLayout/guide), 也允许用户自定义布局算法。

如果使用`@antv/layout`支持的布局算法, 则使用方式如下:
```tsx | pure
<XFlow
  graphData={graphData}
  graphLayout={{
    layoutType: 'dagre',
    layoutOptions: {
      type: 'dagre',
      rankdir: 'TB',
      nodesep: 60,
      ranksep: 40,
    },
  }}
>
  <XFlowCanvas />
</XFlow>
```

如果使用自定义布局算法, 则使用方式如下:

```tsx | pure
graphLayout={{
  customLayout: async (graphData: NsGraph.IGraphData) => {
    /** 自定义布局算法, 为每一个节点node赋予渲染所需的x,y属性 */
    return graphData
  }
}}
```

## XFlow初始化完成回调onLoad

XFlow初始化完成后会回调`onLoad`方法, 在`onLoad`中可以执行各种业务逻辑操作, 比如从服务端获取数据、执行布局算法、渲染画布内容、监听画布相关事件等。

```tsx | pure

/** XFlow初始化完成的回调 */
const onLoad: IAppLoad = async app => {
  /** 缩放画布 */
  const graph = await app.getGraphInstance()
  graph.zoom(-0.2)

  /** Mock从服务端获取数据 */
  const graphData = await MockApi.loadGraphData()

  /** 渲染画布数据 */
  await app.executeCommand(XFlowGraphCommands.GRAPH_RENDER.id, {
    graphData,
  } as NsGraphCmd.GraphRender.IArgs)

  /** 监听画布相关事件 */
  graph.on('node:mousedown', ({ e, x, y, node, view }) => {})
}

```


在`onLoad`回调方法中, 会返回XFlow实例, 我们称之为app。通过app实例, 可以获取画布实例、获取画布配置项、执行各种命令操作等。

```tsx | pure

/** 获取画布实例 */
const graphInstance = await app.getGraphInstance()
/** 获取画布配置项 */
const graphConfig = await app.getGraphConfig()

/** 执行XFlow内置的各种命令操作 */
app.executeCommand(XFlowGraphCommands.GRAPH_RENDER.id, {
  graphData,
} as NsGraphCmd.GraphRender.IArgs)

```


## XFlow核心Hook

### 命令钩子CommandConfig

在实际业务中, 可能有很多操作都需要与服务端做交互, 将数据保存在服务端, 比如往画布中添加一个节点、修改节点的信息、拖拽出一条连线等操作。`XFlow提供了执行命令的钩子, 允许用户提前预设好service层的行为, 在触发某个具体命令时, 会自动调用钩子里的service逻辑`。

```tsx | pure
export const useCmdConfig = createCmdConfig(config => {
  /** 设置hook */
  config.setRegisterHookFn(hooks => {
    const list = [
      hooks.addNode.registerHook({
        name: 'addNodeHook',
        handler: async args => {
          args.createNodeService = MockApi.addNode
        },
      }),
      hooks.addEdge.registerHook({
        name: 'addEdgeHook',
        handler: async args => {
          args.createEdgeService = MockApi.addEdge
        },
      }),
    ]
    const toDispose = new DisposableCollection()
    toDispose.pushAll(list)
    return toDispose
  })
})

```

### 全局状态钩子 ModelServiceConfig

在实际业务中, 可能有很多画布与交互组件联动的需求, 比如画布选中一个节点, 交互组件里展示该节点信息, 同时修改节点信息, 修改后的节点信息实时同步到画布节点中。XFlow内置了若干全局状态, 比如画布当前选中的节点/连线、 画布的缩放比例等, 这些全局状态可以在画布中使用、在配套的交互组件中使用, 方便实现画布与交互组件的联动效果。`但是我们也允许用户主动扩展需要保存的全局状态, 以实现业务需要的效果`。

```tsx | pure
待书写
```


### HookConfig

待书写
