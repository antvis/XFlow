import { createCmdConfig, DisposableCollection } from '@antv/xflow'

export const useCmdConfig = createCmdConfig(config => {
  config.setRegisterHookFn(hooks => {
    const list = [
      hooks.addEdge.registerHook({
        name: 'addEdge',
        handler: async args => {
          console.log('addEdgehooks:', args.edgeConfig)
        },
      }),
      hooks.addNode.registerHook({
        name: 'addNode',
        handler: async args => {
          console.log('addNodeHooks:', args.nodeConfig)
        },
      }),
    ]
    const toDispose = new DisposableCollection()
    toDispose.pushAll(list)
    return toDispose
  })
})
