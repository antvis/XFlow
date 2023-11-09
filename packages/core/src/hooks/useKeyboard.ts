import { Keyboard } from '@antv/x6-plugin-keyboard';
import { useEffect, useRef } from 'react';

import { useGraphInstance } from './useGraphInstance';

export const useBindKey = () => {
  const graph = useGraphInstance();
  const ref = useRef<Keyboard>();

  graph?.bindKey();
  useEffect(() => {
    if (graph && !ref.current) {
      ref.current = new Keyboard({
        enabled: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [graph]);

  return { clipboard: ref.current };
};
