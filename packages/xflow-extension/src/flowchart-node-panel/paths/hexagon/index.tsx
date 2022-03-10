import { createPath } from '../../utils';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

// 六边形
export const HexagonNodePath = (props) => {
  const { width, height } = getConfig(props);

  const path = [
    ['M', width / 4, NODE_PADDING],
    ['L', width - width / 4, NODE_PADDING],
    ['L', width - NODE_PADDING, height / 4],
    ['L', width - NODE_PADDING, height - height / 4],
    ['L', width - width / 4, height - NODE_PADDING],
    ['L', width / 4, height - NODE_PADDING],
    ['L', NODE_PADDING, height - height / 4],
    ['L', NODE_PADDING, height / 4],
    ['Z'],
  ];

  return [createPath(path)];
};
