import type { Clipboard } from '@antv/x6-plugin-clipboard';
import { useCallback } from 'react';

import { useGraphInstance } from './useGraphInstance';
import { useLoaded } from './useLoaded';

export const useClipboard = () => {
  const graph = useGraphInstance();
  const { isLoaded } = useLoaded('clipboard');

  const copy = useCallback(
    (ids: string[], copyOptions?: Clipboard.CopyOptions) => {
      if (isLoaded() && graph) {
        const cells = ids.map((id) => graph?.getCellById(id)).filter(Boolean);
        graph.copy(cells, copyOptions);
      }
    },
    [graph, isLoaded],
  );

  const cut = useCallback(
    (ids: string[], cutOptions?: Clipboard.CopyOptions) => {
      if (isLoaded() && graph) {
        const cells = ids.map((id) => graph?.getCellById(id)).filter(Boolean);
        graph.cut(cells, cutOptions);
      }
    },
    [graph, isLoaded],
  );

  const paste = useCallback(
    (pasteOptions?: Clipboard.PasteOptions) => {
      if (isLoaded() && graph) {
        const cells = graph.paste(pasteOptions);
        return cells;
      }
      return [];
    },
    [graph, isLoaded],
  );

  return { copy, cut, paste };
};
