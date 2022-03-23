import React, { useState, useEffect } from 'react'
import { Checkbox } from 'antd'
import { DefaultNodeConfig } from '../../../flowchart-node-panel'
import { FlowchartFormWrapper } from '../../form-wrapper'
import { ColorPicker, InputNumberFiled, SelectField } from './fields'
import { PREFIX, canEditorRounded, STROKE_MAP } from './constants'
import { SolidLine, DottedLine } from './edit-icon'
import type { IControlProps } from './interface'
import './style.less'
interface INodeStyleConfig {
  stroke?: string
  fill?: string
  strokeWidth?: number
  strokeDasharray?: string
  fillOpacity?: number
  rounded?: boolean
  isGradient?: boolean
  gradientDirection?: 'top-bottom' | 'bottom-top' | 'left-right' | 'right-left' | 'radial'
  endColor?: string
  name?: string
  isSelected?: boolean
}

const NodeComponent: React.FC<IControlProps> = props => {
  const { config, plugin } = props
  const { updateNode } = plugin

  const [nodeConfig, setNodeConfig] = useState<INodeStyleConfig>({
    ...DefaultNodeConfig,
    ...config,
  })

  const getSrokeDashValue = () => {
    return nodeConfig.strokeDasharray === '5 5' ? 'dash' : 'solid'
  }

  const onNodeConfigChange = (key: string, value: number | string | boolean) => {
    setNodeConfig({
      ...nodeConfig,
      [key]: value,
    })
    updateNode({
      [key]: value,
    })
  }
  useEffect(() => {
    setNodeConfig({
      ...DefaultNodeConfig,
      ...config,
    })
  }, [config])

  return (
    <div className={`${PREFIX}-panel-body`}>
      <div className={`${PREFIX}-panel-group`}>
        <ColorPicker
          label="填充"
          value={nodeConfig.fill}
          onChange={(value: string) => {
            onNodeConfigChange('fill', value)
          }}
        />
        <InputNumberFiled
          label="透明度"
          value={nodeConfig.fillOpacity}
          max={1}
          min={0}
          step={0.1}
          width={70}
          onChange={value => {
            onNodeConfigChange('fillOpacity', value)
          }}
        />
        <ColorPicker
          label="边框"
          value={nodeConfig.stroke}
          onChange={(value: string) => {
            onNodeConfigChange('stroke', value)
          }}
        />
        <div className={`${PREFIX}-edge-editor-style`}>
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
              onNodeConfigChange('strokeDasharray', STROKE_MAP[value])
            }}
          />
          <InputNumberFiled
            value={nodeConfig.strokeWidth}
            min={1}
            max={5}
            width={69}
            onChange={value => {
              onNodeConfigChange('strokeWidth', value)
            }}
          />
        </div>
        <div className={`${PREFIX}-node-editor-style`}>
          <Checkbox
            style={{ color: 'rgba(0, 0, 0, 0.45)' }}
            checked={nodeConfig.isGradient}
            onChange={e => {
              onNodeConfigChange('isGradient', e.target.checked)
            }}
          >
            渐变
          </Checkbox>
          {nodeConfig.isGradient && (
            <ColorPicker
              value={nodeConfig.endColor}
              onChange={(value: string) => {
                onNodeConfigChange('endColor', value)
              }}
            />
          )}
        </div>
        {nodeConfig.isGradient && (
          <SelectField
            label="方向"
            width={100}
            value={nodeConfig.gradientDirection}
            options={[
              {
                label: '自上向下',
                value: 'top-bottom',
              },
              {
                label: '自下向上',
                value: 'bottom-top',
              },
              {
                label: '自左向右',
                value: 'left-right',
              },
              {
                label: '自右向左',
                value: 'right-left',
              },
              {
                label: '径向',
                value: 'radial',
              },
            ]}
            onChange={value => {
              onNodeConfigChange('gradientDirection', value)
            }}
          />
        )}
        {canEditorRounded.indexOf(nodeConfig.name) !== -1 && (
          <Checkbox
            style={{ color: 'rgba(0, 0, 0, 0.45)' }}
            checked={nodeConfig.rounded}
            onChange={e => {
              onNodeConfigChange('rounded', e.target.checked)
            }}
          >
            圆角
          </Checkbox>
        )}
      </div>
    </div>
  )
}

export const NodeStyle: React.FC<any> = props => {
  return (
    <FlowchartFormWrapper {...props}>
      {(config, plugin) => <NodeComponent {...props} plugin={plugin} config={config} />}
    </FlowchartFormWrapper>
  )
}
