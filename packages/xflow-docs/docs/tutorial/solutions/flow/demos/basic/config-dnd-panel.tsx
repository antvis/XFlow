import { uuidv4 } from '@antv/xflow'
import { XFlowNodeCommands } from '@antv/xflow'
import { DND_RENDER_ID } from './constant'
import type { NsNodeCmd } from '@antv/xflow'
import type { NsNodeTreePanel } from '@antv/xflow'

export const onNodeDrop: NsNodeTreePanel.IOnNodeDrop = async (node, commands, contextService) => {
  const args: NsNodeCmd.AddNode.IArgs = {
    nodeConfig: { ...node, id: uuidv4() },
  }
  commands.executeCommand(XFlowNodeCommands.ADD_NODE.id, args)
}

export const treeDataService: NsNodeTreePanel.ITreeDataService = async (meta, contextService) => {
  return [
    {
      id: '1',
      label: '流程1',
      des: '流程1的描述',
      parentId: '',
      renderKey: DND_RENDER_ID,
      popoverContent: <div> 流程1的详细说明 </div>,
    },
    {
      id: '2',
      label: '流程2',
      des: '流程2的描述',
      parentId: '',
      renderKey: DND_RENDER_ID,
      popoverContent: <div> 流程2的详细说明 </div>,
    },
    {
      id: '3',
      label: '流程3',
      des: '流程3的描述',
      parentId: '',
      renderKey: DND_RENDER_ID,
      popoverContent: <div> 流程3的详细说明 </div>,
    },
    {
      id: '4',
      label: '流程4',
      des: '流程4的描述',
      parentId: '',
      renderKey: DND_RENDER_ID,
      popoverContent: <div> 流程4的详细说明 </div>,
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
