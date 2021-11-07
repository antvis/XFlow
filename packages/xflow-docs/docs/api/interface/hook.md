---
title: HookService 钩子
order: 6
group:
  path: /interface
  title: Interface 接口定义
  order: 1
nav:
  title: API
  path: /api
  order: 5
---

## IHookService

```tsx | pure
/** 如何引入？ */
import { IHookService } from '@antv/xflow'

/** 边数据 */
export interface IHookService<T = IHooks> {
  registerHookHub: (hookName: string, hook: HookHub) => Disposable
  registerHook: (registerHookFunc: IRegsiterHookFn<T>) => Disposable
  hookProvider: () => T
}
```
