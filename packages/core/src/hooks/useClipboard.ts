import type { Clipboard } from '@antv/x6-plugin-clipboard';
import { useCallback } from 'react';

import { useGraphInstance } from './useGraphInstance';
import { useGraphStore } from './useGraphStore';

export const useClipboard = () => {
  const graph = useGraphInstance();
  const addNodes = useGraphStore((state) => state.addNodes);
  const addEdges = useGraphStore((state) => state.addEdges);

  const isLoaded = useCallback(() => {
    const loaded = graph && graph.getPlugin('clipboard');
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
        cells.forEach((cell) => {
          if (cell.isNode()) {
            addNodes([cell.toJSON()], { silent: true });
          } else if (cell.isEdge()) {
            addEdges([cell.toJSON()], { silent: true });
          }
        });
      }
    },
    [graph, isLoaded, addNodes, addEdges],
  );

  return { copy, cut, paste };
};
