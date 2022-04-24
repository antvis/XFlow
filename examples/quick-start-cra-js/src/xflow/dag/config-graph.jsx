import { XFlowNodeCommands /* , XFlowEdgeCommands */ } from '@antv/xflow'
import { createHookConfig, DisposableCollection } from '@antv/xflow'
import { DND_RENDER_ID, GROUP_NODE_RENDER_ID } from './constant'
import { AlgoNode } from './react-node/algo-node'
import { GroupNode } from './react-node/group'

export const useGraphHookConfig = createHookConfig((config, proxy) => {
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
          options.grid = false
          options.keyboard = {
            enabled: true,
          }
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
              cmds.executeCommand(XFlowNodeCommands.MOVE_NODE.id, {
                id: node.id,
                position: node.getPosition(),
              })
            },
          })
        },
      }),
    ]
    const toDispose = new DisposableCollection()
    toDispose.pushAll(disposableList)
    return toDispose
  })
})
