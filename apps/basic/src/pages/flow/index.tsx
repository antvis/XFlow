import {
  XFlow,
  XFlowGraph,
  Grid,
  History,
  Clipboard,
  Transform,
  Snapline,
  Minimap,
} from '@antv/xflow';

import { Connector } from './connector';
import { Dnd } from './dnd';
import { InitEdge } from './edge';
import styles from './index.less';
import { Keyboard } from './keyboard';
import { InitNode } from './node';

const Page = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <XFlow>
          <Dnd />
          <XFlowGraph
            centerView
            zoomable
            zoomOptions={{
              minScale: 0.5,
              maxScale: 3,
            }}
            pannable
            fitView
            magnetAdsorbedHighlightOptions={{
              name: 'stroke',
              args: {
                attrs: {
                  fill: '#5F95FF',
                  stroke: '#5F95FF',
                },
              },
            }}
            connectionOptions={{
              snap: true,
              allowBlank: false,
              allowLoop: false,
              highlight: true,
              anchor: 'center',
              router: 'orth',
              connector: 'rounded',
            }}
            connectionEdgeOptions={{
              attrs: {
                line: {
                  stroke: 'rgb(72, 203, 164)',
                  strokeWidth: 2,
                  targetMarker: {
                    name: 'block',
                    width: 14,
                    height: 10,
                  },
                },
              },
              zIndex: 0,
            }}
            selectOptions={{
              multiple: true,
              rubberband: true,
              strict: true,
              modifiers: 'shift',
            }}
          />
          <Grid
            type="doubleMesh"
            size={10}
            options={[
              {
                color: '#E7E8EA',
                thickness: 1,
              },
              {
                color: '#CBCED3',
                thickness: 1,
                factor: 4,
              },
            ]}
          />
          <Transform resizing rotating />
          <Snapline />
          <Minimap simple />
          <History />
          <Clipboard />
          <Keyboard />
          <InitNode />
          <InitEdge />
          <Connector />
        </XFlow>
      </div>
    </div>
  );
};

export default Page;
