---
title: GraphRender 画布渲染
order: 35
group:
  path: /api/commands
  title: Command 命令
  order: 2
nav:
  title: API
  path: /api
  order: 1
---

# 画布内容渲染命令

XFlow 提供画布渲染的命令 `XFlowGraphCommands.GRAPH_RENDER`, 通过该命令可以实现在画布中渲染节点/连线的能力。用户只需传入指定数据结构的数据, 无需关心画布渲染的具体逻辑, XFlow 会自动渲染画布内容并做好 Diff。

## GraphRender 示例

<code src="./demos/index.tsx" />

## 画布内容如何渲染

通过调用`XFlowGraphCommands.GRAPH_RENDER`命令, 传入 [NSGraph.IGraphData](/api/interface) 类型的数据即可。

```tsx | pure
const graphData: NsGraph.IGraphData = {
  nodes: [
    { id: 'root1', x: 200, y: 50, width: 120, height: 40, renderKey: 'NODE1', info: 'React节点1' },
    { id: 'down1', x: 550, y: 50, width: 120, height: 40, renderKey: 'NODE1', info: 'React节点2' },
  ],
  edges: [{ id: 'root1-down1', source: 'root1', target: 'down1', label: 'text' }],
}

/** 执行画布渲染命令 */
app.executeCommand(XFlowGraphCommands.GRAPH_RENDER.id, {
  graphData,
} as NsGraphCmd.GraphRender.IArgs)
```

## GraphRender 命令参数(IArgs)

|         名称 |               类型 | 必选 |    默认值 | 描述                   |
| -----------: | -----------------: | ---: | --------: | ---------------------- |
|    graphData | NsGraph.IGraphData |    ✓ | undefined | 画布渲染数据           |
| beforeRender |           Function |      | undefined | 画布渲染之前的钩子     |
|  afterRender |           Function |      | undefined | 画布渲染之后的钩子     |
|  isNodeEqual |           Function |      | undefined | 判断节点是否相等的方法 |
|  isEdgeEqual |           Function |      | undefined | 判断边是否相等的方法   |

### graphData (必选)

画布渲染数据, 具体请参考数据格式 [NSGraph.IGraphData](/api/interface#inodeconfig)。

### beforeRender (可选)

画布渲染内容之前的钩子, 允许用户做一些额外的操作, 如果有需要。

```tsx | pure
beforeRender?: (graphMeta?: NsGraph.IGraphMeta) => Promise<NsGraph.IGraphData>
```

### afterRender (可选)

画布渲染内容之后的钩子, 允许用户做一些额外的操作, 如果有需要。

```tsx | pure
afterRender?: (graphData: NsGraph.IGraphData, graphMeta?: NsGraph.IGraphMeta) => Promise<any> | undefined
```

### isNodeEqual (可选)

GraphRender 内置画布内容 Diff 操作, 默认使用节点数据进行比较。如果用户需要自定义判断节点是否相等, 可以传入 isNodeEqual 方法。比如节点数据中有个 isActive 字段, 可以判断该字段的值是否相等来决定节点是否需要重新渲染。

```tsx | pure
/** 用户自定义方法判断节点内容是否相等 */
isNodeEqual?: (curNodeConfig: NsGraph.INodeConfig, nextNodeConfig: NsGraph.INodeConfig) => boolean
```

### isEdgeEqual (可选)

GraphRender 内置画布内容 Diff 操作, 默认使用边数据进行比较。如果用户需要自定义判断边是否相等, 可以传入 isEdgeEqual 方法。

```tsx | pure
/** 用户自定义方法判断边内容是否相等 */
isEdgeEqual?: (curEdgeConfig: NsGraph.IEdgeConfig, nextEdgeConfig: NsGraph.IEdgeConfig) => boolean
```

## 画布内容如何 Diff

XFlow 会自动进行画布内容的 Diff, 这对于画布内容动态更新、画布内容清空并重新渲染等应用场景非常有用。

举例:

1. 用户第一次传入节点 1,2,3, 第二次传入节点 2,3,4, 那么第二次渲染时, 节点 1 会被删除, 节点 2,3 保留不动, 节点 4 会新增。

2. 如果第二次传入的节点 2,3 数据有更新, 那么节点 2,3 会重新渲染, 以展示最新数据。
