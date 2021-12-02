import type { NsNodeCmd, IGraphCommandService, NsGraph } from '@antv/xflow'
import { XFlowNodeCommands, uuidv4 } from '@antv/xflow'

export const addNode = (cmd: IGraphCommandService, nodeConfig: NsGraph.INodeConfig) => {
  return cmd.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {
    nodeConfig: { ...nodeConfig, id: uuidv4(), width: 190, height: 32 },
  })
}
