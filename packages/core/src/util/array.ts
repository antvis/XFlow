import isEqual from 'lodash.isequal';
import type { DependencyList } from 'react';

export const depsEqual = (aDeps: DependencyList = [], bDeps: DependencyList = []) => {
  return isEqual(aDeps, bDeps);
};
