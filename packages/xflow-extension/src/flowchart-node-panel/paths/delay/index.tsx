import { createPath } from '../../utils'
import { NODE_PADDING } from '../../constants'
import { getConfig } from '../utils'

export const DelayNodePath = props => {
  const { width, height } = getConfig(props)
  const rx = Math.min(height, width) / 2
  const path = [
    ['M', NODE_PADDING, NODE_PADDING], // top-left
    ['L', width - rx, NODE_PADDING], // top-right
    ['Q', width - NODE_PADDING, NODE_PADDING, width - NODE_PADDING, height / 2],
    ['Q', width - NODE_PADDING, height - NODE_PADDING, width - rx, height - NODE_PADDING],
    ['L', NODE_PADDING, height - NODE_PADDING], // bottom-left
    ['Z'],
  ]

  return [createPath(path)]
}
