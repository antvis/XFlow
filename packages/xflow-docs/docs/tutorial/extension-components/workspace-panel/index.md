---
title: WorkspacePanel 自定义组件
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

# WorkspacePanel 自定义组件

如果以上的组件还无法满足你的需求，那么你可以基于 WorkspacePanel 开发自定义组件，WorkspacePanel 组件内部通过 ReactContext 获取 app 实例。app 实例提供以下能力：1.基于 app 实例可以通过 CommandService 去操作画布; 2. 基于 ModelService 去实现画布状态和组件的联动，3. 可以在 Command/Model 的能力不满足需求时，直接访问 X6 的实例。

# 何时使用

1. 操作画布的 UI 组件
2. 显示画布状态的 UI 组件
3. 以上两种能力的组合

# 代码演示

## 基础使用

<code src="./demos/basic/index.tsx" classname="custom-panel-demo" />

## 使用 app

app 的[类型定义](/api/interface/application)

## 使用 model service

- 可以获取应用的状态

使用 modelService
注册 modelService

## 使用 command service

- 可以方便的执行 xflow 的命令, onClick 中可以使用[ICommnadService](/api/interface/command) 执行[所有命令](/api/commands)

## 获取 X6 实例

1. 直接绑定事件
2. 直接使用 X6Graph 的 api 查询画布的状态
