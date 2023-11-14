import type { KeyValue } from '@antv/x6';
import { useCallback, useState } from 'react';

import { useGraphEvent } from './useGraphEvent';
import { useGraphInstance } from './useGraphInstance';

export const useHistory = () => {
  const graph = useGraphInstance();
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  const isLoaded = useCallback(() => {
    const loaded = !!(graph && graph.getPlugin('history'));
    if (!loaded) {
      console.warn('history is not loaded, please use history component first');
    }
    return loaded;
  }, [graph]);

  const undo = useCallback(
    (options?: KeyValue) => {
      if (graph && isLoaded()) {
        return graph.undo(options);
      }
      return null;
    },
    [graph, isLoaded],
  );

  const redo = useCallback(
    (options?: KeyValue) => {
      if (graph && isLoaded()) {
        return graph.redo(options);
      }
      return null;
    },
    [graph, isLoaded],
  );

  useGraphEvent('history:change', () => {
    if (graph) {
      setCanUndo(graph.canUndo());
      setCanRedo(graph.canRedo());
    }
  });

  return { undo, redo, canUndo, canRedo };
};
