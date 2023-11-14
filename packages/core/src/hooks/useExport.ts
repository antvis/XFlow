import { Export } from '@antv/x6-plugin-export';
import { useCallback } from 'react';

import { useGraphInstance } from './useGraphInstance';

export const useExport = () => {
  const graph = useGraphInstance();

  const isLoaded = useCallback(() => {
    if (graph) {
      if (!graph.getPlugin('export')) {
        graph.use(new Export());
      }
      return true;
    }

    return false;
  }, [graph]);

  const exportPNG = useCallback(
    (fileName = 'chart', options: Export.ToImageOptions = {}) => {
      if (graph && isLoaded()) {
        graph.exportPNG(fileName, options);
      }
    },
    [graph, isLoaded],
  );

  const exportJPEG = useCallback(
    (fileName = 'chart', options: Export.ToImageOptions = {}) => {
      if (graph && isLoaded()) {
        graph.exportJPEG(fileName, options);
      }
    },
    [graph, isLoaded],
  );

  const exportSVG = useCallback(
    (fileName = 'chart', options: Export.ToSVGOptions = {}) => {
      if (graph && isLoaded()) {
        graph.exportSVG(fileName, options);
      }
    },
    [graph, isLoaded],
  );

  return { exportPNG, exportJPEG, exportSVG };
};
