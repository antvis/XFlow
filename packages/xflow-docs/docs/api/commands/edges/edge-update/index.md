---
title: UpdateEdge 更新边
order: 23
group:
  path: /api/commands
  title: Command 命令
  order: 2
nav:
  title: API
  path: /api
  order: 1
---

# 更新边

XFlow 提供更新连线的命令 `XFlowEdgeCommands.UPDATE_EDGE`, 通过该命令可以实现画布上连线内容的更新。

## UpdateEdge 示例

<code src="./demos/index.tsx" />

## 命令参数

|              名称 |                类型 | 必选 | 默认值 | 描述               |
| ----------------: | ------------------: | ---: | -----: | ------------------ |
|        edgeConfig | NsGraph.IEdgeConfig |    ✓ |      - | 更新连线的配置数据 |
| updateEdgeService |  IUpdateEdgeService |      |      - | 更新连线内容的服务 |

### edgeConfig

连线的元数据，参考数据格式 [NsGraph.IEdgeConfig](/api/interface#iedgeconfig)

### updateEdgeService (可选)

 复杂情况下, 连线内容的更新需要与服务端做交互, 将最新数据更新到服务端。XFlow 在执行 UpdateEdge 命令时会自动执行 `updateEdgeService` 方法。因此如果业务场景中连线内容的更新需要存储在服务端, 就可以使用 `updateEdgeService`。

 建议在 UpdateEdge 的 hook 中配置这个异步方法。

```tsx | pure
export interface IUpdateEdgeService {
  (args: IArgs): Promise<NsGraph.IEdgeConfig>
}
```

## 配置全局 Hook

 XFlow 的命令可以通过全局的 Hook 来扩展业务逻辑, 比如 UpdateEdge 时配置全局的 updateEdgeService。

```tsx | pure
import { createCmdConfig, DisposableCollection } from '@antv/xflow'
import { MockApi } from './service'

export const useCmdConfig = createCmdConfig(config => {
  config.setRegisterHookFn(hooks => {
    hooks.updateEdgee.registerHook({
      name: 'updateEdge',
      handler: async args => {
        args.updateEdgeService = MockApi.updateEdge
      },
    })
  })
})

export const Demo = () => {
  const cmdConfig = useCmdConfig()
  return <XFlow commandConfig={cmdConfig} />
}
```
