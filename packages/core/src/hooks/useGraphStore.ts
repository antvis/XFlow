import { useContext } from 'react';
import { useStore } from 'zustand';

import { StoreContext } from '../context';
import type { State, Actions } from '../store';

export const useGraphStore = <T>(selector: (state: State & Actions) => T) => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('Missing StoreProvider');
  }
  return useStore(store, selector);
};
