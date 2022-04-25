import React from 'react'
import classNames from 'classnames'
/** app */
import { initApp } from '../application-module'
import { XFlowAppInternalProvider, useXFlowApp } from './app-context'
import type { FrontendApplication as IApplication } from '../application'
/** app-extension */
import { ExtensionRegistryContext } from './extension-context'
import { useXflowPrefixCls } from './global-config-context'
import { XFlowAppExtensionModule } from './app-extension-module'
import { ExtensionRegistry, createExtensionRegistry } from './extension-registry'
/** graph */
import { XFlowCanvas } from './canvas'
import type { GraphConfig } from '../graph'
/** command */
import { ModelServiceRegistry } from '../../model-service'
import { CommandsRegistry, XFlowGraphCommands } from '../../command-contributions'
import type { ModelServiceConfig } from '../../model-service'
import type { CommandConfig } from '../../command-contributions'
/** hook */
import { HookRegistry } from '../../hooks'
import type { HookConfig } from '../../hooks'
/** UI model */
import { ToolbarRegistry } from '../../toolbar'
import { MenuRegistry } from '../../menu'

import type { NsGraph } from '../../interface'
import type { NsGraphCmd } from '../../command-contributions'

export interface IProps {
  /** XFlow 工作台组件元信息, 会储存在全局Model中并在调用Service时作为额外的参数传入 */
  meta?: { flowId?: string; [key: string]: any }
  /** 画布的配置，用于配置X6的 Graph.Options 和绑定 Graph 的事件 */
  graphConfig?: GraphConfig
  /** 画布数据 */
  graphData?: NsGraph.IGraphData
  /** 布局配置项 */
  graphLayout?: NsGraphCmd.GraphLayout.IArgs
  /** app 初始化成功的回调 */
  onLoad?: IAppLoad
  /** 画布是否自动居中 */
  isAutoCenter?: boolean

  /** 核心模块钩子函数，可以配置额外的业务逻辑包括以下4个hook：
   * 1. graphOptions: 在实例化X6之前执行
   * 2. afterGraphInit:  在实例化X6后执行
   * 3. x6Events: 在实例化X6后绑定事件
   * 4. beforeGraphDestroy: 在X6实例销毁前执行
   */
  hookConfig?: HookConfig
  /** 可以在这里扩展工作台全局状态  */
  modelServiceConfig?: ModelServiceConfig
  /** 在这里配置命令的hook */
  commandConfig?: CommandConfig

  /** xflow app 销毁前的回调 */
  onAppDestroy?: IAppDestroy
  /** xflow app 初始化后的回调 */
  onAppConfigReady?: IAppConfigReady

  /** app container style */
  style?: React.CSSProperties
  /** app container classname */
  className?: string
  /** xflow less文件中的prefix变量 */
  xflowPrefixCls?: string
}

export type IAppLoad = (app: IApplication, registry?: ExtensionRegistry) => void
export type IAppDestroy = (app: IApplication) => void
export type IAppConfigReady = (registry: ExtensionRegistry) => void

export const XFlow: React.FC<IProps> = props => {
  const {
    meta,
    graphConfig,
    graphData,
    graphLayout,
    onLoad,
    isAutoCenter,
    hookConfig,
    modelServiceConfig,
    commandConfig,
    onAppConfigReady,
    onAppDestroy,
    children = [],
    className,
    style,
  } = props

  const [appRef, setAppRef] = React.useState<IApplication | null>()
  /** 所有组件父容器 */
  const appContainerRef = React.useRef<HTMLDivElement>(null)

  /** XFlow App 配置中心 */
  const extensionRegistry = createExtensionRegistry()

  /** didMount */
  React.useEffect(() => {
    /** before app start */
    if (onAppConfigReady) {
      onAppConfigReady(extensionRegistry)
    }

    /** 初始化应用 */
    const app = initApp(extensionRegistry)
    app.start().then(async () => {
      /** 保留引用 */
      setAppRef(app)
      extensionRegistry.getExtension('GraphConfig')?.config.setAppContainer(appContainerRef.current)
      /** 自动执行 load Meta */
      if (meta) {
        await app.commandService.executeCommand(XFlowGraphCommands.LOAD_META.id, { meta })
      }
      /** after app start */
      if (onLoad) {
        onLoad(app, extensionRegistry)
      }
      if (graphData) {
        if (graphLayout) {
          await app.commandService.executeCommand(XFlowGraphCommands.GRAPH_LAYOUT.id, {
            graphData,
            ...graphLayout,
          })
        }
        await app.commandService.executeCommand(XFlowGraphCommands.GRAPH_RENDER.id, { graphData })
      }
    })

    /** unmount */
    const destroy = async () => {
      onAppDestroy && onAppDestroy(app)
    }

    return () => {
      destroy()
    }
    /** 不要删 保证只生成一次 */
    // eslint-disable-next-line
  }, [])

  /** 自动更新meta */
  React.useEffect(() => {
    if (appRef) {
      appRef.commandService.executeCommand(XFlowGraphCommands.LOAD_META.id, { meta })
    }
    /** 不要删 只和meta联动 */
    // eslint-disable-next-line
  }, [meta])

  /** 自动渲染画布内容 */
  React.useEffect(() => {
    const fn = async () => {
      if (appRef) {
        if (graphData && graphLayout) {
          await appRef.commandService.executeCommand(XFlowGraphCommands.GRAPH_LAYOUT.id, {
            graphData,
            ...graphLayout,
          })
        }
        await appRef.commandService.executeCommand(XFlowGraphCommands.GRAPH_RENDER.id, {
          graphData,
        })

        /** 自动居中画布内容 */
        if (isAutoCenter) {
          const x6Graph = await appRef.getGraphInstance()
          x6Graph.centerContent()
        }
      }
    }
    fn()
    /** 不要删 只和graphData联动 */
    // eslint-disable-next-line
  }, [graphData])

  /** classname */
  const appClzName = classNames(
    'xflow-app-workspace',
    className,
    ...extensionRegistry.getContainerClassNames(),
  )

  /** 判断是否需要自动渲染画布组件, 坐标相对于xflow-graph-root */
  const hasCanvasComponent = (
    (Array.isArray(children) ? children : [children]) as React.ReactElement[]
  ).some(child => {
    return child && child.props.isXFlowCanvas
  })

  return (
    <XFlowAppInternalProvider app={appRef}>
      <ExtensionRegistryContext.Provider value={extensionRegistry}>
        <div
          className={appClzName}
          id={extensionRegistry.getInstanceId()}
          ref={appContainerRef}
          style={style}
        >
          {/** 挂载XFlowCanvas组件 坐标相对于xflow-graph-root */}
          {!hasCanvasComponent && (
            <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 0, right: 0 }} />
          )}
          {children}
          <ModelServiceRegistry config={modelServiceConfig} />
          <CommandsRegistry config={commandConfig} />
          <HookRegistry config={hookConfig} />
          <ToolbarRegistry />
          <MenuRegistry />
        </div>
      </ExtensionRegistryContext.Provider>
    </XFlowAppInternalProvider>
  )
}

XFlow.defaultProps = {}

export default XFlow

export {
  useXFlowApp,
  useXflowPrefixCls,
  XFlowCanvas,
  XFlowAppExtensionModule as XFlowAppExtension,
  ExtensionRegistry,
}
