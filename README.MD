
## XFlow: 专业的图编辑应用级解决方案

### 什么是XFlow？

XFlow 是 AntV 旗下, 基于 X6 图编辑引擎、面向 React 技术栈用户的图编辑应用级解决方案, 旨在让复杂的图编辑应用开发变得简单高效。XFlow 源自蚂蚁体验技术部数据智能团队, 已经在蚂蚁大数据部、人工智能中台业务场景深度打磨验证, 值得信赖！


## 特性

- 🌱　极易定制：支持使用 React 组件 开发节点/连线样式。
- 🚀　开箱即用：内置1个快速上手 + 3个解决方案, 内置若干 React 交互组件, 如小地图、对齐线、右键菜单等。
- 💯　生产可用：源自蚂蚁体验技术部数据智能团队, 在蚂蚁大数据部、人工智能中台业务场景深度打磨验证。
- 🧲　 一切皆可扩展：内置统一的扩展模式, 可按照自己的业务需求扩展图交互, 所有组件皆可扩展。


## 应用案例

### 简单示例
<img src=https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*S8LGR6I1SqsAAAAAAAAAAAAAARQnAQ />

### 流程图解决方案
<img src=https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*ixVAQrEoCTcAAAAAAAAAAAAAARQnAQ />

### DAG解决方案
<img src=https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*mFc0SLQOW44AAAAAAAAAAAAAARQnAQ />

### ER图解决方案
<img src=https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*kp-AQ7_GKi0AAAAAAAAAAAAAARQnAQ />


## 安装

### 使用 npm 或 yarn:

```shell
#npm
$ npm install @antv/xflow --save

#yarn
$ yarn add @antv/xflow

```

### 使用cdn:

通过 script 标签引入, 可以使用下面两个 CDN 中的任何一个, 默认返回 XFlow 的最新版:

* https://unpkg.com/@antv/xflow/dist/index.umd.js

* https://cdn.jsdelivr.net/npm/@antv/xflow/dist/index.umd.js

```tsx | pure
<script src="https://unpkg.com/@antv/xflow/dist/index.umd.js"></script>
```

对于生产环境, 我们推荐使用一个明确的版本号, 以避免新版本升级造成不可预期的破坏:

* https://unpkg.com/@antv/xflow@0.3.2-beta.1/dist/index.umd.js

* https://cdn.jsdelivr.net/npm/@antv/xflow@0.3.2-beta.1/dist/index.umd.js



## 开始使用

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
      {/** 工具栏 */}
      <CanvasScaleToolbar />
      {/** 小地图  */}
      <CanvasMiniMap minimapOptions={{ width: 200, height: 120 }} />
      {/** 对齐线 */}
      <CanvasSnapline color="#1890ff" />
    </XFlowCanvas>
  </Xflow>
)
```

### Step2 设置相关配置

然后, 我们需要设置画布全局配置项 `graphConfig`, 该配置项决定了画布上的内容如何呈现。比如画布是否需要网格、画布的缩放等级、画布是否支持滚轮缩放等, 再比如画布上需要渲染哪种类型的 React 节点/连线等。

```tsx | pure
import { createGraphConfig } from '@antv/xflow'
import Node1 from './react-node/node1'
import Edge1 from './react-edge/edge1'

export const useGraphConfig = createGraphConfig(config => {
  /** 设置画布配置项，会覆盖XFlow默认画布配置项 */
  config.setX6Config({
    grid: true,
    scaling: { min: 0.2, max: 3 },
    mousewheel: { enabled: true, zoomAtMousePosition: true },
  })

  /** 设置画布需要渲染的React节点、连线上的React内容 */
  config.setNodeRender('NODE1', props => <Node1 {...props} />)
  config.setEdgeRender('EDGE1', props => <Edge1 {...props} />)
})
```

### Step3 画布渲染等逻辑操作

设置相关配置后, 我们就可以在 `onLoad` 方法里进行一些必要的业务逻辑操作，比如从服务端获取数据、执行布局算法、渲染画布内容、监听画布相关事件等。

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

  /** 监听画布事件 */
  const graph = await app.getGraphInstance()
  graph.on('node:click', ({ e, x, y, node, view }) => {
    const nodeData: NsGraph.INodeConfig = node.getData()
    message.success(`${nodeData.id}节点被点击了`)
  })
  graph .on('edge:click', ({ e, x, y, edge, view }) => {
    edge.toFront()
    const edgeData: NsGraph.IEdgeConfig = edge.getData()
    message.success(`${edgeData.id}连线被点击了`)
  })
}
```

