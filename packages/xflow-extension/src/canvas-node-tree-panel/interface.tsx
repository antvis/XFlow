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

export interface IPanelProps {
  headerPosition: IPosition
  bodyPosition: IPosition
  footerPosition: IPosition
}

export interface INodeFactoryArgs {
  data: NsGraph.INodeConfig
  width: number
  height: number
  // X6_NODE_PORTAL_NODE_VIEW
  view: string
  component: React.ReactNode
}
export interface IProps extends Partial<IPanelProps> {
  position: IPosition
  style?: React.CSSProperties
  prefixClz?: string
  className?: string
  onNodeDrop: IOnNodeDrop
  dndOptions?: Partial<Addon.Dnd.Options>
  header?: React.ReactNode
  footer?: React.ReactNode
  x6NodeFactory?: (args: INodeFactoryArgs) => X6Node
  searchService?: ISearchService
  treeDataService: ITreeDataService
}

export interface IOnNodeDrop {
  (
    nodeMeta: NsGraph.INodeConfig,
    commandService: IGraphCommandService,
    modelService: IModelService,
  ): Promise<void>
}

/** tree node model */
export interface ITreeNode {
  /**
   * 树节点的ID，'root' 是根节点的id
   */
  readonly id: string | 'root'
  /**
   * 节点的文件夹id
   */
  readonly parentId: string
  /**
   * 节点名
   */
  readonly label: string
  /**
   * 画布节点宽度
   */
  readonly width?: number
  /**
   * 画布节点高度
   */
  readonly height?: number
  /**
   * 画布节点的renderKey，可选
   */
  readonly renderKey?: string
  /**
   * Dnd节点的popover的提示内容，可选
   */
  readonly popoverContent?: React.ReactNode
  /**
   * 自定义节点
   */
  renderComponent?: React.ComponentType<{ data: ITreeNode; isNodeTreePanel: boolean }>
  /**
   * 【内部渲染用】文件夹的标识.
   */
  isDirectory?: boolean
  /**
   * 【内部渲染用】节点的标识.
   */
  isLeaf?: boolean
  /**
   * 【内部渲染用】子节点
   */
  children?: ITreeNode[]
  /**
   * fieldName，支持NsGraph.INodeConfig
   */
  [fieldName: string]: any
}

/** service: 获取tree数据 */
export interface ITreeDataService {
  (graphMeta: MODELS.GRAPH_META.IState, modelService: IModelService): Promise<ITreeNode[]>
}

/** service: 返回过滤后的数据 */
export interface ISearchService {
  (treeNodeList: ITreeNode[], keyword: string): Promise<ITreeNode[]>
}

export interface IOnFolderExpand {
  (keys: string[]): void
}
export interface IOnKeywordChange {
  (kwyword: string): void
}

export namespace NsTreePanelData {
  export const id = 'TREE_PANEL_DATA'
  export interface IState {
    treeNodeList: ITreeNode[]
    treeData: ITreeNode[]
    expandedKeys: string[]
    defaultExpandAll: boolean
    keyword: string
    searchList: ITreeNode[]
  }
}
