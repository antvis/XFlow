import React, { useState } from 'react'
import { DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons'
import { JsonSchemaForm } from '../canvas-json-schema-form'
import { WorkspacePanel } from '../base-panel'
import { defaultFormSchemaService } from './form-schema-service'
import { defaultControlMapService } from './control-map-service'

import type { IFlowchartFormPanelProps } from './interface'

export const CONTAINER_CLASS = 'xflow-editor-panel-collpase'

export const FlowchartFormPanel: React.FC<IFlowchartFormPanelProps> = props => {
  const [collpased, setCollpased] = useState(false)
  const {
    controlMapService = defaultControlMapService,
    formSchemaService = defaultFormSchemaService,
    position = { width: 240, top: 0, bottom: 0, right: 0 },
    show = true,
    ...rest
  } = props

  if (!show) {
    return null
  }
  const { width = 200, right } = position

  return (
    <WorkspacePanel
      className={CONTAINER_CLASS}
      position={{
        ...position,
        right: !collpased ? right : -width,
      }}
    >
      <div className={`${CONTAINER_CLASS}-wrapper`}>
        {/* @ts-ignore */}
        <JsonSchemaForm
          targetType={['node', 'edge', 'canvas', 'group']}
          controlMapService={controlMapService}
          formSchemaService={formSchemaService}
          position={{
            ...position,
            top: 0,
          }}
          prefixClz="xflow-form-editor"
          {...rest}
        />
        <div
          className={`${CONTAINER_CLASS}-icon`}
          style={{
            top: 21,
            left: !collpased ? -10 : -20,
            borderRadius: !collpased ? '50%' : '50% 0 0  50%',
            borderRight: !collpased ? '' : 'none',
          }}
          onClick={() => {
            setCollpased(!collpased)
          }}
        >
          {collpased ? <DoubleLeftOutlined /> : <DoubleRightOutlined />}
        </div>
      </div>
    </WorkspacePanel>
  )
}
