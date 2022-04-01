/** 节点命令 */
export const CustomCommands = {}
// export namespace CustomCommands {
const category = '节点操作'
/** 异步请求demo */
CustomCommands.TEST_ASYNC_CMD = {
  id: 'xflow:async-cmd',
  label: '异步请求',
  category,
}
/** 重命名节点弹窗 */
CustomCommands.SHOW_RENAME_MODAL = {
  id: 'xflow:rename-node-modal',
  label: '打开重命名弹窗',
  category,
}
/** 部署服务 */
CustomCommands.DEPLOY_SERVICE = {
  id: 'xflow:deploy-service',
  label: '部署服务',
  category,
}
// }
