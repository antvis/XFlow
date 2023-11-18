import { XFlow, XFlowGraph, Background, Control } from '@antv/xflow';

import { ConfigDrawer } from './config-drawer';
import { Dnd } from './dnd/dnd';
import { ExecuteAll } from './execute-all';
import styles from './index.less';
import { DAG_EDGE, DAG_CONNECTOR } from './shape';

const Page = () => {
  return (
    <XFlow>
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.leftTop}>算子组件库</div>
            <Dnd />
          </div>
          <div className={styles.center}>
            <div className={styles.toolbar}>
              <ExecuteAll />
            </div>
            <div className={styles.graph}>
              <XFlowGraph
                pannable
                connectionOptions={{
                  snap: true,
                  allowBlank: false,
                  allowLoop: false,
                  highlight: true,
                  connectionPoint: 'anchor',
                  anchor: 'center',
                  connector: DAG_CONNECTOR,
                  validateMagnet({ magnet }) {
                    return magnet.getAttribute('port-group') !== 'top';
                  },
                }}
                connectionEdgeOptions={{
                  shape: DAG_EDGE,
                  attrs: {
                    line: {
                      strokeDasharray: '5 5',
                    },
                  },
                  zIndex: -1,
                }}
              />
              <Background color="#FFF" />
              <div className={styles.controlTool}>
                <Control
                  items={['zoomOut', 'zoomTo', 'zoomIn', 'zoomToFit', 'zoomToOrigin']}
                />
              </div>
            </div>
          </div>
        </div>
        <ConfigDrawer />
      </div>
    </XFlow>
  );
};

export default Page;
