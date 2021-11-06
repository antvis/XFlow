import { NsNodeTreePanel, XFlowConstants } from '@antv/xflow'
import * as commandUtils from './comannd-utils'

export const DND_RENDER_ID = 'DND_RENDER_ID'

export const onNodeDrop: NsNodeTreePanel.IOnNodeDrop = async (
  nodeConfig,
  commandService,
  modelService,
) => {
  commandUtils.addNode(commandService, nodeConfig)
}

export const treeDataService: NsNodeTreePanel.ITreeDataService = async (meta, modelService) => {
  return [
    {
      id: '1',
      label: '数据读写',
      parentId: '',
      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,
    },
    {
      id: '2',
      label: '算法组件1',
      parentId: '1',
      width: 190,
      height: 32,
      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,
      popoverContent: <div> test </div>,
    },
    {
      id: '3',
      label: '算法组件2',
      parentId: '1',
      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,
    },
    {
      id: '4',
      label: '算法组件3',
      parentId: '1',
      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,
    },
    {
      id: '5',
      label: '数据加工',
      parentId: '',
      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,
    },
    {
      id: '6',
      label: '算法组件4',
      parentId: '5',
      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,
    },
    {
      id: '7',
      label: '算法组件5',
      parentId: '5',
      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,
    },
    {
      id: '8',
      label: '算法组件6',
      parentId: '5',
      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,
    },
    {
      id: '9',
      label: '模型训练',
      parentId: '',
      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,
    },
    {
      id: '10',
      label: '算法组件7',
      parentId: '9',
      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,
    },
    {
      id: '11',
      label: '算法组件8',
      parentId: '9',
      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,
    },
    {
      id: '12',
      label: '算法组件9',
      parentId: '9',
      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,
    },
  ]
}
