import { useGraphEvent } from './useGraphEvent';
import type { DependencyList } from 'react';
import type { EdgeView } from '@antv/x6';

export const useEdgeMouseenter = (
  callback: (args: EdgeView.EventArgs['edge:mouseenter']) => void,
  deps?: DependencyList,
) => {
  useGraphEvent('edge:mouseenter', callback, deps);
};
