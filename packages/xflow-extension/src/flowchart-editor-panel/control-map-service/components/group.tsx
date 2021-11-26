import React, { useState, useEffect } from 'react'
import { DefaultNodeConfig } from '../../../flowchart-node-panel'
import { FlowchartFormWrapper } from '../../form-wrapper'
import { InputFiled, ColorPicker, Position, InputNumberFiled, Size } from './fields'
import type { IConfig } from './node'

import { PREFIX } from './constants'

const GroupComponent = props => {
  const { config, plugin = {} } = props
  const { updateGroup } = plugin

  const [groupConfig, setGroupConfig] = useState<IConfig>({
    ...DefaultNodeConfig,
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
      ...DefaultNodeConfig,
      ...config,
    })
  }, [config])

  return (
    <div className={`${PREFIX}-panel-body`}>
      <div className={`${PREFIX}-panel-group`}>
        <h5>内容</h5>
        <InputFiled
          label="标题"
          value={groupConfig.label}
          onChange={value => {
            onGroupConfigChange('label', value)
          }}
        />
      </div>
      <div className={`${PREFIX}-panel-group`}>
        <h5>样式</h5>
        <Position
          x={groupConfig.x}
          y={groupConfig.y}
          onChange={(key, value) => {
            onGroupConfigChange(key, value)
          }}
        />
        <Size
          width={groupConfig.width}
          height={groupConfig.height}
          onChange={(key, value) => {
            onGroupConfigChange(key, value)
          }}
        />
        <ColorPicker
          label="填充"
          value={groupConfig.fill}
          onChange={(value: string) => {
            onGroupConfigChange('fill', value)
          }}
        />
        <ColorPicker
          label="边框"
          value={groupConfig.stroke}
          onChange={(value: string) => {
            onGroupConfigChange('stroke', value)
          }}
        />
        <div className={`${PREFIX}-node-text-style`}>
          <InputNumberFiled
            label="字号"
            value={groupConfig.fontSize}
            width={68}
            onChange={value => {
              onGroupConfigChange('fontSize', value)
            }}
          />
          <ColorPicker
            value={groupConfig.fontFill}
            onChange={(value: string) => {
              onGroupConfigChange('fontFill', value)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export const GroupService: React.FC<any> = props => {
  return (
    <FlowchartFormWrapper {...props}>
      {(config, plugin) => <GroupComponent {...props} plugin={plugin} config={config} />}
    </FlowchartFormWrapper>
  )
}
