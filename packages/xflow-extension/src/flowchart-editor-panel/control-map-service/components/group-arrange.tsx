import React, { useState, useEffect } from 'react'
import { DefaultGroupConfig } from '../../../flowchart-node-panel'
import { FlowchartFormWrapper } from '../../form-wrapper'
import { Position, Size } from './fields'

import { PREFIX } from './constants'

interface IGroupArrangeConfig {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  angel?: number;
}

const GroupComponent = props => {
  const { config, plugin = {} } = props
  const { updateGroup } = plugin

  const [groupConfig, setGroupConfig] = useState<IGroupArrangeConfig>({
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
      </div>
    </div>
  )
}

export const GroupArrange: React.FC<any> = props => {
  return (
    <FlowchartFormWrapper {...props}>
      {(config, plugin) => <GroupComponent {...props} plugin={plugin} config={config} />}
    </FlowchartFormWrapper>
  )
}
