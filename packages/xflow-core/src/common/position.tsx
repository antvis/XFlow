import type React from 'react'
import { useMemo } from 'react'
export interface IPosition {
  width?: number
  height?: number
  lineHeight?: number
  top?: number
  left?: number
  right?: number
  bottom?: number
}

export const usePositionStyle = (conf: IPosition = {}) => {
  return useMemo(() => {
    const config = Object.entries(conf)
    const style = config.length > 0 ? { position: 'absolute' } : {}
    config.forEach(([key, val = 0]) => {
      style[key] = `${val}px`
    })
    return style as React.CSSProperties
  }, [conf])
}
