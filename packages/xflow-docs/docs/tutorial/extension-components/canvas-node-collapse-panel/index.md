---
title: NodeDndPanel 节点拖拽面板
order: 8
group:
  path: /tutorial-ext-components
  title: 交互组件
  order: 5
nav:
  title: 教程
  path: /docs
  order: 1
---

# NodeDndPanel 节点拖拽面板

提供通过拖拽来快速新建节点的能力

# 何时使用

- 需要通过拖拽完成新建节点的能力时
- 需要通过折叠功能实现节点的分组功能
- 需要搜索实现节点的筛选

# 代码演示

## 基础使用

<code src="./demos/basic/index.tsx" classname="dnd-node-demo"   />

treeDataService 需要返回符合 ICollapsePanel[]的数据，ITreeNode 的类型如下：

```tsx |pure
/** 折叠面板 */
export interface ICollapsePanel {
  /** panel Id */
  id: string
  /** 是否可折叠或指定可折叠触发区域 */
  collapsible?: boolean
  /** 是否折叠 */
  isCollapsed?: boolean
  /** 自定义渲染每个面板右上角的内容 */
  extra?: React.ComponentType<ICollapsePanel>
  /** 自定义渲染每个面板右上角的内容 */
  header: React.ComponentType<ICollapsePanel> | string
  /** icon */
  icon?: React.ComponentType<{ isCollapsed: boolean }>
  /** 面板内部的Dnd节点数据 */
  children?: IPanelNode[]
  /** 自定义panel的children */
  render?: React.ComponentType<ICollapsePanel>
  /** 自定义数据 */
  data?: any
}

/** 面板Dnd节点 */
export interface IPanelNode extends NsGraph.INodeConfig {
  /**  Dnd节点的popover的提示内容，可选  */
  popoverContent?: React.ReactNode
  /**  自定义节点  */
  renderComponent?: React.ComponentType<{ data: IPanelNode; isNodePanel: boolean }>
  /** 自定义数据 */
  data?: any
  /** disable */
  isDisabled?: boolean
}
```

## 支持搜索

<code src="./demos/search/index.tsx" classname="dnd-search-demo"   />

## 支持自定义节点渲染

<code src="./demos/custom/index.tsx" classname="dnd-custom-demo"   />
