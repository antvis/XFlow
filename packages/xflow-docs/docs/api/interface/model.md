---
title: ModelService 数据模型
order: 5
group:
  path: /interface
  title: Interface 接口定义
  order: 1
nav:
  title: API
  path: /api
  order: 1
---

## IModelService

```tsx | pure
/** 如何引入？ */
import { IModelService } from '@ali/xflow'

/**
 * Model Service 类型
 */
export interface IModelService {
  /** 注册模型 */
  registerModel: <T>(options: IModelOptions<T>) => Disposable
  /** 异步获取模型：promise会在模型注册成功后resolve */
  awaitModel: <T = any>(token: Token<T>) => Promise<NsModel.IModel<T>>
  /** 同步获取模型，没有注册的token会返回undefined */
  findDeferredModel: <T = any>(token: Token<T>) => undefined | Deferred<NsModel.IModel<T>>
}
```
