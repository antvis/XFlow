---
title: BackNode 后置节点
order: 18
group:
  path: /api/commands
  title: Command 命令
  order: 2
nav:
  title: API
  path: /api
  order: 1
---

## 后置节点

XFlow 提供节点添加的命令 `XFlowNodeCommands.BACK_NODE`, 通过该命令可以实现在移动节点。

### Command 示例

<code src="./demos/index.tsx" classname="cmd-demo" />

### 命令参数（IArgs）

|              名称 |                类型 | 必选 | 默认值 | 描述               |
| ----------------: | ------------------: | ---: | -----: | ------------------ |
|        nodeConfig | NsGraph.INodeConfig |    ✓ |      - | 新建节点的配置数据 |
|       cellFactory |    INodeCellFactory |      |      - | cell 工厂方法      |
| createNodeService |  ICreateNodeService |      |      - | 获取元数据的服务   |

```tsx | pure
export interface IArgs extends IArgsBase {
  /** 新建节点的配置数据 */
  nodeConfig: NsGraph.INodeConfig
  /** 创建X6 Node Cell的工厂方法 */
  cellFactory?: INodeCellFactory
  /** 创建Node的服务 */
  createNodeService?: ICreateNodeService
}
```

#### nodeConfig

节点的元数据，参考数据格式 [NsGraph.INodeConfig](/docs/api/interface#inodeconfig)

### createNodeService (可选)

 复杂的图编辑应用的节点 id 等元数据可能需要调用服务端接口生成，因此这里提供了一个接口，XFlow 在执行 AddNodeCommand 时会自动执行 ICreateNodeService 来获取后端数据，
建议在 addNode 的 hook 中配置这个异步方法。

```tsx | pure
/** add node api service 类型 */
export interface ICreateNodeService {
  (args: IArgs): Promise<NsGraph.INodeConfig>
}
```

- 入参类型：[IArgs](#命令参数iargs)
- 返回类型：[NsGraph.INodeConfig](/docs/api/interface#inodeconfig)

#### cellFactory (可选)

支持高阶用户自定义自己的 X6 Node Cell，要求返回一个 X6 Node 实例

```tsx | pure
/** 创建X6 Node Cell的工厂方法 */
export interface INodeCellFactory {
  (node: NsGraph.INodeConfig, self: AddNodeCommand): Promise<Node>
}
```

- 入参类型：
  - node: [NsGraph.INodeConfig](/docs/api/interface#inodeconfig) 节点数据
  - self: AddNodeCommand 方便使用 AddNodeCommand 实例上的方法
- 返回类型：
  - [NsGraph.INodeConfig](/docs/api/interface#inodeconfig) 节点数据

### 配置全局 Hook

XFlow 的命令可以通过全局的 Hook 来扩展业务逻辑, 比如要配置全局的 createNodeService 只需要在 createCmdConfig 中通过 hooks.addNode.registerHook 注册自己的添加 createNodeService 到 args 中（[IArgs](#命令参数iargs)）

```tsx | pure
import { createCmdConfig, DisposableCollection } from '@antv/xflow'
import { MockApi } from './service'

export const useCmdConfig = createCmdConfig(config => {
  config.setRegisterHookFn(hooks => {
    hooks.addNode.registerHook({
      name: 'get node config data from backend api',
      handler: async args => {
        args.createNodeService = MockApi.addNode
      },
    })
  })
})

export const Demo = () => {
  const cmdConfig = useCmdConfig()
  return <XFlow commandConfig={cmdConfig} />
}
```
