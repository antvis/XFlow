import { History as H } from '@antv/x6-plugin-history';
import React, { useEffect } from 'react';

import { useGraphInstance } from '../hooks/useGraphInstance';

const History = (props: Omit<H.Options, 'enabled'>) => {
  const graph = useGraphInstance();

  useEffect(() => {
    if (graph) {
      if (graph.getPlugin('history')) {
        graph.disposePlugins('history');
      }
      graph.use(
        new H({
          enabled: true,
          ...props,
        }),
      );
    }
  }, [graph, props]);

  return null;
};

export { History };
