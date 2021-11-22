---
title: CollapseGroup 折叠群组
order: 53
group:
  path: /api/commands
  title: Command 命令
  order: 2
nav:
  title: API
  path: /api
  order: 1
---

## 折叠群组

XFlow 提供添加群组的命令 `XFlowGroupCommands.COLLAPSE_GROUP`, 通过该命令可以实现在画布中添加群组。

### Command 示例

<code src="./basic/index.tsx" classname="add-group-demo" />

### 命令参数（IArgs）

|          名称 |                        类型 | 必选 | 默认值 | 描述                                    |
| ------------: | --------------------------: | ---: | -----: | --------------------------------------- |
|        nodeId |                      string |    ✓ |      - | 新建群组的配置数据                      |
|   isCollapsed |                     boolean |    ✓ |      - | 是否折叠                                |
| toggleService | IToggleGroupCollapseService |      |      - | 更新群组的折叠状态，返回 false 时不执行 |

```tsx | pure
/** 参数类型 */
export interface IArgs extends IArgsBase {
  /** 折叠的group node id */
  nodeId: string
  /** 是否折叠 */
  isCollapsed: boolean
  /** 折叠后的大小 */
  collapsedSize?: { width: number; height: number }
  /** 间距 */
  gap?: number
  /** 更新群组的折叠状态，返回false时不执行 */
  toggleService?: IToggleGroupCollapseService
}
```

### toggleService (可选)

 复杂的图编辑应用的需要将图上数据实时持久化在服务端，因此这里提供了一个 toggleService 函数来同步群组折叠的状态，服务端可以通过在 toggleService 返回 false 来阻止命令的执行

```tsx | pure
/** add node api service 类型 */
export interface ICreateNodeService {
  (args: IArgs): Promise<NsGraph.IGroupConfig>
}
```

- 入参类型：[IArgs](#命令参数iargs)
- 返回类型：[NsGraph.IGroupConfig](/api/interface#igroupconfig)

### 配置全局 Hook (可选)

XFlow 的命令可以通过全局的 Hook 来扩展业务逻辑, 比如要配置全局的 createNodeService 只需要在 createCmdConfig 中通过 hooks.addGroup.registerHook 注册自己的添加 createService 到 args 中（[IArgs](#命令参数iargs)）

```tsx | pure
import { createCmdConfig, DisposableCollection } from '@antv/xflow'
import { MockApi } from './service'

export const useCmdConfig = createCmdConfig(config => {
  config.setRegisterHookFn(hooks => {
    hooks.addGroup.registerHook({
      name: 'get node config data from backend api',
      handler: async args => {
        args.createService = MockApi.addNode
      },
    })
  })
})

export const Demo = () => {
  const cmdConfig = useCmdConfig()
  return <XFlow commandConfig={cmdConfig} />
}
```
