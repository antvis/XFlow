import { useGraphInstance } from '../hooks/useGraphInstance';
import { Graph } from '@antv/x6';
import { useEffect } from 'react';

const Grid = (props: Graph.GridManager.DrawGridOptions) => {
  const graph = useGraphInstance();

  useEffect(() => {
    if (graph) {
      graph.drawGrid(props);
      graph.showGrid();
    }
  }, [graph, props]);

  return null;
};

export { Grid };
