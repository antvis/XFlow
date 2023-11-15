import { register, Graph, Path } from '@antv/xflow';
import type { Node } from '@antv/xflow';

import './node.less';

const DAG_NODE = 'dag-node';
const DAG_EDGE = 'dag-edge';
const DAG_CONNECTOR = 'dag-connector';

interface NodeStatus {
  id: string;
  status: 'default' | 'success' | 'failed' | 'running';
  label?: string;
}
const image = {
  logo: 'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*evDjT5vjkX0AAAAAAAAAAAAAARQnAQ',
  success:
    'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*6l60T6h8TTQAAAAAAAAAAAAAARQnAQ',
  failed:
    'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*SEISQ6My-HoAAAAAAAAAAAAAARQnAQ',
  running:
    'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*t8fURKfgSOgAAAAAAAAAAAAAARQnAQ',
};

const AlgoNode = ({ node }: { node: Node }) => {
  const data = node?.getData() as NodeStatus;
  const { label, status = 'default' } = data;

  return (
    <div className={`node ${status}`}>
      <img src={image.logo} alt="logo" />
      <span className="label">{label}</span>
      <span className="status">
        {status === 'success' && <img src={image.success} alt="success" />}
        {status === 'failed' && <img src={image.failed} alt="failed" />}
        {status === 'running' && <img src={image.running} alt="running" />}
      </span>
    </div>
  );
};

register({
  shape: DAG_NODE,
  width: 180,
  height: 36,
  component: AlgoNode,
  effect: ['data'],
  inherit: 'react-shape',
  ports: {
    groups: {
      top: {
        position: 'top',
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#C2C8D5',
            strokeWidth: 1,
            fill: '#fff',
          },
        },
      },
      bottom: {
        position: 'bottom',
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#C2C8D5',
            strokeWidth: 1,
            fill: '#fff',
          },
        },
      },
    },
  },
});

Graph.registerConnector(
  DAG_CONNECTOR,
  (s, e) => {
    const offset = 4;
    const deltaY = Math.abs(e.y - s.y);
    const control = Math.floor((deltaY / 3) * 2);

    const v1 = { x: s.x, y: s.y + offset + control };
    const v2 = { x: e.x, y: e.y - offset - control };

    return Path.normalize(
      `M ${s.x} ${s.y}
     L ${s.x} ${s.y + offset}
     C ${v1.x} ${v1.y} ${v2.x} ${v2.y} ${e.x} ${e.y - offset}
     L ${e.x} ${e.y}
    `,
    );
  },
  true,
);

Graph.registerEdge(
  DAG_EDGE,
  {
    inherit: 'edge',
    attrs: {
      line: {
        stroke: '#C2C8D5',
        strokeWidth: 1,
        targetMarker: null,
      },
    },
    zIndex: -1,
  },
  true,
);

export { DAG_NODE, DAG_EDGE, DAG_CONNECTOR };
