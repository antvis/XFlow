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

需要通过拖拽完成新建节点的能力时

# 代码演示

## 基础使用

<code src="./demos/basic/index.tsx" classname="dnd-node-demo"   />

treeDataService 需要返回符合 ITreeNode[]的数据，ITreeNode 的类型如下：

```tsx |pure
/** tree node model */
export interface ITreeNode {
  /**
   * The type of the menu item.
   */
  readonly id: string | 'root'
  /**
   * The parent menu id of the menu item.
   */
  readonly parentId: string
  /**
   * The display label for the menu item.
   */
  readonly label: string
  /**
   * Dnd节点的宽度
   */
  readonly width?: number
  /**
   * Dnd节点的高度
   */
  readonly height?: number
  /**
   * Dnd节点的renderKey，默认节点可以使用XFlowConstants.XFLOW_DEFAULT_NODE
   */
  readonly renderKey?: string
  /**
   * Dnd节点的popover的提示内容
   */
  readonly popoverContent: React.ReactNode
}
```

## 支持搜索

<code src="./demos/search/index.tsx" classname="dnd-node-demo"   />
