import React from 'react'
import { Syringe } from 'mana-syringe'
import type { Graph as X6Graph } from '@antv/x6'
import { Deferred } from '../../common/deferred'
import type { NsGraph } from '../../interface'
import {
  MAX_ZOOM,
  MIN_ZOOM,
  XFLOW_DEFAULT_EDGE,
  XFLOW_DEFAULT_NODE,
  XFLOW_DEFAULT_GROUP_NODE,
} from '../../constants'
import { uuidv4 } from '../../common/uuid'
import { XFlowDefaultGroupNode } from './react-group-node'
import { XFlowDefaultNode } from './react-node'
export namespace NsGraphConfig {
  export const CONFIG_TYPE = 'GraphConfig'
  /** 默认的Node解析函数 */
  export const defaultNodeTypeParser = (nodeConfig: NsGraph.INodeConfig) => nodeConfig.renderKey
  /** 构造的Edge解析函数 */
  export const defaultEdgeTypeParser = (edgeConfig: NsGraph.IEdgeConfig) => edgeConfig.renderKey
  /** XFlow默认的React组件 */
  export const defaultNodeMapValue: [string, NsGraph.INodeRender<any>][] = [
    [XFLOW_DEFAULT_NODE, XFlowDefaultNode],
    [XFLOW_DEFAULT_GROUP_NODE, XFlowDefaultGroupNode],
  ]
}

export class GraphConfig {
  /** 配置类型 */
  readonly CONFIG_TYPE = NsGraphConfig.CONFIG_TYPE
  /**
   * xflow app instance id, 用来标记app的实例
   * 一个app instance 可以包含多个graphId
   */
  public xflowInstanceId: string

  /**
   * Graph的配置id：
   * 1. 和画布的 html container 一一对应，
   * 2. 作为X6的 react portal view Id
   */
  public graphId: string

  /** 构造函数 */
  constructor() {
    this.graphId = uuidv4()
  }
  /** 画布的属性 */
  private x6Options: Deferred<X6Graph.Options> = new Deferred()
  /** app 的 root 节点 */
  private appContainer: HTMLElement
  /** 画布的root节点 */
  private rootContainer: Deferred<HTMLElement> = new Deferred()
  /** 画布的dom节点 */
  private graphContainer: Deferred<HTMLElement> = new Deferred()
  /** 自定义节点 */
  private nodeRender = new Map<string, NsGraph.INodeRender>(NsGraphConfig.defaultNodeMapValue)
  /** 自定义边 */
  private edgeRender = new Map<string, NsGraph.IEdgeRender>()
  /** 解析node渲染类型的parser */
  private nodeTypeParser: (nodeConfig: NsGraph.INodeConfig) => string =
    NsGraphConfig.defaultNodeTypeParser
  /** 解析edge渲染类型的parser  */
  private edgeTypeParser: (edgeConfig: NsGraph.IEdgeConfig) => string =
    NsGraphConfig.defaultEdgeTypeParser
  /** 自定义事件 */
  private events: NsGraph.IEvent[] = []

  mergeX6Config = async (config: Partial<X6Graph.Options>) => {
    const current = await this.getX6Config()
    return Object.assign(current, config)
  }
  getX6Config = async () => {
    const config = await this.x6Options.promise
    return config
  }
  setX6Config = (options?: X6Graph.Options) => {
    const defaultOptions = this.getDefaultGraphOptions()
    this.x6Options?.resolve({ ...defaultOptions, ...options })
  }
  setAppContainer = (ele: HTMLElement | null) => {
    this.appContainer = ele
  }
  setRootContainer = (ele: HTMLElement | null) => {
    ele && this?.rootContainer.resolve(ele)
  }
  setGraphContainer = (ele: HTMLElement | null) => {
    ele && this.graphContainer?.resolve(ele)
  }
  setEvents = (events: NsGraph.IEvent[]) => {
    this.events = events
  }
  setDefaultNodeRender = (component: NsGraph.INodeRender) => {
    this.nodeRender.set(XFLOW_DEFAULT_NODE, component)
  }
  setDefaultEdgeRender = (component: NsGraph.IEdgeRender) => {
    this.edgeRender.set(XFLOW_DEFAULT_EDGE, component)
  }
  setNodeRender = (renderKey: string, component: NsGraph.INodeRender) => {
    this.nodeRender.set(renderKey, component)
  }
  setEdgeRender = (renderKey: string, component: NsGraph.IEdgeRender) => {
    this.edgeRender.set(renderKey, component)
  }
  /** 设置解析node render key的 parser */
  setNodeTypeParser = (parser: (nodeConfig: NsGraph.INodeConfig) => string) => {
    this.nodeTypeParser = parser
  }
  /** 设置解析edge render key的 parser */
  setEdgeTypeParser = (parser: (edgeConfig: NsGraph.INodeConfig) => string) => {
    this.edgeTypeParser = parser
  }

