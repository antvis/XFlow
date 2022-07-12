import { usePositionStyle } from '@antv/xflow-core'
import type { IPanelProps } from './interface'
import { PANEL_HEADER_HEIGHT, PANEL_FOOTER_HEIGHT } from './constants'

export const usePanelLayoutStyle = (config: IPanelProps) => {
  const headerHeight =
    (config && config.headerPosition && config.headerPosition.height) || PANEL_HEADER_HEIGHT
  const footerHeight =
    (config.footerPosition && config.footerPosition.height) || PANEL_FOOTER_HEIGHT

  return {
    headerStyle: usePositionStyle({
      height: headerHeight,
      lineHeight: headerHeight,
      top: 0,
      left: 0,
      right: 0,
      ...config.headerPosition,
    }),
    bodyStyle: usePositionStyle({
      left: 0,
      right: 0,
      top: headerHeight,
      bottom: footerHeight,
      ...config.bodyPosition,
    }),
    footerStyle: usePositionStyle({
      left: 0,
      right: 0,
      lineHeight: footerHeight,
      height: footerHeight,
      bottom: 0,
      ...config.footerPosition,
    }),
  }
}

/**
 * @deprecated usePanelLayoutStyle 的错误拼写
 *
 * 保留以兼容旧应用
 */
export const usePanelLyaoutStyle = usePanelLayoutStyle
