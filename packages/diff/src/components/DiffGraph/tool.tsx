import type { EdgeOptions, NodeOptions } from '@antv/xflow';
import { useGraphInstance, useGraphStore } from '@antv/xflow';
import type { FC } from 'react';
import { useEffect } from 'react';

interface ToolOptions {
  data: {
    nodes: NodeOptions[];
    edges: EdgeOptions[];
  };
  addGraph: (graph: ReturnType<typeof useGraphInstance>) => void;
}

const Tool: FC<ToolOptions> = (props) => {
  const { data, addGraph } = props;
  const initData = useGraphStore((state) => state.initData);
  const graphIns = useGraphInstance();

  useEffect(() => {
    // 初始化数据
    initData(data);

    // 上报 graph 实例
    addGraph(graphIns);
  }, []); // eslint-disable-line

  return null;
};

export default Tool;
