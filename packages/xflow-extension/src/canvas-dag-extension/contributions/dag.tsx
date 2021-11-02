import { singleton } from 'mana-syringe'
import { DisposableCollection, NsGraph, Disposable, XFlowEdgeCommands } from '@antv/xflow-core'
import type { ICmdHooks, NsEdgeCmd, NsNodeCmd } from '@antv/xflow-core'
import { IHookContribution } from '@antv/xflow-core'
import { XFlowNode } from '../x6-extension/node'
import { XFlowEdge, EDGE_PATH_TYPE } from '../x6-extension/edge'
import type { Edge, Graph, Node } from '@antv/x6'

export namespace NsAddEdgeEvent {
  export const EVENT_NAME = 'ADD_EDGE_CMD_EVENT'
  export interface IArgs {
    targetPortId: string
    sourcePortId: string
    source: string
    target: string
    edge: Edge
  }
}

export const ANT_PREFIX = 'ant'

export const dagOptions: Graph.Options = {
  keyboard: {
    enabled: true,
  },
  // 点选/框选配置（详细文档：https://X6.antv.vision/zh/docs/tutorial/basic/selection）
  selecting: {
    enabled: true,
    multiple: true,
    selectCellOnMoved: true,
    showNodeSelectionBox: false,
    // 框选可以选中edge
    rubberEdge: true,
    // 框选可以选中node
    rubberNode: true,
    movable: true,
  },
  connecting: {
    //链接桩的位置 https://x6.antv.vision/zh/docs/api/registry/node-anchor
    sourceAnchor: 'bottom',
    //链接桩的位置 https://x6.antv.vision/zh/docs/api/registry/node-anchor
    targetAnchor: 'center',
    connectionPoint: 'anchor',
    snap: { radius: 20 },
    router: { name: 'manhattan' },
    connector: {
      name: EDGE_PATH_TYPE.VERTICAL_NODE,
      args: {
        radius: 15,
      },
    },
    highlight: true,
    dangling: false,
    createEdge() {
      /* eslint-disable-next-line @typescript-eslint/no-this-alias */
      const graph = this
      const edge = new XFlowEdge({
        attrs: {
          line: {
            strokeDasharray: '5 5',
            stroke: '#808080',
            strokeWidth: 1,
            targetMarker: {
              name: 'block',
              args: {
                size: '6',
              },
            },
          },
        },
      })
      graph.once('edge:connected', args => {
        const { isNew } = args
        const edgeCell = args.edge
        if (isNew && edgeCell.isEdge()) {
          const portId = edgeCell.getTargetPortId()
          const targetNode = edgeCell.getTargetCell()
          if (targetNode && targetNode.isNode()) {
            targetNode.setPortProp(portId, 'connected', false)
            edgeCell.attr({
              line: {
                strokeDasharray: '',
                targetMarker: '',
                stroke: '#808080',
              },
            })
            const targetPortId = edgeCell.getTargetPortId()
            const sourcePortId = edgeCell.getSourcePortId()
            const sourceCellId = edgeCell.getSourceCellId()
            const targetCellId = edgeCell.getTargetCellId()
            graph.trigger(NsAddEdgeEvent.EVENT_NAME, {
              targetPortId,
              sourcePortId,
              source: sourceCellId,
              target: targetCellId,
              edge: edge,
            } as NsAddEdgeEvent.IArgs)
          }
        }
      })
      return edge
    },
    validateEdge: args => {
      const { edge } = args
      return !!(edge?.target as any)?.port
    },
    // 是否触发交互事件
    validateMagnet({ magnet }) {
      return magnet.getAttribute('port-group') !== NsGraph.AnchorGroup.TOP
    },
    // 显示可用的链接桩
    validateConnection({ sourceView, targetView, sourceMagnet, targetMagnet }) {
      // 不允许连接到自己
      if (sourceView === targetView) {
        return false
      }
      // 只能从上游节点的输出链接桩创建连接
      if (!sourceMagnet || sourceMagnet.getAttribute('port-group') === NsGraph.AnchorGroup.TOP) {
        return false
      }
      // 只能连接到下游节点的输入桩
      if (!targetMagnet || targetMagnet.getAttribute('port-group') !== NsGraph.AnchorGroup.TOP) {
        return false
      }
      const node = targetView!.cell as any
      // 判断目标链接桩是否可连接
      const portId = targetMagnet.getAttribute('port')!
      const port = node.getPort(portId)
      return !(port && port.connected)
    },
  },
  highlighting: {
    nodeAvailable: {
      name: 'className',
      args: {
        className: 'available',
      },
    },
    magnetAvailable: {
      name: 'className',
      args: {
        className: 'available',
      },
    },
    magnetAdsorbed: {
      name: 'className',
      args: {
        className: 'adsorbed',
      },
    },
  },
}

