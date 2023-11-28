import type { Graph } from '@antv/x6';
import React, { useEffect } from 'react';

import { useGraphInstance } from '../hooks/useGraphInstance';

const Background = (props: Graph.BackgroundManager.Options) => {
  const graph = useGraphInstance();

  useEffect(() => {
    if (graph) {
      graph.clearBackground();
      graph.drawBackground(props);
    }
  }, [graph, props]);

  return null;
};

export { Background };
