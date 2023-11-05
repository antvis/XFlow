import { createContext, useRef, type FC, type PropsWithChildren } from 'react';
import { createGraphStore, type GraphStore } from '../store';

export const StoreContext = createContext<GraphStore | null>(null);

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const storeRef = useRef<GraphStore>();
  if (!storeRef.current) {
    storeRef.current = createGraphStore();
  }
  return (
    <StoreContext.Provider value={storeRef.current}>{children}</StoreContext.Provider>
  );
};
