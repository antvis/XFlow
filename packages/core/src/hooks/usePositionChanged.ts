import { useGraphEvent } from './useGraphEvent';
import type { DependencyList } from 'react';
import type { Cell } from '@antv/x6';

export const usePositionChanged = (
  callback: (args: Cell.EventArgs['change:position']) => void,
  deps?: DependencyList,
) => {
  useGraphEvent('node:change:position', callback, deps);
};
