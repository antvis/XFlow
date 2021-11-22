---
title: DelGroup 解散群组
order: 52
group:
  path: /api/commands
  title: Command 命令
  order: 2
nav:
  title: API
  path: /api
  order: 1
---

## 解散群组

XFlow 提供节点添加的命令 `XFlowGroupCommands.DEL_GROUP`, 通过该命令解散一个群组。

### Command 示例

<code src="./demos/index.tsx" classname="cmd-demo" />

### 命令参数（IArgs）

|          名称 |                                                类型 | 必选 | 默认值 | 描述                     |
| ------------: | --------------------------------------------------: | ---: | -----: | ------------------------ |
|    nodeConfig | [NsGraph.IGroupConfig](/api/interface#igroupconfig) |    ✓ |      - | 待删除节点的配置数据     |
| deleteService |                                 IDeleteGroupService |      |      - | 持久化删除节点的异步方法 |

```tsx | pure
export interface IArgs extends IArgsBase {
  /** 待删除节点的配置数据 */
  nodeConfig: NsGraph.IGroupConfig
  /** 持久化删除节点的异步方法 */
  deleteService?: IDeleteGroupService
}
```

#### nodeConfig

节点的元数据，参考数据格式 [NsGraph.IGroupConfig](/api/interface#igroupconfig)

### deleteService (可选)

 复杂的图编辑应用的需要将图上数据实时持久化在服务端，因此这里提供了一个 deleteService 函数来同步群组被解散的状态，如果 deleteService 返回 false 则解散命令不会被执行

```tsx | pure
/** 持久化解散状态 */
export interface IDeleteGroupService {
  (args: IArgs): Promise<boolean>
}
```

- 入参类型：[IArgs](#命令参数iargs)
- 返回类型：boolean 返回 false 时，解散命令不会被执行

### 配置全局 Hook (可选)

XFlow 的命令可以通过全局的 Hook 来扩展业务逻辑, 比如要配置全局的 deleteService 只需要在 createCmdConfig 中通过 hooks.delGroup.registerHook 注册自己的添加 deleteService 到 args 中（[IArgs](#命令参数iargs)）

```tsx | pure
import { createCmdConfig, DisposableCollection } from '@antv/xflow'
import { MockApi } from './service'

export const useCmdConfig = createCmdConfig(config => {
  config.setRegisterHookFn(hooks => {
    hooks.addNode.registerHook({
      name: '通知服务端取消群组的状态',
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
