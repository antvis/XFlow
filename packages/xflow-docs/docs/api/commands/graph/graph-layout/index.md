---
title: GraphLayout 画布布局
order: 34
group:
  path: /api/commands
  title: Command 命令
  order: 2
nav:
  title: API
  path: /api
  order: 1
---

# 画布内容布局命令

XFlow 提供画布内容布局的命令 `XFlowGraphLayout.GRAPH_LAYOUT`, 通过该命令实现画布内容的布局。XFlow 默认支持 AntV 旗下的布局算法, 也允许用户传入自定义布局算法。

## GraphLayout 示例

<code src="./demos/index.tsx" />

## 如何使用 @antv/layout 支持的布局

XFlow 会默认安装 [@antv/layout](https://github.com/antvis/layout)。具体支持的 布局算法类型 以及 布局算法对应的参数 请参考兄弟团队[G6 图布局文档](https://g6.antv.vision/zh/docs/api/graphLayout/guide)。

目前支持 GridLayout 格子布局、RandomLayout 随机布局、GForceLayout G6 支持的经典力导向布局、ForceLayout 引用 d3 的经典力导向布局、CircularLayout 环形布局、DagreLayout 层次布局、RadialLayout 辐射状布局。

```tsx | pure
app.executeCommand(XFlowGraphCommands.GRAPH_LAYOUT.id, {
  graphData,
  layoutType: 'dagre',
  layoutOptions: {
    type: 'dagre',
    rankdir: 'LR',
    nodesep: 20,
    ranksep: 80,
  },
} as NsGraphCmd.GraphLayout.IArgs)
```

## 如何使用自定义布局

XFlow 也支持用户自定义布局算法, 只需要返回 [NSGraph.IGraphData](/api/interface) 类型的数据即可。

自定义布局算法接收原始 graphData, 返回新 graphData(每一个节点都被赋予计算好的 x, y 值, x, y 决定了节点在画布中的渲染位置)。

```tsx | pure
app.executeCommand(XFlowGraphCommands.GRAPH_LAYOUT.id, {
  graphData,
  customLayout: async (graphData: NsGraph.IGraphData) => {
    const res: NsGraph.IGraphData = await customLayoutFunc(graphData)
    return res
  },
} as NsGraphCmd.GraphLayout.IArgs)
```

## GraphLayout 命令参数(IArgs)

|          名称 |                  类型 | 必选 |    默认值 | 描述                                  |
| ------------: | --------------------: | ---: | --------: | ------------------------------------- |
|     graphData |    NsGraph.IGraphData |    ✓ | undefined | 画布数据                              |
|    layoutType |   Registy.LayoutTypes |      | undefined | @antv/layout 支持的布局类型           |
| layoutOptions | Registy.LayoutOptions |      | undefined | @antv/layout 支持的布局类型对应的参数 |
|  customLayout |              Function |      | undefined | 用户自定义布局算法                    |

### graphData (必选)

画布渲染数据, 具体请参考数据格式 [NSGraph.IGraphData](/api/interface#inodeconfig)。

### layoutType (可选)

`@antv/layout` 支持的布局算法类型, 目前支持 'grid' | 'random' | 'gForce' | 'force' | 'circular' | 'dagre' | 'radial'

### layoutOptions (可选)

`@antv/layout` 支持的布局算法类型对应的参数。

### customLayout (可选)

自定义布局算法接收原始 graphData, 返回新 graphData(每一个节点都被赋予计算好的 x, y 值, x, y 决定了节点在画布中的渲染位置)。
