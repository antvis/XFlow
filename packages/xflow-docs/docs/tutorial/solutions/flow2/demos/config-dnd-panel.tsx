import { uuidv4 } from '@antv/xflow'
import { XFlowNodeCommands } from '@antv/xflow'

import type { NsNodeCmd } from '@antv/xflow'
import type { NsNodeTreePanel } from '@antv/xflow'

export const onNodeDrop: NsNodeTreePanel.IOnNodeDrop = async nodeConfig => {
  console.log(nodeConfig)
}
