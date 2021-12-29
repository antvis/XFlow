import type { IProps } from './index'
import type { NsNodeCmd } from '@antv/xflow'
import { NsGraph, XFlowNodeCommands } from '@antv/xflow'
import { createHookConfig, DisposableCollection } from '@antv/xflow'
import { DND_RENDER_ID, GROUP_NODE_RENDER_ID } from './constant'
import { AlgoNode } from './react-node/algo-node'
import { GroupNode } from './react-node/group'
import type { Graph } from '@antv/x6'

export const useGraphHookConfig = createHookConfig<IProps>((config, proxy) => {
  // 获取 Props
  const props = proxy.getValue()
  console.log('get main props', props)
  config.setRegisterHook(hooks => {
    const disposableList = [
      // 注册增加 react Node Render
      hooks.reactNodeRender.registerHook({
        name: 'add react node',
        handler: async renderMap => {
          renderMap.set(DND_RENDER_ID, AlgoNode)
          renderMap.set(GROUP_NODE_RENDER_ID, GroupNode)
        },
      }),
      // 注册修改graphOptions配置的钩子
      hooks.graphOptions.registerHook({
        name: 'custom-x6-options',
        after: 'dag-extension-x6-options',
        handler: async options => {
          const graphOptions: Graph.Options = {
            connecting: {
              // 是否触发交互事件
              validateMagnet() {
                // return magnet.getAttribute('port-group') !== NsGraph.AnchorGroup.TOP
                return true
              },
              // 显示可用的链接桩
              validateConnection({ sourceView, targetView, sourceMagnet, targetMagnet }) {
                // 不允许连接到自己
                if (sourceView === targetView) {
                  return false
                }
                // 只能从上游节点的输出链接桩创建连接
                // if ( sourceMagnet.getAttribute('port-group') === NsGraph.AnchorGroup.TOP) {
                //   return false
                // }
                // 只能连接到下游节点的输入桩
                // if (targetMagnet.getAttribute('port-group') !== NsGraph.AnchorGroup.TOP) {
                //   return false
                // }
                // 没有起点的返回false
                if (!sourceMagnet) {
                  return false
                }
                if (!targetMagnet) {
                  return false
                }
                const node = targetView!.cell as any
                // 判断目标链接桩是否可连接
                const portId = targetMagnet.getAttribute('port')!
                const port = node.getPort(portId)
                return !!port
              },
            },
          }
          options.connecting = { ...options.connecting, ...graphOptions.connecting }
        },
      }),
      // 注册增加 graph event
      hooks.x6Events.registerHook({
        name: 'add',
        handler: async events => {
          events.push({
            eventName: 'node:moved',
            callback: (e, cmds) => {
              const { node } = e
              cmds.executeCommand<NsNodeCmd.MoveNode.IArgs>(XFlowNodeCommands.MOVE_NODE.id, {
                id: node.id,
                position: node.getPosition(),
              })
            },
          } as NsGraph.IEvent<'node:moved'>)
        },
      }),
    ]
    const toDispose = new DisposableCollection()
    toDispose.pushAll(disposableList)
    return toDispose
  })
})
