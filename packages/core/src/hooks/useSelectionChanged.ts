import { useGraphEvent } from './useGraphEvent';
import type { Selection } from '@antv/x6-plugin-selection';
import type { DependencyList } from 'react';

export const useSelectionChanged = (
  callback: (args: Selection.EventArgs['selection:changed']) => void,
  deps?: DependencyList,
) => {
  useGraphEvent('selection:changed', callback, deps);
};
