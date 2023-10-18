import { XFlow, XFlowGraph } from '@antv/xflow';
import styles from './index.less';
import { useGraphStore, useGraphInstance } from '@antv/xflow';
import { useEffect } from 'react';
import { Button } from 'antd';
import { JSONCode } from './json';

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
      label: 'source',
      selected: true,
      ports: [
        {
          id: 'port-1',
          attrs: {
            circle: {
              stroke: '#8f8f8f',
              r: 4,
              magnet: true,
            },
          },
        },
      ],
    },
    {
      id: '2',
      shape: 'rect',
      x: 150,
      y: 100,
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
      label: 'target',
    },
  ],
  edges: [],
};

const Page = () => {
  const graph = useGraphInstance();
  const initData = useGraphStore((state) => state.initData);
  const addNodes = useGraphStore((state) => state.addNodes);
  const removeNodes = useGraphStore((state) => state.removeNodes);
  const updateNode = useGraphStore((state) => state.updateNode);
  const addEdges = useGraphStore((state) => state.addEdges);
  const removeEdges = useGraphStore((state) => state.removeEdges);
  const updateEdge = useGraphStore((state) => state.updateEdge);

  useEffect(() => {
    initData(initialData);
  }, []);

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
        animated: true,
      },
    ]);
  };

  const onRemoveNodes = () => {
    removeNodes(['3']);
  };

  const onUpdateNode = () => {
    updateNode('1', { attrs: { body: { stroke: 'red' } } });
    updateNode('2', { label: 'updated' });
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
    updateNode('edge-1', { selected: true });
  };

  const onUnSelectEdge = () => {
    updateNode('edge-1', { selected: false });
  };

  const changePosition = () => {
    updateNode('1', {
      x: Math.floor(Math.random() * 900),
      y: Math.floor(Math.random() * 600),
    });
  };

  const animateEdge = () => {
    updateNode('edge-1', { animated: true });
  };

  const unAnimateEdge = () => {
    updateNode('edge-1', { animated: false });
  };

  return (
    <div className={styles.page}>
      <div className={styles.tools}>
        <Button onClick={onAddNodes}>addNode</Button>
        <Button onClick={onRemoveNodes}>removeNode</Button>
        <Button onClick={onUpdateNode}>updateNode</Button>
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
      <div className={styles.content}>
        <XFlow>
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
          <JSONCode />
        </XFlow>
      </div>
    </div>
  );
};

export default Page;
