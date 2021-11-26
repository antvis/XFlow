import React from 'react'
import { PREFIX } from './constants'

export const CanvasService: React.FC = () => {
  return (
    <div className={`${PREFIX}-canvas-panel`}>
      <span>未选中</span>
    </div>
  )
}
