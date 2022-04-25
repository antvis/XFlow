import React from 'react'
import { Tooltip } from 'antd'
import { useXFlowApp, createComponentModel, XFlowAppExtensionModule } from '@antv/xflow-core'
import type { IConfigProps } from '../interface'
import { ACTIVE_NODE_PORT } from '../interface'
import { createModule } from '../module'

export const CONFIG_TYPE = 'CanvasNodePortTooltip'

const RenderTooltip: React.FC<IConfigProps> = props => {
  const xflow = useXFlowApp()
  const [state, , renderModel] = createComponentModel<ACTIVE_NODE_PORT.IState | null>(null)

  React.useEffect(() => {
    if (!xflow) {
      return
    }
    const subscribe = async () => {
      const { model } = await ACTIVE_NODE_PORT.useModel(xflow.modelService)
      return model.watch(value => {
        renderModel.setValue(value)
      })
    }
    const subscription = subscribe()
    return () => {
      subscription.then(disposable => {
        disposable.dispose()
      })
    }
  }, [renderModel, xflow])

  const visible = !!(state && state.position && state.position.x)

  if (!visible) {
    return null
  }

  const title = props.getTooltip ? props.getTooltip(state) : state.tooltip

  return (
    <Tooltip visible={visible} title={title} placement={state.placement || 'top'}>
      <span
        className="canvas-node-port-tooltip"
        style={{ position: 'absolute', left: state.position.x, top: state.position.y }}
      />
    </Tooltip>
  )
}

export const CanvasNodePortTooltip: React.FC<IConfigProps> = props => {
  const getConfig = React.useCallback(async () => null, [])

  return (
    <XFlowAppExtensionModule<null>
      createModule={createModule}
      config={{ CONFIG_TYPE: CONFIG_TYPE, getConfig }}
    >
      <RenderTooltip {...props} />
    </XFlowAppExtensionModule>
  )
}