到此，一个简单的图形应用已经具备雏形了。但 XFlow 的魅力远不止于此！如果您的应用还需要各种交互组件，XFlow 为您内置了若干交互组件，拿来即用，比如上面使用的 `CanvasScaleToolbar工具栏`，`CanvasMinimap小地图`，`CanvasSnapline对齐线`。

另外 XFlow 真正强大之处在于:

* 画布组件与交互组件的联动机制。
* XFlow 提供的扩展机制允许定制任意业务需要的交互组件。您可以在后面的教程中详细了解。



## 使用文档

[XFlow 使用文档](https://xflow.antv.vision/zh/docs/tutorial-01/about)


## 如何交流

如果你在使用的过程中碰到问题，可以先通过 [issues](https://github.com/antvis/xflow/issues) 看看有没有类似的 bug 或者建议。欢迎提 [issues](https://github.com/antvis/xflow/issues/new) 交流，也可以使用[钉钉](https://m.dingtalk.com/)扫描下面二维码加入**XFlow 交流群**。

需要注意的是，提问题时请配上 [CodeSandbox](https://codesandbox.io/s/pensive-sound-f4nhc) 的复现代码，方便快速定位和解决问题。

<a href="https://qr.dingtalk.com/action/joingroup?code=v1,k1,rOHuvgq5s0EHDktyyQJffDE3ZAmHnbB2e6iwn/w4BKs=&_dt_no_comment=1&origin=11" target="_blank" rel="noopener noreferrer">
  <img src="https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*KuL6R7t0Xw0AAAAAAAAAAAAAARQnAQ" alt="X6/XFlow 图可视化交流群1" width="375" />
</a>


## 如何开发

我们使用了 [lerna](https://github.com/lerna/lerna) 来管理项目, 目录结构如下:

```
├── packages
│   ├── xflow-docs            # XFlow 使用文档, 包含 1个快速开始 + 3个解决方案
│   ├── xflow                 # 所有 XFlow 相关的引用都从 xflow 库导出
│   ├── xflow-core            # XFlow 对于 X6 画布的封装 graphProvider, 提供若干内置命令Command, 提供全局ModelService等
│   ├── xflow-extension       # XFlow 内置的若干交互组件, 包括小地图、对齐线、右键菜单等
│   └── xflow-hook            # XFlow 内置的 hook 机制, 允许自定义若干默认行为
```

1. 开始之前需要安装必要的全局依赖和初始化：

```shell
# 全局安装 yarn 和 lerna 工具
$ npm install yarn -g
$ npm install lerna -g

# 安装项目依赖和初始化构建
$ yarn bootstrap

# 确保正确的registry
$ yarn --registry=https://registry.npmjs.org

```

2. 启动 dev server

新建 terminal 监听 xflow-core 的文件变化，等待 watch 服务启动成功后执行下个命令。

```shell
 yarn run doc:core
```

新建 terminal 监听 xflow-extension 的文件变化，等待 watch 服务启动成功后执行下个命令。

```shell
 yarn run doc:ext
```

新建 terminal 监听 xflow 的文件变化，等待 watch 服务启动成功后执行下个命令。

```shell
 yarn run doc:main
```

3. 启动文档网站, 根据示例调试代码

```shell
$ yarn run dev:docs
```


## 如何贡献

如果你在使用的过程中碰到问题，可以先通过 [issues](https://github.com/antvis/xflow/issues) 看看有没有类似的 bug 或者建议。

如需提交代码，请遵从我们的[贡献指南](/CONTRIBUTING.zh-CN.md)。我们会收集贡献者的 Github 头像到下面贡献者清单中。

<a href="https://github.com/antvis/xflow/graphs/contributors">
  <img src="/CONTRIBUTORS.svg" alt="Contributors" width="740" />
</a>


