import { XFlow, XFlowGraph, Grid, Background } from '@antv/xflow';
import styles from './index.less';
import { JSONCode } from './json';
import { ToolsButton } from './tools';

const Page = () => {
  return (
    <div className={styles.page}>
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
            />
            <Grid type="mesh" options={{ color: '#ccc', thickness: 1 }} />
            <JSONCode />
          </div>
        </XFlow>
      </div>
      <div className={styles.container}>
        <XFlow>
          <ToolsButton />
          <div className={styles.content}>
            <XFlowGraph
              connectionEdgeOptions={{
                attrs: {
                  line: {
                    stroke: '#8f8f8f',
                    strokeWidth: 1,
                  },
                },
              }}
            />
            <Background color="#F2F7FA" />
            <JSONCode />
          </div>
        </XFlow>
      </div>
    </div>
  );
};

export default Page;
