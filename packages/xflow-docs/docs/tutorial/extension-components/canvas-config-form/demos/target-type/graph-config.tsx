import type { IAppLoad, NsGraphCmd } from '@antv/xflow'
import { XFlowGraphCommands } from '@antv/xflow'
import { getGraphData } from './mock'

export const onLoad: IAppLoad = async app => {
  // 计算布局
  const res = await app.executeCommand<
    NsGraphCmd.GraphLayout.IArgs,
    NsGraphCmd.GraphLayout.IResult
  >(XFlowGraphCommands.GRAPH_LAYOUT.id, {
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
    graphData: getGraphData(),
  })
  const { graphData } = res.contextProvider().getResult()
  // render
  await app.executeCommand<NsGraphCmd.GraphRender.IArgs>(XFlowGraphCommands.GRAPH_RENDER.id, {
    graphData: graphData,
  })
  // 居中
  await app.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {
    factor: 'real',
  })
}
