import type { NodeOptions } from '@antv/xflow';
import { useDnd } from '@antv/xflow';

import styles from './index.less';
import {
  CUSTOMPROCESSNODE,
  CUSTOMCOURSENODE,
  CUSTOMVERIFYNODE,
  BASICFLOWNODE,
} from './node';

const Dnd = () => {
  const { startDrag } = useDnd();

  const handleMouseDown = (
    e: React.MouseEvent<Element, MouseEvent>,
    item: { type: string; label: string; node: NodeOptions },
  ) => {
    startDrag(item.node, e);
  };

  return (
    <div className={styles.dnd}>
      <ul>
        {list.map((item) => (
          <div
            key={item.label}
            className={styles[`dndItem${item.type}`]}
            onMouseDown={(e) =>
              handleMouseDown(
                e,
                item as { type: string; label: string; node: NodeOptions },
              )
            }
          >
            <span>{item.label}</span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export { Dnd };

const list = [
  {
    type: 'Start',
    label: '开始',
    node: {
      shape: BASICFLOWNODE,
      label: '开始',
      width: 80,
      height: 50,
      attrs: {
        body: {
          rx: 25,
          ry: 25,
          strokeWidth: 2,
          stroke: 'rgb(255, 149, 128)',
          fill: 'rgb(255, 149, 128)',
        },
      },
    },
  },
  {
    type: 'Process',
    label: '过程',
    node: {
      shape: CUSTOMCOURSENODE,
      label: '过程',
      width: 100,
      height: 60,
    },
  },
  {
    type: 'No',
    label: 'No',
    node: {
      shape: CUSTOMVERIFYNODE,
      label: 'No',
      width: 36,
      height: 36,
    },
  },
  {
    type: 'Yes',
    label: 'Yes',
    node: {
      shape: CUSTOMVERIFYNODE,
      label: 'Yes',
      width: 42,
      height: 42,
    },
  },
  {
    type: 'No',
    label: 'Ok',
    node: {
      shape: CUSTOMVERIFYNODE,
      label: 'Ok',
      width: 36,
      height: 36,
    },
  },
  {
    type: 'NotOk',
    label: 'NotOk',
    node: {
      shape: CUSTOMVERIFYNODE,
      label: 'Not Ok',
      width: 66,
      height: 37,
    },
  },
  {
    type: 'Polygon',
    label: '决策',
    node: {
      shape: CUSTOMPROCESSNODE,
      label: '决策',
    },
  },
];
