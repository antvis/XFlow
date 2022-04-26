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

/** 钩子服务 */
export interface IHookService<T = IHooks> {
  /** 注册一个新的插槽 */
  registerHookHub: (hookName: string, hook: HookHub) => Disposable
  /** 在插槽中插入一个钩子 */
  registerHook: (registerHookFunc: IRegisterHookFn<T>) => Disposable
  /** 钩子服务返回所有钩子 */
  hookProvider: () => T
}
```
