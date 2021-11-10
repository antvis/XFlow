import type { Graph } from '@antv/x6'
import type { NsGraph, IModelService } from '@antv/xflow-core'
import type { ICmdHooks } from '@antv/xflow-core'
import classnames from 'classnames'
import { IHookContribution, ManaSyringe } from '@antv/xflow-core'
import { IGraphProvider } from '@antv/xflow-core'
import { ACTIVE_NODE_PORT, NsPortEvent } from '../interface'
import { DisposableCollection, IModelContribution, Disposable } from '@antv/xflow-core'

/**
 * 内置的hook contribution
 * 处理 config上的runtime的注册项
 */
@ManaSyringe.singleton({ contrib: [IHookContribution, IModelContribution] })
export class NodePortTooltipContribution
  implements IHookContribution<ICmdHooks>, IModelContribution {
  toDispose = new DisposableCollection()

  @ManaSyringe.inject(IGraphProvider)
  protected readonly graphProvider: IGraphProvider

  /** 获取画布实例 */
  getGraphInstance = async () => {
    const graphInstance = await this.graphProvider.getGraphInstance()
    const graphConfig = await this.graphProvider.getGraphOptions()
    return { graph: graphInstance, config: graphConfig }
  }

  /** 获取GraphOptions */
  getPortRenderConfig = () => {
    const dagOptions: Graph.Options = {
      onPortRendered(portRenderedArgs) {
        /* eslint-disable-next-line @typescript-eslint/no-this-alias */
        const graph = this
        const { port, node } = portRenderedArgs
        const { contentSelectors } = portRenderedArgs
        const portContainer = contentSelectors && contentSelectors['xflow-port-group']
        if (portContainer instanceof Element) {
          portContainer.setAttribute(
            'class',
            classnames('xflow-port-group', {
              connected: (port as any).connected && port.group !== 'out',
              groupPort: (node as any)?.isGroup && (node as any)?.isGroup(),
            }),
          )
          portContainer.addEventListener('mouseenter', e => {
            const eventArgs: NsPortEvent.IPortEvent = {
              e: e as MouseEvent,
              portId: port.id,
              nodeId: node.id,
              portData: port as NsGraph.INodeAnchor,
              nodeData: node.getData<NsGraph.INodeConfig>(),
              tooltip: (port as NsGraph.INodeAnchor).tooltip,
              placement: port.group as any,
            }
            graph.trigger(NsPortEvent.MOUSE_ENTER, eventArgs)
          })
          portContainer.addEventListener('mouseleave', e => {
            const eventArgs: NsPortEvent.IPortEvent = {
              e: e as MouseEvent,
              portId: port.id,
              nodeId: node.id,
              portData: port as NsGraph.INodeAnchor,
              nodeData: node.getData<NsGraph.INodeConfig>(),
              tooltip: (port as NsGraph.INodeAnchor).tooltip,
              placement: port.group as any,
            }
            graph.trigger(NsPortEvent.MOUSE_LEAVE, eventArgs)
          })
        }
      },
    }
    return dagOptions
  }

  registerHookHub = async () => {
    return Disposable.create(() => {})
  }

  registerHook = async (hooks: ICmdHooks) => {
    const toDispose = new DisposableCollection()
    const disposables = [
      hooks.graphOptions.registerHook({
        name: 'add onPortRendered options ',
        handler: async args => {
          Object.assign(args, this.getPortRenderConfig())
        },
      }),
    ]
    toDispose.pushAll(disposables)
    return Disposable.create(() => {})
  }

  registerModel(registry: IModelService): void {
    registry.registerModel<ACTIVE_NODE_PORT.IState>({
      id: ACTIVE_NODE_PORT.id,
      watchChange: async self => {
        const { graph, config } = await this.getGraphInstance()

        const calcPosition = (e: MouseEvent) => {
          const { x, y, width, height } = (e.target as HTMLElement).getBoundingClientRect()
          const clientRect = config.rootContainer.getBoundingClientRect()
          const position = {
            x: x - (clientRect?.x || 0) + width / 2,
            y: y - (clientRect?.y || 0) + height / 2,
          }
          return position
        }

        const onMouseEnter = (args: NsPortEvent.IPortEvent) => {
          self.setValue({
            ...args,
            position: calcPosition(args.e),
          })
        }

        const onMouseLeave = () => {
          self.setValue(null)
        }

        /** 绑定事件 */
        graph.on(NsPortEvent.MOUSE_ENTER, onMouseEnter)
        graph.on(NsPortEvent.MOUSE_LEAVE, onMouseLeave)
        graph.on('cell:mouseleave', onMouseLeave)

        return Disposable.create(() => {
          /** 解除绑定 */
          graph.off(NsPortEvent.MOUSE_ENTER, onMouseEnter)
          graph.off(NsPortEvent.MOUSE_LEAVE, onMouseLeave)
        })
      },
    })
  }
}
