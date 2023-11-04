import { useEffect, useRef } from 'react';
import type { DependencyList } from 'react';
import { useGraphInstance } from './useGraphInstance';
import type { EventArgs } from '@antv/x6';

export const useGraphEvent = <T extends keyof EventArgs>(
  name: T,
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
  }, [graph, deps]);
};
