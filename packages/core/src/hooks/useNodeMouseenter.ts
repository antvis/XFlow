import { useGraphEvent } from './useGraphEvent';
import type { DependencyList } from 'react';
import type { NodeView } from '@antv/x6';

export const useNodeMouseenter = (
  callback: (args: NodeView.EventArgs['node:mouseenter']) => void,
  deps?: DependencyList,
) => {
  useGraphEvent('node:mouseenter', callback, deps);
};
