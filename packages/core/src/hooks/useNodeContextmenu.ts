import { useGraphEvent } from './useGraphEvent';
import type { DependencyList } from 'react';
import type { NodeView } from '@antv/x6';

export const useNodeContextmenu = (
  callback: (args: NodeView.EventArgs['node:contextmenu']) => void,
  deps?: DependencyList,
) => {
  useGraphEvent('node:contextmenu', callback, deps);
};
