import { useGraphEvent } from './useGraphEvent';
import type { DependencyList } from 'react';
import type { Collection } from '@antv/x6';

export const useNodeAdded = (
  callback: (args: Collection.NodeEventArgs['node:added']) => void,
  deps?: DependencyList,
) => {
  useGraphEvent('node:added', callback, deps);
};
