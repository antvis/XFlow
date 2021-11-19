---
title: DAG 解决方案
order: 1
group:
  path: /tutorial/solutions
  title: 解决方案
  order: 3
nav:
  title: 教程
  path: /docs
  order: 1
---

## DAG 图编辑解决方案

<code src="./demos/basic/index.tsx" compact transform classname="dag-solution" />

## DAG

### what is DAG：

DAG: 在图论中，如果一个有向图从任意顶点出发无法经过若干条边回到该点，则这个图是一个有向无环图（DAG, Directed Acyclic Graph）。利用 DAG 图的数据结构可以使用算法解决拓扑排序/构建子图/路径查找等问题，因被应用在任务调度/因果结构/族谱血缘等场景。

## DAG 图编辑场景

在任务编排的场景，用户需要通过操作可视化的图编辑应用将任务的依赖关系转化成为 DAG 图数据。这里我们要解决以下 3 个问题：

1. 如何通过交互实现图关系数据的编排
2. 如何通过交互实现图业务数据的编辑
3. 如何保存数据/更新状态

### 关系数据的构建（Create/Delete）

1. 新建/删除节点

- 内置可拖拽的组件树用于新建节点
- 组件树节点支持 popover 展示更多业务数据
- 组件树树支持搜索

- 自定义节点/状态显示
- 自定义节点的连接桩
- 节点的连接桩内置 tooltip

- 选中快捷键删除节点
- 右键选中删除节点
- 框选批量删除节点

2. 新建/删除连线

- 直接连线
- 吸附连线
- 高亮可用
- 拒绝连线/环检测

- 选中快捷键删除连线
- 右键选中删除连线

3. 新建/删除群组

- 框选新建
- 选中解散
- 折叠群组

### 业务数据的操作（Update）

1. toolbar/scale toolbar

- 基础渲染/分组/左右
- 联动画布状态
- 自定义渲染 Popconfirm

2. JsonSchemaForm

- 基础渲染
- 联动画布
- modal

3. ContextMenu

- menu/分组二级
- 动态

4. Modal

- form
- confirm
- view data/log

### 保存和渲染数据 （Read）

1. 数据的保存图的渲染

- 保存图数据
- 还原图渲染

2. 数据的轮询问更新

- 节点状态
- 节点状态更新

3. 画布操作

- 放大缩小
- minimap
