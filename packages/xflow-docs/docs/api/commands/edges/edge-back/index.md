---
title: BackEdge 后置边
order: 26
group:
  path: /api/commands
  title: Command 命令
  order: 2
nav:
  title: API
  path: /api
  order: 1
---

## 连线后置

XFlow 提供画布连线后置的命令 `XFlowEdgeCommands.FRONT_EDGE`, 通过该命令可以实现在画布中后置一条连线。

## 如何后置一条连线

后置连线的使用方式非常简单, 仅需要传入要后置的连线ID即可

```tsx | pure

app.executeCommand(XFlowEdgeCommands.BACK_EDGE.id, {
  edgeId: ''
} as NsEdgeCmd.BackEdge.IArgs)

```

