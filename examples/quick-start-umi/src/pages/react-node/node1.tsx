import type { NsGraph } from '@antv/xflow';
import React from 'react';
import './node1.less';

const Node1: NsGraph.INodeRender = (props) => {
  /**
   * 1. 节点的数据、位置信息通过props取
   * 2. 当节点被触发更新时, props返回的数据也会动态更新, 触发节点重新渲染
   */
  return (
    <div className="node1-container">
      <div>{'React节点1'}</div>
    </div>
  );
};
export default Node1;
