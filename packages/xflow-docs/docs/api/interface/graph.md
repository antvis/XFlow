---
title: X6Graph 画布配置
order: 2
group:
  path: /interface
  title: Interface 接口定义
  order: 1
nav:
  title: API
  path: /api
  order: 1
---

## Graph.Options X6 配置项

XFlow 默认的 [Graph.Options](https://x6.antv.vision/zh/docs/api/graph/graph) 配置项

```tsx | pure
const defaultOptions: Graph.Options = {
  // 节点是否可旋转
  rotating: false,
  // 节点是否可调整大小
  resizing: false,
  // 节点连线规则配置（详细文档：https://X6.antv.vision/zh/docs/api/graph/interaction#connecting）
  connecting: {
    snap: true,
    dangling: false,
    highlight: false,
    connectionPoint: 'rect',
    router: { name: 'er' },
    connector: {
      name: 'rounded',
      args: {
        radius: 15,
      },
    },
  },
  // 画布背景，支持颜色/图片/水印等（详细文档：https://X6.antv.vision/zh/docs/tutorial/basic/background）
  background: {},
  // 网格配置（详细文档：https://X6.antv.vision/zh/docs/tutorial/basic/grid）
  grid: {
    visible: true,
  },
  // 点选/框选配置（详细文档：https://X6.antv.vision/zh/docs/tutorial/basic/selection）
  selecting: {
    enabled: true,
    multiple: true,
    selectCellOnMoved: true,
    showNodeSelectionBox: false,
    movable: true,
  },
  // 对齐线配置，辅助移动节点排版（详细文档：https://X6.antv.vision/zh/docs/tutorial/basic/snapline）
  snapline: {
    enabled: false,
  },
  // 撤销/重做能力（详细文档：https://X6.antv.vision/zh/docs/tutorial/basic/history）
  history: {
    enabled: false,
  },
  // 剪切板，支持跨画布的复制/粘贴（详细文档：https://X6.antv.vision/zh/docs/tutorial/basic/clipboard）
  clipboard: {
    enabled: true,
    useLocalStorage: true,
  },
  // 使画布具备滚动、平移、居中、缩放等能力（详细文档：https://X6.antv.vision/zh/docs/tutorial/basic/scroller）
  scroller: {
    enabled: false,
  },
  // 滚轮缩放 （详细文档：https://X6.antv.vision/zh/docs/tutorial/basic/mousewheel）
  mousewheel: {
    enabled: true,
    minScale: MIN_ZOOM,
    maxScale: MAX_ZOOM,
    factor: 1.1,
    modifiers: ['ctrl', 'meta'],
  },
  /** 普通画布, 支持拖拽平移 (详细文档：https://x6.antv.vision/zh/docs/api/graph/graph/#panning) */
  panning: {
    enabled: true,
  },
  /** 缩放参数 (详细文档：https://x6.antv.vision/zh/docs/api/graph/transform/#scaling) */
  scaling: {
    min: MIN_ZOOM,
    max: MAX_ZOOM,
  },
  /** keyboad (详细文档：https://x6.antv.vision/zh/docs/api/graph/keyboard)*/
  keyboard: {
    enabled: true,
  },
  /** 定制节点和边的交互行为 (详细文档：https://x6.antv.vision/zh/docs/api/graph/interaction/#interacting) */
  interacting: {
    /** 节点默认可以被移动 */
    nodeMovable: true,
    /** 边上标签默认不可以被移动 */
    edgeLabelMovable: false,
  },
  /** 是否是异步渲染的画布 (详细文档：https://x6.antv.vision/zh/docs/api/graph/view/#async) */
  async: false,
}
```

### IGraphConfig

```tsx | pure
// 如何引用
import { IGraphConfig } from '@antv/xflow'

// 类型说明
export interface IGraphConfig {
  /** xflow实例id */
  xflowInstanceId: string
  /** 画布实例id */
  graphId: string
  /** 画布portal viewid */
  nodeViewId: string
  /** 画布的options */
  x6Options: X6Graph.Options
  /** 画布的root节点 */
  rootContainer: HTMLElement
  /** 画布的dom节点 */
  graphContainer: HTMLElement
  /** 自定节点的渲染 */
  nodeRender: Map<string, React.FC<any>>
  /** 自定义边label的渲染 */
  edgeRender: Map<string, React.FC<any>>
  /** 自定义X6事件 */
  events: NsGraph.IEvent[]
  /** 解析node类型：从nodeConfig 中解析 ReactComponent类型 */
  nodeTypeParser: (nodeConfig: NsGraph.INodeConfig) => string
  /** 解析edge类型：从edgeConfig 中解析 ReactComponent类型 */
  edgeTypeParser: (edgeConfig: NsGraph.IEdgeConfig) => string
}
```
