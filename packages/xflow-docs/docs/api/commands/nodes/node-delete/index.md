---
title: DelNode 删除节点
order: 12
group:
  path: /api/commands
  title: Command 命令
  order: 2
nav:
  title: API
  path: /api
  order: 1
---

## 删除节点命令

XFlow 提供节点添加的命令 `XFlowNodeCommands.DEL_NODE`, 通过该命令可以实现在画布中删除一个节点。

### Command 示例

<code src="./demos/index.tsx" classname="cmd-demo" />

### 命令参数（IArgs）

|              名称 |                类型 | 必选 | 默认值 | 描述                         |
| ----------------: | ------------------: | ---: | -----: | ---------------------------- |
|        nodeConfig | NsGraph.INodeConfig |    ✓ |      - | 待删除节点的配置数据         |
| deleteNodeService |  IDeleteNodeService |      |      - | 调用服务端删除节点的异步方法 |

```tsx | pure
export interface IArgs extends IArgsBase {
  /** 新建节点的配置数据 */
  nodeConfig: NsGraph.INodeConfig
  /** 创建Node的服务 */
  deleteNodeService?: IDeleteNodeService
}
```

#### nodeConfig

节点的元数据，参考数据格式 [NsGraph.INodeConfig](/api/interface#inodeconfig)

### deleteNodeService (可选)

 复杂图编辑应用的删除操作需要实时保存到服务端，这里可以配置 deleteNodeService 用于通知服务端节点的删除事件，如果服务端返回 false 则不会执行删除操作。

```tsx | pure
/** add node api service 类型 */
export interface IDeleteNodeService {
  (args: IArgs): Promise<NsGraph.INodeConfig>
}
```

- 入参类型：[IArgs](#命令参数iargs)
- 返回类型：[NsGraph.INodeConfig](/api/interface#inodeconfig)

### 配置全局 Hook(可选)

XFlow 的命令可以通过全局的 Hook 来扩展业务逻辑, 比如要配置全局的 deleteNodeService 在 createCmdConfig 中通过 hooks.delNode.registerHook 注册自己的添加 deleteNodeService 到 args 中（[IArgs](#命令参数iargs)）

```tsx | pure
import { createCmdConfig, DisposableCollection } from '@antv/xflow'
import { MockApi } from './service'

export const useCmdConfig = createCmdConfig(config => {
  config.setRegisterHookFn(hooks => {
    hooks.delNode.registerHook({
      name: 'notify delete node event to backend api',
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
