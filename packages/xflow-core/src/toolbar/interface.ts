import type React from 'react'
import { Syringe } from 'mana-syringe'
/** 工具类型 */
import type { Disposable } from '../common/disposable'
import type { NsModel } from '../common/rx-model'
/** context 类型 */
import type { IModelService, IUseModel } from '../model-service'
/** command 类型 */
import type { IGraphCommandService } from '../command/interface'
/** 组件类型定义 */
import type { Toolbar as X6Toolbar } from '@antv/x6-react-components/es/toolbar/toolbar'
import type { ToolbarGroup as X6ToolbarGroup } from '@antv/x6-react-components/es/toolbar/group'
import type { ToolbarItem as X6ToolbarItem } from '@antv/x6-react-components/es/toolbar/item'
import type { Simplify } from '../common/types'
import type { ReactElement } from 'react'

/** 用于了批量注册 可销毁的 Toolbar Item*/
export interface IStandaloneToolbarService {
  /** 注册Toolbar Item */
  registerToolbarItem: (config: IToolbarItemOptions) => Disposable
}
/** 用于临时注册 toolbar*/
export interface IRegisterToolbarItemFunction {
  (registry: IStandaloneToolbarService): void
}
/** IToolbarService: 用于注册/消费item */
export const IToolbarService = Symbol('IToolbarService')

/** IToolbarService: 用于注册/消费item */
export interface IToolbarService {
  /** 注册item */
  registerItem: (config: IToolbarItemOptions) => Disposable
  /** 注册可注销的item */
  registerDisposableToolbar?: (externalRegisterFn: IRegisterToolbarItemFunction) => Disposable
  /** 获取toolbar渲染需要 的 model */
  getToolbarModel: (toolbarConfig: IToolbarOptions) => IToolbarModel
}

/**
 * Clients should implement this interface if they want to contribute to the tab-bar toolbar.
 */
export const IToolbarContribution = Syringe.defineToken('IToolbarContribution')
/**
 * Representation of a toolbar contribution.
 */
export interface IToolbarContribution {
  /**
   * Registers toolbar items.
   * @param registry the tabbar toolbar registry.
   */
  registerToolbarItems: (registry: IToolbarService) => void
}

export interface ICustomRenderProps extends Omit<IToolbarItemOptions, 'onClick'> {
  /** call IToolbarItemOptions.onClick with args */
  onClick: () => void
}
/** 描述toolbar的一个按钮 */
export interface IToolbarItemOptions
  extends Omit<X6ToolbarItem.Props, 'onClick' | 'hidden' | 'disabled'> {
  /**  The unique ID of the toolbar item. */
  id: string
  /** 是否可见 */
  isVisible?: boolean
  /** 是否可用 */
  isEnabled?: boolean
  /** Optional text of the item. */
  text?: string
  /** Optional tooltip for the item. */
  tooltip?: string
  /** React element to be used as an icon for the menu item; optional */
  icon?: ReactElement
  /** Optional icon for the item. */
  iconName?: string
  /** runtime 处理context */
  useModel?: IUseModel<IToolbarItemOptions>
  /** 自定义渲染 */
  render?: React.FC<ICustomRenderProps>
  /** Optional icon for the item. */
  onClick?: (args: IClickArgs) => void
}

export interface IClickArgs {
  toolbarItem: IToolbarItemOptions
  commandService: IGraphCommandService
  modelService: IModelService
}
/**
 * Toolbar的布局方向
 * horizontal：水平
 * vertical：竖直
 */
export type IToolbarLayout = 'horizontal' | 'vertical' | 'vertical' | 'horizontal-center'

/**
 * ToolbarGroup的json配置
 * items是id string的集合
 */
export interface IToolbarGroupOptions extends X6ToolbarGroup.Props {
  name?: string
  items: IToolbarItemOptions[]
}
/**  Toolbar的json配置 */
export interface IToolbarOptions extends X6Toolbar.Props {
  name?: string
  layout: IToolbarLayout
  mainGroups: IToolbarGroupOptions[]
  extraGroups: IToolbarGroupOptions[]
}

/**  ToolbarItem的 Model: 渲染时生成 */
export type IToolbarModel = Simplify<NsModel.IModel<IToolbarOptions>>
