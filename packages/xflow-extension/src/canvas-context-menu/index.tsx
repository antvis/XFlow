import React from 'react'
import { useXFlowApp, XFlowAppExtensionModule } from '@antv/xflow-core'
import { ContextMenuConfig } from './config'
import { createModule } from './module'
import { ContextMenuRender } from './components'

export const CONFIG_TYPE = 'CanvasContextMenu'

export interface IProps {
  config: ContextMenuConfig
}

export { IProps as ICanvasContextMenuProps }

export const CanvasContextMenu: React.FC<IProps> = props => {
  const xflow = useXFlowApp()
  const canRender = !!xflow
  /** 获取ContextMenu的配置 */
  const contextMenuConfig = React.useMemo<ContextMenuConfig>(
    () => (props.config ? props.config : new ContextMenuConfig()),
    [props.config],
  )

  return (
    <XFlowAppExtensionModule<ContextMenuConfig>
      createModule={createModule}
      config={contextMenuConfig}
    >
      {canRender && <ContextMenuRender config={contextMenuConfig} />}
    </XFlowAppExtensionModule>
  )
}

export const createCtxMenuConfig = <T extends unknown = any>(
  addOptions: (config: ContextMenuConfig, proxy: { getValue: () => T }) => void,
) => (props?: T) => {
  /** bridge config and props */
  const proxy = React.useMemo(() => ({ getValue: () => ({} as T) }), [])
  proxy.getValue = () => props

  const toolbarConfig = React.useMemo(() => {
    const config = new ContextMenuConfig()
    addOptions(config, proxy)
    return config
  }, [proxy])

  return toolbarConfig
}
