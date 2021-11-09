---
title: FrontNode 前置节点
order: 18
group:
  path: /api/commands
  title: Command 命令
  order: 2
nav:
  title: API
  path: /api
  order: 1
---

## 前置节点

XFlow 提供前置节点的命令 `XFlowNodeCommands.FRONT_NODE`, 通过该命令可以前置节点。

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
