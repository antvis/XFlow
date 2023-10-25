import { useGraphEvent } from './useGraphEvent';
import type { DependencyList } from 'react';
import type { NodeView } from '@antv/x6';

export const useNodeClick = (
  callback: (args: NodeView.EventArgs['node:click']) => void,
  deps?: DependencyList,
) => {
  useGraphEvent('node:click', callback, deps);
};
