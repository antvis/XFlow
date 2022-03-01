import type { IGraphCommand } from '../command/interface'

/** 节点命令 */
export namespace XFlowNodeCommands {
  const category = '节点操作'
  /** 新增节点 */
  export const ADD_NODE: IGraphCommand = {
    id: 'xflow:add-node',
    label: '添加节点',
    category,
  }
  /** 删除节点 */
  export const DEL_NODE: IGraphCommand = {
    id: 'xflow:del-node',
    label: '删除节点',
    category,
  }
  /** 更新链接桩 */
  export const UPDATE_NODE_PORT: IGraphCommand = {
    id: 'xflow:update-node-port',
    label: '删除连接桩',
    category,
  }
  /** 更新节点 */
  export const UPDATE_NODE: IGraphCommand = {
    id: 'xflow:update-node',
    label: '更新节点',
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
  /** 移动节点 */
  export const MOVE_NODE: IGraphCommand = {
    id: 'xflow:move-node',
    label: 'Move Node',
    category,
  }
  /** 节点居中 */
  export const CENTER_NODE: IGraphCommand = {
    id: 'xflow:center-node',
    label: '居中节点',
    category,
  }
  /** 节点前置：调整zindex */
  export const FRONT_NODE: IGraphCommand = {
    id: 'xflow:front-node',
    label: '前置节点',
    category,
  }
  /** 节点后置：调整zindex */
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
  /** 高亮边 */
  export const HIGHLIGHT_EDGE: IGraphCommand = {
    id: 'xflow:highlight-edge',
    label: '高亮边',
    category,
  }
  /** 边前置：调整zindex */
  export const FRONT_EDGE: IGraphCommand = {
    id: 'xflow:front-edge',
    label: '前置变',
    category,
  }
  /** 边后置：调整zindex */
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
    id: 'xflow:load-meta',
    label: '获取元数据',
    category,
  }
  /** LOAD DATA操作 */
  export const LOAD_DATA: IGraphCommand = {
    id: 'xflow:load-data',
    label: '获取图数据',
    category,
  }
  /** SAVE GRAPH DATA操作 */
  export const SAVE_GRAPH_DATA: IGraphCommand = {
    id: 'xflow:save-graph-data',
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
  /** Graph General Operations: XFlow命令不满足的可以用这个命令，直接使用Graph的api */
  export const GRAPH_INSTANCE_COMMAND: IGraphCommand = {
    id: 'xflow:graph-instacne-cmd',
    label: 'Graph通用Command',
    category,
  }
  /** Graph Zoom */
  export const GRAPH_ZOOM: IGraphCommand = {
    id: 'xflow:graph-zoom',
    label: '缩放画布',
    category,
  }
  /** Graph Fullscreen */
  export const GRAPH_FULLSCREEN: IGraphCommand = {
    id: 'xflow:graph-fullscreen',
    label: '全屏',
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
  /** Graph 开启框选 */
  export const GRAPH_TOGGLE_MULTI_SELECT: IGraphCommand = {
    id: 'xflow:graph-toggle-multi-select',
    label: '启用框选',
    category,
  }
  /** 新增 Tool: https://x6.antv.vision/zh/docs/api/registry/edge-tool */
  export const GRAPH_ADD_TOOL: IGraphCommand = {
    id: 'xflow:add-tool',
    label: '添加工具',
    category,
  }
  /** 删除 Tool: https://x6.antv.vision/zh/docs/api/registry/edge-tool */
  export const GRAPH_DEL_TOOL: IGraphCommand = {
    id: 'xflow:del-tool',
    label: '删除工具',
    category,
  }
  /** history: https://x6.antv.vision/zh/docs/api/graph/history#%E6%96%B9%E6%B3%95 */
  export const GRAPH_HISTORY_UNDO: IGraphCommand = {
    id: 'xflow:history-undo',
    label: 'history undo',
    category,
  }
  /** history: https://x6.antv.vision/zh/docs/api/graph/history#%E6%96%B9%E6%B3%95  */
  export const GRAPH_HISTORY_REDO: IGraphCommand = {
    id: 'xflow:history-redo',
    label: 'history redo',
    category,
  }
  /** history: https://x6.antv.vision/zh/docs/api/graph/history#%E6%96%B9%E6%B3%95  */
  export const GRAPH_HISTORY_RESET: IGraphCommand = {
    id: 'xflow:history-reset',
    label: 'history reset',
    category,
  }
  /** history: https://x6.antv.vision/zh/docs/api/graph/history#%E6%96%B9%E6%B3%95  */
  export const GRAPH_HISTORY_TOGGLE: IGraphCommand = {
    id: 'xflow:history-toggle',
    label: 'history toggle',
    category,
  }
}

/** 全局状态 */
export namespace XFlowModelCommands {
  const category = '状态操作'
  /** Update model 操作 */
  export const UPDATE_MODEL: IGraphCommand = {
    id: 'xflow:update-model',
    label: '设置状态值',
    category,
  }
}

/** 全局状态 */
export namespace XFlowGroupCommands {
  const category = '群组操作'
  /** 初始化群组操作 */
  export const INIT_GROUP: IGraphCommand = {
    id: 'xflow:init-group',
    label: '初始化群组',
    category,
  }
  /** ADD GROUP 操作 */
  export const ADD_GROUP: IGraphCommand = {
    id: 'xflow:add-group',
    label: '新建群组',
    category,
  }
  /** DELETE GROUP 操作 */
  export const DEL_GROUP: IGraphCommand = {
    id: 'xflow:del-group',
    label: '解散群组',
    category,
  }
  /** 折叠操作 */
  export const COLLAPSE_GROUP: IGraphCommand = {
    id: 'xflow:collapse-group',
    label: '折叠群组',
    category,
  }
}
