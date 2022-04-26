import ReactDOM from 'react-dom'
import type { IHooks } from '../../hooks/interface'
import type { NsGraph } from '../../interface'
import type { Edge, Edge as X6Edge } from '@antv/x6'
import { Graph as X6Graph, Dom } from '@antv/x6'
import { DisposableCollection, Disposable } from '../../common/disposable'
import { Deferred } from '../../common/deferred'
import type { IGraphConfig } from './config'
import { IGraphOptionProvider } from './config'
import { singleton, inject, Syringe } from 'mana-syringe'
import { IGraphCommandService } from '../../command'
import { IModelService } from '../../model-service/interface'
import { IHookService } from '../../hooks'
import { getEdgeReactComponent } from '../../command-contributions/components/context'
import { XFLOW_DEFAULT_EDGE } from '../../constants'

/** !!! 所有需要使用Graph相关信息的地方, 都统一使用IGraphProvider来获取 */
export const IGraphProvider = Symbol('IGraphProvider')
export interface IGraphProvider {
  /** 获取画布实例 */
  getGraphInstance: () => Promise<X6Graph>
  /** 获取画布配置项 */
  getGraphOptions: () => Promise<IGraphConfig>
}

export const ICommandServiceProvider = Symbol('ICommandServiceProvider')
export interface ICommandServiceProvider {
  getCommandService: () => Promise<IGraphCommandService>
}

export const IModelServiceProvider = Symbol('IModelServiceProvider')
export interface IModelServiceProvider {
  getModelService: () => Promise<IModelService>
}

export interface IGraphManager {
  getGraph: (graphId: string) => Promise<X6Graph>
}
@singleton()
export class GraphManager implements IGraphManager {
  /** 处理画布实例的销毁 */
  private toDispose = new DisposableCollection()
  /** 储存画布实例 */
  private graphMap = new Map<string, Deferred<X6Graph>>()

  /** 通过optionProvider 获取组件的 html dom element */
  @inject(IGraphOptionProvider) optionProvider: IGraphOptionProvider

  /** hooks */
  @inject(IHookService) hookService: IHookService<IHooks>
  /** hooks call 依赖的参数 */
  @inject(ICommandServiceProvider) commandServiceProvider: ICommandServiceProvider
  @inject(IModelServiceProvider) modelServiceProvider: IModelServiceProvider

  /** 获取X6 Graph 实例 */
  getGraph = async (graphId: string) => {
    let graphDefer = this.graphMap.get(graphId)
    if (!graphDefer) {
      graphDefer = new Deferred<X6Graph>()
      this.graphMap.set(graphId, graphDefer)
      const options = await this.optionProvider.getOptions()

      /** 获取hooks实例： hooks方便其他组件可以修改注册graphOpions/events */
      const hooks = this.hookService.hookProvider()
      /** 执行hooks：获取graphOptions */
      const mergedOptions = await hooks.graphOptions.call(options.x6Options)
      const { graphContainer, edgeRender, nodeRender, edgeTypeParser } = options
      /** 执行hooks：获取edge label render */
      const edgeRenderMap = await hooks.reactEdgeLabelRender.call(edgeRender)
      /** 执行hooks：更新nodeRender */
      await hooks.reactNodeRender.call(nodeRender)
      const { clientHeight, clientWidth } = graphContainer

      const commandService = await this.commandServiceProvider.getCommandService()
      const modelService = await this.modelServiceProvider.getModelService()

      /** 实例化 X6 Graph */
      const graph = new X6Graph({
        container: graphContainer,
        width: clientWidth,
        height: clientHeight,
        ...mergedOptions,
        /** X6提供了边渲染的钩子, 可以在这里设置边上需要渲染的React内容 */
        onEdgeLabelRendered: args => {
          const { edge, container } = args
          this.renderEdgeReactLabel({
            edge,
            container,
            edgeRenderMap,
            edgeTypeParser,
            modelService,
            commandService,
          })
        },
      })

      /** 执行hooks：绑定事件执行api */
      await hooks.afterGraphInit.call({
        graph,
        commandService,
        modelService,
        options,
      })

      graphDefer.resolve(graph)

      graph.on('node:moved', ({ node }) => {
        const nodeData = node.getData()
        const position = node.position()
        node.setData({
          ...nodeData,
          x: position?.x,
          y: position?.y,
        })
      })

      graph.on('node:resized', ({ node }) => {
        const nodeData = node.getData()
        const size = node.size()
        node.setData({
          ...nodeData,
          width: size?.width,
          height: size?.height,
        })
      })

      this.toDispose.push(
        Disposable.create(async () => {
          await hooks.beforeGraphDestroy.call({
            graph,
            commandService,
            modelService,
            options,
          })
          this.graphMap.delete(graphId)
          graph.dispose()
        }),
      )
    }
    return graphDefer.promise
  }

