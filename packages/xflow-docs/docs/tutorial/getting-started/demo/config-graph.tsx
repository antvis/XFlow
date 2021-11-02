import React from 'react'
import { createGraphConfig, NsGraph, XFlowNodeCommands, NsNodeCmd, IEvent } from '@antv/xflow'
/** 自定义React节点/边 */
import Node1 from './react-node/node1'
import Node2 from './react-node/node2'
import Edge1 from './react-edge/edge1'
import Edge2 from './react-edge/edge2'

export const useGraphConfig = createGraphConfig(config => {
  /** 预设XFlow画布配置项 */
  config.setX6Config({
    /** 画布网格 */
    grid: true,
    /** 画布缩放等级 */
    scaling: {
      min: 0.2,
      max: 3,
    },
    /** 画布滚轮缩放 */
    // mousewheel: {
    //   enabled: true,
    // },
  })

  /** 预设XFlow画布需要渲染的React节点/边 */
  config.setNodeRender('NODE1', props => <Node1 {...props} />)
  config.setNodeRender('NODE2', Node2)
  config.setEdgeRender('EDGE1', props => <Edge1 {...props} />)
  config.setEdgeRender('EDGE2', props => <Edge2 {...props} />)

  /** 预设XFlow事件*/
  config.setEvents([
    {
      eventName: 'node:click',
      callback: (e, cmds, ctx) => {
        /** 通过e?.node?.getData()可以获取节点的数据 */
        const nodeData: NsGraph.INodeConfig = e?.node?.getData()
        /** 通过cmds?.executeCommand()可以在点击节点后触发其他内置命令, 比如触发节点高亮命令 */
        cmds.executeCommand(XFlowNodeCommands.HIGHLIGHT_NODE.id, {
          nodeId: nodeData?.id,
          stroke: '#00ff00',
          strokeWidth: 3,
        } as NsNodeCmd.HighlightNode.IArgs)
      },
    } as IEvent<'node:click'>,
  ])
})
