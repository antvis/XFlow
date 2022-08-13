import type { ICmdHooks } from '@antv/xflow-core'
import { singleton } from 'mana-syringe'
import {
  DisposableCollection,
  Disposable,
  XFlowEdgeCommands,
  XFlowNodeCommands,
} from '@antv/xflow-core'
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
            const { tempEdgeId, ...rest } = edgeConfig
            const config = {
              edgeConfig: {
                ...rest,
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
                data: { ...rest },
              },
            }
            await commandService.executeCommand(XFlowEdgeCommands.ADD_EDGE.id, config)
            /** 删除 createEdge() 产生的 tempEdge */
            await commandService.executeCommand(XFlowEdgeCommands.DEL_EDGE.id, {
              edgeConfig: {
                id: tempEdgeId,
              },
            })
            /**
             * 新增边时更新入边、出边信息
             * @link https://github.com/ant-design/ant-design-charts/issues/1189
             */
            const sourceNode = graph.getCellById(edgeConfig.source)
            const targetNode = graph.getCellById(edgeConfig.target)
            await commandService.executeCommand(XFlowNodeCommands.UPDATE_NODE.id, {
              nodeConfig: {
                ...sourceNode.data,
                incomingEdges: graph.getIncomingEdges(sourceNode),
                outgoingEdges: graph.getOutgoingEdges(sourceNode),
              },
            })
            await commandService.executeCommand(XFlowNodeCommands.UPDATE_NODE.id, {
              nodeConfig: {
                ...targetNode.data,
                incomingEdges: graph.getIncomingEdges(targetNode),
                outgoingEdges: graph.getOutgoingEdges(targetNode),
              },
            })
            const onAddEdge = getProps('onAddEdge')
            if (typeof onAddEdge === 'function') {
              onAddEdge(config.edgeConfig)
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
