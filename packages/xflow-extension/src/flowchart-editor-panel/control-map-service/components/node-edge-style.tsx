import React, { useState, useEffect } from 'react'
import { DefaultNodeConfig } from '../../../flowchart-node-panel'
import { FlowchartFormWrapper } from '../../form-wrapper'
import { ColorPicker, InputNumberFiled, SelectField } from './fields'
import { PREFIX, STROKE_MAP } from './constants'
import { SolidLine, DottedLine } from './edit-icon'
import type { IControlProps } from './interface'
import './style.less'
interface IStyleConfig {
  stroke?: string
  fill?: string
  strokeWidth?: number
  strokeDasharray?: string
  fillOpacity?: number
}

const NodeEdgeComponent: React.FC<IControlProps> = props => {
  const { config, plugin } = props
  const { updateNode, updateEdge } = plugin

  const [nodeEdgeConfig, setNodeEdgeConfig] = useState<IStyleConfig>({
    ...DefaultNodeConfig,
    ...config,
  })

  const getSrokeDashValue = () => {
    return nodeEdgeConfig.strokeDasharray === '5 5' ? 'dash' : 'solid'
  }

  const onConfigChange = (key: string, value: number | string | boolean) => {
    setNodeEdgeConfig({
      ...nodeEdgeConfig,
      [key]: value,
    })
    updateNode({
      [key]: value,
    })
  }
  useEffect(() => {
    setNodeEdgeConfig({
      ...DefaultNodeConfig,
      ...config,
    })
  }, [config])

  return (
    <div className={`${PREFIX}-panel-body`}>
      <div className={`${PREFIX}-panel-group`}>
        <ColorPicker
          label="填充"
          value={nodeEdgeConfig.fill}
          onChange={(value: string) => {
            onConfigChange('fill', value)
            updateEdge(
              {
                stroke: value,
              },
              'line',
            )
          }}
        />
        <InputNumberFiled
          label="透明度"
          value={nodeEdgeConfig.fillOpacity}
          max={1}
          min={0}
          step={0.1}
          width={70}
          onChange={value => {
            onConfigChange('fillOpacity', value)
            updateEdge(
              {
                strokeOpacity: value,
              },
              'line',
            )
          }}
        />
        <ColorPicker
          label="边框"
          value={nodeEdgeConfig.stroke}
          onChange={(value: string) => {
            onConfigChange('stroke', value)
            updateEdge(
              {
                stroke: value,
              },
              'line',
            )
          }}
        />
        <SelectField
          label="线形"
          width={69}
          value={getSrokeDashValue()}
          options={[
            {
              label: <SolidLine />,
              value: 'solid',
            },
            {
              label: <DottedLine />,
              value: 'dash',
            },
          ]}
          onChange={value => {
            onConfigChange('strokeDasharray', STROKE_MAP[value])
            updateEdge(
              {
                strokeDasharray: STROKE_MAP[value],
              },
              'line',
            )
          }}
        />
        <InputNumberFiled
          label="线宽"
          value={nodeEdgeConfig.strokeWidth}
          min={1}
          max={5}
          width={69}
          onChange={value => {
            onConfigChange('strokeWidth', value)
            updateEdge(
              {
                strokeWidth: value,
              },
              'line',
            )
          }}
        />
      </div>
    </div>
  )
}

export const NodeEdgetyle: React.FC<any> = props => {
  return (
    <FlowchartFormWrapper {...props}>
      {(config, plugin) => <NodeEdgeComponent {...props} plugin={plugin} config={config} />}
    </FlowchartFormWrapper>
  )
}
