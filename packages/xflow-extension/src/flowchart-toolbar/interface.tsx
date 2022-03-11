import type { IToolbarProps } from '../canvas-toolbar'
export interface IFlowchartToolbarProps extends IToolbarProps {
  getCustomRenderComponent: any
  //registerToolbarItems?: IToolbarItem[]
}

/* interface IToolbarItem {
  id: string
  icon: React.FC
  iconName: string
  tooltip: string
} */

/* export interface IToolbarProps {
  // toolbarConfig 用于设置model的toolbarItems
  config: ToolbarConfig
  // 用于确定toolbar 的布局: "horizontal" | "vertical" | "horizontal-center"
  layout: IToolbarLayout
  // 用于定位元素
  position: IPosition
  // 样式
  style?: React.CSSProperties
  // classname
  className?: string
} */
