---
title: 命令概览
order: 1
group:
  path: /api/commands
  title: Command 命令
  order: 2
nav:
  title: API
  path: /api
  order: 1
---

```tsx | pure
/** 节点命令 */
export namespace XFlowNodeCommands {
  const category = '节点操作'
  /** 新增节点 */
  export const ADD_NODE: IGraphCommand = {
    id: 'xflow:add-node',
    label: '添加节点',
    category,
  }

  /** 移动节点 */
  export const MOVE_NODE: IGraphCommand = {
    id: 'xflow:move-node',
    label: 'Move Node',
    category,
  }
  /** 重命名节点 */
  export const SET_NODE_LABEL: IGraphCommand = {
    id: 'xflow:set-node-name',
    label: '重命名节点',
    category,
  }
  /** 节点交互：高亮节点 */
  export const HIGHLIGHT_NODE: IGraphCommand = {
    id: 'xflow:highlight-node',
    label: '高亮节点',
    category,
  }
  /** 节点交互：选中节点 */
  export const SELECT_NODE: IGraphCommand = {
    id: 'xflow:select-node',
    label: '选中节点',
    category,
  }
  /** 删除节点 */
  export const DEL_NODE: IGraphCommand = {
    id: 'xflow:del-node',
    label: '删除节点',
    category,
  }
  /** 更新节点 */
  export const UPDATE_NODE: IGraphCommand = {
    id: 'xflow:update-node',
    label: '更新节点',
    category,
  }
  /** 节点居中 */
  export const CENTER_NODE: IGraphCommand = {
    id: 'xflow:center-node',
    label: '居中节点',
    category,
  }
  /** 节点前置 */
  export const FRONT_NODE: IGraphCommand = {
    id: 'xflow:front-node',
    label: '前置节点',
    category,
  }
  /** 节点后置 */
  export const BACK_NODE: IGraphCommand = {
    id: 'xflow:back-node',
    label: '后置节点',
    category,
  }
}

/** 边命令 */
export namespace XFlowEdgeCommands {
  const category = '边操作'
  /** 新增边 */
  export const ADD_EDGE: IGraphCommand = {
    id: 'xflow:add-edge',
    label: '添加边',
    category,
  }
  /** 删除边 */
  export const DEL_EDGE: IGraphCommand = {
    id: 'xflow:del-edge',
    label: '删除边',
    category,
  }
  /** 更新边 */
  export const UPDATE_EDGE: IGraphCommand = {
    id: 'xflow:update-edge',
    label: '更新边',
    category,
  }
  /** 更新label */
  export const SET_EDGE_LABEL: IGraphCommand = {
    id: 'xflow:set-edge-edge',
    label: '设置边',
    category,
  }
  /** 高亮边 */
  export const HIGHLIGHT_EDGE: IGraphCommand = {
    id: 'xflow:highlight-edge',
    label: '高亮边',
    category,
  }
  /** 边前置 */
  export const FRONT_EDGE: IGraphCommand = {
    id: 'xflow:front-edge',
    label: '前置变',
    category,
  }
  /** 边后置 */
  export const BACK_EDGE: IGraphCommand = {
    id: 'xflow:back-edge',
    label: '后置边',
    category,
  }
}

/** 画布命令 */
export namespace XFlowGraphCommands {
  const category = '画布操作'
  /** LOAD 元数据操作 */
  export const LOAD_META: IGraphCommand = {
    id: 'xfow:load-meta',
    label: '获取元数据',
    category,
  }
  /** LOAD DATA操作 */
  export const LOAD_DATA: IGraphCommand = {
    id: 'xfow:load-data',
    label: '获取图数据',
    category,
  }
  /** SAVE GRAPH DATA操作 */
  export const SAVE_GRAPH_DATA: IGraphCommand = {
    id: 'xfow:save-graph-data',
    label: '保存',
    category,
  }
  /** LAYOUT */
  export const GRAPH_LAYOUT: IGraphCommand = {
    id: 'xflow:layout',
    label: '计算布局',
    category,
  }
  /** Graph Render */
  export const GRAPH_RENDER: IGraphCommand = {
    id: 'xflow:graph-render',
    label: '渲染画布',
    category,
  }
  /** UNDO 操作 */
  export const UNDO_CMD: IGraphCommand = {
    id: 'xflow:undo-cmd',
    label: '撤销',
    category,
  }
  /** REDO 操作 */
  export const REDO_CMD: IGraphCommand = {
    id: 'xflow:redo-cmd',
    label: '重做',
    category,
  }
  /** Graph Zoom */
  export const GRAPH_ZOOM: IGraphCommand = {
    id: 'xflow:graph-zoom',
    label: '缩放画布',
    category,
  }
  /** Graph Resize */
  export const GRAPH_RESIZE: IGraphCommand = {
    id: 'xflow:graph-resize',
    label: '调整窗口大小',
    category,
  }
  /** Graph Copy */
  export const GRAPH_COPY: IGraphCommand = {
    id: 'xflow:graph-copy-selection',
    label: '复制',
    category,
  }
  /** Graph Paste */
  export const GRAPH_PASTE: IGraphCommand = {
    id: 'xflow:graph-paste-selection',
    label: '粘贴',
    category,
  }
}
```
