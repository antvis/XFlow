/* eslint-disable no-shadow */
/**
 * @author 星翊
 * @description 虚拟节点，用于辅助连线
 */

import React from 'react';
import type { NsGraph } from '@antv/xflow';

type LineageLayerType = NsGraph.IReactNodeProps<any>;

const VirtualNode: React.FC<LineageLayerType> = () => {
  return <div />;
};
export default VirtualNode;
