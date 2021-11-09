import type { IAppLoad, NsGraphCmd, NsGroupCmd } from '@antv/xflow'
import { createGraphConfig } from '@antv/xflow'
import { XFlowGraphCommands, XFlowGroupCommands } from '@antv/xflow'
import { DND_NODE_RENDER_ID, GROUP_COLLAPSED_SIZE, GROUP_NODE_RENDER_ID } from './constant'
import { DndNode } from './react-node'
import { GroupNode } from './react-group-node'
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
  // addGroup
  await app.executeCommand<NsGroupCmd.AddGroup.IArgs>(XFlowGroupCommands.ADD_GROUP.id, {
    nodeConfig: {
      id: 'group1',
      label: 'Group1',
      groupChildren: ['node1', 'node2', 'node3', 'node4'],
      isCollapsed: false,
      renderKey: GROUP_NODE_RENDER_ID,
      groupCollapsedSize: GROUP_COLLAPSED_SIZE,
    },
  })
  // 居中
  await app.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {
    factor: 'real',
  })
}

/**  graphConfig：配置Graph  */
export const useGraphConfig = createGraphConfig<any>(graphConfig => {
  /**  graphConfig：配置Node节点组件  */
  graphConfig.setNodeRender(DND_NODE_RENDER_ID, DndNode)
  /**  graphConfig：配置Group节点组件 h  */
  graphConfig.setNodeRender(GROUP_NODE_RENDER_ID, GroupNode)
})
