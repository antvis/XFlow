import {
  ManaSyringe,
  DisposableCollection,
  NsGraph,
  Disposable,
  XFlowEdgeCommands,
} from '@antv/xflow-core'
import type {
  IModelService,
  IHookService,
  ICmdHooks,
  NsEdgeCmd,
  NsNodeCmd,
  IGraphCommandService,
} from '@antv/xflow-core'
import {
  IGraphCommandFactory,
  IHookContribution,
  IModelContribution,
  IGraphCommandContribution,
} from '@antv/xflow-core'
import type { Edge, Graph, Node } from '@antv/x6'
import type { EventArgs } from '@antv/x6/lib/graph/events'
import { HookHub } from '@antv/xflow-hook'
import { XFlowNode } from '../x6-extension/node'
import { XFlowEdge } from '../x6-extension/edge'
import { GRAPH_STATUS_INFO } from '../constants'
import { NsGraphStatusCommand } from './command'
import type { IProps } from '../interface'
import { LayoutEnum } from '../interface'
import { IComponentConfig } from '../interface'
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

export namespace DAG_DEFAULT_CONIFG {
  export const router = { name: 'manhattan' }
  export const connector = {
    name: 'rounded',
    args: { radius: 15 },
  }
}

export const ANT_PREFIX = 'ant'

