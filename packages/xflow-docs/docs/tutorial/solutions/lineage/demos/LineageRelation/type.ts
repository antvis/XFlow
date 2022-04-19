/* eslint-disable @typescript-eslint/no-namespace */
/**
 * @file 类型定义
 * @author 星翊
 */

import { NsGraph } from '@antv/xflow'
export namespace LineageGraph {
  export interface NodeItemType {
    /** 节点类型 */
    type: string;
    /** 节点展示名称 */
    text: string;
    /** 原始数据 */
    originalData: any
  }

  export interface LayerNodeType {
    /** 分页页码 */
    index: number;
    /** 层级总数据 */
    count: number;
    /** 层级节点数据 */
    data: NodeItemType[]
  }
  /** 学团列电 Map 结构每项的值 */
  export interface NodeMapItemType {
    data: any[];
    /** 关键词 */
    keyword: string;
    /** 页码 */
    page: number;
    /** 当前层页面基本位置 */
    point: Point;
    /** 节点个数 */
    totalCount: number;
    /** 当前层展开的节点id */
    unfoldNodeId: string;
  }

  /** 血缘节点的 map 结构 */
  export interface NodeMapType {
    [level: number]: NodeMapItemType;
  }


  /** 获取物理表产出信息接口 */
  export interface LoadPhysicalTableOutputDataParams {
    tableGuid: string
    pageSize?: number
    pageIndex?: number;
  }
  /** 加载血缘层级数据的 Service 函数参数 */
  export interface LoadLineageLayerDataType {
    /** 表g uid */
    id: string;
    /** 关键词 */
    keyword?: string;
    /** 数据加载方向 */
    stream?: StreamType;
    /** 分页大小 */
    pageSize?: number
    /** 页码 */
    currentPage?: number;
  }

  /** 血缘层级数据结构 */
  export interface LineageLayerDataType {
    nodes: NsGraph.INodeConfig[];
    edges: NsGraph.INodeConfig[]
  }
}

export enum StreamType {
  /** 上游 */
  UP = 'UP',
  /** 下游 */
  DOWN = 'DOWN',
  /** 双向 */
  TWO_WAY = 'TWO_WAY'
}

/** 血缘类型 */
export enum LineageType {
  /** 字段血缘 */
  COLUMN = 'COLUMN',
  /** 表级血缘 */
  TABLE = 'TABLE',
}

export interface Point {
  x: number;
  y: number;
}

export interface LoadLineageLayerDataType {
  /** id */
  id: string;
  /** 关键词 */
  keyword?: string;
  /** 数据加载方向 */
  stream?: StreamType;
  /** 分页大小 */
  pageSize?: number
  /** 页码 */
  currentPage?: number;
}

export interface NodeItemType {
  downStream: LayerServiceType,
  hasLeaf: boolean,
  id: string,
  upStream: LayerServiceType,
}

export interface LayerServiceType {
  pageIndex: number;
  pageSize: number,
  totalCount: number,
  records: NodeItemType[]
}

export interface GraphServiceType {
  id: string;
  downStream: LayerServiceType,
  upStream: LayerServiceType,
}