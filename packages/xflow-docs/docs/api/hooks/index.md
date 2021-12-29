---
title: Hooks
group:
  path: /hooks
  title: Hooks 钩子
  order: 5
nav:
  path: /api
  title: API
  order: 1
---

## XFlow Hooks

hooks 是一个高级功能 比如结合 Command 使用，用户可以在 createCmdConfig 中使用 hooks

```tsx | pure
export const useCmdConfig = createCmdConfig(config => {
  // 设置hook
  config.setRegisterHookFn(hooks => {
    const list = [
      hooks.addNode.registerHook({
        name: 'get node config from backend api',
        handler: async args => {
          args.createNodeService = MockApi.addNode
        },
      }),
    ]
    const toDispose = new DisposableCollection()
    toDispose.pushAll(list)
    return toDispose
  })
})

const Demo = () => {
  const cmdConfig = useCmdConfig()
  return <XFlow commandConfig={cmdConfig} />
}
```

### Hooks

内置的 Hooks

```tsx | pure
interface ICmdHooks {
  // graph 相关
  graphOptions: HookHub<Graph.Options, Graph.Options>
  reactNodeRender: HookHub<Map<string, NsGraph.INodeRender>>
  reactEdgeLabelRender: HookHub<Map<string, NsGraph.IEdgeRender>>
  afterGraphInit: HookHub<IGeneralAppService, IGeneralAppService>
  beforeGraphDestroy: HookHub<IGeneralAppService, IGeneralAppService>
  x6Events: HookHub<IEventCollection, IEventSubscription>
  // command 相关
  addNode: HookHub<NsAddNode.IArgs, NsAddNode.IResult>
  delNode: HookHub<NsDelNode.IArgs, NsDelNode.IResult>
  selectNode: HookHub<NsSelectNode.IArgs, NsSelectNode.IResult>
  moveNode: HookHub<NsMoveNode.IArgs, NsMoveNode.IResult>
  updateNode: HookHub<NsUpdateNode.IArgs, NsUpdateNode.IResult>
  centerNode: HookHub<NsCenterNode.IArgs, NsCenterNode.IResult>
  frontNode: HookHub<NsFrontNode.IArgs, NsFrontNode.IResult>
  backNode: HookHub<NsBackNode.IArgs, NsBackNode.IResult>
  highlightNode: HookHub<NsHighlightNode.IArgs, NsHighlightNode.IResult>
  addEdge: HookHub<NsAddEdge.IArgs, NsAddEdge.IResult>
  delEdge: HookHub<NsDelEdge.IArgs, NsDelEdge.IResult>
  updateEdge: HookHub<NsUpdateEdge.IArgs, NsUpdateEdge.IResult>
  highlightEdge: HookHub<NsHighlightEdge.IArgs, NsHighlightEdge.IResult>
  frontEdge: HookHub<NsFrontEdge.IArgs, NsFrontEdge.IResult>
  delGroup: HookHub<NsDelGroup.IArgs, NsDelGroup.IResult>
  addGroup: HookHub<NsAddGroup.IArgs, NsAddGroup.IResult>
  initGroup: HookHub<NsInitGroup.IArgs, NsInitGroup.IResult>
  collapseGroup: HookHub<NsCollapseGroup.IArgs, NsCollapseGroup.IResult>
  ...
}
```

### IHookHub

hookhub 是多个 hook 的集合

```tsx | pure
/** hookhub是多个hook的集合 */
export interface IHookHub<Args, Result> {
  /** 注册hook */
  registerHook: (hookConfig: IHook) => Disposable
  /** 执行所有hook */
  call: (
    args: Args,
    handler: IMainHandler<Args, Result>,
    hookMetas?: IRuntimeHook<Args>,
  ) => Promise<Result | undefined>
}
```

### IHook

hook 是一段外部注入的逻辑，用于修改或扩展系统内部逻辑

```tsx | pure
/** 定义一个hook，注册的逻辑放在handler中  */
export interface IHook<Args = any, Result = any> {
  /** hook id */
  name: string
  /** 注入的逻辑 */
  handler: (
    args: Args,
    mainHandler?: IMainHandler<Args, Result>,
  ) => Promise<null | void | IMainHandler<Args, Result>>
  /** 在某个hook后执行 */
  after?: string
  /** 在某个hook前执行 */
  before?: string
}
```
