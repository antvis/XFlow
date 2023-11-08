import type { EventArgs } from '@antv/x6';
import { useEffect, useRef } from 'react';
import type { DependencyList } from 'react';

import { useGraphInstance } from './useGraphInstance';

export const useGraphEvent = <T extends keyof EventArgs>(
  name: T,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: (args: EventArgs[T]) => any,
  deps: DependencyList = [],
) => {
  const ref = useRef(callback);
  const graph = useGraphInstance();

  useEffect(() => {
    if (ref.current) {
      graph?.off(name, ref.current);
    }
    if (callback) {
      ref.current = callback;
      graph?.on(name, ref.current);
    }

    return () => {
      if (ref.current) {
        graph?.off(name, ref.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [graph, deps]);
};
