/* eslint-disable @typescript-eslint/no-unused-vars */
import { uuidv4 } from '@antv/xflow'
import { XFlowNodeCommands } from '@antv/xflow'
import { DND_RENDER_ID } from './constant'
import type { NsNodeCmd } from '@antv/xflow'
import type { NsNodeCollapsePanel } from '@antv/xflow'
import { Card } from 'antd'
import React from 'react'

export const onNodeDrop: NsNodeCollapsePanel.IOnNodeDrop = async (node, commands, modelService) => {
  const args: NsNodeCmd.AddNode.IArgs = {
    nodeConfig: { ...node, id: uuidv4() },
  }
  commands.executeCommand(XFlowNodeCommands.ADD_NODE.id, args)
}

const NodeDescription = (props: { name: string }) => {
  return (
    <Card size="small" title="算法组件介绍" style={{ width: '200px' }} bordered={false}>
      欢迎使用：{props.name}
      这里可以根据服务端返回的数据显示不同的内容
    </Card>
  )
}

export const nodeDataService: NsNodeCollapsePanel.INodeDataService = async (meta, modelService) => {
  console.log(meta, modelService)
  return [
    {
      id: '数据读写',
      header: '数据读写',
      children: [
        {
          id: '2',
          label: '算法组件1',
          parentId: '1',
          renderKey: DND_RENDER_ID,
          popoverContent: <NodeDescription name="算法组件1" />,
        },
        {
          id: '3',
          label: '算法组件2',
          parentId: '1',
          renderKey: DND_RENDER_ID,
          popoverContent: <NodeDescription name="算法组件2" />,
        },
        {
          id: '4',
          label: '算法组件3',
          parentId: '1',
          renderKey: DND_RENDER_ID,
          popoverContent: <NodeDescription name="算法组件3" />,
        },
      ],
    },
    {
      id: '数据加工',
      header: '数据加工',
      children: [
        {
          id: '6',
          label: '算法组件4',
          parentId: '5',
          renderKey: DND_RENDER_ID,
        },
        {
          id: '7',
          label: '算法组件5',
          parentId: '5',
          renderKey: DND_RENDER_ID,
        },
        {
          id: '8',
          label: '算法组件6',
          parentId: '5',
          renderKey: DND_RENDER_ID,
        },
      ],
    },
    {
      id: '模型训练',
      header: '模型训练',
      children: [
        {
          id: '6',
          label: '算法组件4',
          parentId: '5',
          renderKey: DND_RENDER_ID,
        },
        {
          id: '7',
          label: '算法组件5',
          parentId: '5',
          renderKey: DND_RENDER_ID,
        },
        {
          id: '8',
          label: '算法组件6',
          parentId: '5',
          renderKey: DND_RENDER_ID,
        },
      ],
    },
  ]
}

export const searchService: NsNodeCollapsePanel.ISearchService = async (
  nodes: NsNodeCollapsePanel.IPanelNode[] = [],
  keyword: string,
) => {
  const list = nodes.filter(node => node.label.includes(keyword))
  console.log(list, keyword, nodes)
  return list
}
