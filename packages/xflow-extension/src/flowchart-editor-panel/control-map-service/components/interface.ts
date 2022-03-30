export interface IPlugn {
  updateNode: (config: object) => void
  updateEdge: (config: object, type: string, key?: 'arrow' | '') => void
}

export interface IControlProps {
  plugin: IPlugn
  config: object
}

export interface IGrid {
  visible?: boolean //是否显示网格
  type?: 'dot' | 'mesh' //网格线条样式
  color?: string //网格颜色
  size?: number //网格大小
  thickness?: number //网格线条宽度
  args?: {
    color?: string
  }
}

export interface IBackground {
  color: string //背景颜色
  image?: string //背景图片
  position?: string //背景图片位置
  size?: string //背景图片大小
  repeat?: string //背景图片重复方式
  opacity?: number //背景透明度
}

export interface ICanvasConfig {
  grid: IGrid
  background: IBackground
}
