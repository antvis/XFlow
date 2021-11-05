import { usePositionStyle } from '@antv/xflow-core'
import type { IPanelProps } from './interface'
import { PANEL_HEADER_HEIGHT, PANEL_FOOTER_HEIGHT } from './constants'

export const usePanelLyaoutStyle = (config: IPanelProps, noSchema: boolean) => {
  const headerHeight =
    (config && config.headerPosition && config.headerPosition.height) || PANEL_HEADER_HEIGHT
  const footerHeight =
    (config.footerPosition && config.footerPosition.height) || PANEL_FOOTER_HEIGHT

  return {
    headerStyle: usePositionStyle({
      height: 0,
      top: 0,
      left: 0,
      right: 0,
      ...(noSchema ? { height: headerHeight, lineHeight: headerHeight } : {}),
      ...config.headerPosition,
    }),
    bodyStyle: usePositionStyle({
      left: 0,
      right: 0,
      top: 0,
      ...(noSchema ? { top: headerHeight, bottom: footerHeight } : { bottom: footerHeight }),
      ...config.bodyPosition,
    }),
    footerStyle: usePositionStyle({
      left: 0,
      right: 0,
      lineHeight: footerHeight,
      height: footerHeight,
      bottom: 0,
      ...(noSchema ? { lineHeight: footerHeight, height: footerHeight } : { bottom: 0 }),
      ...config.footerPosition,
    }),
  }
}
