import React, { useState, useEffect } from 'react'
import { DefaultNodeConfig } from '../../../flowchart-node-panel'
import { FlowchartFormWrapper } from '../../form-wrapper'
import { InputFiled, ColorPicker, Position, InputNumberFiled, Size } from './fields'
import { PREFIX } from './constants'

export interface IConfig {
  x?: number
  y?: number
  width?: number
  height?: number
  label?: string
  stroke?: string
  fill?: string
  fontSize?: number
  fontFill?: string
}

const NodeComponent = props => {
  const { config, plugin = {} } = props
  const { updateNode } = plugin
  const [nodeConfig, setNodeConfig] = useState<IConfig>({
    ...DefaultNodeConfig,
    ...config,
  })
  const onNodeConfigChange = (key: string, value: number | string) => {
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
        <h5>内容</h5>
        <InputFiled
          label="标题"
          value={nodeConfig.label}
          onChange={value => {
            onNodeConfigChange('label', value)
          }}
        />
      </div>
      <div className={`${PREFIX}-panel-group`}>
        <h5>样式</h5>
        <Position
          x={nodeConfig.x}
          y={nodeConfig.y}
          onChange={(key, value) => {
            onNodeConfigChange(key, value)
          }}
        />
        <Size
          width={nodeConfig.width}
          height={nodeConfig.height}
          onChange={(key, value) => {
            onNodeConfigChange(key, value)
          }}
        />
        <ColorPicker
          label="填充"
          value={nodeConfig.fill}
          onChange={(value: string) => {
            onNodeConfigChange('fill', value)
          }}
        />
        <ColorPicker
          label="边框"
          value={nodeConfig.stroke}
          onChange={(value: string) => {
            onNodeConfigChange('stroke', value)
          }}
        />
        <div className={`${PREFIX}-node-text-style`}>
          <InputNumberFiled
            label="字号"
            value={nodeConfig.fontSize}
            width={68}
            onChange={value => {
              onNodeConfigChange('fontSize', value)
            }}
          />
          <ColorPicker
            value={nodeConfig.fontFill}
            onChange={(value: string) => {
              onNodeConfigChange('fontFill', value)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export const NodeService: React.FC<any> = props => {
  return (
    <FlowchartFormWrapper {...props}>
      {(config, plugin) => <NodeComponent {...props} plugin={plugin} config={config} />}
    </FlowchartFormWrapper>
  )
}