  /** 获取Graph参数 */
  getConfig = async () => {
    const [rootContainer, graphContainer, x6Options] = await Promise.all([
      this.rootContainer.promise,
      this.graphContainer.promise,
      this.x6Options.promise,
    ])
    const graphConfig: IGraphConfig = {
      xflowInstanceId: this.xflowInstanceId,
      graphId: this.graphId,
      nodeViewId: this.graphId,
      appContainer: this.appContainer,
      rootContainer,
      graphContainer,
      x6Options,
      events: this.events,
      nodeRender: this.nodeRender,
      edgeRender: this.edgeRender,
      nodeTypeParser: this.nodeTypeParser,
      edgeTypeParser: this.edgeTypeParser,
    }
    return graphConfig
  }

  private getDefaultGraphOptions = () => {
    const defaultOptions: X6Graph.Options = {
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
        strict: true,
        enabled: true,
        multiple: true,
        selectCellOnMoved: true,
        showNodeSelectionBox: false,
        // 框选可以选中edge
        rubberEdge: true,
        // 框选可以选中node
        rubberNode: true,
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
      /** 普通画布, 支持拖拽平移 */
      panning: {
        enabled: true,
      },
      /** 缩放参数 */
      scaling: {
        min: MIN_ZOOM,
        max: MAX_ZOOM,
      },
      /** keyboard */
      keyboard: {
        enabled: true,
      },
      /** 定制节点和边的交互行为 */
      interacting: {
        /** 节点默认可以被移动 */
        nodeMovable: true,
        /** 边上标签默认不可以被移动 */
        edgeLabelMovable: false,
      },
      async: false,
    }
    return defaultOptions
  }

  dispose = () => {
    // TODO: 统一看下defer的销毁
    this.rootContainer = new Deferred()
    this.graphContainer = new Deferred()
    this.x6Options = new Deferred()
  }
}

export interface IGraphConfig {
  /** xflow实例id */
  xflowInstanceId: string
  /** 画布实例id */
  graphId: string
  nodeViewId: string
  /** 画布的options */
  x6Options: X6Graph.Options
  /** app 的 root 节点 */
  appContainer: HTMLElement
  /** 画布的root节点 */
  rootContainer: HTMLElement
  /** 画布的dom节点 */
  graphContainer: HTMLElement
  /** 自定节点的渲染 */
  nodeRender: Map<string, React.ComponentType<any>>
  /** 自定义边label的渲染 */
  edgeRender: Map<string, React.ComponentType<any>>
  /** 自定义X6事件 */
  events: NsGraph.IEvent[]
  /** 解析node类型：从nodeConfig 中解析 ReactComponent类型 */
  nodeTypeParser: (nodeConfig: NsGraph.INodeConfig) => string
  /** 解析edge类型：从edgeConfig 中解析 ReactComponent类型 */
  edgeTypeParser: (edgeConfig: NsGraph.IEdgeConfig) => string
}

export interface IGraphOptionProvider {
  getOptions: () => Promise<IGraphConfig>
}

export const IGraphOptionProvider = Symbol('IGraphOptionProvider')

export const registerGraphConfig = (register: Syringe.Register, graphConfig: GraphConfig) => {
  register<IGraphOptionProvider>(IGraphOptionProvider, {
    lifecycle: Syringe.Lifecycle.singleton,
    useDynamic: () => {
      return {
        getOptions: async () => {
          return graphConfig.getConfig()
        },
      }
    },
  })
}

interface IValueProxy<T> {
  getValue: () => T
}

export const createGraphConfig =
  <T = any>(addOptions: (config: GraphConfig, proxy: IValueProxy<T>) => void) =>
  (props?: T) => {
    /** bridge config and props */
    const propsContainer = React.useMemo(() => ({ getValue: () => ({} as T) }), [])
    propsContainer.getValue = () => props

    const graphConfig = React.useMemo(() => {
      const config = new GraphConfig()
      addOptions(config, propsContainer)
      return config
    }, [propsContainer])

    return graphConfig
  }
