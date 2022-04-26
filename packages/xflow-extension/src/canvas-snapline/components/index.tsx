import React from 'react'
import type { IConfig } from '../module'
import { createModule } from '../module'
import { XFlowAppExtensionModule, useExtensionRegistry, insertCss } from '@antv/xflow-core'

export interface IProps {
  color?: string
}

export const CONFIG_TYPE = 'CanvasSnapline'
/** 默认颜色 */
export const SNAPLINE_COLOR = '#faad14'

export const CanvasSnapline: React.FC<IProps> = props => {
  const { color = SNAPLINE_COLOR } = props
  const extension = useExtensionRegistry()
  const config = React.useMemo(
    () => ({
      CONFIG_TYPE,
      getConfig: async () => ({} as IConfig),
    }),
    [],
  )

  /** 设置css 样式 */
  React.useEffect(() => {
    const className = `xflow-snapline-${Date.now()}`
    // 多xflow之间隔离
    extension.addContainerClassNames(className)

    const cssString = `
    .${className} .xflow-snapline .x6-widget-snapline-horizontal,
    .${className} .xflow-snapline .x6-widget-snapline-vertical {
      border-color: ${color};
    }`
    const $style = insertCss(cssString)

    return () => {
      document.head.removeChild($style)
    }
  }, [color, extension])

  return <XFlowAppExtensionModule<IConfig> config={config} createModule={createModule} />
}
