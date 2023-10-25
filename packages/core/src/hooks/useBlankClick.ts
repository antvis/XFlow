import { useGraphEvent } from './useGraphEvent';
import type { DependencyList } from 'react';
import type { EventArgs } from '@antv/x6';

export const useBlankClick = (
  callback: (args: EventArgs['blank:click']) => void,
  deps?: DependencyList,
) => {
  useGraphEvent('blank:click', callback, deps);
};
