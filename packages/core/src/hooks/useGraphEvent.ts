import { useEffect, useRef } from 'react';
import type { DependencyList } from 'react';
import { useGraphInstance } from './useGraphInstance';

type Noop = (this: any, ...args: any[]) => any;

export const useGraphEvent = (
  name: string,
  callback: Noop,
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
