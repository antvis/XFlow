import { Export } from '@antv/x6-plugin-export';
import { useCallback } from 'react';

import { useGraphInstance } from './useGraphInstance';
import { useLoaded } from './useLoaded';

export const useExport = () => {
  const graph = useGraphInstance();
  const { isLoaded } = useLoaded('export');

  const ensure = useCallback(() => {
    return isLoaded(() => {
      graph?.use(new Export());
      return true;
    });
  }, [graph, isLoaded]);

  const exportPNG = useCallback(
    (fileName = 'chart', options: Export.ToImageOptions = {}) => {
      if (ensure() && graph) {
        graph.exportPNG(fileName, options);
      }
    },
    [graph, ensure],
  );

  const exportJPEG = useCallback(
    (fileName = 'chart', options: Export.ToImageOptions = {}) => {
      if (ensure() && graph) {
        graph.exportJPEG(fileName, options);
      }
    },
    [graph, ensure],
  );

  const exportSVG = useCallback(
    (fileName = 'chart', options: Export.ToSVGOptions = {}) => {
      if (ensure() && graph) {
        graph.exportSVG(fileName, options);
      }
    },
    [graph, ensure],
  );

  return { exportPNG, exportJPEG, exportSVG };
};
