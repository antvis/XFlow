// IOC
import * as ManaSyringe from 'mana-syringe'
export { ManaSyringe }

/** XFlow 基础 interface */
export { NsGraph } from './interface'

/*******************************************************
 * 核心组件：
 * 1. Application：XFlow
 * 2. Application Extension：XFlowAppExtensionModule
 * 3. Graph：XFlowCanvas
 *****************************************************/

export {
  // 组件
  XFlow,
  XFlowCanvas,
  XFlowAppExtensionModule,
  // app context
  XFlowAppProvider,
  XFlowAppContext,
  useXFlowApp,
  // config provider context：使用全局Config
  useXflowPrefixCls,
  XFlowConfigProviderContext,
  // extension context: 注册扩展
  ExtensionRegistryContext,
  useExtensionRegistry,
} from './xflow-main'

/** widget：extension  */
export { IExtensionModule, IModuleConfig } from './xflow-main'

/** graphProvider：注入Graph时 需要 */
export { IGraphConfig, IGraphProvider, createGraphConfig, GraphConfig } from './xflow-main'

/** app：用于extension扩展*/
export {
  IApplication,
  IApplicationContribution,
  IAppLoad,
  IAppDestroy,
  IAppConfigReady,
} from './xflow-main'

/*******************************************************
 *  Command Service： 命令模块
 *****************************************************/

/** Command 类型 */
export type { IArgsBase, IGraphCommand, ICommandConfig, IGraphPipelineCommand } from './command'

/** Command Service */
export {
  ICommandHandler,
  IGraphCommandService,
  ICommandContextProvider,
  IGraphCommandContribution,
  IGraphCommandFactory,
  GraphCommandRegistry,
  commandRegistryModule,
} from './command'

/** Command 常量 */
export {
  XFlowNodeCommands,
  XFlowEdgeCommands,
  XFlowGroupCommands,
  XFlowGraphCommands,
  XFlowModelCommands,
  /** 创建 Command hook config */
  createCmdConfig,
} from './command-contributions'

export type {
  /** Command 类型*/
  NsGraphCmd,
  NsNodeCmd,
  NsEdgeCmd,
  NsGroupCmd,
  NsModelServiceCmd,
  /** command 钩子函数的类型 */
  ICmdHooks,
  /** Command扩展的类型 */
  ICommandContributionConfig,
} from './command-contributions'

/** React Node Context */
export { AppContext, useAppContext, getNodeReactComponent } from './command-contributions'

/*******************************************************
 *  XFlow Hooks： 钩子函数
 *****************************************************/

export {
  // 扩展Hooks
  IHookService,
  IRegisterHookFn,
  IRegisterHookHubFn,
  IHookContribution,
  // Graph的类型
  IEvent,
  // 内置的graph hooks
  IHooks,
  // 创建 React config hook
  createHookConfig,
} from './hooks'

/*******************************************************
 *  Model Service：全局状态
 *****************************************************/

export {
  MODELS,
  IUseModel,
  IModelOptions,
  IModelService,
  IModelContribution,
  IModelRegisterFunction,
  createModelServiceConfig,
} from './model-service'

export { RxModel, NsModel } from './common/rx-model'

export {
  useModel,
  createComponentModel,
  useModelAsync,
  useIsMountedRef,
} from './common/rx-model-hook'

/*******************************************************
 *  Toolbar：工具栏
 *****************************************************/

/** Toolbar 配置 */
export {
  // component
  ToolbarRegistry,
  // ioc 扩展
  IToolbarService,
  IToolbarContribution,
  // model 类型
  IToolbarModel,
  // 布局
  IToolbarLayout,
  // config options
  IToolbarOptions,
  IToolbarItemOptions,
  IToolbarGroupOptions,
  IRegisterToolbarItemFunction,
} from './toolbar'

/*******************************************************
 *  Menu：菜单
 *****************************************************/

/** Menu 配置 */
export {
  // 扩展 Service
  IMenuService,
  IMenuContribution,
  // Menu 类型定义
  IMenuId,
  IAnchor,
  IMenuTarget,
  // menu item
  MenuItemType,
  IMenuModel,
  IMenuOptions,
  IRegisterMenuFunction,
  // Component
  MenuRegistry,
} from './menu'

/*******************************************************
 *  KeyBindings：快捷键
 *****************************************************/

/** KeyBindings 配置 */
export {
  KeyBindings,
  createKeybindingConfig,
  KeybindingConfig,
  IKeyBindingContribution,
} from './keybinding'

/*******************************************************
 *  UTILS：工具方法
 *****************************************************/

/** utils：dispose */
export { Disposable, DisposableCollection } from './common/disposable'
/** utils：defer 延迟 */
export { Deferred } from './common/deferred'
/** utils：延迟 */
export { delay } from './common/delay'
/** utils：uuid */
export { uuidv4 } from './common/uuid'
/** utils：绝对定位 */
export { IPosition, usePositionStyle } from './common/position'
export { Simplify } from './common/types'
/** utils：insertCss */
export { insertCss, isReactComponent } from './common/utils'

/*******************************************************
 * Icon：Antd Icon
 *****************************************************/

/** ICON */
export { IconStore } from './antd-icons'

/** 全局常量 */
export * as XFlowConstants from './constants'
