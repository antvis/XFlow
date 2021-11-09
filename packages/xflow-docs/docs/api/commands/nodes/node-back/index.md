---
title: BackNode 后置节点
order: 19
group:
  path: /api/commands
  title: Command 命令
  order: 2
nav:
  title: API
  path: /api
  order: 1
---

## 后置节点

XFlow 提供节点添加的命令 `XFlowNodeCommands.BACK_NODE`, 通过该命令可以实现在后置节点。

### Command 示例

<code src="./demos/index.tsx" classname="cmd-demo" />

### 命令参数（IArgs）

|   名称 |   类型 | 必选 | 默认值 | 描述    |
| -----: | -----: | ---: | -----: | ------- |
| nodeId | string |    ✓ |      - | 节点 id |

```tsx | pure
export interface IArgs extends IArgsBase {
  nodeId: string
}
```
