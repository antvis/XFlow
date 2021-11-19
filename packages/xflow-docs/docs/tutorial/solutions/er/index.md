---
title: ER建模 解决方案
order: 2
group:
  path: /tutorial/solutions
  title: 解决方案
  order: 2
nav:
  title: 教程
  path: /docs
  order: 1
---

# ER 建模解决方案

## 效果演示

<code compact transform src="./demos/index.tsx" classname="er-demo">

## 功能概览

### 画布内容渲染

自由的节点/连线样式定制: 支持渲染 React 开发的节点, 支持在连线上渲染复杂的 React 节点, 再也不用担心设计师天马行空的设计稿啦。

<img src=https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*cQv3Q6gTJ2YAAAAAAAAAAAAAARQnAQ width='50%' />

### 交互能力

支持画布拖拽移动、画布按住 ctrl 缩放(也可配置成滚轮缩放)。

<img src=https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*jJbUSbcE8wwAAAAAAAAAAAAAARQnAQ width='50%' />

&nbsp;

支持节点上展示链接桩, 拖拽生成连线。链接桩的具体位置、样式均可自定义。另外拖拽连线到目标节点的时候, 连线会有自动吸附能力。

<img src=https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*WZgvTrxYH7kAAAAAAAAAAAAAARQnAQ width='60%' />

&nbsp;

支持当前选中节点、连线始终前置, 同时支持节点选中、hover 高亮, 支持连线选中、hover 高亮, 所有样式均可自定义配置。

<img src=https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*wRFlQaTMIvYAAAAAAAAAAAAAARQnAQ width='50%' />

&nbsp;

支持节点拖拽过程中出现对齐线。

<img src=https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*aMq_RZRHpY8AAAAAAAAAAAAAARQnAQ width='50%' />

&nbsp;

### 事件监听

支持监听画布空白处点击事件、节点点击事件、连线点击事件、拖拽连线完成的事件等等。另外由于节点/连线上的内容均支持使用 React 节点, 所以将事件直接写在 React 组件里, 也是可以的。

### 缩放工具栏

支持画布缩放工具栏, 允许画布放大、缩小、回归 1:1 并画布居中、画布内容适配可视区域。

<img src=https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*ioiKT4NWZYIAAAAAAAAAAAAAARQnAQ width='60%' />

### 小地图

支持展示小地图, 小地图的所有样式均可自定义。小地图会与画布内容的变化实时联动。效果如上图。

### 快捷键

支持快捷删除节点和连线, 选中某个节点或者连线, 按 Delete 键, 即可实现删除能力。此外如果打开框选功能, 批量选中若干节点/连线, 也可以实现批量删除的能力。

### 交互组件与画布联动

添加节点: 点击创建节点按钮, 然后移动鼠标到画布, 画布中会展示一个节点占位框, 再次点击出现创建节点的弹窗, 点击确定后画布中会出现新建的节点。

<img src=https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*0GW-R5BJBMgAAAAAAAAAAAAAARQnAQ width='60%' />

&nbsp;

添加关系: 点击添加关系按钮, 出现关系内容的填写弹窗, 点击确定后即可完成连线的创建。

<img src=https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*mzn9Qa0ld0oAAAAAAAAAAAAAARQnAQ width='60%' />

&nbsp;

删除节点: 画布中选中节点, 删除节点按钮变为可用, 点击删除关系按钮, 画布中的节点即删除。

<img src=https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*4QsQQLJ4TCoAAAAAAAAAAAAAARQnAQ width='60%' />
