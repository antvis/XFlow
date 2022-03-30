import React, { useState, useEffect } from 'react'
import {
  VerticalAlignTopOutlined,
  VerticalAlignMiddleOutlined,
  VerticalAlignBottomOutlined,
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  AlignLeftOutlined,
  AlignCenterOutlined,
  AlignRightOutlined,
} from '@ant-design/icons'
import { Checkbox } from 'antd'
import { DefaultNodeConfig } from '../../../flowchart-node-panel'
import { FlowchartFormWrapper } from '../../form-wrapper'
import {
  InputFiled,
  ColorPicker,
  InputNumberFiled,
} from './fields'
import { PREFIX } from './constants'
import type { IControlProps } from './interface'
import './style.less'

export interface INodeTextConfig {
  label?: string
  fontSize?: number
  fontFill?: string
  isBold?: boolean
  isItalic?: boolean
  isUnderline?: boolean
  verticalAlign?: 'top' | 'middle' | 'bottom'
  horizontalAlign?: 'left' | 'middle' | 'right'
  isSelected?: boolean
  textOpacity?: number
  letterSpacing?: number
  opacity?: number
  dy?: number
  dx?: number
  showTextBgColor?: boolean
  textBgColor?: string
  showTextBdColor?: boolean
  textBdColor?: string
}

const NodeComponent: React.FC<IControlProps> = props => {
  const { config, plugin } = props
  const { updateNode } = plugin

  const [nodeConfig, setNodeConfig] = useState<INodeTextConfig>({
    ...DefaultNodeConfig,
    ...config,
  })

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
        <InputFiled
          label="标题"
          value={nodeConfig.label}
          onChange={value => {
            onNodeConfigChange('label', value)
          }}
        />
        <InputNumberFiled
          label="字号"
          value={nodeConfig.fontSize}
          width={68}
          onChange={value => {
            onNodeConfigChange('fontSize', value)
          }}
        />
        <InputNumberFiled
          label="间距"
          value={nodeConfig.letterSpacing}
          min={0}
          step={1}
          width={68}
          onChange={value => {
            onNodeConfigChange('letterSpacing', value)
          }}
        />
      </div>
      <div className={`${PREFIX}-panel-group`}>
        <ColorPicker
          label="颜色"
          value={nodeConfig.fontFill}
          onChange={(value: string) => {
            onNodeConfigChange('fontFill', value)
          }}
        />
        <InputNumberFiled
          label="透明度"
          value={nodeConfig.textOpacity}
          max={1}
          min={0}
          step={0.1}
          width={68}
          onChange={value => {
            onNodeConfigChange('textOpacity', value)
          }}
        />
        <div className={`${PREFIX}-node-editor-style`}>
          <Checkbox
            style={{ color: '#888' }}
            checked={nodeConfig.showTextBgColor}
            onChange={e => {
              onNodeConfigChange('showTextBgColor', e.target.checked)
            }}
          >
            字体背景
          </Checkbox>
          {nodeConfig.showTextBgColor && (
            <ColorPicker
              value={nodeConfig.textBgColor}
              onChange={(value: string) => {
                onNodeConfigChange('textBgColor', value)
              }}
            />
          )}
        </div>
        <div className={`${PREFIX}-node-editor-style`}>
          <Checkbox
            style={{ color: '#888' }}
            checked={nodeConfig.showTextBdColor}
            onChange={e => {
              onNodeConfigChange('showTextBdColor', e.target.checked)
            }}
          >
            字体边框
          </Checkbox>
          {nodeConfig.showTextBdColor && (
            <ColorPicker
              value={nodeConfig.textBdColor}
              onChange={(value: string) => {
                onNodeConfigChange('textBdColor', value)
              }}
            />
          )}
        </div>
      </div>
      <div  className={`${PREFIX}-panel-group`}>
        <div className={`${PREFIX}-icon-container`}>
          <BoldOutlined
            className={
              nodeConfig.isBold ? `${PREFIX}-icon-select-style` : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onNodeConfigChange('isBold', !nodeConfig.isBold)
            }}
          />
          <ItalicOutlined
            className={
              nodeConfig.isItalic ? `${PREFIX}-icon-select-style` : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onNodeConfigChange('isItalic', !nodeConfig.isItalic)
            }}
          />
          <UnderlineOutlined
            className={
              nodeConfig.isUnderline
                ? `${PREFIX}-icon-select-style`
                : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onNodeConfigChange('isUnderline', !nodeConfig.isUnderline)
            }}
          />
          <label style={{ color: '#888' }}>文本位置</label>
        </div>
        <div className={`${PREFIX}-icon-container`}>
          <VerticalAlignTopOutlined
            className={
              nodeConfig.verticalAlign === 'top'
                ? `${PREFIX}-icon-select-style`
                : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onNodeConfigChange('verticalAlign', 'top')
            }}
          />
          <VerticalAlignMiddleOutlined
            className={
              nodeConfig.verticalAlign === 'middle'
                ? `${PREFIX}-icon-select-style`
                : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onNodeConfigChange('verticalAlign', 'middle')
            }}
          />
          <VerticalAlignBottomOutlined
            className={
              nodeConfig.verticalAlign === 'bottom'
                ? `${PREFIX}-icon-select-style`
                : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onNodeConfigChange('verticalAlign', 'bottom')
            }}
          />
          <InputNumberFiled
            label="Y"
            value={nodeConfig.dy}
            step={1}
            width={60}
            onChange={value => {
              onNodeConfigChange('dy', value)
            }}
          />
        </div>
        <div className={`${PREFIX}-icon-container`}>
          <AlignLeftOutlined
            className={
              nodeConfig.horizontalAlign === 'left'
                ? `${PREFIX}-icon-select-style`
                : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onNodeConfigChange('horizontalAlign', 'left')
            }}
          />
          <AlignCenterOutlined
            className={
              nodeConfig.horizontalAlign === 'middle'
                ? `${PREFIX}-icon-select-style`
                : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onNodeConfigChange('horizontalAlign', 'middle')
            }}
          />
          <AlignRightOutlined
            className={
              nodeConfig.horizontalAlign === 'right'
                ? `${PREFIX}-icon-select-style`
                : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onNodeConfigChange('horizontalAlign', 'right')
            }}
          />
          <InputNumberFiled
            label="X"
            value={nodeConfig.dx}
            step={1}
            width={60}
            onChange={value => {
              onNodeConfigChange('dx', value)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export const NodeText: React.FC<any> = props => {
  return (
    <FlowchartFormWrapper {...props}>
      {(config, plugin) => <NodeComponent {...props} plugin={plugin} config={config} />}
    </FlowchartFormWrapper>
  )
}
