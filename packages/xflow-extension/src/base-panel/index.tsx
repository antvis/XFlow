import type { PanelBaseConfig } from './config'
import type { IPosition } from '@antv/xflow-core'
import React from 'react'
import { useXFlowApp, usePositionStyle } from '@antv/xflow-core'
import classNames from 'classnames'
import { PropsProxy } from './config'
import { PanelContext } from './context'

interface IWorkspacePanelProps<T extends PanelBaseConfig = any> {
  config?: T
  className?: string
  position: IPosition
  style?: React.CSSProperties
}

const WorkspacePanel: React.FC<IWorkspacePanelProps> = props => {
  const { className, position, style, children } = props
  const app = useXFlowApp()
  const positionStyle = usePositionStyle(position)

  const propsProxy = React.useMemo(() => {
    return new PropsProxy()
  }, [])

  React.useEffect(() => {
    return () => {
      propsProxy.dispose()
    }
  }, [propsProxy])

  if (!app || !app.modelService) {
    return null
  }

  propsProxy.getValue = () => props

  const clz = classNames({
    [className]: !!className,
    'xflow-workspace-panel': true,
  })

  const { commandService, modelService } = app

  return (
    <PanelContext.Provider value={{ propsProxy, commandService, modelService }}>
      <div
        className={clz}
        style={{
          ...positionStyle,
          ...style,
        }}
      >
        {children}
      </div>
    </PanelContext.Provider>
  )
}

export { usePanelContext } from './context'
export { WorkspacePanel, IWorkspacePanelProps }
