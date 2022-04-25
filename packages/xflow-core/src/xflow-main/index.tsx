import { XFlow } from './components'
import type { IAppLoad, IAppDestroy, IAppConfigReady } from './components'
import { XFlowCanvas } from './components/canvas'
/** 通过context获取app */
import { XFlowAppProvider, XFlowAppContext, useXFlowApp } from './components/app-context'
/** 通过context 注册Extension模块 */
import { useExtensionRegistry, ExtensionRegistryContext } from './components/extension-context'
/** XFlowAppExtension */
import { XFlowAppExtensionModule } from './components/app-extension-module'
/** classname  prefix  context */
import { useXflowPrefixCls, XFlowConfigProviderContext } from './components/global-config-context'

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
  XFlowConfigProviderContext,
  useXflowPrefixCls,
  // extension context: 注册扩展
  ExtensionRegistryContext,
  useExtensionRegistry,
}

export type { IAppLoad, IAppDestroy, IAppConfigReady }

/** Graph 配置 */
export { IGraphConfig, IGraphProvider, createGraphConfig, GraphConfig } from './graph'

/** Application 扩展依赖 */
export {
  FrontendApplication as IApplication,
  IFrontendApplicationContribution as IApplicationContribution,
} from './application'

/** Application 扩展模块注册 */
export { IExtensionModule, IModuleConfig } from './interface'
