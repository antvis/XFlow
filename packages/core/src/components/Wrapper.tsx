import type { FC, PropsWithChildren } from 'react';
import React from 'react';

import { useGraphInstance } from '../hooks/useGraphInstance';

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  const graph = useGraphInstance();

  if (graph) {
    return <>{children}</>;
  }

  return null;
};

export { Wrapper };
