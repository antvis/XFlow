import { useGraphEvent } from './useGraphEvent';
import type { DependencyList } from 'react';
import type { Selection } from '@antv/x6-plugin-selection';

export const useEdgeSelected = (
  callback: (args: Selection.EventArgs['edge:selected']) => void,
  deps?: DependencyList,
) => {
  useGraphEvent('edge:selected', callback, deps);
};
