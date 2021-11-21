---
title: Command
order: 2
group:
  path: /tutorial-advanced
  title: 自定义组件
  order: 6
nav:
  title: 教程
  path: /docs
  order: 1
---

## Command

<img src="https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*_74NSZjuTTQAAAAAAAAAAAAAARQnAQ" style="display: block;padding: 12px 0;width: 75%"/>

### 概念说明

Command 是解耦 UI 组件和 Graph 的关键，所有对 Graph 的操作都通过 CommandService.executeCommand 来完成，我们需要知道：

1. 如何获取 CommandService
2. 如何调用 CommandService
3. 如何使用类型

### 如何使用

### 如何获取 CommandService

CommandService 在 XFlow 内部无处不在，入口分为两种：

1. React 组件内部使用： 通过 useXFlowApp 来获取 CommandService
2. XFlow 组件的配置项中使用：通过函数的参数可以获得 CommandService

#### 第一种：React 组件内部使用

在 XFlow 组件内部我们可以获得 App App 上就有 CommandService 可以使用

```tsx | pure
import { useXFlowApp, XFlowGraphCommands, NsGraphCmd } from '@antv/xflow'

export const GroupNode: NsGraph.INodeRender = props => {
  const { cell } = props
  const app = useXFlowApp()
  return (
    <div classname="node">
      <button
        onClick={() => {
          app.executeCommand<NsGraphCmd.GraphMeta.IArgs>(XFlowGraphCommands.LOAD_META.id, {})
        }}
      >
        ExecCommand
      </button>
    </div>
  )
}
```

#### 第二种：组件的配置项中使用

XFlow 的所有组件配置的所有事件函数的参数中都包含了 CommandService，比如 setEvents 的时候，仔细看下 IEvent 的函数签名

```tsx | pure
import { createGraphConfig } from '@antv/xflow'

export const useGraphConfig = createGraphConfig(config => {
  const event: IEvent<'node:click'> = {
    eventName: 'node:click',
    callback: (eventArgs, commandService) => {
      console.log('node:click', e)
    },
  }
  /**  这里绑定事件  */
  config.setEvents([event])
})
```
