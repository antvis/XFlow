import { XFlow, XFlowGraph, register } from '@antv/xflow';

import GroupNode from './GroupNode';
import styles from './index.less';
import NormalNode from './NormalNode';
import { ToolsButton } from './tools';
import { NodeRenderKey } from './type';
import React from 'react';

// 注册普通节点
register({
  shape: NodeRenderKey.NORMAL_NODE,
  component: NormalNode,
});

// 注册组合节点
register({
  shape: NodeRenderKey.GROUP_NODE,
  component: GroupNode,
});

const Group = () => {
  return (
    <div className={styles.container}>
      <XFlow>
        <ToolsButton />
        <div className={styles.content}>
          <XFlowGraph
            zoomable
            pannable
            centerView
            fitView
            connectionEdgeOptions={{
              attrs: {
                line: {
                  stroke: '#8f8f8f',
                  strokeWidth: 1,
                },
              },
            }}
            restrict
            restrictOptions={{
              bound: (view) => {
                const cell = view?.cell;
                if (cell && cell.isNode()) {
                  const parent = cell.getParent();
                  if (parent) {
                    return parent.getBBox();
                  }
                }
                return null;
              },
            }}
          />
        </div>
        <div>
          <ul>
            <li>添加多个节点</li>
            <li>移动节点会自动检查是否需要成组</li>
            <li>支持节点成组、往组合节点继续添加子节点、解除组、重命名组</li>
            <li>支持组合节点的收起、展开</li>
          </ul>
        </div>
      </XFlow>
    </div>
  );
};

export default Group;
