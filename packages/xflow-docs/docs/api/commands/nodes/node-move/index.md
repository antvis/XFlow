---
title: MoveNode 移动节点
order: 14
group:
  path: /api/commands
  title: Command 命令
  order: 2
nav:
  title: API
  path: /api
  order: 1
---

## 移动节点

XFlow 提供节点添加的命令 `XFlowNodeCommands.MOVE_NODE`, 通过该命令移动节点。

### Command 示例

<code src="./demos/index.tsx" classname="cmd-demo" />

### 命令参数（IArgs）

|                名称 |                 类型 | 必选 | 默认值 | 描述                 |
| ------------------: | -------------------: | ---: | -----: | -------------------- |
|                  id |               string |    ✓ |      - | 节点 id              |
|            position |               object |      |      - | 移动的位置信息       |
| nodePositionService | INodePositionService |      |      - | 在服务端保存节点位置 |

```tsx | pure
export interface IArgs extends IArgsBase {
   /** node id */
  id: string
  /** 位置信息 */
  position: {
    /** 画布的绝对定位*/
    x?: number
    /** 画布的绝对定位*/
    y?: number
    /** 相对当前位置的位移*/
    dx?: number
    /** 相对当前位置的位移*/
    dy?: number
    /** 移动动画时长*/
    duration?: number
  }
  /** 在服务端保存节点位置 */
  nodePositionService?: INodePositionService
}

app.executeCommand<NsNodeCmd.MoveNode.IArgs>(XFlowNodeCommands.MOVE_NODE.id, {
  id: 'node1',
  position: {
    /** x轴移动距离 */
    dx: 50
    /** y轴移动距离 */
    dy: 30
  },
})
```

#### id

节点 id

#### position

可以通过两种方式来更新位置：

1. 画布的绝对定位（只配置 x,y）
2. 相对当前位置的位移（只配置 dx,dy）

```tsx | pure
interface Position {
  /** 画布的绝对定位*/
  x?: number
  /** 画布的绝对定位*/
  y?: number
  /** 相对当前位置的位移*/
  dx?: number
  /** 相对当前位置的位移*/
  dy?: number
  /** 移动动画时长*/
  duration?: number
}
```

### nodePositionService(可选)

 复杂的图编辑应用的需要实时保存节点位置信息，这里通过 nodePositionService 来更新服务端的位置信息，如果 nodePositionService 返回为 false，则停止在画布更新位置

```tsx | pure
/** add node api service 类型 */
export interface INodePositionService {
  (args: IArgs): Promise<boolean>
}
```

- 入参类型：[IArgs](#命令参数iargs)
- 返回类型：boolean