export const getDagOptions = (props: IProps) => {
  const {
    layout,
    router = DAG_DEFAULT_CONIFG.router,
    connector = DAG_DEFAULT_CONIFG.connector,
  } = props

  const dagOptions: Graph.Options = {
    grid: false,
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
      sourceAnchor: layout ? layout === LayoutEnum.TOP_BOTTOM ? 'bottom' : 'right' : "center",
      //链接桩的位置 https://x6.antv.vision/zh/docs/api/registry/node-anchor
      targetAnchor: layout ? layout === LayoutEnum.TOP_BOTTOM ? 'center' : 'left' : "center",
      connectionPoint: 'anchor',
      snap: { radius: 20 },
      router: router,
      connector: connector,
      highlight: true,
      dangling: false,
      createEdge() {
        /* eslint-disable-next-line @typescript-eslint/no-this-alias */
        const graph = this
        const edge = new XFlowEdge({
          attrs: {
            line: {
              strokeDasharray: '5 5',
              stroke: '#888',
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

        const addEdge = (args: EventArgs['edge:connected']) => {
          const { isNew } = args
          const edgeCell = args.edge
          /** 没有edge:connected时，会导致graph.once的事件没有执行 */
          if (isNew && edgeCell.isEdge() && edgeCell === edge) {
            const portId = edgeCell.getTargetPortId()
            const targetNode = edgeCell.getTargetCell()
            if (targetNode && targetNode.isNode()) {
              targetNode.setPortProp(portId, 'connected', false)
              edgeCell.attr({
                line: {
                  strokeDasharray: '',
                  targetMarker: '',
                  stroke: '#d5d5d5',
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
        }
        graph.once('edge:connected', addEdge)
        return edge
      },
      validateEdge: args => {
        const { edge } = args
        return !!(edge?.target as any)?.port
      },
      // 是否触发交互事件
      validateMagnet({ magnet, cell }) {
        const inputPortInfo = cell.getData().ports.filter(portItem => portItem.type === NsGraph.AnchorType.INPUT)
        if (inputPortInfo.length > 0) {
          return magnet.getAttribute('port-group') !== inputPortInfo[0].group
        }
        return false
      },
      // 显示可用的链接桩
      validateConnection({ sourceView, targetView, sourceMagnet, targetMagnet }) {
        // 不允许连接到自己
        if (sourceView === targetView) {
          return false
        }

        if (!sourceMagnet || !targetMagnet) {
          return false
        }

        // 非自定义布局
        if (layout) {
          const targetPortType =
            layout === LayoutEnum.TOP_BOTTOM ? NsGraph.AnchorGroup.TOP : NsGraph.AnchorGroup.LEFT
          // 只能从上游节点的输出链接桩创建连接
          if (sourceMagnet.getAttribute('port-group') === targetPortType) {
            return false
          }

          // 只能连接到下游节点的输入桩
          if (targetMagnet.getAttribute('port-group') !== targetPortType) {
            return false
          }
        }

        // 判断源链接桩是否可连接
        const sourceNode = sourceView!.cell as any
        const sourcePortId = sourceMagnet.getAttribute('port')
        if (!sourcePortId) {
          return false
        }

        const sourcePort = sourceNode.getPort(sourcePortId)
        if (sourcePort.type !== NsGraph.AnchorType.OUTPUT) {
          return false
        }

        // 判断目标链接桩是否可连接
        const targetNode = targetView!.cell as any
        const targetPortId = targetMagnet.getAttribute('port')!
        if (!targetPortId) {
          return false
        }

        const targetPort = targetNode.getPort(targetPortId)
        if (targetPort.type !== NsGraph.AnchorType.INPUT) {
          return false
        }

        return !(targetPort && targetPort.connected)
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
    scaling: {
      max: 1.05,
      min: 0.01,
    },
  }
  return dagOptions
}

/**
 * 内置的hook contribution
 * 处理 config上的runtime的注册项
 */
@ManaSyringe.singleton({
  contrib: [IHookContribution, IModelContribution, IGraphCommandContribution],
})
export class DagHooksContribution
  implements IHookContribution<ICmdHooks>, IGraphCommandContribution, IModelContribution {
  /** IGraphCommandFactory */
  @ManaSyringe.inject(IGraphCommandFactory)
  commandFactory: IGraphCommandFactory

  /** propConfig */
  @ManaSyringe.inject(IComponentConfig)
  propConfig: IComponentConfig

  /** 注册Command */
  registerGraphCommands = (commands: IGraphCommandService) => {
    commands.registerCommand(NsGraphStatusCommand.command, {
      createCommand: this.commandFactory,
    })
  }
  /** 注册Hub */
  toDispose = new DisposableCollection()
  /** 注册Hook */
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
          const { layout = LayoutEnum.TOP_BOTTOM } = await this.propConfig.getConfig()
          const cellFactory: NsEdgeCmd.AddEdge.IArgs['cellFactory'] = async edgeConfig => {
            const cell = new XFlowEdge({
              ...edgeConfig,
              id: edgeConfig.id,
              source: {
                cell: edgeConfig.source,
                port: edgeConfig.sourcePortId,
                anchor: {
                  name: layout === LayoutEnum.TOP_BOTTOM ? 'bottom' : 'right',
                },
              },
              target: {
                cell: edgeConfig.target,
                port: edgeConfig.targetPortId,
                anchor: {
                  name: layout === LayoutEnum.TOP_BOTTOM ? 'center' : 'right',
                },
              },
              attrs: {
                line: {
                  strokeDasharray: '',
                  targetMarker: '',
                  stroke: '#d5d5d5',
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
            if (res && res.edgeCell) {
              const targetNode = res.edgeCell.getTargetCell() as Node
              const portId = res.edgeCell.getTargetPortId()
              targetNode.setPortProp(portId, 'connected', true)
            }
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
          const props = await this.propConfig.getConfig()
          const dagOptions = getDagOptions(props)
          Object.assign(args, dagOptions)
        },
      }),
    ]
    toDispose.pushAll(disposables)
    return Disposable.create(() => { })
  }

  /** 注册Hub */
  registerHookHub = async (registry: IHookService) => {
    return registry.registerHookHub(NsGraphStatusCommand.hookKey, new HookHub())
  }

  /** 扩展Model */
  registerModel(registry: IModelService): void {
    /** node status map */
    registry.registerModel<GRAPH_STATUS_INFO.IState>({
      id: GRAPH_STATUS_INFO.id,
      getInitialValue: () => ({
        statusMap: new Map(),
        subscription: new DisposableCollection(),
        graphStatus: GRAPH_STATUS_INFO.StatusEnum.DEFAULT,
      }),
      watchChange: async self => {
        const { subscription } = await self.getValidValue()
        return subscription
      },
    })
  }
}



