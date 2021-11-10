import type { ICmdHooks } from '@antv/xflow-core'
import { DisposableCollection, Disposable } from '@antv/xflow-core'
import { IHookContribution, ManaSyringe } from '@antv/xflow-core'

/**
 * 内置的hook contribution
 * 处理 config上的runtime的注册项
 */
@ManaSyringe.singleton({ contrib: IHookContribution })
export class HookContribution implements IHookContribution<ICmdHooks> {
  toDispose = new DisposableCollection()

  // args: registry: IHookService<ICmdHooks>
  registerHookHub = async () => {
    return Disposable.create(() => {})
  }

  registerHook = async (hooks: ICmdHooks) => {
    const toDispose = new DisposableCollection()
    const disposables = [
      hooks.graphOptions.registerHook({
        name: 'add snapline options',
        handler: async args => {
          // 对齐线配置，辅助移动节点排版（详细文档：https://X6.antv.vision/zh/docs/tutorial/basic/snapline）
          args.snapline = {
            enabled: true,
            className: 'xflow-snapline',
            clean: 5000,
          }
        },
      }),
    ]
    toDispose.pushAll(disposables)
    return Disposable.create(() => {})
  }
}
