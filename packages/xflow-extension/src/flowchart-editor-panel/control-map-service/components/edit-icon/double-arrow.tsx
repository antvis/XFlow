import React from 'react'
import { ICON_WIDTH, ICON_HEIGHT, ICON_COLOR } from './constants'
import { createPath } from './utils'

const DoubleArrow = () => {
  const path = [
    ['M', 0, ICON_HEIGHT / 2],
    ['L', ICON_WIDTH / 3, ICON_HEIGHT / 2 - 3],
    ['L', ICON_WIDTH / 3, ICON_HEIGHT / 2 - 1],
    ['L', (ICON_WIDTH * 2) / 3, ICON_HEIGHT / 2 - 1],
    ['L', (ICON_WIDTH * 2) / 3, ICON_HEIGHT / 2 - 3],
    ['L', ICON_WIDTH, ICON_HEIGHT / 2],
    ['L', (ICON_WIDTH * 2) / 3, ICON_HEIGHT / 2 + 3],
    ['L', (ICON_WIDTH * 2) / 3, ICON_HEIGHT / 2 + 1],
    ['L', ICON_WIDTH / 3, ICON_HEIGHT / 2 + 1],
    ['L', ICON_WIDTH / 3, ICON_HEIGHT / 2 + 3],
    ['Z']
  ]
  
  //双向箭头
  return (
    <svg width={ICON_WIDTH} height={ICON_HEIGHT} xmlns="http://www.w3.org/2000/svg">
      <path
        fill={ICON_COLOR}
        d={createPath(path)}
      />
    </svg>
  )
}

export default DoubleArrow
