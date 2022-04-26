import React from 'react'
import type { IPosition } from '../../common/position'
import { usePositionStyle } from '../../common/position'
import { GraphConfig, createX6GraphModule } from '../graph'
import { useExtensionRegistry } from './extension-context'
import { useXflowPrefixCls } from './global-config-context'
import { usePortal } from '@antv/x6-react-shape'
import { useXFlowApp } from './app-context'

export interface IProps {
  config?: GraphConfig
  style?: React.CSSProperties
  className?: string
  isXFlowCanvas?: boolean
  position?: IPosition
}

export const XFlowCanvas: React.FC<IProps> = props => {
  const app = useXFlowApp()

  /** x6画布parent的dom节点 */
  const rootRef = React.useRef<HTMLDivElement>(null)
  /** x6画布的dom节点 */
  const canvasRef = React.useRef<HTMLDivElement>(null)

  /** 生成配置中心 */
  const extensionRegistry = useExtensionRegistry()

  /** 获取ContextService的配置 */
  const graphConfig = React.useMemo<GraphConfig>(() => {
    const config = props.config ? props.config : new GraphConfig()
    config.setX6Config()
    return config
    /** 保证只生成一次 */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /** X6_NODE_PORTAL_NODE_VIEW */
  const [Portal, setGraph] = usePortal(graphConfig.graphId)

  React.useEffect(() => {
    app &&
      app.getGraphInstance().then(graph => {
        setGraph(graph)
      })
  }, [app, setGraph])

  React.useEffect(() => {
    /** 设置画布parent dom节点、画布dom节点 */
    graphConfig.setRootContainer(rootRef.current)
    graphConfig.setGraphContainer(canvasRef.current)

    /** 关联XflowApp和Graph*/
    graphConfig.xflowInstanceId = extensionRegistry.getInstanceId()
    extensionRegistry.addCoreModule({ config: graphConfig, createModule: createX6GraphModule })

    /** unmount */
    const destroy = async () => {
      graphConfig.dispose()
    }
    return () => {
      destroy()
    }
    /** 保证只生成一次 */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const style = usePositionStyle(props.position)
  const rootClz = useXflowPrefixCls('canvas-root')
  const canvasClz = useXflowPrefixCls('x6-canvas')

  return (
    <React.Fragment>
      <div ref={rootRef} className={rootClz} style={style} id={graphConfig.graphId} tabIndex={0}>
        <div ref={canvasRef} className={canvasClz} />
        {/** 挂载XFlow组件容器 */}
        {props.children}
      </div>
      <Portal />
    </React.Fragment>
  )
}

XFlowCanvas.defaultProps = {
  isXFlowCanvas: true,
}
