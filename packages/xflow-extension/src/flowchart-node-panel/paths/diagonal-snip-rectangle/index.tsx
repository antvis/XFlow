import { createPath } from '../../utils';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const DiagonalSnipRectangleNodePath = (props) => {
  const { width, height } = getConfig(props);

  const path = [
    ['M', width / 8, NODE_PADDING],
    ['L', width - NODE_PADDING, NODE_PADDING],
    ['L', width - NODE_PADDING, height - height / 8],
    ['L', width - width / 8, height - NODE_PADDING],
    ['L', NODE_PADDING, height - NODE_PADDING],
    ['L', NODE_PADDING, height / 8],
    ['Z'],
  ];

  return [createPath(path)];
};
