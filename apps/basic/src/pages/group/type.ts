import type { Graph, Node } from '@antv/x6';
import type { PortManager } from '@antv/x6/lib/model/port';
import type { Attr } from '@antv/x6/lib/registry/attr';
import type { ReactShape } from '@antv/x6-react-shape';

// 组合操作类型枚举
export enum GRAPH_EDIT_OPT_TYPE {
  // 合并节点：单个节点合并
  MERGE_NODE = 'MERGE_NODE',
  // 往组合节点增加节点
  ADD_NODE_TO_COMBINE_GROUP = 'ADD_NODE_TO_COMBINE_GROUP',
  // 解除组组合（即删除关系）
  REMOVE_COMBINE_GROUP = 'REMOVE_COMBINE_GROUP',
  // 重命名组合
  RENAME_COMBINE_GROUP = 'RENAME_COMBINE_GROUP',
}

// 节点渲染类型
export enum NodeRenderKey {
  NORMAL_NODE = 'normal_node',
  GROUP_NODE = 'group_node',
}

// 节点类型
export enum NodeType {
  // 单个节点
  SINGLE = 'SINGLE',
  // 组合节点
  GROUP = 'GROUP',
}

// 节点 data 原始数据
export type INodeData = {
  id: string;
  label: string;
  nodeType: NodeType;
};

// 节点数据模型
export type INode = {
  // 节点id
  id: string;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  ports?: Partial<PortManager.Metadata>;
  zIndex?: number;
  shape?: NodeRenderKey;
  component?: (this: Graph, node: ReactShape) => React.Component;
  // 原始数据
  data?: INodeData;
  // ==== 以下是非标准属性，获取非标准属性 node.getProp('parentNodes') ====
  // 父节点
  parentNodes?: INodeData;
  // 子节点组
  childrenNodes?: INodeData[];
  // 组合节点所有后代节点的数量：不包括组合节点，便于在组合节点收起时展示数量
  descendantsNumber?: number;
  // 节点展开/收起
  isFold?: boolean;
};

// 边类型
export enum EdgeType {
  // 线
  LINE = 'LINE',
  // 带箭头的线
  ARROW = 'ARROW',
}

// 边 data 原始数据
export type IEdgeData = {
  // 源节点
  source: string;
  // 目标节点
  target: string;
  // 关系类型
  edgeType: EdgeType;
};

// 边的数据模型
export type IEdge = {
  id: string;
  // 对于组合与子节点的关系，source 是父节点
  source: string;
  // 对于组合与子节点的关系，target 是子节点
  target: string;
  zIndex?: number;
  attrs?: Attr.CellAttrs;
  data: IEdgeData;
  isWrapEdge?: boolean;
};

// 图数据类型
export type IGraph = { nodes: INode[]; edges: IEdge[] };

/**
 * 二次确认弹窗的内容
 * 节点移动：
 *    合并节点：source 当前移动的节点；target 待合并的节点
 *    添加节点：source 当前移动的节点；target 待添加子节点的群组节点
 * 重命名群组：source 当前操作的节点；target null
 * 解散群组：source 当前操作的节点；target null
 */
export type GRAPH_OPT_CONFIRM_CONTENT = {
  source: Node;
  target?: Node;
};
