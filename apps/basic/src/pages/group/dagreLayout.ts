/**
 * @description @antv/layout DagreLayout
 */
import { DagreLayout } from '@antv/layout';
import * as _ from 'lodash';

import type { IGraph } from './type';

export const layoutDagre = (graphData: IGraph, options?: Record<string, any>) => {
  const antvDagreLayout = new DagreLayout({
    type: 'dagre',
    nodesep: 50,
    // 布局方向和文档说明不一样：https://g6.antv.antgroup.com/manual/middle/layout/graph-layout#dagre
    // LR 是从左到有布局，但是配置之后变成从上到下的布局展示
    // TB 是从上到下布局，但是配置之后变成从左到右布局
    rankdir: 'TB',
    begin: options?.begin || [250, 250],
  });
  antvDagreLayout.layout(graphData);

  return {
    edges: graphData.edges,
    nodes: graphData.nodes,
  };
};
