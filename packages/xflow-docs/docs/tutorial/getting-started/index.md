---
title: 快速上手
path: index
group:
  path: /tutorial-02
  title: 快速上手
  order: 1
nav:
  title: 教程
  path: /docs
  order: 1
---

# 快速上手

## 安装

XFlow 通过 npm 或 yarn 命令安装。对于生产环境, 我们推荐使用一个明确的版本号, 以避免新版本升级造成不可预期的破坏。

```shell

#npm
$ npm install @antv/xflow --save

#yarn
$ yarn add @antv/xflow

```

XFlow 是基于 X6 图编辑引擎、面向 React 技术栈用户的图编辑应用框架, 会默认安装 `@antv/x6`、`@antv/x6-react-shape`。

XFlow 支持 AntV 旗下的常见布局算法, 与兄弟团队[G6 图布局](https://g6.antv.vision/zh/docs/api/graphLayout/guide)保持一致, 会默认安装 `@antv/layout`。

## 第一个示例

<code src="./demo/index.tsx" />

## 开始使用

接下来我们就一起使用 XFlow 来构建一个简单的图形应用。

### Step1 创建工作空间

首先, 我们需要构建一个 XFlow 工作空间，其中 XFlowCanvas 画布组件，CanvasScaleToolbar 工具栏、CanvasMiniMap 小地图、CanvasSnapline 对齐线等交互组件，都是 XFlow 工作空间中的内容。`需要强调的是，在XFlow 中，一切都是React 组件`。

```tsx | pure
import { XFlow, XFlowCanvas } from '@antv/xflow'
import { CanvasScaleToolbar, CanvasMiniMap, CanvasSnapline } from '@antv/xflow-extension'
import { useGraphConfig } from './config-graph'

return (
  <XFlow
    className="xflow-uer-container"
    graphData={graphData}
    graphLayuot={{
      layoutType: 'dagre',
      layoutOptions: {
        type: 'dagre',
        rankdir: 'TB',
        nodesep: 60,
        ranksep: 40,
      }
    }}
    onLoad={onLoad}
    isAutoCenter={true}
  >
    <XFlowCanvas config={useGrapConfig()}>
      <CanvasScaleToolbar />
      <CanvasMiniMap minimapOptions={{ width: 200, height: 120 }} />
      <CanvasSnapline color="#690" />
    </XFlowCanvas>
  </Xflow>
)
```

### Step2 预设相关配置

然后, 我们需要预设画布全局配置项`graphConfig`, 该配置项决定了画布上的内容如何呈现。比如画布是否需要网格、画布的缩放等级、画布是否支持滚轮缩放等, 再比如画布上需要渲染哪种类型的 React 节点/连线, 再比如画布上需要支持哪些事件等。

```tsx | pure
import { createGraphConfig } from '@antv/xflow'
import Node1 from './react-node/node1'
import Edge1 from './react-edge/edge1'

export const useGraphConfig = createGraphConfig(config => {
  /** 预设画布配置项，会覆盖XFlow默认画布配置项 */
  config.setX6Config({
    grid: true,
    scaling: { min: 0.2, max: 3 },
    mousewheel: { enabled: true },
  })

  /** 预设画布需要渲染的React节点、连线上的React内容 */
  config.setNodeRender('NODE1', props => <Node1 {...props} />)
  config.setEdgeRender('EDGE1', props => <Edge1 {...props} />)

  /** 预设画布相关事件 */
  config.setEvents([
    {
      eventName: 'node:click',
      callback: (e, cmds, ctx) => {
        /** 通过e?.node?.getData()可以获取节点的数据 */
        const nodeData = e?.node?.getData()
      },
    },
  ])
})
```

### Step3 画布渲染等逻辑操作

预设相关配置后, 我们就可以在`onLoad`里进行一些必要的业务逻辑操作，比如从服务端获取数据、执行布局算法、渲染画布内容等。

```tsx | pure
/** XFlow初始化完成后的回调 */
const onLoad: IAppLoad = async app => {
  /** 这里我们假设数据已经从服务端取到 */
  const nodes: NsGraph.INodeConfig[] = [
    { id: 'root1', width: 150, height: 40, renderKey: 'NODE1', info: { text: 'root1' } },
    { id: 'down1', width: 150, height: 40, renderKey: 'NODE2', info: { text: 'down1' } },
    { id: 'down2', width: 150, height: 40, renderKey: 'NODE2', info: { text: 'down2' } },
    { id: 'down3', width: 150, height: 40, renderKey: 'NODE2', info: { text: 'down3' } },
  ]
  const edges: NsGraph.IEdgeConfig[] = [
    {
      id: 'root1-down1',
      source: 'root1',
      target: 'down1',
      renderKey: 'EDGE1',
      info: { line: 'root1-down1' },
    },
    {
      id: 'root1-down2',
      source: 'root1',
      target: 'down2',
      renderKey: 'EDGE2',
      info: { line: 'root1-down2' },
    },
    {
      id: 'root1-down3',
      source: 'root1',
      target: 'down3',
      label: '1:N(纯文本)',
      info: { line: 'root1-down3' },
    },
  ]
  const graphData = { nodes, edges }
  setGraphData(graphData)
}
```

到此，一个简单的图形应用已经具备雏形了。但 XFlow 的魅力远不止于此！如果您的应用还需要各种交互组件，XFlow 为您内置了若干交互组件，拿来即用，比如上面使用的 `CanvasScaleToolbar工具栏`，`CanvasMinimap小地图`，`CanvasSnapline对齐线`。

另外 XFlow 真正强大之处在于: 1. 画布组件与交互组件的联动机制 2. XFlow 提供的扩展机制允许定制任意业务需要的交互组件。

## 更多

本章仅仅介绍了如何安装 XFlow 以及简单的使用场景, 在后续的教程中您可以了解更多 XFlow 核心能力。

- [DAG 解决方案](tutorial/solutions/dag)
- [ER 建模解决方案](extensions/form)
- [流程图解决方案](/business-case/lineage/dag)
- [XFlow 工作台组件](quick-start)
- [XFlowCanvas 画布组件](extensions/form)
- [Toolbar 工具栏](/business-case/lineage/dag)
- [ScaleToolbar 缩放工具栏](quick-start)
- [ContextMenu 右键菜单](extensions/form)
- [Snapline 对齐线](/business-case/lineage/dag)
- [Minimap 小地图](quick-start)
- [KeyBindings 快捷键](extensions/form)
- [NodeDndPanel 节点拖拽面板](/business-case/lineage/dag)
- [JsonForm 配置式表单](/business-case/lineage/dag)
- [WorkspacePanel 通用面板](quick-start)
- [自定义扩展组件](extensions/form)
