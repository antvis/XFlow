import { singleton, inject } from 'mana-syringe'
import { IGraphOptionProvider } from '../../xflow-main/graph/config'
import { XFlowGraphCommands } from '../../command-contributions/constant'
import { DisposableCollection, Disposable } from '../../common/disposable'
import { IHookContribution } from '../interface'
import { throttle } from '../../common/utils'
import type { IHooks } from '../interface'

export namespace NsGraphEventPlugin {
  export const pluginId = 'base-graph-events'
}

/**
 * 内置的hook contribution
 * 处理graph config 的 evnets props
 */
@singleton({ contrib: IHookContribution })
export class GraphEventContribution implements IHookContribution<IHooks> {
  /** 通过optionProvider获取配置 */
  @inject(IGraphOptionProvider) graphOptions: IGraphOptionProvider

  toDispose = new DisposableCollection()

  registerHookHub = async () => {
    return Disposable.create(() => {})
  }

  /** 扩展Hook */
  registerHook = async (hooks: IHooks) => {
    const toDispose = new DisposableCollection()

    const disposables = [
      /** 在graph启动前, 注册外部事件到x6Events的hooks上*/
      hooks.x6Events.registerHook({
        name: NsGraphEventPlugin.pluginId,
        handler: async args => {
          const { events } = await this.graphOptions.getOptions()
          events.forEach(event => {
            args.push(event)
          })
        },
      }),

      /** 在graph init后, 外部事件 */
      hooks.afterGraphInit.registerHook({
        name: NsGraphEventPlugin.pluginId,
        handler: async args => {
          const { commandService, modelService, graph } = args
          /** 注册事件 */
          const todo = await hooks.x6Events.call([], async mergedEvents => {
            return mergedEvents.map(e => {
              const handler = handlerArgs => {
                e.callback(handlerArgs, commandService, modelService, graph)
              }
              graph.on(e.eventName, handler)
              return {
                dispose: () => {
                  graph.off(e.eventName, handler)
                },
              }
            })
          })
          toDispose.pushAll(todo)
        },
      }),
      /** 监听window的resize事件，实现自动resize */
      hooks.afterGraphInit.registerHook({
        name: 'add auto resize event',
        handler: async args => {
          const { commandService, options, graph } = args
          const resizeHandler = throttle(() => {
            commandService.executeCommand(XFlowGraphCommands.GRAPH_RESIZE.id, {})
          })

          window.addEventListener('resize', resizeHandler)

          const { rootContainer }  = options;
          const resizeObserver = new ResizeObserver(() => graph.resize(rootContainer.clientWidth))
          rootContainer && resizeObserver.observe(rootContainer)

          toDispose.push(
            Disposable.create(() => {
              window.removeEventListener('resize', resizeHandler)
            }),
          )
        },
      }),

      /** 在graph停止时 取消外部事件 */
      hooks.beforeGraphDestroy.registerHook({
        name: NsGraphEventPlugin.pluginId,
        handler: async () => {
          toDispose.dispose()
        },
      }),
    ]

    toDispose.pushAll(disposables)
    return toDispose
  }
}
