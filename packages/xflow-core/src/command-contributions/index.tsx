import type {
  IHooks,
  ICmdHooks,
  NsGraphCmd,
  NsNodeCmd,
  NsEdgeCmd,
  NsGroupCmd,
  NsModelServiceCmd,
  ICommandContributionConfig,
} from './interface'

/** Command 类型 */
export type {
  IHooks,
  ICmdHooks,
  NsGraphCmd,
  NsNodeCmd,
  NsEdgeCmd,
  NsGroupCmd,
  NsModelServiceCmd,
  ICommandContributionConfig,
}

/** Command addReactNode 依赖的 React.Context */
export { AppContext, useAppContext, getNodeReactComponent } from './components/context'

/** Command 组件 */
export {
  // 组件
  CommandsRegistry,
  // create Command config hook
  createCmdConfig,
} from './components'

// 组件props中的Config
export { CommandConfig } from './config'

/** 常量 */
export {
  XFlowNodeCommands,
  XFlowEdgeCommands,
  XFlowGraphCommands,
  XFlowGroupCommands,
  XFlowModelCommands as XFlowModelCommands,
} from './constant'
