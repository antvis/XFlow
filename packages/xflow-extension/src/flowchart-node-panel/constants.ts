import type { ICheckboxOption } from './interface'
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
export const ROUNDEDRADIUS = 10

export const DefaultNodeConfig = {
  // 边框颜色
  stroke: '#A2B1C3',
  // 文本
  label: '',
  // 填充颜色
  fill: '#FFFFFF',
  // 字体颜色
  fontFill: '#000000',
  // 字体大小
  fontSize: 14,
  fontFamily: 'microsoftYahei',
  // 字体
  strokeDasharray: '0 0',
  // 线框
  strokeWidth: 1,
  // 字体透明度
  fillOpacity: 1,
  // 角度
  angel: 0,
  // 圆角
  rounded: false,
  // 是否设置渐变
  isGradient: false,
  // 渐变方向
  gradientDirection: 'top-bottom',
  // 渐变结束颜色(渐变起始颜色为填充色)
  endColor: '#FFFFFF',
  // 字体是否加粗
  isBold: false,
  // 字体是否斜体
  isItalic: false,
  // 字体是否有下划线
  isUnderline: false,
  // 文本垂直对齐方式
  verticalAlign: 'middle',
  // 文本水平对齐方式
  horizontalAlign: 'middle',
  // 字体透明度
  textOpacity: 1,
  // 字间距
  letterSpace: 0,
  // 是否显示文本边框
  showTextBdColor: false,
  // 文本边框色
  textBdColor: '#FFFFFF',
  // 是否显示文本背景
  showTextBgColor: false,
  // 文本背景色
  textBgColor: '#FFFFFF',
  // 文本水平位置
  dx: 0,
  // 文本垂直位置
  dy: 0,
} as const

export const STROKE_MAP = {
  solid: [0, 0],
  dash: [5, 5],
}

export const NODEPOOL = [
  {
    name: 'DataIO',
    ports: ['top', 'bottom'],
    type: 'common',
  },
  {
    name: 'Hard Disk',
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
  {
    name: 'Right Triangle',
    ports: ['left', 'right'],
    type: 'common',
  },
  {
    name: 'Left Triangle',
    ports: ['left', 'right'],
    type: 'common',
  },
  {
    name: 'Text',
    label: 'text',
    type: 'common',
  },
  {
    name: 'Step',
    ports: ['left', 'right'],
    type: 'advanced',
  },
  {
    name: 'Card',
    type: 'flowchart',
  },

  {
    name: 'Callout',
    type: 'advanced',
  },
  {
    name: 'Decision',
    type: 'flowchart',
  },
  {
    name: 'Multi Document',
    type: 'flowchart',
  },
 
  {
    name: 'Terminal',
    type: 'flowchart',
  },
  {
    name: 'Process',
    type: 'flowchart',
  },
  {
    name: 'Connector',
    width: NODE_HEIGHT,
    height: NODE_HEIGHT,
    type: 'flowchart',
  },

  {
    name: 'Database',
    type: 'flowchart',
  },

  {
    name: 'Stroed Data',
    type: 'flowchart',
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
    name: 'Delay',
    type: 'flowchart',
  },
  {
    name: 'Manual Operation',
    type: 'flowchart',
  },
  {
    name: 'Predefined Process',
    type: 'flowchart',
  },
  {
    name: 'Off Page Link',
    type: 'flowchart',
  },
  {
    name: 'Internal Storage',
    type: 'flowchart',
  },
  {
    name: 'Loop',
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
    name: 'Collate',
    type: 'flowchart',
  },

  {
    name: 'Document',
    type: 'flowchart',
  },
  {
    name: 'Message',
    type: 'advanced',
  },
  {
    name: 'Reference',
    type: 'advanced',
  },
  {
    name: 'Diagonal Snip Rectangle',
    type: 'advanced',
  },
  {
    name: 'Hexagon',
    type: 'advanced',
  },
  
  {
    name: 'Manual Input',
    type: 'advanced',
  },
  {
    name: 'Preparation',
    type: 'advanced',
  },
  {
    name: 'Display',
    type: 'advanced',
  },
]
// 缩放时保存同比例
export const ASPECTRATIONODE = ['Connector', 'Or']

//内置节点分类
export const BUILDIN_NODE_TYPES = ['common', 'flowchart', 'advanced']
export const TYPE_IMG_MAP = {
  common: 'https://gw.alipayobjects.com/mdn/rms_75bed3/afts/img/A*7YNJTpeO2gsAAAAAAAAAAAAAARQnAQ',
  flowchart:
    'https://gw.alipayobjects.com/mdn/rms_75bed3/afts/img/A*ie2CTIvAZoIAAAAAAAAAAAAAARQnAQ',
  advanced: 'https://gw.alipayobjects.com/mdn/rms_75bed3/afts/img/A*XdeSQL0806oAAAAAAAAAAAAAARQnAQ'
}

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
  {
    label: '高级节点',
    value: 'advanced',
    disabled: false,
  },
]
