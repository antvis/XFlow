import { useGraphEvent } from './useGraphEvent';
import type { DependencyList } from 'react';
import type { EventArgs } from '@antv/x6';

export const useBlankContextmenu = (
  callback: (args: EventArgs['blank:contextmenu']) => void,
  deps?: DependencyList,
) => {
  useGraphEvent('blank:contextmenu', callback, deps);
};
