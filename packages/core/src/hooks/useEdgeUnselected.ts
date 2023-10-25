import { useGraphEvent } from './useGraphEvent';
import type { DependencyList } from 'react';
import type { Selection } from '@antv/x6-plugin-selection';

export const useEdgeUnselected = (
  callback: (args: Selection.EventArgs['edge:unselected']) => void,
  deps?: DependencyList,
) => {
  useGraphEvent('edge:unselected', callback, deps);
};
