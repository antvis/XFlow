// utils
import type React from 'react'
import { Syringe } from 'mana-syringe'
import type { Disposable } from '../common/disposable'
import type { RxModel } from '../common/rx-model'
// command
import type { IGraphCommandService } from '../command/interface'
// model
import type { IModelService, MODELS } from '../model-service'
import type { NsGraph } from '../interface'

/** rootMenuId */
export const ROOT_MENU_ID = Symbol('xflow-menu-root')

/** MenuId */
export type IMenuId = string

/** Menu UI Model Service */
export const IMenuService = Symbol('IMenuService')

/** Menu UI Model Service  */
export interface IMenuService {
  /**
   * 注册 menu
   * @param config IMenuOptions
   */
  registerMenu: (config: IMenuOptions) => Disposable
  /**
   * 注册一批可单独dispose的扩展项目
   * @param externalRegisterFn IRegisterMenuFunction
   */
  registerDisposableMenu: (externalRegisterFn: IRegisterMenuFunction) => Disposable
  /**
   * 获取menu model
   * @param menuId  menu id
   */
  getMenu: (menuId: IMenuId) => IMenuOptions
}
/** IRegisterMenuFunction */
export interface IRegisterMenuFunction {
  (registry: Pick<IMenuService, 'registerMenu'>): void
}

/**
 * 应该实现这个扩展点来注册更多的Menu
 */
export const IMenuContribution = Syringe.defineToken('IMenuContribution')
/**
 * 扩展Menu
 */
export interface IMenuContribution {
  /**
   * 注册Menu
   * @param registry the toolbar registry.
   */
  registerMenu: (registry: IMenuService) => void
}
/**  A type alias for a menu item type. */
export type ItemType = typeof MenuItemType
/**  menu item type. */
export enum MenuItemType {
  Separator = 'separator',
  Submenu = 'submenu',
  Root = 'root',
  Leaf = 'leaf',
}

export interface IMenuTarget {
  type: MODELS.CONTEXTMENU_TARGET.TargetType
  data: NsGraph.INodeConfig | NsGraph.IEdgeConfig | null
}

/** menu item model */
export interface IMenuOptions<T = any> {
  /** The type of the menu item. */
  id: IMenuId
  /** The type of the menu item. */
  type?: MenuItemType
  /** The submenu id  */
  submenu?: IMenuOptions[]
  /** The display label for the menu item. */
  label?: string
  /** Whether submenu is active */
  active?: boolean
  /** The hotkey for the menu item */
  hotkey?: string
  /** The icon label for the menu item */
  iconName?: string
  /** Whether the menu item is enabled  */
  isEnabled?: boolean
  /** Whether the menu item is visible */
  isVisible?: boolean
  /** data. */
  data?: T
  /** 自定义渲染 */
  render?: React.ComponentType<{
    menuItem: IMenuOptions
    target: IMenuTarget
    commandService: IGraphCommandService
    modelService: IModelService
    onHide: () => void
  }>
  /** onClick */
  onClick?: (args: IClickArgs) => Promise<void>
}

export interface IClickArgs {
  menuItem: IMenuOptions
  target: IMenuTarget
  commandService: IGraphCommandService
  modelService: IModelService
}

export type IMenuModel = RxModel<IMenuOptions>

/** 渲染 menu 的锚点数据 */
export interface IAnchor {
  x: number
  y: number
}

/** Config */
export interface IConfig {
  /** 画布的 root 节点 */
  getProps: () => any
  /** 从事件对象中解析出 menuid */
  createMenuOptions: (
    data: MODELS.CONTEXTMENU_TARGET.IState,
    modelService: IModelService,
    getProps: () => any,
  ) => IMenuOptions[]
}
