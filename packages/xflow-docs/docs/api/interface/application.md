---
title: Application 应用
group:
  path: /interface
  title: Interface 接口定义
  order: 1
nav:
  title: API
  path: /api
  order: 1
---

## FrontendApplication

```tsx | pure
export declare class FrontendApplication {
  readonly commands: IGraphCommandService
  readonly contextService: IContextService
  /** 启动 app  */
  start(): Promise<void>
  /** 停止 app */
  stop(): Promise<void>
  /** 暴露命令的执行接口 */
  executeCommand<T = any>(
    commandId: string,
    cmdArgs: T,
    hook?: IRuntimeHook<T, any>,
  ): Promise<ICommandHandler>
  /** 暴露命令的批量执行接口 */
  executeCommandPipeline(cmdOptions: IGraphPipelineCommand[]): Promise<ICommandHandler>
  /** 绑定app事件 */
  protected registerEventListeners(): void
  /** 获取所有app扩展 */
  protected contributions(): IFrontendApplicationContribution[]
  /** 启动所有app扩展 */
  protected startContributions(): Promise<void>
  /** 停止所有app扩展  */
  protected stopContributions(): void
}
```

## IAppLoad

```tsx | pure
export type IAppLoad = (app: FrontendApplication, registry: ExtensionRegistry) => void
```

## IAppDestoryCallback

```tsx | pure
export type IAppDestoryCallback = (app: FrontendApplication) => void
```
