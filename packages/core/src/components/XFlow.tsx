import { type PropsWithChildren, type FC } from 'react';

import { GraphProvider, StoreProvider } from '../context';
import '../styles/index.less';

const XFlow: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StoreProvider>
      <GraphProvider>{children}</GraphProvider>
    </StoreProvider>
  );
};

export { XFlow };
