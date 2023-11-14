import { Clipboard as C } from '@antv/x6-plugin-clipboard';
import { useEffect } from 'react';

import { useGraphInstance } from '../hooks/useGraphInstance';

const Clipboard = (props: Omit<C.Options, 'enabled'>) => {
  const graph = useGraphInstance();

  useEffect(() => {
    if (graph) {
      if (graph.getPlugin('clipboard')) {
        graph.disposePlugins('clipboard');
      }
      graph.use(
        new C({
          enabled: true,
          ...props,
        }),
      );
    }
  }, [graph, props]);

  return null;
};

export { Clipboard };
