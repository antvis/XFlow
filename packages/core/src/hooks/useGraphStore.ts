import { useContext } from 'react';
import { useStore } from 'zustand';

import { StoreContext } from '../context';
import type { State, Actions } from '../store';

export const useGraphStore = <T>(selector: (state: State & Actions) => T) => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('can only be get inside the xflow component.');
  }
  return useStore(store, selector);
};
