---
title: Application 应用
order: 3
group:
  path: /interface
  title: Interface 接口定义
  order: 1
nav:
  title: API
  path: /api
  order: 1
---

## IApplication

```tsx | pure
/** 如何引用？ */
import { IApplication } from '@antv/xflow'
/** 类型说明：图编辑应用 */
export declare class IApplication {
  /** IGraphCommandService：执行命令修改应用状态 */
  readonly commandService: IGraphCommandService
  /** IModelService：获取应用状态 */
  readonly modelService: IModelService
  /** 获取画布实例 */
  public getGraphInstance(): Promise<X6Graph>
  /** 获取画布配置项 */
  public getGraphConfig(): Promise<IGraphConfig>
  /** 暴露命令的执行接口 */
  public executeCommand<Args, Result>(
    command: string,
    args: Args,
    hooks?: IRuntimeHook<Args, Result>,
  ): Promise<ICommandHandler<Args, Result> | undefined>
  /** 暴露命令的批量执行接口 */
  public executeCommandPipeline(cmdOptions: IGraphPipelineCommand[]): Promise<ICommandHandler>
  >
}
```

## IAppLoad

```tsx | pure
/** 引入方式 */
import { IAppLoad } from '@antv/xflow'
/** 类型说明：app启动后的回调 */
export type IAppLoad = (app: IApplication) => void
```

## IAppDestroy

```tsx | pure
/** 引入方式 */
import { IAppDestroy } from '@antv/xflow'
/** 类型说明：app销毁前的回调 */
export type IAppDestroy = (app: IApplication) => void
```
