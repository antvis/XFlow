---
title: DelEdge 删除连线
order: 22
group:
  path: /api/commands
  title: Command 命令
  order: 2
nav:
  title: API
  path: /api
  order: 1
---

## DelEdge 删除连线

XFlow 提供连线删除的命令 `XFlowEdgeCommands.DEL_EDGE`, 通过该命令可以实现在画布中删除一条连线。

## 命令参数

|               名称 |                类型 | 必选  | 默认值 | 描述                |
| ----------------: | ------------------: | ---: | ----: | -----------------|
| edgeConfig        | NsGraph.IEdgeConfig |    ✓ |     - | 节点的配置数据      |
| x6Edge            | X6Edge              |      |     - | cell 工厂方法      |
| deleteEdgeService | IDeleteEdgeService  |      |     - | 删除连线的服务      |


### edgeConfig

连线的配置数据, 具体数据格式请参考 [NsGraph.IEdgeConfig](/api/interface#inodeconfig)

### x6Edge

X6 Edge 实例

### deleteEdgeService

复杂情况下, 连线的删除需要与服务端做交互, XFlow 在执行 DelEdge 命令时会自动执行 `deleteEdgeService`方法。因此如果业务场景中删除连线需要与服务端做交互, 就可以使用 `deleteEdgeService`。

建议在 DelEdge 的 hook 中配置这个异步方法。

```tsx | pure
export interface IDeleteEdgeService {
  (args: IArgs): Promise<boolean>
}
```


## 配置全局Hook

XFlow 的命令可以通过全局的 Hook 来扩展业务逻辑, 比如 DelEdge 时配置全局的 delEdgeService。

```tsx | pure

import { createCmdConfig, DisposableCollection } from '@antv/xflow'
import { MockApi } from './service'

export const useCmdConfig = createCmdConfig(config => {
  config.setRegisterHookFn(hooks => {
    hooks.delEdge.registerHook({
      name: 'delEdgeHook',
      handler: async args => {
        args.delEdgeService = MockApi.delEdge
      },
    }),
  })
})

export const Demo = () => {
  const cmdConfig = useCmdConfig()
  return <XFlow commandConfig={cmdConfig} />
}

```
