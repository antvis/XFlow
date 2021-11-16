export const PREFIX = 'flowchart-editor'
export const FormItemHeight = 24
/** 边默认配置 */
export const DefaultEdgeConfig = {
  attrs: {
    line: {
      stroke: '#A2B1C3',
      strokeWidth: 1,
    },
    text: {
      fill: '#000',
      fontSize: 12,
      textAnchor: 'middle',
      textVerticalAnchor: 'middle',
    },
  },
}

export const ArrowConfig = {
  width: 12,
  height: 8,
  name: 'block',
}

export const DisableArrowConfig = {
  width: 0,
  height: 0,
  name: '',
}

export const ArrowMaps = {
  target: {
    sourceMarker: DisableArrowConfig,
    targetMarker: ArrowConfig,
  },
  source: {
    sourceMarker: ArrowConfig,
    targetMarker: DisableArrowConfig,
  },
  all: {
    sourceMarker: ArrowConfig,
    targetMarker: ArrowConfig,
  },
  none: {
    sourceMarker: DisableArrowConfig,
    targetMarker: DisableArrowConfig,
  },
}

export const ArrowStrokeMaps = {
  solid: [0, 0],
  dash: [5, 5],
}
