import {
  useGraphStore,
  useClipboard,
  useExport,
  useHistory,
  useKeyboard,
} from '@antv/xflow';
import { Button } from 'antd';

import styles from './index.less';
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

const ToolsButton = () => {
  const initData = useGraphStore((state) => state.initData);
  const nodes = useGraphStore((state) => state.nodes);
  const addNodes = useGraphStore((state) => state.addNodes);
  const removeNodes = useGraphStore((state) => state.removeNodes);
  const updateNode = useGraphStore((state) => state.updateNode);
  const addEdges = useGraphStore((state) => state.addEdges);
  const removeEdges = useGraphStore((state) => state.removeEdges);
  const updateEdge = useGraphStore((state) => state.updateEdge);
  const { copy, paste } = useClipboard();
  const { exportPNG } = useExport();
  const { undo, redo, canUndo, canRedo } = useHistory();

  useKeyboard('ctrl+c', () => {
    onCopy();
  });

  useKeyboard('ctrl+v', () => {
    onPaste();
  });

  useKeyboard('backspace', () => {
    const selected = nodes.filter((node) => node.selected);
    const ids: string[] = selected.map((node) => node.id || '');
    removeNodes(ids);
  });

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

  const onChangePosition = () => {
    updateNode('1', {
      x: Math.floor(Math.random() * 900),
      y: Math.floor(Math.random() * 600),
    });
  };

  const onAnimateEdge = () => {
    updateEdge('edge-1', { animated: true });
  };

  const onUnAnimateEdge = () => {
    updateEdge('edge-1', { animated: false });
  };

  const onCopy = () => {
    copy(['1']);
  };

  const onPaste = () => {
    paste();
  };

  const onExport = () => {
    exportPNG('xflow', { padding: 20, copyStyles: false });
  };

  const onUndo = () => {
    undo();
  };

  const onRedo = () => {
    redo();
  };

  const onAddTools = () => {
    updateNode('1', {
      tools: ['boundary', 'button-remove'],
    });
  };

  return (
    <div className={styles.tools}>
      <Button size="small" onClick={onInit}>
        initData
      </Button>
      <Button size="small" onClick={onAddNodes}>
        addNode
      </Button>
      <Button size="small" onClick={onRemoveNodes}>
        removeNode
      </Button>
      <Button size="small" onClick={onUpdateNode}>
        updateNode
      </Button>
      <Button size="small" onClick={onUpdateNodeData}>
        updateNodeData
      </Button>
      <Button size="small" onClick={onAddEdges}>
        addEdge
      </Button>
      <Button size="small" onClick={onRemoveEdges}>
        removeEdge
      </Button>
      <Button size="small" onClick={onUpdateEdge}>
        updateEdge
      </Button>
      <Button size="small" onClick={onSelectNode}>
        SelectNode
      </Button>
      <Button size="small" onClick={onUnSelectNode}>
        UnSelectNode
      </Button>
      <Button size="small" onClick={onSelectEdge}>
        SelectEdge
      </Button>
      <Button size="small" onClick={onUnSelectEdge}>
        UnSelectEdge
      </Button>
      <Button size="small" onClick={onChangePosition}>
        changePosition
      </Button>
      <Button size="small" onClick={onAnimateEdge}>
        animateEdge
      </Button>
      <Button size="small" onClick={onUnAnimateEdge}>
        unAnimateEdge
      </Button>
      <Button size="small" onClick={onCopy}>
        copy
      </Button>
      <Button size="small" onClick={onPaste}>
        paste
      </Button>
      <Button size="small" onClick={onExport}>
        export
      </Button>
      <Button size="small" onClick={onUndo} disabled={!canUndo}>
        undo
      </Button>
      <Button size="small" onClick={onRedo} disabled={!canRedo}>
        redo
      </Button>
      <Button size="small" onClick={onAddTools}>
        addTools
      </Button>
    </div>
  );
};

export { ToolsButton };
