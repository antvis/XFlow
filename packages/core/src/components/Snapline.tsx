import { Snapline as S } from '@antv/x6-plugin-snapline';
import React, { useEffect } from 'react';

import { useGraphInstance } from '../hooks/useGraphInstance';

const Snapline = (props: Omit<S.Options, 'enabled'>) => {
  const graph = useGraphInstance();

  useEffect(() => {
    if (graph) {
      if (graph.getPlugin('snapline')) {
        graph.disposePlugins('snapline');
      }
      graph.use(
        new S({
          enabled: true,
          ...props,
        }),
      );
    }
  }, [graph, props]);

  return null;
};

export { Snapline };
