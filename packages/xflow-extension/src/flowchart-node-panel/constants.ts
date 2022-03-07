import type { ICheckboxOption } from "."
export const PANEL_HEADER_HEIGHT = 40
export const PANEL_FOOTER_HEIGHT = 40
export const CONTAINER_CLASS = 'xflow-node-panel-collpase'
/** 组群 ID */
export const GROUP_NODE_RENDER_ID = 'GROUP_NODE_RENDER_ID'
// 节点默认尺寸
export const NODE_WIDTH = 60
export const NODE_HEIGHT = 40
// svg 绘制起始点，解决边不清晰的问题
export const NODE_PADDING = 1

//圆角半径
export const ROUNDEDRADIUS = 10;

export const DefaultNodeConfig = {
  stroke: '#A2B1C3',
  label: '',
  fill: '#FFFFFF',
  fontFill: '#000',
  fontSize: 12,
  strokeWidth: 1,
  fillOpacity: 1,
  angel: 0,
  rounded: false,
  isGradient: false,
  gradientDirection: 'top-bottom',
  endColor: '#FFFFFF',
  isBold: false,
  isItalic: false,
  isUnderline: false,
  alignmentBaseline: 'middle',
  textAnchor: 'middle',
  textOpacity: 1,
  letterSpace: 0,
  fontFamily: 'microsoftYahei',
  
} as const;

export const NODEPOOL = [
  {
    name: 'Terminal',
    type: 'common',
  },
  {
    name: 'Process',
    type: 'common',
  },
  {
    name: 'Decision',
    type: 'common',
  },
  {
    name: 'Connector',
    width: NODE_HEIGHT,
    height: NODE_HEIGHT,
    type: 'common',
  },
  {
    name: 'Multi Document',
    type: 'flowchart',
  },
  {
    name: 'DataIO',
    ports: ['top', 'bottom'],
    type: 'common',
  },
  {
    name: 'Database',
    type: 'flowchart',
  },
  {
    name: 'Hard Disk',
    type: 'common',
  },
  {
    name: 'Stroed Data',
    type: 'flowchart',
  },
  {
    name: 'Document',
    type: 'flowchart',
  },
  {
    name: 'Predefined Process',
    type: 'common',
  },
  {
    name: 'Extract',
    type: 'flowchart',
  },
  {
    name: 'Merge',
    type: 'flowchart',
  },
  {
    name: 'Or',
    width: NODE_HEIGHT,
    height: NODE_HEIGHT,
    type: 'flowchart',
  },
  {
    name: 'Manual Input',
    type: 'flowchart',
  },
  {
    name: 'Preparation',
    type: 'flowchart',
  },
  {
    name: 'Delay',
    type: 'flowchart',
  },
  {
    name: 'Manual Operation',
    type: 'flowchart',
  },
  {
    name: 'Display',
    type: 'flowchart',
  },
  {
    name: 'Off Page Link',
    type: 'flowchart',
  },
  {
    name: 'Note Left',
    label: '≣',
    type: 'flowchart',
  },
  {
    name: 'Note Right',
    label: '≣',
    type: 'flowchart',
  },
  {
    name: 'Internal Storage',
    type: 'flowchart',
  },
  {
    name: 'Text',
    label: 'text',
    type: 'common',
  },
  {
    name: 'Isosceles Trapezoid',
    type: 'common',
  },
  {
    name: 'LeftTrapezoid',
    type: 'common',
  },
  {
    name: 'RightTrapezoid',
    type: 'common',
  },
  {
    name: 'Ellipse',
    type: 'common',
  },
];
// 缩放时保存同比例
export const ASPECTRATIONODE = ['Connector', 'Or']

//内置节点分类
export const BUILDIN_NODE_TYPES = ['common', 'flowchart'];
export const TYPE_IMG_MAP = {
  common: 'https://gw.alipayobjects.com/mdn/rms_75bed3/afts/img/A*HVZwQYtQ9cIAAAAAAAAAAAAAARQnAQ',
  flowchart: 'https://gw.alipayobjects.com/mdn/rms_75bed3/afts/img/A*c-IOS6IAEAQAAAAAAAAAAAAAARQnAQ',
};

export const CHECKBOX_OPTIONS: ICheckboxOption[] = [
  {
    label: '通用节点',
    value: 'common',
    disabled: false,
  },
  {
    label: '流程图节点',
    value: 'flowchart',
    disabled: false,
  },
];
