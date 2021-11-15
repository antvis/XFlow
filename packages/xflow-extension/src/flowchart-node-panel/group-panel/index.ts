import { GroupNode } from './group'
import { GROUP_NODE_RENDER_ID } from '../constants'

export const setGroupRender = config => {
  config.setNodeRender(GROUP_NODE_RENDER_ID, GroupNode)
}
