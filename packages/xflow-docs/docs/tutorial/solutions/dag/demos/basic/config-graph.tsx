import type { IProps } from './index'
import type { NsGraph } from '@antv/xflow'
import { createHookConfig, DisposableCollection } from '@antv/xflow'
import { DND_RENDER_ID, GROUP_NODE_RENDER_ID } from './constant'
import { AlgoNode } from './react-node/algo-node'
import { GroupNode } from './react-node/group'

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
      // 注册增加 graph options
      hooks.graphOptions.registerHook({
        name: 'custom-x6-options',
        // before: 'dag-extension-x6-options',
        handler: async options => {
          options.grid = false
          options.keyboard = {
            enabled: true,
          }
        },
      }),
      // 注册增加 graph event
      hooks.x6Events.registerHook({
        name: 'add node click event',
        handler: async events => {
          events.push({
            eventName: 'node:click',
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            callback: (e, cmds, ctx) => {
              // 绑定事件
            },
          } as NsGraph.IEvent<'node:click'>)
        },
      }),
    ]
    const toDispose = new DisposableCollection()
    toDispose.pushAll(disposableList)
    return toDispose
  })
})
