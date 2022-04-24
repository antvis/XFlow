import { createCmdConfig, DisposableCollection, XFlowGraphCommands } from '@antv/xflow'
import { MockApi } from './service'
import { commandContributions } from './cmd-extensions'

export const useCmdConfig = createCmdConfig(config => {
  // 注册全局Command扩展
  config.setCommandContributions(() => commandContributions)
  // 设置hook
  config.setRegisterHookFn(hooks => {
    const list = [
      hooks.graphMeta.registerHook({
        name: 'get graph meta from backend',
        handler: async args => {
          args.graphMetaService = MockApi.queryGraphMeta
        },
      }),
      hooks.saveGrpahData.registerHook({
        name: 'save graph data',
        handler: async args => {
          if (!args.saveGraphDataService) {
            args.saveGraphDataService = MockApi.saveGraphData
          }
        },
      }),
      hooks.addNode.registerHook({
        name: 'get node config from backend api',
        handler: async args => {
          args.createNodeService = MockApi.addNode
        },
      }),
      hooks.delNode.registerHook({
        name: 'get edge config from backend api',
        handler: async args => {
          args.deleteNodeService = MockApi.delNode
        },
      }),
      hooks.addEdge.registerHook({
        name: 'get edge config from backend api',
        handler: async args => {
          args.createEdgeService = MockApi.addEdge
          args.edgeConfig = {
            ...args.edgeConfig,
            connector: { name: 'rounded' },
            router: {
              name: 'manhattan',
            },
          }
        },
      }),
      hooks.delEdge.registerHook({
        name: 'get edge config from backend api',
        handler: async args => {
          args.deleteEdgeService = MockApi.delEdge
        },
      }),
      // hooks.updateEdge.registerHook({
      //   name: 'updateEdge',
      //   handler: async args => {
      //     args.updateEdgeService = MockApi.updateEdge
      //   },
      // }),
    ]
    const toDispose = new DisposableCollection()
    toDispose.pushAll(list)
    return toDispose
  })
})

/** 查询图的节点和边的数据 */
export const initGraphCmds = app => {
  app.executeCommandPipeline([
    /** 1. 从服务端获取数据 */
    {
      commandId: XFlowGraphCommands.LOAD_DATA.id,
      getCommandOption: async () => {
        return {
          args: {
            loadDataService: MockApi.loadGraphData,
          },
        }
      },
    },
    /** 2. 执行布局算法 */
    {
      commandId: XFlowGraphCommands.GRAPH_LAYOUT.id,
      getCommandOption: async ctx => {
        const { graphData } = ctx.getResult()
        return {
          args: {
            layoutType: 'dagre',
            layoutOptions: {
              type: 'dagre',
              /** 布局方向 */
              rankdir: 'TB',
              /** 节点间距 */
              nodesep: 60,
              /** 层间距 */
              ranksep: 30,
            },
            graphData,
          },
        }
      },
    },
    /** 3. 画布内容渲染 */
    {
      commandId: XFlowGraphCommands.GRAPH_RENDER.id,
      getCommandOption: async ctx => {
        const { graphData } = ctx.getResult()
        return {
          args: {
            graphData,
          },
        }
      },
    },
    /** 4. 缩放画布 */
    {
      commandId: XFlowGraphCommands.GRAPH_ZOOM.id,
      getCommandOption: async () => {
        return {
          args: { factor: 'fit', zoomOptions: { maxScale: 0.9 } },
        }
      },
    },
  ])
}
