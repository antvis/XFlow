import { useCallback } from 'react';

import { useGraphInstance } from './useGraphInstance';

export const useLoaded = (name: string) => {
  const graph = useGraphInstance();

  const isLoaded = useCallback(
    (cb?: () => void) => {
      if (!graph) {
        console.warn('graph can only be get inside the xflow component.');
        return false;
      }
      const plugin = graph.getPlugin(name);
      if (!plugin) {
        if (cb) {
          return cb();
        }
        console.warn(`${name} is not loaded, please use ${name} component first.`);
        return false;
      }
      return true;
    },
    [graph, name],
  );

  return {
    isLoaded,
  };
};