  private renderEdgeReactLabel = async (args: {
    container: Element
    edgeTypeParser: IGraphConfig['edgeTypeParser']
    edge: Edge
    edgeRenderMap: Map<string, NsGraph.IEdgeRender>
    commandService: IGraphCommandService
    modelService: IModelService
  }) => {
    const { container, edgeTypeParser, edge, edgeRenderMap, commandService, modelService } = args
    const renderKey = edgeTypeParser(edge?.data) || XFLOW_DEFAULT_EDGE
    const reactComponent = edgeRenderMap.get(renderKey)
    if (!reactComponent) {
      return
    }
    if (edge && edge?.data && reactComponent) {
      const content = this.edgeAppendForeignObject(edge, container)
      const WrappedReactComponent = getEdgeReactComponent(
        reactComponent,
        commandService,
        modelService,
      )(edge)
      ReactDOM.render(WrappedReactComponent, content)
    }
  }

  /** 实现在连线上渲染React节点 */
  private edgeAppendForeignObject(x6Edge: X6Edge, container: Element): HTMLDivElement {
    const fo = Dom.createSvgElement('foreignObject')
    const body = Dom.createElementNS<HTMLBodyElement>('body', Dom.ns.xhtml)
    const content = Dom.createElementNS<HTMLDivElement>('div', Dom.ns.xhtml)

    const edgeData = x6Edge?.data
    const foWidth = edgeData?.edgeContentWidth || 100
    const foHeight = edgeData?.edgeContentHeight || 30

    fo.setAttribute('width', `${foWidth}`)
    fo.setAttribute('height', `${foHeight}`)
    fo.setAttribute('x', `${(-1.0 * foWidth) / 2}`)
    fo.setAttribute('y', `${(-1.0 * foHeight) / 2}`)

    body.setAttribute('xhtmls', Dom.ns.xhtml)
    body.style.width = '100%'
    body.style.height = '100%'
    body.style.padding = '0'
    body.style.margin = '0'
    body.style.background = 'unset'
    body.style.overflow = 'visible'
    body.className = 'xflow-edge-label-body'

    content.style.width = '100%'
    content.style.height = '100%'

    body.appendChild(content)
    fo.appendChild(body)
    container.appendChild(fo)

    return content
  }

  dispose() {
    this.toDispose.dispose()
  }
}

export const registerGraphModule = (register: Syringe.Register) => {
  /** 注册GraphManager */
  register(GraphManager)

  register<IGraphProvider>(IGraphProvider, {
    lifecycle: Syringe.Lifecycle.singleton,
    useDynamic: context => {
      return {
        getGraphInstance: async () => {
          const graphManager = context.container.get<IGraphManager>(GraphManager)
          const graphOptionProvider =
            context.container.get<IGraphOptionProvider>(IGraphOptionProvider)
          const graphConfig = await graphOptionProvider?.getOptions()
          const x6Graph = await graphManager?.getGraph(graphConfig.graphId)
          return x6Graph
        },
        getGraphOptions: async () => {
          const graphOptionProvider =
            context.container.get<IGraphOptionProvider>(IGraphOptionProvider)
          return graphOptionProvider?.getOptions()
        },
      }
    },
  })

  register<ICommandServiceProvider>(ICommandServiceProvider, {
    lifecycle: Syringe.Lifecycle.singleton,
    useDynamic: context => {
      return {
        getCommandService: async () => {
          const commandService = context.container.get<IGraphCommandService>(IGraphCommandService)
          return commandService
        },
      }
    },
  })

  register<IModelServiceProvider>(IModelServiceProvider, {
    lifecycle: Syringe.Lifecycle.singleton,
    useDynamic: context => {
      return {
        getModelService: async () => {
          const modelService = context.container.get<IModelService>(IModelService)
          return modelService
        },
      }
    },
  })
}
