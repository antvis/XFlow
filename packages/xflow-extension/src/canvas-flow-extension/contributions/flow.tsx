import type { Graph } from '@antv/x6'
import type { ICmdHooks, NsEdgeCmd, NsNodeCmd } from '@antv/xflow-core'
import { ManaSyringe, DisposableCollection, Disposable } from '@antv/xflow-core'
import { IHookContribution } from '@antv/xflow-core'
import { XFlowNode } from '../x6-extension/node'
import { Shape } from '@antv/x6'

export const flowOptions: Graph.Options = {
  grid: true,
  mousewheel: {
    enabled: true,
    zoomAtMousePosition: true,
    modifiers: 'ctrl',
    minScale: 0.5,
    maxScale: 3,
  },
  connecting: {
    router: 'manhattan',
    connector: {
      name: 'rounded',
      args: {
        radius: 8,
      },
    },
    anchor: 'center',
    connectionPoint: 'anchor',
    allowBlank: false,
    snap: {
      radius: 20,
    },
    createEdge() {
      return new Shape.Edge({
        attrs: {
          line: {
            stroke: '#A2B1C3',
            strokeWidth: 2,
            targetMarker: {
              name: 'block',
              width: 12,
              height: 8,
            },
          },
        },
        zIndex: 0,
      })
    },
    validateConnection({ targetMagnet }) {
      return !!targetMagnet
    },
  },
  highlighting: {
    magnetAdsorbed: {
      name: 'stroke',
      args: {
        attrs: {
          fill: '#5F95FF',
          stroke: '#5F95FF',
        },
      },
    },
  },
  resizing: true,
  rotating: true,
  selecting: {
    enabled: true,
    rubberband: true,
    showNodeSelectionBox: true,
    modifiers: 'shift',
  },
  snapline: true,
  keyboard: true,
  clipboard: true,
}

/**
 * 内置的hook contribution
 * 处理 config上的runtime的注册项
 */
@ManaSyringe.singleton({ contrib: IHookContribution })
export class FlowHooksContribution implements IHookContribution<ICmdHooks> {
  toDispose = new DisposableCollection()

  registerHookHub = async () => {
    return Disposable.create(() => {})
  }

  registerHook = async (hooks: ICmdHooks) => {
    const toDispose = new DisposableCollection()
    const disposables = [
      hooks.addNode.registerHook({
        name: 'flow-add-node',
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
        name: 'flow-add-edge',
        handler: async args => {
          const cellFactory: NsEdgeCmd.AddEdge.IArgs['cellFactory'] = async edgeConfig => {
            delete (edgeConfig as any).id
            const cell = new Shape.Edge({
              source: {
                cell: edgeConfig.source,
                port: edgeConfig.sourcePortId,
              },
              target: {
                cell: edgeConfig.target,
                port: edgeConfig.targetPortId,
              },
              attrs: {
                line: {
                  stroke: '#A2B1C3',
                  strokeWidth: 2,
                  targetMarker: {
                    name: 'block',
                    width: 12,
                    height: 8,
                  },
                },
              },
              zIndex: -1,
              data: { ...edgeConfig },
            })
            return cell
          }
          args.cellFactory = cellFactory
        },
      }),
      hooks.graphOptions.registerHook({
        name: 'assign options ',
        handler: async args => {
          Object.assign(args, flowOptions)
        },
      }),
    ]
    toDispose.pushAll(disposables)
    return Disposable.create(() => {})
  }
}
