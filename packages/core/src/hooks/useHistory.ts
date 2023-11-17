import type { KeyValue } from '@antv/x6';
import { useCallback, useState } from 'react';

import { useGraphEvent } from './useGraphEvent';
import { useGraphInstance } from './useGraphInstance';
import { useLoaded } from './useLoaded';

export const useHistory = () => {
  const graph = useGraphInstance();
  const { isLoaded } = useLoaded('history');
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  const undo = useCallback(
    (options?: KeyValue) => {
      if (isLoaded() && graph) {
        return graph.undo(options);
      }
      return null;
    },
    [graph, isLoaded],
  );

  const redo = useCallback(
    (options?: KeyValue) => {
      if (isLoaded() && graph) {
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
