import React from 'react'
import type {
  // menu 类型
  IMenuTarget,
  IMenuOptions,
  IModelService,
  IGraphCommandService,
} from '@antv/xflow-core'
import {
  // app service
  IconStore,
} from '@antv/xflow-core'

import { Menu } from '@antv/x6-react-components'

export interface IRenderProps {
  idx: number
  onHide: () => void
  target: IMenuTarget
  menuOptions: IMenuOptions
  modelService: IModelService
  commandService: IGraphCommandService
}

export const renderMenuOptions = (props: IRenderProps) => {
  const { idx, menuOptions: menuItem, target, modelService, commandService, onHide } = props
  const {
    id,
    label,
    isEnabled = true,
    isVisible = true,
    iconName,
    submenu = [],
    active,
    hotkey,
    render,
    onClick,
  } = menuItem

  if (!isVisible) {
    return null
  }

  /** 分隔符：separator */
  if (menuItem.type === 'separator') {
    return <Menu.Divider key={String(menuItem.id) + idx} />
  }

  /** 根结点：root */
  if (menuItem.type === 'root') {
    return (
      <Menu hasIcon>
        {submenu.map((item, submenuIdx) =>
          renderMenuOptions({
            idx: submenuIdx,
            target,
            commandService,
            modelService,
            menuOptions: item,
            onHide,
          }),
        )}
      </Menu>
    )
  }

  /** 子菜单：submenu */
  if (menuItem.submenu && Array.isArray(menuItem.submenu)) {
    const Icon = IconStore.get(iconName)
    const isDisable = !isEnabled
    return (
      <Menu.SubMenu
        key={String(id)}
        text={label}
        disabled={isDisable || submenu.length === 0}
        icon={Icon ? <Icon /> : null}
        active={active}
        hotkey={hotkey}
      >
        {submenu.map((item, submenuIdx) =>
          renderMenuOptions({
            idx: submenuIdx,
            target,
            commandService,
            modelService,
            menuOptions: item,
            onHide,
          }),
        )}
      </Menu.SubMenu>
    )
  }

  /** 叶子节点 */
  const Icon = IconStore.get(iconName)
  if (render) {
    return React.createElement(render, { menuItem, target, commandService, modelService, onHide }, [
      <Menu.Item
        key={String(id)}
        text={label}
        disabled={!isEnabled}
        icon={Icon ? <Icon /> : null}
        active={active}
        hotkey={hotkey}
      />,
    ])
  }
  return (
    <Menu.Item
      key={String(id)}
      text={label}
      disabled={!isEnabled}
      icon={Icon ? <Icon /> : null}
      active={active}
      hotkey={hotkey}
      onClick={async () => {
        await onClick({ menuItem, target, commandService, modelService })
        onHide && onHide()
      }}
    />
  )
}
