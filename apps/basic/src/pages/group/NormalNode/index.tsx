import type { Node } from '@antv/xflow';
import React from 'react';
import type { INodeData } from '../type';

import styles from './index.less';

const NormalNode = ({ node }: { node: Node }) => {
  const data: INodeData = node.getData();
  const { width, height } = node.getBBox();

  return (
    <div className={styles['graph-normal-node']}>
      <div className={styles['node-wrap']}>
        <div className={styles['node-styl']} style={{ width, height }} />
        <div className={styles['node-text']}>{data?.label}</div>
      </div>
    </div>
  );
};

export default NormalNode;
