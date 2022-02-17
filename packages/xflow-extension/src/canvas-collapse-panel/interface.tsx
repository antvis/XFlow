import type { Addon } from '@antv/x6'
import type {
  IPosition,
  NsGraph,
  IModelService,
  MODELS,
  IGraphCommandService,
} from '@antv/xflow-core'
import type React from 'react'
import type { Node as X6Node } from '@antv/x6'

/** panel 布局 */
export interface ILayoutProps {
  /** header */
  headerPosition: IPosition
  /** body */
  bodyPosition: IPosition
  /** footer */
  footerPosition: IPosition
}

/** 节点工厂信息 */
export interface INodeFactoryArgs {
  /** 节点元数据 */
  data: NsGraph.INodeConfig
  /** 节点宽 */
  width: number
  /** 节点高 */
  height: number
  /** canvas id */
  view: string
  /** componnet 数据 */
  component: React.ReactNode
}

/** 节点工厂信息 */
export interface IProps extends Partial<ILayoutProps> {
  /** 位置信息 */
  position: IPosition
  /** 样式信息 */
  style?: React.CSSProperties
  /** prefix */
  prefixClz?: string
  /** className */
  className?: string
  /** drop节点的回调，通过回调创建画布的节点 */
  onNodeDrop: IOnNodeDrop
  /** dnd的配置项 */
  dndOptions?: Partial<Addon.Dnd.Options>
  /** dnd的配置项 */
  header?: React.ReactNode
  /** dnd的配置项 */
  footer?: React.ReactNode
  // todo: /** 手风琴模式 */
  // accordion?: boolean
  /** 搜索服务，返回搜索数据 */
  searchService?: ISearchService
  /** collapse的数据 */
  nodeDataService: INodeDataService
  /** dnd的配置项 */
  x6NodeFactory?: (args: INodeFactoryArgs) => X6Node
  /** 是否可以折叠 */
  collapsible?: boolean
  /** 折叠的 onChange 方法 */
  onCollapseChange?: (isCollapsed: boolean) => void
  /** collapseBtn 的样式 */
  collapseButtonStyle?: React.CSSProperties
}

/** drop节点的回调，通过回调创建画布的节点 */
export interface IOnNodeDrop {
  (
    /** 节点元数据 */
    nodeMeta: IPanelNode,
    /** commandService */
    commandService: IGraphCommandService,
    /** modelService */
    modelService: IModelService,
  ): Promise<void>
}

/** 折叠面板 */
export interface ICollapsePanel {
  /** panel Id */
  id: string
  /** 是否可折叠或指定可折叠触发区域 */
  collapsible?: boolean
  /** 是否折叠 */
  isCollapsed?: boolean
  /** 自定义渲染每个面板右上角的内容 */
  extra?: React.ComponentType<ICollapsePanel>
  /** header的渲染 支持组件和string */
  header: React.ComponentType<ICollapsePanel> | string
  /** 自定义 icon */
  icon?: React.ComponentType<{ isCollapsed: boolean }>
  /** 折叠面板的子元素 */
  children?: IPanelNode[]
  /** 自定义panel的children */
  render?: React.ComponentType<ICollapsePanel>
  /** 自定义数据 */
  data?: any
}

/** 面板Dnd节点 */
export interface IPanelNode extends NsGraph.INodeConfig {
  /**  Dnd节点的popover的提示内容，可选  */
  popoverContent?: React.ReactNode
  /**  自定义节点  */
  renderComponent?: React.ComponentType<{ data: IPanelNode; isNodePanel: boolean }>
  /** 自定义数据 */
  data?: any
  /** disable */
  isDisabled?: boolean
}

/** service: 获取panel数据 */
export interface INodeDataService {
  (graphMeta: MODELS.GRAPH_META.IState, modelService: IModelService): Promise<ICollapsePanel[]>
}

/** service: 返回过滤后的数据 */
export interface ISearchService {
  (panels: IPanelNode[], keyword: string): Promise<IPanelNode[]>
}

/** service: onFolderExpand */
export interface IOnActiveKeyChange {
  (keyword: string): void
}

/** service: onKeywordChange */
export interface IOnKeywordChange {
  (kwyword: string, panels: IPanelNode[]): void
}

export namespace NsCollapsePanelModel {
  export const id = 'COLLAPSE_PANEL_DATA'
  export interface IState {
    /** service: onKeywordChange */
    keyword: string
    // /** 手风琴模式 */
    // accordion: boolean
    /** 展开的key id */
    // activeKey: string[]
    /** 展开的key id */
    collapseData: ICollapsePanel[]
    /** 搜索结果 */
    searchResult: IPanelNode[]
  }
  export const useModel = async (model: IModelService) => {
    return model.awaitModel<IState>(id)
  }
}
