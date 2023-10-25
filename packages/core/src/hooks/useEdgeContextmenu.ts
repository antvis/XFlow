import { useGraphEvent } from './useGraphEvent';
import type { DependencyList } from 'react';
import type { EdgeView } from '@antv/x6';

export const useEdgeContextmenu = (
  callback: (args: EdgeView.EventArgs['edge:contextmenu']) => void,
  deps?: DependencyList,
) => {
  useGraphEvent('edge:contextmenu', callback, deps);
};
