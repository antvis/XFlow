import { NODE_PADDING } from '../../constants'
import { getConfig } from '../utils'
import { createPath } from '../../utils'
export const EllipseNodePath = props => {
  const { width, height } = getConfig(props)
  const path = [
    ['M', NODE_PADDING, height / 2],
    ['Q', NODE_PADDING, NODE_PADDING, width / 2, NODE_PADDING],
    ['Q', width - NODE_PADDING, NODE_PADDING, width - NODE_PADDING, height / 2],
    ['Q', width - NODE_PADDING, height - NODE_PADDING, width / 2, height - 2],
    ['Q', NODE_PADDING, height - NODE_PADDING, NODE_PADDING, height / 2],
  ]
  return [createPath(path)]
}
