import { PlayCircleOutlined, CopyOutlined } from '@ant-design/icons';
import type { Edge, NodeOptions, Node } from '@antv/xflow';
import {
  useGraphInstance,
  useClipboard,
  useGraphEvent,
  useGraphStore,
  useKeyboard,
} from '@antv/xflow';
import { Button, Space } from 'antd';

const Toolbar = () => {
  const graph = useGraphInstance();
  const { copy, paste } = useClipboard();
  const nodes = useGraphStore((state) => state.nodes);
  const updateNode = useGraphStore((state) => state.updateNode);
  const updateEdge = useGraphStore((state) => state.updateEdge);
  const removeNodes = useGraphStore((state) => state.removeNodes);

  useKeyboard('ctrl+c', () => onCopy());

  useKeyboard('ctrl+v', () => onPaste());

  useKeyboard('backspace', () => {
    const selected = nodes.filter((node) => node.selected);
    const ids: string[] = selected.map((node) => node.id || '');
    removeNodes(ids);
  });

  useGraphEvent('node:change:data', ({ node }) => {
    if (graph) {
      const edges = graph.getIncomingEdges(node);
      const { status } = node.data;
      edges?.forEach((edge: Edge) => {
        if (status === 'running') {
          updateEdge(edge.id, {
            animated: true,
          });
        } else {
          updateEdge(edge.id, {
            animated: false,
          });
        }
      });
    }
  });

  const handleExcute = () => {
    if (graph) {
      nodes.forEach((node: Node | NodeOptions, index: number) => {
        const edges = graph.getOutgoingEdges(node as Node);
        updateNode(node.id!, {
          data: {
            ...node.data,
            status: 'running',
          },
        });

        setTimeout(() => {
          updateNode(node.id!, {
            data: {
              ...node.data,
              status: edges
                ? 'success'
                : Number(node.id!.slice(-1)) % 2 !== 0
                ? 'success'
                : 'failed',
            },
          });
        }, 1000 * index + 1);
      });
    }
  };

  const onCopy = () => {
    const selected = nodes.filter((node) => node.selected);
    const ids: string[] = selected.map((node) => node.id || '');
    copy(ids);
  };

  const onPaste = () => {
    paste();
  };

  return (
    <Space>
      <Button
        type="primary"
        size="small"
        style={{ fontSize: 12 }}
        onClick={handleExcute}
      >
        <PlayCircleOutlined />
        全部执行
      </Button>
      <Button type="primary" size="small" style={{ fontSize: 12 }} onClick={onCopy}>
        <CopyOutlined />
        复制
      </Button>
      <Button type="primary" size="small" style={{ fontSize: 12 }} onClick={onPaste}>
        <CopyOutlined />
        粘贴
      </Button>
    </Space>
  );
};

export { Toolbar };
