import styles from './index.less';
import { useGraphStore } from '@antv/xflow';
import { Button } from 'antd';
import { REACT_NODE } from './shape';

const initialData = {
  nodes: [
    {
      id: '1',
      shape: 'rect',
      x: 20,
      y: 20,
      width: 100,
      height: 40,
      attrs: {
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6,
        },
      },
      label: 'svg',
      selected: true,
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                stroke: '#8f8f8f',
                r: 4,
                magnet: true,
              },
            },
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                stroke: '#8f8f8f',
                r: 4,
                magnet: true,
              },
            },
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                stroke: '#8f8f8f',
                r: 4,
                magnet: true,
              },
            },
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                stroke: '#8f8f8f',
                r: 4,
                magnet: true,
              },
            },
          },
        },
        items: [
          {
            id: 'port-1',
            group: 'top',
          },
          {
            id: 'port-2',
            group: 'bottom',
          },
          {
            id: 'port-3',
            group: 'left',
          },
          {
            id: 'port-4',
            group: 'right',
          },
        ],
      },
    },
    {
      id: '2',
      shape: REACT_NODE,
      x: 150,
      y: 100,
      data: {
        animal: {
          name: 'dog',
          age: 1,
        },
      },
    },
  ],
  edges: [],
};

const ToolButton = () => {
  const initData = useGraphStore((state) => state.initData);
  const addNodes = useGraphStore((state) => state.addNodes);
  const removeNodes = useGraphStore((state) => state.removeNodes);
  const updateNode = useGraphStore((state) => state.updateNode);
  const addEdges = useGraphStore((state) => state.addEdges);
  const removeEdges = useGraphStore((state) => state.removeEdges);
  const updateEdge = useGraphStore((state) => state.updateEdge);

  const onInit = () => {
    initData(initialData);
  };

  const onAddNodes = () => {
    addNodes([
      {
        id: '3',
        shape: 'rect',
        x: 200,
        y: 200,
        width: 100,
        height: 40,
        attrs: {
          body: {
            stroke: '#8f8f8f',
            strokeWidth: 1,
            fill: '#fff',
            rx: 6,
            ry: 6,
          },
        },
        label: 'added',
      },
    ]);
  };

  const onRemoveNodes = () => {
    removeNodes(['3']);
  };

  const onUpdateNode = () => {
    updateNode('1', { width: 100, height: 100 });
  };

  const onUpdateNodeData = () => {
    updateNode('2', {
      data: {
        animal: {
          name: 'cat',
          age: 2,
        },
      },
    });
  };

  const onAddEdges = () => {
    addEdges([
      {
        id: 'edge-1',
        source: '1',
        target: '2',
        attrs: {
          line: {
            stroke: '#8f8f8f',
            strokeWidth: 1,
          },
        },
      },
    ]);
  };

  const onRemoveEdges = () => {
    removeEdges(['edge-1']);
  };

  const onUpdateEdge = () => {
    updateEdge('edge-1', { attrs: { line: { stroke: 'red', strokeWidth: 4 } } });
  };

  const onSelectNode = () => {
    updateNode('1', { selected: true });
  };

  const onUnSelectNode = () => {
    updateNode('1', { selected: false });
  };

  const onSelectEdge = () => {
    updateEdge('edge-1', { selected: true });
  };

  const onUnSelectEdge = () => {
    updateEdge('edge-1', { selected: false });
  };

  const changePosition = () => {
    updateNode('1', {
      x: Math.floor(Math.random() * 900),
      y: Math.floor(Math.random() * 600),
    });
  };

  const animateEdge = () => {
    updateEdge('edge-1', { animated: true });
  };

  const unAnimateEdge = () => {
    updateEdge('edge-1', { animated: false });
  };

  return (
    <div className={styles.tools}>
      <Button onClick={onInit}>initData</Button>
      <Button onClick={onAddNodes}>addNode</Button>
      <Button onClick={onRemoveNodes}>removeNode</Button>
      <Button onClick={onUpdateNode}>updateNode</Button>
      <Button onClick={onUpdateNodeData}>updateNodeData</Button>
      <Button onClick={onAddEdges}>addEdge</Button>
      <Button onClick={onRemoveEdges}>removeEdge</Button>
      <Button onClick={onUpdateEdge}>updateEdge</Button>
      <Button onClick={onSelectNode}>SelectNode</Button>
      <Button onClick={onUnSelectNode}>UnSelectNode</Button>
      <Button onClick={onSelectEdge}>SelectEdge</Button>
      <Button onClick={onUnSelectEdge}>UnSelectEdge</Button>
      <Button onClick={changePosition}>changePosition</Button>
      <Button onClick={animateEdge}>animateEdge</Button>
      <Button onClick={unAnimateEdge}>unAnimateEdge</Button>
    </div>
  );
};

export default ToolButton;
