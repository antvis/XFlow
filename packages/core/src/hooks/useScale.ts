import { useGraphEvent } from './useGraphEvent';
import type { DependencyList } from 'react';
import type { EventArgs } from '@antv/x6';

export const useScale = (
  callback: (args: EventArgs['scale']) => void,
  deps?: DependencyList,
) => {
  useGraphEvent('scale', callback, deps);
};
