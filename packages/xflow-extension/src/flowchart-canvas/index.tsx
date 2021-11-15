import React, { useEffect } from 'react'
import { XFlowCanvas, useXFlowApp } from '@antv/xflow-core'
import { useGraphConfig } from './use-graph'
import { setInstance } from './utils'
import { IGraphProps } from './interface'

import './index.less'

export const FlowchartCanvas: React.FC<IGraphProps> = props => {
  const { position = { top: 40, left: 240, right: 240, bottom: 0 } } = props
  const graphConfig = useGraphConfig(props)
  const { graphProvider } = useXFlowApp() ?? {}

  useEffect(() => {
    if (graphProvider) {
      /** 获取graph实例 */
      graphProvider.getGraphInstance().then(x6Graph => {
        setInstance(x6Graph, graphProvider as any)
      })
    }
  }, [graphProvider])

  return (
    <XFlowCanvas {...props} config={graphConfig} position={position}>
      {props.children}
    </XFlowCanvas>
  )
}

FlowchartCanvas.defaultProps = {
  isXFlowCanvas: true,
}
