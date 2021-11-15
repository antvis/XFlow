---
title: HighlightEdge 高亮边
order: 24
group:
  path: /api/commands
  title: Command 命令
  order: 2
nav:
  title: API
  path: /api
  order: 1
---

# HighlightEdge 高亮连线

XFlow 提供高亮连线的命令 `XFlowNodeCommands.HIGHLIGHT_EDGE`, 通过该命令可以实现在画布中高亮一条连线。

## HighlightEdge 示例

<code src="./demos/index.tsx" classname="cmd-demo" />

## 命令参数

|          名称 |         类型 | 必选 | 默认值     | 描述            |
| -----------: | ----------: | ---: | --------: | -------------  |
| edgeId       | string      |    ✓ | undefined | 连线唯一id      |
| strokeColor  | string      |      | undefined | 连线高亮颜色     |
| strokeWidth  | number      |      | undefined | 连线高亮宽度     |


### edgeId

连线的唯一Id, 能够唯一确定一条连线。

### strokeColor

连线高亮时的填充色。

### strokeWidth

连线高亮时的宽度。