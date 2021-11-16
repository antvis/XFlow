export const PANEL_HEADER_HEIGHT = 40
export const CONTAINER_CLASS = 'xflow-node-panel-collpase'
/** 组群 ID */
export const GROUP_NODE_RENDER_ID = 'GROUP_NODE_RENDER_ID'
// 节点默认尺寸
export const NODE_WIDTH = 60
export const NODE_HEIGHT = 40
// svg 绘制起始点，解决边不清晰的问题
export const NODE_PADDING = 1

export const DefaultNodeConfig = {
  stroke: '#A2B1C3',
  fill: '#FFFFFF',
  fontFill: '#000',
  fontSize: 12,
  label: '',
}

export const NODEPOOL = [
  {
    name: 'Terminal',
  },
  {
    name: 'Process',
  },
  {
    name: 'Decision',
  },
  {
    name: 'Multi Document',
  },
  {
    name: 'Connector',
    width: NODE_HEIGHT,
    height: NODE_HEIGHT,
  },
  {
    name: 'DataIO',
    ports: ['top', 'bottom'],
  },
  {
    name: 'Database',
  },
  {
    name: 'Hard Disk',
  },
  {
    name: 'Stroed Data',
  },
  {
    name: 'Document',
  },
  {
    name: 'Predefined Process',
  },
  {
    name: 'Extract',
  },
  {
    name: 'Merge',
  },
  {
    name: 'Or',
    width: NODE_HEIGHT,
    height: NODE_HEIGHT,
  },
  {
    name: 'Manual Input',
  },
  {
    name: 'Preparation',
  },
  {
    name: 'Delay',
  },
  {
    name: 'Manual Operation',
  },
  {
    name: 'Display',
  },
  {
    name: 'Off Page Link',
  },
  {
    name: 'Note Left',
    label: '≣',
  },
  {
    name: 'Note Right',
    label: '≣',
  },
  {
    name: 'Internal Storage',
  },
  {
    name: 'Text',
    label: 'text',
  },
]
// 缩放时保存同比例
export const ASPECTRATIONODE = ['Connector', 'Or']
