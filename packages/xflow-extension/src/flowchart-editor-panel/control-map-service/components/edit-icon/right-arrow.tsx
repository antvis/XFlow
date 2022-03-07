import React from 'react'
import { ICON_WIDTH, ICON_HEIGHT, ICON_COLOR, ICON_STROKE_WIDTH } from './constants'
import { createPath } from './utils'

const path = [
  ['M', ICON_WIDTH, ICON_HEIGHT / 2],
  ['L', (ICON_WIDTH * 2) / 3, ICON_HEIGHT / 2 - 3],
  ['L', (ICON_WIDTH * 2) / 3, ICON_HEIGHT / 2 - 1],
  ['L', 0, ICON_HEIGHT / 2 - 1],
  ['L', 0, ICON_HEIGHT / 2 + 1],
  ['L', (ICON_WIDTH * 2) / 3, ICON_HEIGHT / 2 + 1],
  ['L', (ICON_WIDTH * 2) / 3, ICON_HEIGHT / 2 + 3],
  ['Z'],
]

//向右箭头
const RightIcon = (
  <svg width={ICON_WIDTH} height={ICON_HEIGHT} xmlns="http://www.w3.org/2000/svg">
    <path strokeWidth={ICON_STROKE_WIDTH} fill={ICON_COLOR} d={createPath(path)} />
  </svg>
)

export default RightIcon
