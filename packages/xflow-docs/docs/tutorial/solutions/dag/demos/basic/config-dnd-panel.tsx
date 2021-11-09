import { uuidv4 } from '@antv/xflow'
import { XFlowNodeCommands } from '@antv/xflow'
import { DND_RENDER_ID } from './constant'
import type { NsNodeCmd } from '@antv/xflow'
import type { NsNodeTreePanel } from '@antv/xflow'

export const onNodeDrop: NsNodeTreePanel.IOnNodeDrop = async (node, commands, modelService) => {
  const args: NsNodeCmd.AddNode.IArgs = {
    nodeConfig: { ...node, id: uuidv4() },
  }
  commands.executeCommand(XFlowNodeCommands.ADD_NODE.id, args)
}

export const treeDataService: NsNodeTreePanel.ITreeDataService = async (meta, modelService) => {
  return [
    {
      id: '1',
      label: '数据读写',
      parentId: '',
      renderKey: DND_RENDER_ID,
    },
    {
      id: '2',
      label: '算法组件1',
      parentId: '1',
      renderKey: DND_RENDER_ID,
      popoverContent: <div> test </div>,
    },
    {
      id: '3',
      label: '算法组件2',
      parentId: '1',
      renderKey: DND_RENDER_ID,
    },
    {
      id: '4',
      label: '算法组件3',
      parentId: '1',
      renderKey: DND_RENDER_ID,
    },
    {
      id: '5',
      label: '数据加工',
      parentId: '',
      renderKey: DND_RENDER_ID,
    },
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
    {
      id: '9',
      label: '模型训练',
      parentId: '',
      renderKey: DND_RENDER_ID,
    },
    {
      id: '10',
      label: '算法组件7',
      parentId: '9',
      renderKey: DND_RENDER_ID,
    },
    {
      id: '11',
      label: '算法组件8',
      parentId: '9',
      renderKey: DND_RENDER_ID,
    },
    {
      id: '12',
      label: '算法组件9',
      parentId: '9',
      renderKey: DND_RENDER_ID,
    },
  ]
}

export const searchService: NsNodeTreePanel.ISearchService = async (
  treeNodeList: NsNodeTreePanel.ITreeNode[] = [],
  keyword: string,
) => {
  const list = treeNodeList.filter(i => i.isDirectory || i.label.includes(keyword))
  console.log(list, keyword, treeNodeList)
  return list
}
