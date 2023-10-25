import { useGraphEvent } from './useGraphEvent';
import type { DependencyList } from 'react';
import type { NodeView } from '@antv/x6';

export const useNodeMoving = (
  callback: (args: NodeView.EventArgs['node:moving']) => void,
  deps?: DependencyList,
) => {
  useGraphEvent('node:moving', callback, deps);
};
