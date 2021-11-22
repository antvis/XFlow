---
title: CenterNode 居中节点
order: 17
group:
  path: /api/commands
  title: Command 命令
  order: 2
nav:
  title: API
  path: /api
  order: 1
---

## 居中节点

XFlow 提供节点添加的命令 `XFlowNodeCommands.CENTER_NODE`, 通过该命令可以居中节点。

### Command 示例

<code src="./demos/index.tsx" classname="cmd-demo" />

### 命令参数（IArgs）

|       名称 |                类型 | 必选 | 默认值 | 描述                           |
| ---------: | ------------------: | ---: | -----: | ------------------------------ |
| nodeConfig | NsGraph.INodeConfig |    ✓ |      - | 居中节点的配置数据 （id 必选） |

```tsx | pure
export interface IArgs extends IArgsBase {
  /** 居中节点的配置数据 */
  nodeConfig: NsGraph.INodeConfig
}
```

#### nodeConfig

节点的元数据，参考数据格式 [NsGraph.INodeConfig](/api/interface#inodeconfig)
