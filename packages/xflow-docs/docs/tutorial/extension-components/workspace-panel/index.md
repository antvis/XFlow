---
title: WorkspacePanel 通用面板组件
order: 10
group:
  path: /tutorial-ext-components
  title: 交互组件
  order: 5
nav:
  title: 教程
  path: /docs
  order: 1
---

# WorkspacePanel 通用面板组件

基础的面板组件，会在画布渲染后加载

# 何时使用

1. 扩展业务组件时

# 代码演示

## 基础使用

- 可以方便的执行 xflow 的命令, onClick 中可以使用[ICommnadService](/api/interface/command) 执行[所有命令](/api/commands)
- 可以获取画布状态

<code src="./demos/basic/index.tsx" classname="WorkspacePanel" />
