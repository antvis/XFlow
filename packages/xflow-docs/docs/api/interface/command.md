---
title: CommandService 命令
order: 4
group:
  path: /interface
  title: Interface 接口定义
  order: 1
nav:
  title: API
  path: /api
  order: 1
---

## IGraphCommandService

```tsx | pure
export interface IGraphCommandService {
  /** event：可以监听CommandService的变化 */
  onDidChange: IOnDidChange<null>
  /** 撤销命令 */
  undoCommand: () => Promise<void>
  /** 重做命令 */
  redoCommand: () => Promise<void>
  /** 是否可重做 */
  isRedoable: boolean
  /** 是否可撤销 */
  isUndoable: boolean
  /** 执行原子命令：会在undo stack中push cmd */
  executeCommand<Args, Result = any>(
    command: string,
    args: Args,
    hooks?: IRuntimeHook<Args, Result>,
  ): Promise<ICommandHandler<Args, Result> | undefined>
  /** 用pipeline执行命令 */
  executeCommandPipeline: (
    cmdOptions: IGraphPipelineCommand[],
  ) => Promise<ICommandHandler | undefined>
  /** 执行撤销命令：不会在undo stack中push新的command记录 */
  executeUndoCommand<Args, Result = any>(
    command: string,
    args: Args,
    hooks?: IRuntimeHook<Args, Result>,
  ): Promise<ICommandHandler<Args, Result> | undefined>
}
```
