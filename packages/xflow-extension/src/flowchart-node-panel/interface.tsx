import type { NsGraph } from '@antv/xflow-core'
import type React from 'react'
import type { IProps as TreeNodeProps, ITreeDataService } from '../canvas-node-tree-panel/interface'
import { INodeFactoryArgs } from '../canvas-node-tree-panel/interface'

export { INodeFactoryArgs }

/** 自定义节点 */
export interface ICustomNode {
  name: string
  component: NsGraph.INodeRender<any>
  popover?: React.ComponentType<any>
  label?: string
  width?: number
  height?: number
  ports?: NsGraph.INodeConfig['ports']
}

/** tree node model */
export interface IFlowchartNode {
  /**
   * The type of the menu item.
   */
  readonly id: string | 'root'
  /**
   * 节点唯一标识
   */
  readonly name: string
  /**
   * The display label for the menu item.
   */
  readonly label: string
  /**
   * Dnd节点的宽度
   */
  readonly width?: number
  /**
   * Dnd节点的高度
   */
  readonly height?: number
  /**
   * Dnd节点的renderKey
   */
  readonly renderKey?: string
  /**
   * Dnd节点的popover的提示内容
   */
  readonly popoverContent?: React.ReactNode

}

type ITreeItem = {
  title?: string;
  nodes?: IFlowchartNode[];
};

/* export interface ITreeData {
  [string: string]: ITreeItem
} */
export type ITreeData = Record<string, ITreeItem>

export type ISearchNodes = Record<string, IFlowchartNode[]>
export interface IRegisterNodeItem {
  type: string;
  title: string;
  nodes: ICustomNode[];
}
export type IRegisterNode = IRegisterNodeItem[];

export interface IProps extends Omit<TreeNodeProps, 'treeDataService' | 'onNodeDrop' | 'searchService'> {
  show?: boolean
  showHeader?: boolean
  showFooter?: boolean
  /** 自定义节点 */
  registerNode?: IRegisterNode
  treeDataService?: ITreeDataService
  /** 默认展开的折叠面板 */
  defaultActiveKey?: string[] // ['official', 'custom']
  searchService?: (treeData: ITreeData) => ISearchNodes
}

export interface IOnKeywordChange {
  (kwyword: string): void
}

export type IFlowchartNodePanelProps = IProps

export namespace NsFlowchartPanelData {
  export const id = 'FLOWCHART_PANEL_DATA'
}

export interface ICheckboxOption {
  label: string;
  value: string;
  disabled?: boolean;
}