import { useContext } from 'react';

import { GraphContext } from '../context/GraphContext';

export const useGraphInstance = () => {
  const { graph } = useContext(GraphContext);

  return graph;
};
