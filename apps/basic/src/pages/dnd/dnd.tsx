import { useDnd } from '@antv/xflow';

import styles from './index.less';

const Dnd = () => {
  const { startDrag } = useDnd();
  const list = ['node1', 'node2', 'node3', 'node4', 'node5', 'node6', 'node7'];

  const handleMouseDown = (e: React.MouseEvent<Element, MouseEvent>, item: string) => {
    startDrag(
      {
        id: item,
        shape: 'rect',
        width: 192,
        height: 32,
        attrs: {
          body: {
            stroke: '#D9DADD',
            strokeWidth: 1,
          },
        },
        label: item,
      },
      e,
    );
  };

  return (
    <div className={styles.dnd}>
      <ul>
        {list.map((item) => (
          <li key={item} onMouseDown={(e) => handleMouseDown(e, item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Dnd };
