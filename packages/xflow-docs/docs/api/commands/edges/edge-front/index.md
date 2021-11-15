---
title: FrontEdge 前置连线
order: 25
group:
  path: /api/commands
  title: Command 命令
  order: 2
nav:
  title: API
  path: /api
  order: 1
---

## 连线前置

XFlow 提供画布连线前置的命令 `XFlowEdgeCommands.FRONT_EDGE`, 通过该命令可以实现在画布中前置一条连线。

## 如何前置一条连线

前置连线的使用方式非常简单, 仅需要传入要前置的连线ID即可。需要说明的是, 在连线高亮的命令中, XFlow 默认将高亮的连线前置。

```tsx | pure

app.executeCommand(XFlowEdgeCommands.FRONT_EDGE.id, {
  edgeId: ''
} as NsEdgeCmd.FrontEdge.IArgs)

```
