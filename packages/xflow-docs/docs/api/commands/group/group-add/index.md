---
title: AddGroup 添加群组
order: 51
group:
  path: /api/commands
  title: Command 命令
  order: 2
nav:
  title: API
  path: /api
  order: 1
---

## 添加群组命令

XFlow 提供添加群组的命令 `XFlowGroupCommands.ADD_GROUP`, 通过该命令可以实现在画布中添加群组。

### Command 示例

<code src="./basic/index.tsx" classname="add-group-demo" />

### 命令参数（IArgs）

|          名称 |                                                类型 | 必选 | 默认值 | 描述               |
| ------------: | --------------------------------------------------: | ---: | -----: | ------------------ |
|    nodeConfig | [NsGraph.IGroupConfig](/api/interface#igroupconfig) |    ✓ |      - | 新建群组的配置数据 |
|   cellFactory |                                   IGroupCellFactory |      |      - | cell 工厂方法      |
| createService |                                      ICreateService |      |      - | 获取元数据的服务   |

```tsx | pure
/** 参数类型 */
export interface IArgs extends IArgsBase {
  /** 群组节点的元数据 */
  nodeConfig: NsGraph.IGroupConfig
  /** 创建X6 Group Cell的工厂方法 */
  cellFactory?: IGroupCellFactory
  /** 返回群组节点的元数据的异步方法 */
  createService?: ICreateGroupService
}
```

#### nodeConfig

group 群组节点的元数据，参考数据格式 [NsGraph.IGroupConfig](/api/interface#igroupconfig)

```tsx | pure
/** nodeConfig 中 group相关的配置 */
export interface IGroupConfig {
  /** 是否折叠 */
  isCollapsed?: boolean
  /** group 折叠后的大小 */
  groupCollapsedSize?: { width: number; height: number }
  /** group 未折叠的大小 */
  groupChildrenSize?: { width: number; height: number }
  /** 子节点元素集合 */
  groupChildren?: string[]
  /** group Header */
  groupHeaderHeight?: number
  /** group 内边距 */
  groupPadding?: number
}
```

### createService (可选)

 复杂的图编辑应用的节点 id 等元数据可能需要调用服务端接口生成，因此这里提供了一个可选的 createService 函数，XFlow 在创建群组时会自动执行 ICreateService 来获取后端数据， 建议在 addGroup 的 hook 中配置这个异步方法。

```tsx | pure
/** add node api service 类型 */
export interface ICreateNodeService {
  (args: IArgs): Promise<NsGraph.IGroupConfig>
}
```

- 入参类型：[IArgs](#命令参数iargs)
- 返回类型：[NsGraph.IGroupConfig](/api/interface#igroupconfig)

#### cellFactory (可选)

支持高阶用户自定义自己的 X6 Node Cell，要求返回一个 X6 Node 实例

```tsx | pure
/** 创建X6 Node Cell的工厂方法 */
export interface IGroupCellFactory {
  (node: NsGraph.IGroupConfig, self: AddGroupCommand): Promise<Node>
}
```

- 入参类型：
  - node: [NsGraph.IGroupConfig](/api/interface#igroupconfig) 节点数据
  - self: AddGroupCommand 方便使用 AddGroupCommand 实例上的方法
- 返回类型：
  - [X6.Node](/api/interface#igroupconfig) Cell

### 配置全局 Hook (可选)

XFlow 的命令可以通过全局的 Hook 来扩展业务逻辑, 比如要配置全局的 createNodeService 只需要在 createCmdConfig 中通过 hooks.addGroup.registerHook 注册自己的添加 createService 到 args 中（[IArgs](#命令参数iargs)）

```tsx | pure
import { createCmdConfig, DisposableCollection } from '@antv/xflow'
import { MockApi } from './service'

export const useCmdConfig = createCmdConfig(config => {
  config.setRegisterHookFn(hooks => {
    hooks.addGroup.registerHook({
      name: 'get node config data from backend api',
      handler: async args => {
        args.createService = MockApi.addNode
      },
    })
  })
})

export const Demo = () => {
  const cmdConfig = useCmdConfig()
  return <XFlow commandConfig={cmdConfig} />
}
```
