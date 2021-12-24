---
title: Toolbar 工具栏
order: 2
group:
  path: /tutorial-ext-components
  title: 交互组件
  order: 5
nav:
  title: 教程
  path: /docs
  order: 1
---

# CanvasToolbar 画布工具栏

工具栏组件负责渲染按钮提供操作入口，在工具栏中可以执行命令/操作 UI 组件/打开链接的方式实现各种产品功能。

# 何时使用

1. 需要一个或多个默认可见的操作画布的入口，比如：添加/删除图上节点
2. 需要一个或多个默认可见的操作画布 UI 组件的按钮，比如：打开一个弹窗组件
3. 需要一个或多个可打开的链接，比如展示一个可以点击的链接

# 代码演示

## 基础工具栏

利用工具栏可以方便的执行 xflow 的命令, onClick 中可以使用[ICommnadService](/api/interface/command) 执行[所有命令](/api/commands)

<code src="./demos/basic/index.tsx" classname="canvas-toolbar-basic"   />

## 工具栏配置项

<code src="./demos/toolbar-render-item/index.tsx" classname="toolbar-render-item" />

toolbarItem 支持以下的配置项

|      名称 |                           类型 |                                                                                           描述 | 必选 |
| --------: | -----------------------------: | ---------------------------------------------------------------------------------------------: | ---- |
|      text |                       `string` |                                                                                     按钮的文案 | -    |
|      icon |                 `ReactElement` |            用作图标的 React 元素 (如 [@ant-design/icons](https://ant.design/components/icon/)) | -    |
|  iconName |                       `string` | 图标名称，需事先在 `IconStore` 注册；<br /> 若同时设置 `icon` 和 `iconName`, `icon` 优先级更高 | -    |
|   tooltip |                       `string` |                                                                        配置 tooltip 显示的内容 | -    |
| isEnabled |                      `boolean` |                                                                                       是否可用 | -    |
| isVisible |                      `boolean` |                                                                                       是否可见 | -    |
|    active |                      `boolean` |                                                                                 是否显示中状态 | -    |
|   onClick |   `(args: IClickArgs) => void` |                                                                                     单击时回调 | -    |
|    render | `React.FC<ICustomRenderProps>` |                                                                                     自定义渲染 | -    |

## Layout 布局

支持 3 种布局:`vertical`/`horizontal`/`horizontal-center`
<code src="./demos/toolbar-layout/index.tsx" classname="toolbar-layout"    />

## 画布联动

可以通过 ModelServices 实现和画布状态间的联动

<code src="./demos/toolbar-model/index.tsx" classname="canvas-toolbar-model"  />

## 自定义渲染

支持使用自定义渲染来支持更复杂的业务场景

<code 
  src="./demos/toolbar-custom-render/index.tsx" classname="toolbar-custom-render"  
/>
