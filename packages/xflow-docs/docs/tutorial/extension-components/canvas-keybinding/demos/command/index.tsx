/**
 * title: 触发Command命令
 * desc:  通过调用Command命令可以实现对图的交互:删除(backspace)/复制(ctrl+c)/粘贴(ctrl+v)
 */
import React from 'react'
import type { IAppLoad, NsGraphCmd, NsEdgeCmd, NsNodeCmd } from '@antv/xflow'
import {
  XFlow,
  XFlowCanvas,
  KeyBindings,
  MODELS,
  XFlowGraphCommands,
  XFlowEdgeCommands,
  XFlowNodeCommands,
  createGraphConfig,
  createKeybindingConfig,
} from '@antv/xflow'
import { getGraphData } from './mock'
import './index.less'
import type { Node, Edge } from '@antv/x6'

/**  Demo Props  */
export interface IDemoProps {
  anything: string
}

/**  graphConfig：配置Graph  */
export const useGraphConfig = createGraphConfig<IDemoProps>(graphConfig => {
  graphConfig.setDefaultNodeRender(props => {
    return <div className="react-node"> {props.data.label} </div>
  })
})

/**  keybindings  */
export const useKeybindingConfig = createKeybindingConfig((config, getProps) => {
  config.setKeybindingFunc(reg => {
    return reg.registerKeybinding([
      {
        id: 'delete node or edge',
        keybinding: 'backspace',
        callback: async function (item, modelService, cmd, e) {
          const cells = await MODELS.SELECTED_CELLS.useValue(modelService)
          const nodes = cells.filter((cell): cell is Edge => cell.isEdge())
          const edges = cells.filter((cell): cell is Node => cell.isNode())
          // 调用删除Edge的Command
          const delEdge = (cell: Edge) => {
            return cmd.executeCommand<NsEdgeCmd.DelEdge.IArgs>(XFlowEdgeCommands.DEL_EDGE.id, {
              edgeConfig: { ...cell.getData(), id: cell.id },
            })
          }
          // 调用删除Node的Command
          const delNode = (cell: Node) => {
            return cmd.executeCommand<NsNodeCmd.DelNode.IArgs>(XFlowNodeCommands.DEL_NODE.id, {
              nodeConfig: {
                ...cell.getData(),
                id: cell.id,
              },
            })
          }
          if (cells.length === 0) {
            console.warn('没有选中的节点')
          }
          // 先删除edges
          await Promise.all(nodes.map(cell => delEdge(cell)))
          // 先删除nodes
          await Promise.all(edges.map(cell => delNode(cell)))
        },
      },
      {
        id: 'copy',
        keybinding: ['command+c', 'ctrl+c'],
        callback: async function (item, modelService, cmd, e) {
          e.preventDefault()
          console.log(item)
          cmd.executeCommand<
            NsGraphCmd.GraphCopySelection.IArgs,
            NsGraphCmd.GraphCopySelection.IResult
          >(XFlowGraphCommands.GRAPH_COPY.id, {})
        },
      },
      {
        id: 'paste',
        keybinding: ['command+v', 'ctrl+v'],
        callback: async function (item, modelService, cmd, e) {
          e.preventDefault()
          cmd.executeCommand<
            NsGraphCmd.GraphPasteSelection.IArgs,
            NsGraphCmd.GraphPasteSelection.IResult
          >(XFlowGraphCommands.GRAPH_PASTE.id, {})
        },
      },
    ])
  })
})

const XFlowDemo: React.FC<IDemoProps> = props => {
  const graphConfig = useGraphConfig(props)
  const keybindingConfig = useKeybindingConfig(props)

  const onLoad: IAppLoad = async app => {
    // 计算布局
    const res = await app.executeCommand<
      NsGraphCmd.GraphLayout.IArgs,
      NsGraphCmd.GraphLayout.IResult
    >(XFlowGraphCommands.GRAPH_LAYOUT.id, {
      layoutType: 'dagre',
      layoutOptions: {
        type: 'dagre',
        /** 布局方向 */
        rankdir: 'TB',
        /** 节点间距 */
        nodesep: 60,
        /** 层间距 */
        ranksep: 30,
      },
      graphData: getGraphData(),
    })
    const { graphData } = res.contextProvider().getResult()
    // render
    await app.executeCommand<NsGraphCmd.GraphRender.IArgs>(XFlowGraphCommands.GRAPH_RENDER.id, {
      graphData: graphData,
    })
    // 居中
    await app.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {
      factor: 'real',
    })
  }

  return (
    <XFlow onLoad={onLoad} className="xflow-workspace">
      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 0, right: 0 }}>
        <KeyBindings config={keybindingConfig} />
      </XFlowCanvas>
    </XFlow>
  )
}

export default XFlowDemo
