import { createPath } from '../../utils'
import { NODE_PADDING } from '../../constants'
import { getConfig } from '../utils'

export const CardNodePath = props => {
  const { width, height } = getConfig(props)

  const path = [
    ['M', width / 5, NODE_PADDING],
    ['L', width - NODE_PADDING, NODE_PADDING],
    ['L', width - NODE_PADDING, height - NODE_PADDING],
    ['L', NODE_PADDING, height - NODE_PADDING],
    ['L', NODE_PADDING, height / 3], // 缺口线条
    ['Z'],
  ]

  return [createPath(path)]
}
