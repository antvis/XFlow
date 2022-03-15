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
  strokeDash: 'solid',
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
  // 文本边框色
  textBdColor: '#FFFFFF',
  // 文本背景色
  textBgColor: '#FFFFFF',
  // 文本水平位置
  dx: 0,
  // 文本垂直位置
  dy: 2,
} as const

export const STROKE_MAP = {
  solid: [0, 0],
  dash: [5, 5],
}

export const NODEPOOL = [
  {
    name: 'Decision',
    type: 'common',
  },
  {
    name: 'Multi Document',
    type: 'common',
  },
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
    name: 'Predefined Process',
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
    type: 'common',
  },
  {
    name: 'Left Triangle',
    type: 'common',
  },
  {
    name: 'Step',
    type: 'common',
  },
  {
    name: 'Card',
    type: 'advanced',
  },

  {
    name: 'Callout',
    type: 'advanced',
  },

  {
    name: 'Message',
    type: 'advanced',
  },
  {
    name: 'Text',
    label: 'text',
    type: 'common',
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
    name: 'Internal Storage',
    type: 'flowchart',
  },
  {
    name: 'Reference',
    type: 'flowchart',
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
    type: 'advanced',
  },

  {
    name: 'Document',
    type: 'flowchart',
  },
]
// 缩放时保存同比例
export const ASPECTRATIONODE = ['Connector', 'Or']

//内置节点分类
export const BUILDIN_NODE_TYPES = ['common', 'flowchart', 'advanced']
export const TYPE_IMG_MAP = {
  common: 'https://gw.alipayobjects.com/mdn/rms_75bed3/afts/img/A*HVZwQYtQ9cIAAAAAAAAAAAAAARQnAQ',
  flowchart:
    'https://gw.alipayobjects.com/mdn/rms_75bed3/afts/img/A*c-IOS6IAEAQAAAAAAAAAAAAAARQnAQ',
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
