---
title: HighlightNode 高亮节点
order: 15
group:
  path: /api/commands
  title: Command 命令
  order: 2
nav:
  title: API
  path: /api
  order: 1
---

## 高亮节点

XFlow 提供节点添加的命令 `XFlowNodeCommands.HIGHLIGHT_NODE`, 通过该命令可以实现高亮 SVG 节点。

### Command 示例

<code src="./demos/index.tsx" classname="cmd-demo" />

### 命令参数（IArgs）

|                    名称 |    类型 | 必选 | 默认值 | 描述                     |
| ----------------------: | ------: | ---: | -----: | ------------------------ |
|                  nodeId |  string |    ✓ |      - | 节点唯一 id              |
|                  stroke |  string |    ✓ |      - | 节点高亮边框颜色         |
|             strokeWidth |  number |      |      - | 节点高亮边框宽度         |
| isHighlightRelatedLines | boolean |      |      - | 是否联动高亮节点的关联边 |
|              edgeStroke |  string |      |      - | 边高亮颜色               |

| edgeStrokeWidth?: number
| number | | - | 边高亮宽度 |

```tsx | pure
export interface IArgs extends IArgsBase {
  /** 节点唯一id */
  nodeId: string
  /** 节点高亮边框颜色 */
  stroke: string
  /** 节点高亮边框宽度 */
  strokeWidth?: number
  /** 是否联动高亮节点的关联边 */
  isHighlightRelatedLines?: boolean
  /** 边高亮颜色 */
  edgeStroke?: string
  /** 边高亮宽度 */
  edgeStrokeWidth?: number
}
```
