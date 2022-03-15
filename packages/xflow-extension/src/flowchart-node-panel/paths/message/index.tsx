import { createPath } from '../../utils'
import { NODE_PADDING } from '../../constants'
import { getConfig } from '../utils'

export const MessageNodePath = props => {
  const { width, height } = getConfig(props)

  const path = [
    ['M', NODE_PADDING, NODE_PADDING],
    ['L', width - NODE_PADDING, NODE_PADDING],
    ['L', width - NODE_PADDING, height - NODE_PADDING],
    ['L', NODE_PADDING, height - NODE_PADDING],
    ['Z'],
  ]

  const path2 = [
    ['M', NODE_PADDING, NODE_PADDING],
    ['L', width / 2, height / 2],
    ['L', width - NODE_PADDING, NODE_PADDING],
    ['Z'],
  ]
  return [createPath(path), createPath(path2)]
}
