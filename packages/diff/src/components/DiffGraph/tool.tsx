import { EdgeOptions, NodeOptions, useGraphInstance, useGraphStore } from '@antv/xflow';
import { FC, useEffect } from 'react';

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
