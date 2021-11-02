import { IGraphCommand } from '@antv/xflow'

/** 节点命令 */
export namespace CustomCommands {
  const category = '节点操作'
  /** 清除画布 */
  export const CLEAR_GRAPH: IGraphCommand = {
    id: 'xflow:clear-graph',
    label: '清除',
    category,
  }
  /** 导出 */
  export const EXPORT_GRAPH: IGraphCommand = {
    id: 'xflow:export-graph',
    label: '导出',
    category,
  }
  /** 重命名节点弹窗 */
  export const SHOW_RENAME_MODAL: IGraphCommand = {
    id: 'xflow:rename-node-modal',
    label: '打开重命名弹窗',
    category,
  }
}
