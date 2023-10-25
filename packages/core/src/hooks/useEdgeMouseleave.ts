import { useGraphEvent } from './useGraphEvent';
import type { DependencyList } from 'react';
import type { EdgeView } from '@antv/x6';

export const useEdgeMouseleave = (
  callback: (args: EdgeView.EventArgs['edge:mouseleave']) => void,
  deps?: DependencyList,
) => {
  useGraphEvent('edge:mouseleave', callback, deps);
};
