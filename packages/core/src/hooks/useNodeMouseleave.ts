import { useGraphEvent } from './useGraphEvent';
import type { DependencyList } from 'react';
import type { NodeView } from '@antv/x6';

export const useNodeMouseleave = (
  callback: (args: NodeView.EventArgs['node:mouseleave']) => void,
  deps?: DependencyList,
) => {
  useGraphEvent('node:mouseleave', callback, deps);
};
