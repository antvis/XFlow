import type { EventArgs } from '@antv/x6';
import { useEffect } from 'react';

import { useGraphInstance } from './useGraphInstance';
import { useLatest } from './useLatest';

export const useGraphEvent = <T extends keyof EventArgs>(
  name: T,
  callback: (args: EventArgs[T]) => void,
) => {
  const cbRef = useLatest(callback);
  const graph = useGraphInstance();

  useEffect(() => {
    if (graph) {
      cbRef.current = callback;
      graph.on(name, (args: EventArgs[T]) => {
        cbRef.current(args);
      });
    }

    return () => {
      if (graph && cbRef.current) {
        graph.off(name, cbRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [graph]);
};
