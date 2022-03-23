import React, { useState, useEffect } from 'react'
import { FlowchartFormWrapper } from '../../form-wrapper'
import { ColorPicker, InputNumberFiled, InputFiled } from './fields'
import { PREFIX, DefaultEdgeConfig } from './constants'
import {
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  AlignLeftOutlined,
  AlignCenterOutlined,
  AlignRightOutlined,
} from '@ant-design/icons'
import { Checkbox } from 'antd'

export interface ITextConfig {
  label?: string
  attrs?: {
    text?: {
      fontSize?: number
      fontFill?: string
      fontWeight?: 'normal' | 'bold'
      fontStyle?: 'normal' | 'italic'
      textDecoration?: '' | 'underline'
      textAnchor?: 'start' | 'middle' | 'end'
      letterSpacing: number
      fillOpacity: number
    }
    // 文本背景框
    rect?: {
      stroke: string
      fill: string
      fillOpactiy: number
      strokeOpacity: number
    }
  }
}

const EdgeComponent = props => {
  const { config, plugin = {} } = props
  const { updateEdge } = plugin

  const [edgeConfig, setEdgeConfig] = useState<ITextConfig>({
    ...DefaultEdgeConfig,
    ...config,
  })

  useEffect(() => {
    setEdgeConfig({
      ...DefaultEdgeConfig,
      ...config,
    })
  }, [config])

  const getAttrs = (key: string, type = 'line') => {
    const { attrs = {} } = edgeConfig
    return attrs[type]?.[key]
  }

  const onEdgeConfigChange = (
    key: string,
    value: number | string | object,
    type: string = 'line',
  ) => {
    /** 全量更新，简化逻辑 */
    if (key === 'arrow') {
      setEdgeConfig({
        ...edgeConfig,
        attrs: {
          ...edgeConfig.attrs,
          [type]: {
            ...edgeConfig.attrs?.[type],
            ...(value as object),
          },
        },
      })
    } else {
      setEdgeConfig({
        ...edgeConfig,
        [key]: value,
        attrs: {
          ...edgeConfig.attrs,
          [type]: {
            ...edgeConfig.attrs?.[type],
            [key]: value,
          },
        },
      })
    }

    updateEdge(
      {
        [key]: value,
      },
      type,
      key === 'arrow' ? 'arrow' : '',
    )
  }

  return (
    <div className={`${PREFIX}-panel-body`}>
      <div className={`${PREFIX}-panel-group`}>
        <InputFiled
          label="标签"
          value={edgeConfig.label}
          onChange={value => {
            onEdgeConfigChange('label', value)
          }}
        />
        <div className={`${PREFIX}-edge-editor-style`}>
          <InputNumberFiled
            label="字号"
            min={10}
            width={68}
<<<<<<< HEAD
            value={getAttrs('fontSize', 'text') || 14}
=======
            value={getAttrs('fontSize', 'text') || 12}
>>>>>>> feat/register-node-type-model
            onChange={value => {
              onEdgeConfigChange('fontSize', value, 'text')
            }}
          />
        </div>
        <div className={`${PREFIX}-edge-editor-style`}>
          <InputNumberFiled
            label="字间距"
            min={0}
            width={68}
            value={getAttrs('letterSpacing', 'text')}
            onChange={value => {
              onEdgeConfigChange('letterSpacing', value, 'text')
            }}
          />
        </div>
        <div className={`${PREFIX}-edge-editor-style`}>
          <ColorPicker
            label="颜色"
            value={getAttrs('fill', 'text') || '#000'}
            onChange={(value: string) => {
              onEdgeConfigChange('fill', value, 'text')
            }}
          />
        </div>
        <div className={`${PREFIX}-edge-editor-style`}>
          <InputNumberFiled
            label="透明度"
            min={0}
            max={1}
            step={0.1}
            width={68}
            value={getAttrs('fillOpacity', 'text')}
            onChange={value => {
              onEdgeConfigChange('fillOpacity', value, 'text')
            }}
          />
        </div>
        <div className={`${PREFIX}-edge-editor-style`}>
          <Checkbox
            checked={getAttrs('fillOpacity', 'rect') === 1}
            style={{ color: '#888' }}
            onChange={e => {
              onEdgeConfigChange('fillOpacity', e.target.checked ? 1 : 0, 'rect')
            }}
          >
            字体背景
          </Checkbox>
          {getAttrs('fillOpacity', 'rect') === 1 && (
            <ColorPicker
              value={getAttrs('fill', 'rect')}
              onChange={(value: string) => {
                onEdgeConfigChange('fill', value, 'rect')
              }}
            />
          )}
        </div>
        <div className={`${PREFIX}-edge-editor-style`}>
          <Checkbox
            style={{ color: '#888' }}
            checked={getAttrs('strokeOpacity', 'rect') === 1}
            onChange={e => {
              onEdgeConfigChange('strokeOpacity', e.target.checked ? 1 : 0, 'rect')
            }}
          >
            字体边框
          </Checkbox>
          {getAttrs('strokeOpacity', 'rect') === 1 && (
            <ColorPicker
              value={getAttrs('stroke', 'rect')}
              onChange={(value: string) => {
                onEdgeConfigChange('stroke', value, 'rect')
              }}
            />
          )}
        </div>
        <div className={`${PREFIX}-icon-container`}>
          <BoldOutlined
            className={
              getAttrs('fontWeight', 'text') === 'bold'
                ? `${PREFIX}-icon-select-style`
                : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              const oldValue = getAttrs('fontWeight', 'text')
              const newValue = oldValue === 'normal' ? 'bold' : 'normal'
              onEdgeConfigChange('fontWeight', newValue, 'text')
            }}
          />
          <ItalicOutlined
            className={
              getAttrs('fontStyle', 'text') === 'italic'
                ? `${PREFIX}-icon-select-style`
                : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              const oldValue = getAttrs('fontStyle', 'text')
              const newValue = oldValue === 'normal' ? 'italic' : 'normal'
              onEdgeConfigChange('fontStyle', newValue, 'text')
            }}
          />

          <UnderlineOutlined
            className={
              getAttrs('textDecoration', 'text') === 'underline'
                ? `${PREFIX}-icon-select-style`
                : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              const oldValue = getAttrs('textDecoration', 'text')
              const newValue = oldValue === '' ? 'underline' : ''
              onEdgeConfigChange('textDecoration', newValue, 'text')
            }}
          />
        </div>
        <div className={`${PREFIX}-icon-container`}>
          <AlignLeftOutlined
            className={
              getAttrs('textAnchor', 'text') === 'end'
                ? `${PREFIX}-icon-select-style`
                : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onEdgeConfigChange('textAnchor', 'end', 'text')
            }}
          />
          <AlignCenterOutlined
            className={
              getAttrs('textAnchor', 'text') === 'middle'
                ? `${PREFIX}-icon-select-style`
                : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onEdgeConfigChange('textAnchor', 'middle', 'text')
            }}
          />
          <AlignRightOutlined
            className={
              getAttrs('textAnchor', 'text') === 'start'
                ? `${PREFIX}-icon-select-style`
                : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onEdgeConfigChange('textAnchor', 'start', 'text')
            }}
          />
        </div>
      </div>
    </div>
  )
}
export const EdgeText: React.FC<any> = props => {
  return (
    <FlowchartFormWrapper {...props} type="edge">
      {(config, plugin) => <EdgeComponent {...props} plugin={plugin} config={config} />}
    </FlowchartFormWrapper>
  )
}
