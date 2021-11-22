---
title: AddEdge 添加连线
order: 21
group:
  path: /api/commands
  title: Command 命令
  order: 2
nav:
  title: API
  path: /api
  order: 1
---

# AddEdge 添加连线

XFlow 提供连线添加的命令 `XFlowEdgeCommands.ADD_EDGE` 命令, 通过该命令可以实现在画布中添加一条连线。

## 命令参数

|              名称 |                类型 | 必选 |    默认值 | 描述               |
| ----------------: | ------------------: | ---: | --------: | ------------------ |
|        edgeConfig | NsGraph.IEdgeConfig |    ✓ | undefined | 新建连线的配置数据 |
|       cellFactory |    IEdgeCellFactory |      | undefined | cell 工厂方法      |
| createEdgeService |  ICreateEdgeService |      | undefined | 获取元数据的服务   |

### edgeConfig

连线的配置数据, 具体数据格式请参考 [NsGraph.IEdgeConfig](/api/interface#inodeconfig)

### cellFactory (可选)

XFlow 允许用户自定义 Edge, 要求必须返回一个 X6 Edge 实例。

举例:
业务中需要渲染的连线是多样的, 但是它们又有共性, 这时候就可以定义一个基类 Edge, 其余 Edge 都继承自它, 渲染连线时, 可以直接把生成好的 Edge 实例传给 XFlow。

```tsx | pure
export interface IEdgeCellFactory {
  (args: NsGraph.IEdgeConfig, self: AddEdgeCommand): Promise<X6Edge>
}
```

### createEdgeService

复杂情况下, 连线的生成需要与服务端做交互 或者 连线的元数据需要从服务端获取, XFlow 在执行 AddEdge 命令时会自动执行 `createEdgeService` 方法。因此如果业务场景中添加连线需要与服务端做交互, 就可以使用 `createEdgeService`。

建议在 AddEdge 的 hook 中配置这个异步方法。

```tsx | pure
export interface ICreateEdgeService {
  (args: IArgs): Promise<NsGraph.INodeConfig>
}
```

## 配置全局 Hook

XFlow 的命令可以通过全局的 Hook 来扩展业务逻辑, 比如 AddEdge 时配置全局的 createEdgeService。

```tsx | pure

import { createCmdConfig, DisposableCollection } from '@antv/xflow'
import { MockApi } from './service'

export const useCmdConfig = createCmdConfig(config => {
  config.setRegisterHookFn(hooks => {
    hooks.addEdge.registerHook({
      name: 'addEdgeHook',
      handler: async args => {
        args.createEdgeService = MockApi.addEdge
      },
    }),
  })
})

export const Demo = () => {
  const cmdConfig = useCmdConfig()
  return <XFlow commandConfig={cmdConfig} />
}

```
