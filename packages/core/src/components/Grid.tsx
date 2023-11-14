import { type Registry } from '@antv/x6';
import { useEffect } from 'react';

import { useGraphInstance } from '../hooks/useGraphInstance';

type GridTypes = keyof Registry.Grid.Presets;
interface GridProps<T extends GridTypes> {
  type: T;
  options: Registry.Grid.OptionsMap[T];
}

const Grid = <T extends GridTypes>(props: GridProps<T>) => {
  const graph = useGraphInstance();

  useEffect(() => {
    if (graph) {
      graph.clearGrid();
      graph.drawGrid({
        ...props.options,
        type: props.type,
      });
      graph.showGrid();
    }
  }, [graph, props]);

  return null;
};

export { Grid };
