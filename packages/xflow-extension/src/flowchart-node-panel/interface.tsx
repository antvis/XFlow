import type { NsGraph } from '@antv/xflow-core'
import type React from 'react'
import { IProps as TreeNodeProps, INodeFactoryArgs } from '../canvas-node-tree-panel/interface'

export { INodeFactoryArgs }

/** 自定义节点 */
export interface ICustomNode {
  name: string
  component: NsGraph.INodeRender<any>
  popover?: React.Component<any>
  label?: string
  width?: number
  height?: number
  ports?: NsGraph.INodeConfig['ports']
}

/** tree node model */
export interface ITreeNode {
  /**
   * The type of the menu item.
   */
  readonly id: string | 'root'
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
  /** 内部使用 */
  isCustom?: boolean
}

export interface IProps extends Omit<TreeNodeProps, 'onNodeDrop'> {
  show?: boolean
  showHeader?: boolean
  registerNode?: {
    title?: string
    nodes: ICustomNode[]
  }
  defaultActiveKey?: string[]
  onNodeDrop?: (nodeConfig: NsGraph.INodeConfig) => void
}

export interface IOnKeywordChange {
  (kwyword: string): void
}

export type FlowchartNodePanelProps = IProps

export interface IOnFolderExpand {
  (keys: string[]): void
}

export namespace NsFlowchartPanelData {
  export const id = 'FLOWCHART_PANEL_DATA'
}
