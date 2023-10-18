import { useGraphEvent } from './useGraphEvent';
import type { DependencyList } from 'react';
import type { EdgeView } from '@antv/x6';

export const useEdgeConnected = (
  callback: (args: EdgeView.EventArgs['edge:connected']) => void,
  deps?: DependencyList,
) => {
  useGraphEvent('edge:connected', callback, deps);
};
