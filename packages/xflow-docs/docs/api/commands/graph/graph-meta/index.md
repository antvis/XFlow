---
title: GraphMeta 全局元信息
order: 33
group:
  path: /api/commands
  title: Command 命令
  order: 2
nav:
  title: API
  path: /api
  order: 1
---

# XFlow 全局元信息

XFlow 提供获取全局元信息的命令 `XFlowGraphCommands.GRAPH_META`, 通过该命令可以获取全局元信息

## 什么时候用

如果实际的业务场景中, 需要一些`全局通用的元信息`, 对应的一些基础信息,比如：
图数据对应在 DB 里的 ID/名字/创建时间，为啥需要抽象出来呢？
因为在保存节点或边的数据时，服务端除了节点和边的数据，通常还需要知道图的 ID，才知道更新 db 中的哪一行数据，我们在 service 层默认会带上 meta 的数据，方便作为参数传给服务端。
那么就可以通过该命令来设置 Meta。

XFlow 会将 meta 存入 [ModelService](/api/models)中, 需要使用的地方从 ModelService 中去取即可。

## 怎么用

### 设置值

#### 方法一

XFlow 组件接收 meta 属性, 用户传入该属性后, XFlow 会自动调用该命令将信息存入全局的 ModelService 中。

```tsx | pure
/** meta可以是任意对象 */
<XFlow meta={{}} />
```

#### 方法二

用户可以主动调用 `XFlowGraphCommands.GRAPH_META`命令来设置, 既支持直接写好信息， 也支持从服务端获取。

```tsx | pure
appRef.executeCommand(XFlowGraphCommands.LOAD_META.id, {
  meta: {},
  /** 支持从服务端获取元信息  */
  // graphMetaService: async () => {
  //   const res: NsGraph.IGraphMeta = {};
  //     return res
  //   }
} as NsGraphCmd.GraphMeta.IArgs)
```

#### 通过 ModelService 使用

```tsx | pure
import React from 'react'
import { MODELS, useXFlowAPP } from '@antv/xflow'

const Demo = () => {
  const app = useXFlowApp()
  const [meta, setMeta] = React.useState({})

  React.useEffect(() => {
    MODELS.GRAPH_META.useValue(app.modelService).then(meta => {
      setMeta(meta)
    })
  }, [])

  return <div> {JSON.stringify(meta, null, 2)}</div>
}
```
