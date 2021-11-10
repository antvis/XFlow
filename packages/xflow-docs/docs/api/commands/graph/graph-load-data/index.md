---
title: GraphLoadData 画布数据获取
order: 32
group:
  path: /api/commands
  title: Command 命令
  order: 2
nav:
  title: API
  path: /api
  order: 1
---

# 画布数据获取

XFlow 提供画布渲染数据获取的命令 `XFlowGraphCommands.GRAPH_LOAD_DATA`, 通过该命令可以实现从服务端获取画布渲染数据。

## 如何获取画布数据

获取画布数据命令的使用方式非常简单, 仅需要传入一个指定的方法, 返回 XFlow 要求的数据格式 [NSGraph.IGraphData](/api/interface) 即可。

```tsx | pure
app.executeCommand(XFlowGraphCommands.LOAD_DATA.id, {
  loadDataService: async () => {
    const graphData: NsGraph.IGraphData = {
      nodes: [
        { id: 'root1', width: 120, height: 40, renderKey: 'NODE1', info: 'React节点1' },
        { id: 'down1', width: 120, height: 40, renderKey: 'NODE1', info: 'React节点2' },
      ],
      edges: [
        { id: 'root1-down1', source: 'root1', target: 'down1', label: 'text' }
      ],
    }
    return graphData
  },
} as NsGraphCmd.GraphLoadData.IArgs)
```

### GraphLoadData 命令参数(IArgs)

|             名称 |             类型 | 必选 |      默认值 | 描述                 |
| --------------: | ---------------: | ---: | --------: | -------------------- |
| loadDataService |         Function |    ✓ | undefined | 获取服务端数据的方法 |

### GraphLoadData 命令返回(IResult)

|            名称 |               类型 | 必选 |    默认值 | 描述               |
| -------------: | -----------------: | ---: | --------: | ------------------ |
|      graphData | NsGraph.IGraphData |    ✓ | undefined | 从服务端返回的数据 |

