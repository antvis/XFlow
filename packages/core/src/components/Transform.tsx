import { Transform as T } from '@antv/x6-plugin-transform';
import { useEffect } from 'react';

import { useGraphInstance } from '../hooks/useGraphInstance';

type IProps = {
  resizing?: T.Options['resizing'];
  rotating?: T.Options['rotating'];
};

const Transform = (props: IProps) => {
  const graph = useGraphInstance();
  const { resizing, rotating } = props;

  const parseOptions = (options: T.Options['resizing'] | T.Options['rotating']) => {
    if (typeof options === 'boolean') {
      return options;
    }
    if (typeof options === 'object') {
      return {
        enabled: true,
        ...options,
      };
    }

    return false;
  };

  useEffect(() => {
    if (graph) {
      if (graph.getPlugin('transform')) {
        graph.disposePlugins('transform');
      }

      graph.use(
        new T({
          resizing: parseOptions(resizing),
          rotating: parseOptions(rotating),
        }),
      );
    }
  }, [graph, resizing, rotating]);

  return null;
};

export { Transform };
