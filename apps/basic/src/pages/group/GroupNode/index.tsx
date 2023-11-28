import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import type { Node } from '@antv/xflow';
import cx from 'classnames';

import type { INodeData } from '../type';

import styles from './index.less';
import React from 'react';

const GroupNode = ({ node }: { node: Node }) => {
  const { width, height } = node.getBBox();
  const data: INodeData = node.getData();
  const isFold = node.getProp('isFold');
  const { label } = data || {};
  const descendantsNumber = node.getProp('descendantsNumber') || 0;

  const renderNodes = () => {
    const foldElment = (
      <div className={styles['fold-group-wrap']}>
        <div className={styles['fold-style']}>
          <div className={styles['children-number']}>{descendantsNumber}</div>
          {/* event 自定义事件 */}
          <div
            className={styles['fold-icon']}
            event="group:node:collapse"
            onClick={(e) => e.stopPropagation()}
          >
            <PlusCircleOutlined />
          </div>
        </div>
        <div className={cx(styles['group-name'], [styles['group-name-fold']])}>
          {label}
        </div>
      </div>
    );

    const unfoldElment = (
      <>
        <div
          className={styles['unfold-style']}
          style={{ height: height < 18 ? height : height - 18 }}
        >
          <div
            className={styles['unfold-icon']}
            // event 自定义事件
            event="group:node:collapse"
            onClick={(e) => e.stopPropagation()}
          >
            <MinusCircleOutlined />
          </div>
        </div>
        <div className={styles['group-name']}>{label}</div>
      </>
    );
    return (
      <div className={styles['group-wrap']}>{isFold ? foldElment : unfoldElment}</div>
    );
  };

  return <div style={{ width, height }}>{renderNodes()}</div>;
};

export default GroupNode;
