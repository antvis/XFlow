import type { EventArgs } from '@antv/x6';
import isEqual from 'lodash.isequal';
import { useEffect, useRef } from 'react';
import type { DependencyList } from 'react';

import { useGraphInstance } from './useGraphInstance';

const depsEqual = (aDeps: DependencyList = [], bDeps: DependencyList = []) => {
  return isEqual(aDeps, bDeps);
};

export const useGraphEvent = <T extends keyof EventArgs>(
  name: T,
  callback: (args: EventArgs[T]) => void,
  deps: DependencyList = [],
) => {
  const cbRef = useRef(callback);
  const depsRef = useRef<DependencyList>([]);
  const signalRef = useRef<number>(0);
  const graph = useGraphInstance();

  if (!depsEqual(deps, depsRef.current)) {
    depsRef.current = deps;
    signalRef.current += 1;
  }

  useEffect(() => {
    if (graph) {
      if (cbRef.current) {
        graph.off(name, cbRef.current);
      }
      cbRef.current = callback;
      graph.on(name, cbRef.current);
    }

    return () => {
      if (graph && cbRef.current) {
        graph.off(name, cbRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [graph]);

  useEffect(() => {
    if (graph && cbRef.current && signalRef.current > 0) {
      graph.off(name, cbRef.current);
      cbRef.current = callback;
      graph.on(name, cbRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signalRef.current]);
};
