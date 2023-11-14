import { XFlow, XFlowGraph, Background } from '@antv/xflow';

import { Dnd } from './dnd';
import styles from './index.less';

const Page = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <XFlow>
          <Dnd />
          <XFlowGraph pannable />
          <Background color="#F2F7FA" />
        </XFlow>
      </div>
    </div>
  );
};

export default Page;
