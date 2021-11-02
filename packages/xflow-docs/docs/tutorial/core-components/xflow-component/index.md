---
title: XFlow 工作台组件
order: 2
group:
  path: /tutorial-core-components
  title: 画布组件
  order: 4
nav:
  title: 教程
  path: /docs
  order: 1
---

## XFlow 工作台组件

XFlow 是 XFlow 的核心组件，对应一个图编辑应用工作台, 配置一个工作台需要理解以下三个配置项`graphConfig`,`commandConfig`,`onLoad`。

## 组件示例

<code src="./demos/basic/index.tsx" classname="component-demo" />

### 核心配置项

|          名称 |                                                                                     关联 api | 必选 | 描述                                 |
| ------------: | -------------------------------------------------------------------------------------------: | ---: | ------------------------------------ |
|   graphConfig | [createGraphConfig](/docs/tutorial-core-components/xflow-canvas-component#creategraphconfig) |      | 配置 Graph                           |
| commandConfig |                                                                              createCmdConfig |      | 配置 Command Hook                    |
|        onLoad |                                                                         onAppDestroyCallback |      | 核心回调函数，用于执行初始化画布逻辑 |

## 核心配置项说明

### graphConfig

`graphConfig` 和 XFlowCanvas 组件的[config](/docs/tutorial-core-components/xflow-canvas-component#creategraphconfig)属性是一致的。主要是用于配置 X6 的 [GraphOptions（X6 配置项）](https://x6.antv.vision/zh/docs/api/graph/graph) , [GraphEvents（X6 事件）](https://x6.antv.vision/zh/docs/tutorial/intermediate/events) 和 配置 React 来渲染画布节点

`graphConfig` 有两种使用方式：

1. 单独使用 XFlow 组件：通过 `graphConfig` 属性配置。
2. 配合 XFlowCanvas 组件 使用: 通过 `config` 属性配置。

```tsx | pure
/** 1. 第一种使用方式：使用XFlow组件做渲染，XFlow会在children中添加一个XFlowCanvas */
<XFlow onLoad={onLoad} graphConfig={graphConfig} />

/** 2. 第二种使用方式：使用XFlowCanvas组件,可以控制画布的渲染位置 */
<XFlow onLoad={onLoad} >
  <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 0, right: 0 }} />
</XFlow>
```

`graphConfig`上通过 createGraphConfig 创建， graphConfig 上有 3 个关键 api：

1. [setX6Config](/docs/tutorial-core-components/xflow-canvas-component#setx6config): 配置 X6 配置项
2. [setEvents](/docs/tutorial-core-components/xflow-canvas-component#setevents): 绑定画布 事件
3. [setDefaultNodeRender](/docs/tutorial-core-components/xflow-canvas-component#setdefaultnoderender): 配置 React 来渲染画布节点

### onLoad

图编辑工作台在 start 成功后会执行回调函数（[onLoad](/api/interface/application#frontendapplication)），在回调函数的参数中我们获取工作台实例([app](/api/interface/application#frontendapplication))，并通过实例的 api 来完成工作台的初始化。

#### app 的 api 列表

|               api 名称 |                                                                                    类型 |                           描述 |
| ---------------------: | --------------------------------------------------------------------------------------: | -----------------------------: |
|         executeCommand | \<T\>( commandId: string, cmdArgs: T, hook?: IRuntimeHook )=>Promise\<ICommandHandler\> |                   执行单个命令 |
| executeCommandPipeline |                                                    (cmdOptions: IGraphPipelineCommand[] | 用 pipeline 的方式执行多个命令 |
|               commands |                                                                    IGraphCommandService |                   Command 实例 |
|         contextService |                                                                         IContextService |                   数据模型服务 |

#### 示例代码

```tsx | pure
const XFlowDemo: React.FC<IDemoProps> = props => {
  const graphConfig = useGraphConfig(props)
  const onLoad: IAppLoad = async app => {
    // 在回调函数中我们可以执行命令来完成工作台的初始化，这里我们执行了一个添加节点的命令
    app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {
      nodeConfig: {
        id: 'node1',
        x: 100,
        y: 100,
        label: 'Hello World',
        width: 200,
        height: 40,
      },
    })
    return app
  }

  return <XFlow graphConfig={graphConfig} onLoad={onLoad} />
}
```

|            命令 id |       类型 |               描述 |
| -----------------: | ---------: | -----------------: |
|  XFlowNodeCommands |  NsNodeCmd | 所有节点相关的命令 |
|  XFlowEdgeCommands |  NsEdgeCmd |   所有边相关的命令 |
| XFlowGraphCommands | NsGraphCmd |   所有图相关的命令 |
| XFlowPanelCommands | NsPanelCmd | 更新交互组件的命令 |

[查看所有 XFlow 内置的命令](/api/commands)。

## commandConfig

commandConfig 中可以使用 hooks 可以配置 Command 执行时所需的默认参数: 比如配置添加节点命令的 createNodeService 参数

### 创建 commandConfig

`commandConfig` 需要通过 createCmdConfig 创建

```tsx | pure
import { createCmdConfig, XFlow } from '@antv/xflow'

/** 创建一个 CommandConfig 的 ReactHook */
export const useCmdConfig = createCmdConfig(commandConfig => {
  //获得了commandConfig
})

/** 在函数组件中使用 */
export const Demo = () => {
  const graphConfig = useCmdConfig()
  return <XFlow graphConfig={graphConfig} />
}
```

### 使用 commandConfig

通过 commandConfig 的 setRegisterHookFn api 来注册 命令 的钩子函数

```tsx | pure
export const useCmdConfig = createCmdConfig(commandConfig => {
  // 通过setRegisterHookFn可以通过hooks注册命令的钩子函数
  commandConfig.setRegisterHookFn(hooks => {
    const list = [
      hooks.addNode.registerHook({
        name: 'get node config from backend api',
        handler: async args => {
          // 在添加节点command 执行时，会在command的参数里加上createNodeService
          args.createNodeService = MockApi.addNode
        },
      }),
    ]
    const toDispose = new DisposableCollection()
    toDispose.pushAll(list)
    return toDispose
  })
})
```

## 全部配置项

```tsx | pure
export interface IProps {
  /** XFlow 工作台组件元信息, 会储存在全局Model中并在调用Service时作为额外的参数传入 */
  meta?: { flowId?: string; [id: string]: any }
  /** 核心模块Graph的配置，用于配置X6的Grpah.Options和绑定Graph的事件 */
  graphConfig?: GraphConfig
  /** 核心模块钩子函数，可以配置额外的业务逻辑包括以下4个hook:
   * 1. graphOptions: 在实例化X6之前执行
   * 2. afterGraphInit:  在实例化X6后执行
   * 3. x6Events: 在实例化X6后绑定事件
   * 4. beforeGraphDestory: 在X6实例销毁前执行
   */
  hookConfig?: HookConfig
  /** 可以在这里扩展工作台全局状态  */
  contextConfig?: ContextConfig
  /** 在这里配置Command的Hook  */
  commandConfig?: CommandConfig
  /** xflow app 初始化成功的回调 */
  onLoad?: IAppLoad
  /** xflow app 销毁前的回调 */
  onAppDestroyCallback?: IAppDestoryCallback
  /** xflow app 初始化后的回调 */
  onAppConfigReadyCallback?: IConfigReadyCallback
  /** app container style */
  style?: React.CSSProperties
  /** app container classname */
  className?: string
  /** xflow less文件中的prefix变量 */
  xflowPrefixCls?: string
}
```
