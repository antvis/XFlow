import React from 'react'
import { CanvasToolbar } from '../canvas-toolbar'
import type { IFlowchartToolbarProps } from './interface'
import { useToolbarConfig } from './service'
export * from './interface'
export const FlowchartToolbar: React.FC<IFlowchartToolbarProps> = props => {
  const config = useToolbarConfig(props)
  return <CanvasToolbar {...props} config={config} />
}
