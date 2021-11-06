---
title: ContextMenu 右键菜单
order: 4
group:
  path: /tutorial-ext-components
  title: 交互组件
  order: 5
nav:
  title: 教程
  path: /docs
---

# ContextMenu 右键菜单

负责在用户触发右键事件时，渲染一个菜单作为操作入口用于执行命令/操作 UI 组件/打开链接

# 何时使用

1. 需要一个或多个默认可见的操作画布的入口，比如：添加/删除图上节点
2. 需要一个或多个默认可见的操作画布 UI 组件的按钮，比如：打开一个弹窗组件
3. 需要一个或多个可打开的链接，比如展示一个可以点击的链接

# 代码演示

## 基础使用

<code src="./demos/basic/index.tsx" classname="canvas-menu-basic"   />

## 动态添加

<code src="./demos/dynamic-config/index.tsx" classname="canvas-menu-dynamic-config"   />

## 配合快捷键

<code src="./demos/hotkey/index.tsx" classname="canvas-menu-hotkey"   />

## 自定义渲染

<code src="./demos/custom-render/index.tsx" classname="canvas-custom-render"   />
