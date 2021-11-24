---
title: UpdateNode 更新节点
order: 13
group:
  path: /api/commands
  title: Command 命令
  order: 2
nav:
  title: API
  path: /api
  order: 1
---

# 节点更新命令

XFlow 提供节点更新的命令 `XFlowNodeCommands.NODE_UPDATE`, 通过该命令可以实现节点的更新。

- 节点的位置更新(Position)、节点的尺寸更新(Size)、节点的业务数据更新, 都会触发节点的重新渲染。
- 不论是哪种情况的更新, 都会触发节点的重新渲染, 在 React 节点中可以拿到最新的 NodeConfig 数据。比如我们要实现节点的展开收缩功能, 只需要赋予节点新的 Size(width、height)即可。

### NodeUpdate 示例

<code src="./demos/index.tsx" classname="cmd-demo"  />

### 如何更新节点内容

通过调用`XFlowNodeCommands.UPDATE_NODE`命令, 传入最新的 NodeConfig 即可。

```tsx | pure
app.executeCommand(XFlowNodeCommands.UPDATE_NODE.id, {
  nodeConfig: {
    id: 'node1',
    /** Position */
    x: 100,
    y: 100,
    /** Size */
    width: 120,
    height: 60,
    /** 用户自定义字段, 一般是业务数据 */
    label: 'Hello World New',
  },
} as NsNodeCmd.UpdateNode.IArgs)
```

### 节点如何重新渲染

当节点的 NodeConfig 数据发生变化时, XFlow 会自动触发当前节点的重新渲染。你可以获取到最新的 Position、Size、业务数据, 并根据这些最新数据, 做一些想做的事情, 比如示例中更新节点的展示内容。

```tsx | pure
export const useGraphConfig = createGraphConfig(graphConfig => {
  graphConfig.setX6Config({ grid: true })
  graphConfig.setDefaultNodeRender(props => {
    /** 节点数据更新时, React节点会拿到最新的数据, 并重新渲染 */
    return <div className="react-node"> {props.data.label} </div>
  })
})
```

### NodeUpdate 命令参数(IArgs)

|              名称 |                类型 | 必选 |    默认值 | 描述                       |
| ----------------: | ------------------: | ---: | --------: | -------------------------- |
|        nodeConfig | NsGraph.INodeConfig |    ✓ | undefined | 节点数据                   |
| updateNodeService |  IUpdateNodeService |      | undefined | 与服务端做交互更新节点信息 |

#### nodeConfig (必选)

节点最新数据, 具体请参考数据格式 [NSGraph.INodeConfig](/api/interface#inodeconfig)

#### updateNodeService (可选)

与服务端做交互请求, 用户更新节点信息。请求成功后, 才实际生效到画布中。如果需要使用该功能, 你只需要把服务请求方法传进去, 返回 NsGraph.INodeConfig 新数据即可。

```tsx | pure
interface IUpdateNodeService {
  (args: IArgs): Promise<NsGraph.INodeConfig>
}
```
