---
title: GraphProvider
group:
  path: /graph-provider
  title: Graph 图提供者
  order: 5
nav:
  path: /api
  title: API
  order: 1
---

## XFlow GraphProvider

可以在[IApplication](/api/interface/application#iapplication) 上获取 X6 实例，
用于查询画布状态/监听画布事件

```tsx | pure
export interface IGraphProvider {
  /** 获取画布实例 */
  getGraphInstance: () => Promise<X6Graph>
  /** 获取画布配置项 */
  getGraphOptions: () => Promise<IGraphConfig>
}
```
