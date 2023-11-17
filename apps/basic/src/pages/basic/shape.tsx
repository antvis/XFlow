import { register } from '@antv/xflow';
import type { Node } from '@antv/xflow';

import styles from './index.less';

const REACT_NODE = 'react-node';

const NodeComponent = ({ node }: { node: Node }) => {
  const data = node.getData();

  return (
    <div className={styles['react-node']}>
      <span>{`${data.animal.name}-${data.animal.age}`}</span>
    </div>
  );
};

register({
  shape: REACT_NODE,
  component: NodeComponent,
  width: 100,
  height: 40,
  effect: ['data'], // re-render when data changes
});

export { REACT_NODE };
