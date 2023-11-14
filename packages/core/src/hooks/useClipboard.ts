import type { Clipboard } from '@antv/x6-plugin-clipboard';
import { useCallback } from 'react';

import { useGraphInstance } from './useGraphInstance';

export const useClipboard = () => {
  const graph = useGraphInstance();

  const isLoaded = useCallback(() => {
    const loaded = !!(graph && graph.getPlugin('clipboard'));
    if (!loaded) {
      console.warn('clipboard is not loaded, please use clipboard component first');
    }
    return loaded;
  }, [graph]);

  const copy = useCallback(
    (ids: string[], copyOptions?: Clipboard.CopyOptions) => {
      if (graph && isLoaded()) {
        const cells = ids.map((id) => graph?.getCellById(id)).filter(Boolean);
        graph.copy(cells, copyOptions);
      }
    },
    [graph, isLoaded],
  );

  const cut = useCallback(
    (ids: string[], cutOptions?: Clipboard.CopyOptions) => {
      if (graph && isLoaded()) {
        const cells = ids.map((id) => graph?.getCellById(id)).filter(Boolean);
        graph.cut(cells, cutOptions);
      }
    },
    [graph, isLoaded],
  );

  const paste = useCallback(
    (pasteOptions?: Clipboard.PasteOptions) => {
      if (graph && isLoaded()) {
        const cells = graph.paste(pasteOptions);
        return cells;
      }
      return [];
    },
    [graph, isLoaded],
  );

  return { copy, cut, paste };
};
