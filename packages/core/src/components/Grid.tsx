import { type Registry } from '@antv/x6';
import React, { useEffect } from 'react';

import { useGraphInstance } from '../hooks/useGraphInstance';

type GridTypes = keyof Registry.Grid.Presets;
interface GridProps<T extends GridTypes> {
  visible?: boolean;
  size?: number;
  type: T;
  options: Registry.Grid.OptionsMap[T];
}

const Grid = <T extends GridTypes>(props: GridProps<T>) => {
  const graph = useGraphInstance();
  const { visible, size, type, options } = props;

  useEffect(() => {
    if (graph) {
      graph.clearGrid();
      graph.drawGrid({
        type,
        args: options,
      });
      graph.showGrid();
    }
  }, [graph, type, options]);

  useEffect(() => {
    if (graph) {
      if (visible === false) {
        graph.hideGrid();
      } else {
        graph.showGrid();
      }
    }
  }, [graph, visible]);

  useEffect(() => {
    if (graph) {
      if (size) {
        graph.setGridSize(size);
      }
    }
  }, [graph, size]);

  return null;
};

export { Grid };
