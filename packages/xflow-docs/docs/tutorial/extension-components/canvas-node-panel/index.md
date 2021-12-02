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
   * 树节点的ID，'root' 是根节点的id
   */
  readonly id: string | 'root'
  /**
   * 节点的文件夹ID
   */
  readonly parentId: string
  /**
   * 节点名
   */
  readonly label: string
  /**
   * 拖拽出来的画布节点宽度
   */
  readonly width?: number
  /**
   * 拖拽出来的画布节点高度
   */
  readonly height?: number
  /**
   * Dnd节点的renderKey，可选
   */
  readonly renderKey?: string
  /**
   * Dnd节点的popover的提示内容，可选
   */
  readonly popoverContent?: React.ReactNode
  /**
   * 支持自定义渲染
   */
  render?: React.ComponentType<{ data: ITreeNode; isNodeTreePanel: boolean }>
}
```

## 支持搜索

<code src="./demos/search/index.tsx" classname="dnd-search-demo"   />

## 支持自定义节点渲染

<code src="./demos/custom/index.tsx" classname="dnd-custom-demo"   />
