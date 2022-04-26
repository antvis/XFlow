import {
  IHookService,
  IRegisterHookFn,
  IRegisterHookHubFn,
  IHookContribution,
  IEvent,
  IHooks,
} from './interface'

import { createHookConfig, HookRegistry } from './components'
import { HookConfig } from './config'

export {
  HookConfig,
  HookRegistry,
  // 扩展Hooks
  IHookService,
  IRegisterHookFn,
  IRegisterHookHubFn,
  IHookContribution,
  // Graph的类型
  IEvent,
  // 内置的graph hooks
  IHooks,
  // React config hook
  createHookConfig,
}
