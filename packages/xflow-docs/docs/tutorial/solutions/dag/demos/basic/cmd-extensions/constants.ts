import type { IGraphCommand } from '@antv/xflow'

/** 节点命令 */
export namespace CustomCommands {
  const category = '节点操作'
  /** 异步请求demo */
  export const TEST_ASYNC_CMD: IGraphCommand = {
    id: 'xflow:async-cmd',
    label: '异步请求',
    category,
  }
  /** 重命名节点弹窗 */
  export const SHOW_RENAME_MODAL: IGraphCommand = {
    id: 'xflow:rename-node-modal',
    label: '打开重命名弹窗',
    category,
  }
  /** 部署服务 */
  export const DEPLOY_SERVICE: IGraphCommand = {
    id: 'xflow:deploy-service',
    label: '部署服务',
    category,
  }
}
