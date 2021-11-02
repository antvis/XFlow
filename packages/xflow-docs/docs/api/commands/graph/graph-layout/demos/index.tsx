import React from 'react'
import { XFlow, XFlowCanvas, createGraphConfig, XFlowGraphCommands, IAppLoad } from '@antv/xflow'
import { NsGraph, IGraphPipelineCommand, NsGraphCmd } from '@antv/xflow'
import './index.less'

/** graphConfig hook */
export const useGraphConfig = createGraphConfig(config => {
  config.setX6Config({ grid: true })
  config.setNodeRender('NODE1', props => <div className="react-node">{props.data?.info?.text}</div>)
  config.setNodeTypeParser(node => node?.renderKey)
})

const Demo: React.FC<{}> = () => {
  const onLoad: IAppLoad = async app => {
    app.executeCommandPipeline([
      /** 从服务端获取数据 */
      {
        commandId: XFlowGraphCommands.LOAD_DATA.id,
        getCommandOption: async ctx => {
          return {
            args: {
              loadDataService: async () => {
                const nodes: NsGraph.INodeConfig[] = [
                  {
                    id: 'root1',
                    width: 150,
                    height: 40,
                    renderKey: 'NODE1',
                    info: { text: 'root1' },
                  },
                  {
                    id: 'down1',
                    width: 150,
                    height: 40,
                    renderKey: 'NODE1',
                    info: { text: 'down1' },
                  },
                  {
                    id: 'down2',
                    width: 150,
                    height: 40,
                    renderKey: 'NODE1',
                    info: { text: 'down2' },
                  },
                  {
                    id: 'down3',
                    width: 150,
                    height: 40,
                    renderKey: 'NODE1',
                    info: { text: 'down3' },
                  },
                ]
                const edges: NsGraph.IEdgeConfig[] = [
                  { id: 'root1-down1', source: 'root1', target: 'down1', label: 'text1' },
                  { id: 'root1-down2', source: 'root1', target: 'down2', label: 'text2' },
                  { id: 'root1-down3', source: 'root1', target: 'down3', label: 'text3' },
                ]
                return { nodes, edges }
              },
            },
          }
        },
      } as IGraphPipelineCommand<NsGraphCmd.GraphLoadData.IArgs>,
      /** 执行布局算法 */
      {
        commandId: XFlowGraphCommands.GRAPH_LAYOUT.id,
        getCommandOption: async ctx => {
          const { graphData } = ctx.getResult()
          return {
            args: {
              layoutType: 'dagre',
              layoutOptions: {
                type: 'dagre',
                rankdir: 'LR',
                nodesep: 10,
                ranksep: 80,
              },
              graphData,
            },
          }
        },
      } as IGraphPipelineCommand<NsGraphCmd.GraphLayout.IArgs>,
      /** 画布内容渲染 */
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
      } as IGraphPipelineCommand<NsGraphCmd.GraphRender.IArgs>,
    ])
    return app
  }
  return (
    <XFlow
      onLoad={onLoad}
      className="xflow-graph-layout-demo"
      meta={{ flowId: 'xflow-graph-layout-demo-id' }}
    >
      <XFlowCanvas config={useGraphConfig()} />
    </XFlow>
  )
}
export default Demo
