import React, { useState, useEffect } from 'react'
import { DefaultGroupConfig } from '../../../flowchart-node-panel'
import { FlowchartFormWrapper } from '../../form-wrapper'
import {  ColorPicker, InputNumberFiled, SelectField } from './fields'
import { SolidIcon, DottedLine } from './edit-style/index';
import { PREFIX, } from './constants'

export interface IGroupStyleConfig {
  stroke?: string
  fill?: string
  strokeWidth?: number
  strokeDash?: string
  fillOpacity?: number
  isGradient?: boolean
  gradientDirection?: string
  endColor?: string
}

const GroupComponent = props => {
  const { config, plugin = {} } = props
  const { updateGroup } = plugin

  const [groupConfig, setGroupConfig] = useState<IGroupStyleConfig>({
    ...DefaultGroupConfig,
    ...config,
  })

  const onGroupConfigChange = (key: string, value: number | string) => {
    setGroupConfig({
      ...groupConfig,
      [key]: value,
    })
    updateGroup({
      [key]: value,
    })
  }

  useEffect(() => {
    setGroupConfig({
      ...DefaultGroupConfig,
      ...config,
    })
  }, [config])

  return (
    <div className={`${PREFIX}-panel-body`}>
      <div className={`${PREFIX}-panel-group`}>
        <ColorPicker
          label="填充"
          value={groupConfig.fill}
          onChange={(value: string) => {
            onGroupConfigChange('fill', value)
          }}
        />
        <InputNumberFiled
          label="透明度"
          value={groupConfig.fillOpacity}
          max={1}
          min={0}
          step={0.1}
          width={70}
          onChange={value => {
            onGroupConfigChange('fillOpacity', value)
          }}
        />
        <ColorPicker
          label="边框"
          value={groupConfig.stroke}
          onChange={(value: string) => {
            onGroupConfigChange('stroke', value)
          }}
        />
        <div className={`${PREFIX}-edge-stroke-style`}>
          <SelectField
            label="线形"
            width={69}
            value={groupConfig.strokeDash}
            options={[
              {
                label: SolidIcon,
                value: 'solid',
              },
              {
                label: DottedLine,
                value: 'dash',
              },
            ]}
            onChange={value => {
              onGroupConfigChange('strokeDash', value)
            }}
          />
          <InputNumberFiled
            value={groupConfig.strokeWidth}
            min={1}
            max={10}
            onChange={value => {
              onGroupConfigChange('strokeWidth', value)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export const GroupStyle: React.FC<any> = props => {
  return (
    <FlowchartFormWrapper {...props}>
      {(config, plugin) => <GroupComponent {...props} plugin={plugin} config={config} />}
    </FlowchartFormWrapper>
  )
}
