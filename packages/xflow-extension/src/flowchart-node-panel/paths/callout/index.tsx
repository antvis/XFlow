import { createPath } from '../../utils';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const CalloutNodePath = (props) => {
  const { width, height } = getConfig(props);

  const path = [
    ['M', NODE_PADDING, NODE_PADDING],
    ['L', width - NODE_PADDING, NODE_PADDING],
    ['L', width - NODE_PADDING, height - height / 4],
    ['L', 0.4 * width, height - height / 4],
    ['L', 0.25 * width, height - NODE_PADDING],
    ['L', 0.3 * width, height - height / 4],
    ['L', NODE_PADDING, height - height / 4],
    ['Z'],
  ];

  return [createPath(path)];
};

