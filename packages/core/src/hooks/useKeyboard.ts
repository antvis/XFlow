import { useEffect } from 'react';

import { useGraphInstance } from './useGraphInstance';
import { useLatest } from './useLatest';

export const useKeyboard = (
  key: string | string[],
  callback: (e: KeyboardEvent) => void,
  action?: 'keypress' | 'keydown' | 'keyup',
) => {
  const cbRef = useLatest(callback);
  const graph = useGraphInstance();

  useEffect(() => {
    if (graph) {
      cbRef.current = callback;
      graph.bindKey(
        key,
        (e) => {
          cbRef.current(e);
        },
        action,
      );
    }

    return () => {
      if (graph) {
        graph.unbindKey(key);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [graph]);
};
