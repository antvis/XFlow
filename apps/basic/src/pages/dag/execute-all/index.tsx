import { PlayCircleOutlined } from '@ant-design/icons';
import type { Edge, Node } from '@antv/xflow';
import { useGraphInstance } from '@antv/xflow';
import { Button } from 'antd';
import { useEffect } from 'react';

const ExecuteAll = () => {
  const graph = useGraphInstance();

  useEffect(() => {
    if (graph) {
      graph.on('edge:connected', ({ edge }: { edge: Edge }) => {
        edge.attr({
          line: {
            strokeDasharray: '',
          },
        });
      });

      graph.on('node:change:data', ({ node }: { node: Node }) => {
        const edges = graph.getIncomingEdges(node);
        const { status } = node.getData();
        edges?.forEach((edge: Edge) => {
          if (status === 'running') {
            edge.attr('line/strokeDasharray', 5);
            edge.attr('line/style/animation', 'running-line 30s infinite linear');
          } else {
            edge.attr('line/strokeDasharray', '');
            edge.attr('line/style/animation', '');
          }
        });
      });
    }
  }, [graph]);

  const handleExcute = () => {
    if (graph) {
      const allNodes = graph.getNodes();
      allNodes.forEach((node: Node, index: number) => {
        const edges = graph.getOutgoingEdges(node);
        node.setData({
          ...node.data,
          status: 'running',
        });
        setTimeout(() => {
          node.setData({
            ...node.data,
            status: edges
              ? 'success'
              : Number(node.id.slice(-1)) % 2 !== 0
              ? 'success'
              : 'failed',
          });
        }, 1000 * index + 1);
      });
    }
  };

  return (
    <Button type="primary" size="small" style={{ fontSize: 12 }} onClick={handleExcute}>
      <PlayCircleOutlined rev />
      全部执行
    </Button>
  );
};

export { ExecuteAll };
