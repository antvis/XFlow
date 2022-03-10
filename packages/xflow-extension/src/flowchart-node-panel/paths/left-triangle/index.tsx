import { createPath } from '../../utils'
import { NODE_PADDING } from '../../constants'
import { getConfig } from '../utils'

export const LeftTriangleNodePath = props => {
  const { width, height } = getConfig(props)

  const path = [
    ['M', width - NODE_PADDING, NODE_PADDING], // 上
    ['L', NODE_PADDING, height / 2], // 左
    ['L', width - NODE_PADDING, height - NODE_PADDING], // 下
    ['Z'],
  ]

  return [createPath(path)]
}
