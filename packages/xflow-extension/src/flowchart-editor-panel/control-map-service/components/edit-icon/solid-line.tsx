import React from 'react'
import { ICON_WIDTH, ICON_HEIGHT, ICON_COLOR, ICON_STROKE_WIDTH } from './constants'
import { createPath } from './utils'

const path = [
  ['M', 0, ICON_HEIGHT / 2],
  ['L', ICON_WIDTH, ICON_HEIGHT / 2],
]

//实线
const SolidLine = (
  <svg width={ICON_WIDTH} height={ICON_HEIGHT} xmlns="http://www.w3.org/2000/svg">
    <path
      d={createPath(path)}
      stroke={ICON_COLOR}
      strokeWidth={ICON_STROKE_WIDTH}
    />
  </svg>
)

export default SolidLine