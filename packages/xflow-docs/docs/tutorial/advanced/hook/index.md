---
title: Hook
order: 5
group:
  path: /tutorial-advanced
  title: 自定义组件
  order: 6
nav:
  title: 教程
  path: /docs
  order: 1
---

## Hook

<img src="https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*_74NSZjuTTQAAAAAAAAAAAAAARQnAQ" style="display: block;padding: 12px 0;width: 75%"/>

### 概念说明

在 XFlow 中扩展逻辑都是通过 Hook 来完成，XFlow 内部可以注册 Hook 逻辑来完成对 Graph 配置和 Command 的 扩展

1. 如何新建 Hook 的配置项
2. 有哪些 hook 可以使用

### 如何使用

### 如何新建 Hook 的配置项

```tsx | pure
import type { NsGraph } from '@antv/xflow'
import { XFlow, createHookConfig, DisposableCollection } from '@antv/xflow'

export const useGraphHookConfig = createHookConfig(config => {
  config.setRegisterHook(hooks => {
    const disposableList = [
      // 注册修改graphOptions配置的钩子
      hooks.graphOptions.registerHook({
        name: 'custom-x6-options',
        handler: async options => {
          options.grid = false
          options.keyboard = {
            enabled: true,
          }
        },
      }),
    ]
    const toDispose = new DisposableCollection()
    toDispose.pushAll(disposableList)
    return toDispose
  })
})

export const Demo = () => {
  const graphHooksConfig = useGraphHookConfig(props)
  return <XFlow hookConfig={graphHooksConfig}></XFlow>
}
```

### 有哪些 hook 可以使用

Hook 可以分为两种类型：

1. GraphHook： 配置 Graph 相关的配置项
2. CommandHook：配置可以修改 Command 参数的逻辑

#### GraphHook

```tsx | pure
type IHooks = {
  /* x6 graph 配置项 */
  graphOptions: HookHub<Graph.Options>
  /* 绑定X6的事件  */
  x6Events: HookHub<IEventCollection, IEventSubscription>
  /* 自定义节点React组件 */
  reactNodeRender: HookHub<Map<string, NsGraph.INodeRender>>
  /* 自定义连线label的React组件 */
  reactEdgeLabelRender: HookHub<Map<string, NsGraph.IEdgeRender>>
  /* 在Graph 实例化后执行的逻辑   */
  afterGraphInit: HookHub<IGeneralAppService>
  /* 在Graph 销毁前执行的逻辑  */
  beforeGraphDestroy: HookHub<IGeneralAppService>
}
```

#### CommandHook

可以配置 Command 执行参数的扩展逻辑

```tsx | pure
type IHooks = INodeHooks & IEdgeHooks & IGroupHooks & IGraphHooks & IModelHooks
```
