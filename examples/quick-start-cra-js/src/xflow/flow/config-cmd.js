import { createCmdConfig, DisposableCollection, uuidv4 } from '@antv/xflow'

export const useCmdConfig = createCmdConfig(config => {
  config.setRegisterHookFn(hooks => {
    const list = [
      hooks.addNode.registerHook({
        name: 'set node config',
        handler: async args => {
          args.nodeConfig = {
            ...args.nodeConfig,
            id: args.nodeConfig.id || `node-${uuidv4()}`,
          }
        },
      }),
    ]
    const toDispose = new DisposableCollection()
    toDispose.pushAll(list)
    return toDispose
  })
})
