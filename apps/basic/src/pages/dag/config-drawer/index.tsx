import type { Node } from '@antv/xflow';
import { useGraphInstance } from '@antv/xflow';
import { Drawer } from 'antd';
import { useEffect, useState } from 'react';

interface NodeData {
  label?: string;
  status?: 'default' | 'running' | 'success' | 'failed';
}

const ConfigDrawer = () => {
  const graph = useGraphInstance();
  const [open, SetOpen] = useState(false);
  const [nodeData, setNodeData] = useState<NodeData>({});

  const onClose = () => {
    SetOpen(false);
    setNodeData({});
  };

  useEffect(() => {
    if (graph) {
      graph.on('node:click', ({ node }: { node: Node }) => {
        const data = node.getData();
        SetOpen(true);
        setNodeData(data);
      });

      graph.on('blank:click', () => {
        onClose();
      });
    }
  }, [graph]);

  return (
    <Drawer
      width={300}
      open={open}
      title="组件信息"
      destroyOnClose
      mask={false}
      onClose={onClose}
    >
      <div>组件名：{nodeData?.label}</div>
    </Drawer>
  );
};

export { ConfigDrawer };
