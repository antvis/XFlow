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
import { DefaultNodeConfig } from '../../../flowchart-node-panel'
import { FlowchartFormWrapper } from '../../form-wrapper'
import {
  InputFiled,
  ColorPicker,
  InputNumberFiled,
  InputOpacity,
  InputFontSpacing,
  InputFontPosition,
  SelectField
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
  name?: string
  isSelected?: boolean
  textOpacity?: number
  letterSpacing?: number
  opacity?: number
  dy?: number
  dx?: number
  textBgColor?: string
  textBdColor?: string
  fontFamily?: 'fangsong' | 'kaiti' | 'microsoftYahei' | 'nsimSun' | 'youyuan' | 'lisu'
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
      </div>
      <div className={`${PREFIX}-panel-group`}>
        <SelectField
          label="字体"
          width={150}
          value={nodeConfig.fontFamily}
          options={[
            {
              label: '微软雅黑',
              value: 'microsoftYahei',
            },
            {
              label: '仿宋',
              value: 'fangsong',
            },
            {
              label: '新宋体',
              value: 'nsimSun',
            },
            {
              label: '楷体',
              value: 'kaiti',
            },

            {
              label: '幼圆',
              value: 'youyuan',
            },
            {
              label: '隶书',
              value: 'lisu',
            },
          ]}
          onChange={value => {
            onNodeConfigChange('fontFamily', value)
          }}
        />
      </div>
      <div className={`${PREFIX}-panel-group`}>
        <div className={`${PREFIX}-node-text-style`}>
          <InputNumberFiled
            label="字号"
            value={nodeConfig.fontSize}
            width={50}
            onChange={value => {
              onNodeConfigChange('fontSize', value)
            }}
          />
          <InputFontSpacing
            label="间距"
            value={nodeConfig.letterSpacing}
            min={0}
            step={1}
            width={50}
            onChange={value => {
              onNodeConfigChange('letterSpacing', value)
            }}
          />
        </div>
        <div className={`${PREFIX}-node-text-style`}>
          <label style={{ color: '#888' }}>颜色</label>
          <ColorPicker
            value={nodeConfig.fontFill}
            onChange={(value: string) => {
              onNodeConfigChange('fontFill', value)
            }}
          />
          <InputOpacity
            label="透明度"
            value={nodeConfig.textOpacity}
            max={1}
            min={0}
            step={0.1}
            width={65}
            onChange={value => {
              onNodeConfigChange('textOpacity', value)
            }}
          />
        </div>
        <div className={`${PREFIX}-node-text-style`}>
          <label style={{ color: '#888' }}>字体背景</label>
          <ColorPicker
            value={nodeConfig.textBgColor}
            onChange={(value: string) => {
              onNodeConfigChange('textBgColor', value)
            }}
          />
          <label style={{ color: '#888' }}>字体边框</label>
          <ColorPicker
            value={nodeConfig.textBdColor}
            onChange={(value: string) => {
              onNodeConfigChange('textBdColor', value)
            }}
          />
        </div>
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
          <InputFontPosition
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
          <InputFontPosition
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
