import { createPath } from '../../utils';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const RightTrapezoidNodePath = (props) => {
  const { width, height } = getConfig(props);

  const path = [
    ['M', NODE_PADDING, NODE_PADDING], // top-left
    ['L', width / 2, NODE_PADDING], // top-right
    ['L', width - NODE_PADDING, height - NODE_PADDING], // bottom-right
    ['L', NODE_PADDING, height - NODE_PADDING], // bottom-left
    ['Z'],
  ];

  return [createPath(path)];
};
