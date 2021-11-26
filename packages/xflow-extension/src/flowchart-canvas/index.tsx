import React, { useEffect } from 'react'
import { XFlowCanvas, useXFlowApp } from '@antv/xflow-core'
import { useGraphConfig } from './config-graph'
import { setInstance } from './utils'
export { FlowchartExtension } from './extension/module'
import type { IFlowchartGraphProps } from './interface'
export * from './interface'

export const FlowchartCanvas: React.FC<IFlowchartGraphProps> = props => {
  const { position = { top: 40, left: 240, right: 240, bottom: 0 } } = props
  const graphConfig = useGraphConfig(props)
  const app = useXFlowApp()

  useEffect(() => {
    if (app) {
      setInstance(app)
    }
  }, [app])

  return (
    <XFlowCanvas {...props} config={graphConfig} position={position}>
      {props.children}
    </XFlowCanvas>
  )
}

FlowchartCanvas.defaultProps = {
  isXFlowCanvas: true,
}
