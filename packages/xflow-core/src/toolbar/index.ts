import {
  IToolbarService,
  IToolbarModel,
  IToolbarLayout,
  IToolbarContribution,
  IRegisterToolbarItemFunction,
  // config options
  IToolbarOptions,
  IToolbarItemOptions,
  IToolbarGroupOptions,
} from './interface'
import { ToolbarRegistry } from './components'

export {
  // component
  ToolbarRegistry,
  // ioc 扩展
  IToolbarService,
  IToolbarContribution,
  // model 类型
  IToolbarModel,
  // 布局
  IToolbarLayout,
  // config options
  IToolbarOptions,
  IToolbarItemOptions,
  IToolbarGroupOptions,
  IRegisterToolbarItemFunction,
}
