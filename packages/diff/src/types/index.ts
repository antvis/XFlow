import type { EdgeOptions, GraphOptions, NodeOptions } from '@antv/xflow';

export interface DiffGraphOptions {
  originalData: GraphData;
  currentData: GraphData;
  addColor?: '';
  addExtAttr?: object;
  delColor?: '';
  delExtAttr?: object;
  changeColor?: '';
  changeExtAttr?: object;
  graphOptions?: GraphOptions;
}

export interface GraphData {
  nodes: NodeOptions[];
  edges: EdgeOptions[];
}

export interface NodeOptionsWithDiffInfo extends NodeOptions {
  diffType?: 'DEL' | 'ADD' | 'CHG' | 'NONE';
}
export interface EdgeOptionsWithDiffInfo extends EdgeOptions {
  diffType?: 'DEL' | 'ADD' | 'CHG' | 'NONE';
}

export interface GraphDataWithDiffInfo {
  nodes: NodeOptionsWithDiffInfo[];
  edges: EdgeOptionsWithDiffInfo[];
}
