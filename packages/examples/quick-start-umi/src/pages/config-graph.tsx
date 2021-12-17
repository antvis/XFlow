import React from 'react';
import { createGraphConfig } from '@antv/xflow';
/** 自定义React节点/边 */
import Node1 from './react-node/node1';
import Node2 from './react-node/node2';
import Edge1 from './react-edge/edge1';
import Edge2 from './react-edge/edge2';

export const useGraphConfig = createGraphConfig((config) => {
  /** 设置XFlow画布配置项 */
  config.setX6Config({
    /** 画布网格 */
    grid: true,
    /** 画布缩放等级 */
    scaling: {
      min: 0.2,
      max: 3,
    },
    /** 画布滚轮缩放 */
    // mousewheel: {
    //   enabled: true,
    //   /** 将鼠标位置作为中心缩放 */
    //   zoomAtMousePosition: true,
    // },
  });

  /** 设置XFlow画布需要渲染的React节点/边 */
  config.setNodeRender('NODE1', (props) => <Node1 {...props} />);
  config.setNodeRender('NODE2', Node2);
  config.setEdgeRender('EDGE1', (props) => <Edge1 {...props} />);
  config.setEdgeRender('EDGE2', (props) => <Edge2 {...props} />);
});