/**
 * 内置的hook contribution
 * 处理 config上的runtime的注册项
 */
@singleton({ contrib: IHookContribution })
export class DagHooksContribution implements IHookContribution<ICmdHooks> {
  toDispose = new DisposableCollection()

  registerHookHub = async () => {
    return Disposable.create(() => {})
  }

  registerHook = async (hooks: ICmdHooks) => {
    const toDispose = new DisposableCollection()
    const disposables = [
      hooks.addNode.registerHook({
        name: 'dag-add-node',
        handler: async args => {
          const cellFactory: NsNodeCmd.AddNode.IArgs['cellFactory'] = async nodeConfig => {
            const node = new XFlowNode({
              ...nodeConfig,
            })
            return node
          }
          args.cellFactory = cellFactory
        },
      }),
      hooks.addEdge.registerHook({
        name: 'dag-add-edge',
        handler: async args => {
          const cellFactory: NsEdgeCmd.AddEdge.IArgs['cellFactory'] = async edgeConfig => {
            const cell = new XFlowEdge({
              id: edgeConfig.id,
              source: {
                cell: edgeConfig.source,
                port: edgeConfig.sourcePortId,
                anchor: {
                  name: 'bottom',
                },
              },
              target: {
                cell: edgeConfig.target,
                port: edgeConfig.targetPortId,
                anchor: {
                  name: 'center',
                },
              },
              attrs: {
                line: {
                  strokeDasharray: '',
                  targetMarker: '',
                  stroke: '#808080',
                  strokeWidth: 1,
                },
              },
              data: { ...edgeConfig },
            })
            return cell
          }
          args.cellFactory = cellFactory
        },
      }),
      hooks.addEdge.registerHook({
        name: 'after add edge, set target port props',
        handler: async (handlerArgs, handler) => {
          const main = async args => {
            const res = await handler(args)
            const targetNode = res.edgeCell.getTargetCell() as Node
            const portId = res.edgeCell.getTargetPortId()
            targetNode.setPortProp(portId, 'connected', true)
            return res
          }
          return main
        },
      }),
      hooks.delEdge.registerHook({
        name: 'afetr del edge, reset target node port props',
        handler: async (args, handler) => {
          const newHandler = async handlerArgs => {
            const result: NsEdgeCmd.DelEdge.IResult = await handler(handlerArgs)
            const { targetCell, targetPortId } = result
            if (targetCell && targetCell.isNode() && targetPortId) {
              targetCell.setPortProp(targetPortId, 'connected', false)
            }
            return result
          }
          return newHandler
        },
      }),
      hooks.afterGraphInit.registerHook({
        name: 'call add edge to replace temp edge',
        handler: async handlerArgs => {
          const { commandService, graph } = handlerArgs
          graph.on(NsAddEdgeEvent.EVENT_NAME, (args: NsAddEdgeEvent.IArgs) => {
            commandService.executeCommand(XFlowEdgeCommands.ADD_EDGE.id, { edgeConfig: args })
            args.edge.remove()
          })
        },
      }),
      hooks.graphOptions.registerHook({
        name: 'dag-extension-x6-options',
        handler: async args => {
          Object.assign(args, dagOptions)
        },
      }),
    ]
    toDispose.pushAll(disposables)
    return Disposable.create(() => {})
  }
}
