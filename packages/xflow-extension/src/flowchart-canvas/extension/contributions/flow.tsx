import type { ICmdHooks } from '@antv/xflow-core'
import { singleton } from 'mana-syringe'
import { DisposableCollection, Disposable, XFlowEdgeCommands } from '@antv/xflow-core'
import { IHookContribution } from '@antv/xflow-core'
import { NsAddEdgeEvent } from '../../config-graph'
import { getProps } from '../../utils'

/**
 * 内置的hook contribution
 * 处理 config上的runtime的注册项
 */
@singleton({ contrib: IHookContribution })
export class FlowHooksContribution implements IHookContribution<ICmdHooks> {
  toDispose = new DisposableCollection()

  registerHookHub = async () => {
    return Disposable.create(() => {})
  }
  registerHook = async (hooks: ICmdHooks) => {
    const toDispose = new DisposableCollection()
    const disposables = [
      hooks.afterGraphInit.registerHook({
        name: 'call add edge to replace temp edge',
        handler: async handlerArgs => {
          const { commandService, graph } = handlerArgs
          graph.on(NsAddEdgeEvent.EVENT_NAME, async (args: NsAddEdgeEvent.IArgs) => {
            const { edge, ...edgeConfig } = args
            const config = {
              edgeConfig: {
                ...edgeConfig,
                // renderKey: FLOWCHART_EDGE, // 暂不支持
                source: {
                  cell: edgeConfig.source,
                  port: edgeConfig.sourcePortId,
                },
                target: {
                  cell: edgeConfig.target,
                  port: edgeConfig.targetPortId,
                },
                zIndex: 1,
                attrs: {
                  line: {
                    stroke: '#A2B1C3',
                    targetMarker: {
                      name: 'block',
                      width: 12,
                      height: 8,
                    },
                    strokeDasharray: '5 5',
                    strokeWidth: 1,
                    strokeOpacity: 1,
                  },
                  text: {
                    fontSize: 12,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    textDecoration: '',
                    letterSpacing: 0,
                    fillOpacity: 1
                  }
                },
                data: { ...edgeConfig },
              },
            }
            await commandService.executeCommand(XFlowEdgeCommands.ADD_EDGE.id, config)
            const onAddEdge = getProps('onAddEdge')
            if (typeof onAddEdge === 'function') {
              onAddEdge(config)
            }
            args.edge.remove()
          })
        },
      }),
    ]
    toDispose.pushAll(disposables)
    return Disposable.create(() => {})
  }
}
