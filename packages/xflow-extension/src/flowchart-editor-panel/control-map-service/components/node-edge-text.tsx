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
  InputOpacity,
  InputFontSpacing,
  SelectField,
} from './fields'
import { PREFIX } from './constants'
import type { IControlProps } from './interface'
import './style.less'

export interface ITextConfig {
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
  fontFamily?: 'fangsong' | 'kaiti' | 'microsoftYahei' | 'nsimSun' | 'youyuan' | 'lisu'
}

const NodeEdgeComponent: React.FC<IControlProps> = props => {
  const { config, plugin } = props
  const { updateNode, updateEdge } = plugin

  const [nodeEdgeConfig, setNodeEdgeConfig] = useState<ITextConfig>({
    ...DefaultNodeConfig,
    ...config,
  })

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
        <InputFiled
          label="标题"
          value={nodeEdgeConfig.label}
          onChange={value => {
            onConfigChange('label', value)
            updateEdge(
              {
                label: value,
              },
              'line',
              '',
            )
          }}
        />
      </div>
      <div className={`${PREFIX}-panel-group`}>
        <SelectField
          label="字体"
          width={150}
          value={nodeEdgeConfig.fontFamily}
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
            onConfigChange('fontFamily', value)
            updateEdge(
              {
                fontFamily: value,
              },
              'text',
              '',
            )
          }}
        />
      </div>
      <div className={`${PREFIX}-panel-group`}>
        <div className={`${PREFIX}-node-editor-style`}>
          <InputNumberFiled
            label="字号"
            value={nodeEdgeConfig.fontSize}
            width={50}
            onChange={value => {
              onConfigChange('fontSize', value)
              updateEdge(
                {
                  fontSize: value,
                },
                'text',
                '',
              )
            }}
          />
          <InputFontSpacing
            label="间距"
            value={nodeEdgeConfig.letterSpacing}
            min={0}
            step={1}
            width={50}
            onChange={value => {
              onConfigChange('letterSpacing', value)
              updateEdge(
                {
                  letterSpacing: value,
                },
                'text',
                '',
              )
            }}
          />
        </div>
        <div className={`${PREFIX}-node-editor-style`}>
          <ColorPicker
            label="颜色"
            value={nodeEdgeConfig.fontFill}
            onChange={(value: string) => {
              onConfigChange('fontFill', value)
              updateEdge(
                {
                  fill: value,
                },
                'text',
                '',
              )
            }}
          />
          <InputOpacity
            label="透明度"
            value={nodeEdgeConfig.textOpacity}
            max={1}
            min={0}
            step={0.1}
            width={65}
            onChange={value => {
              onConfigChange('textOpacity', value)
              updateEdge(
                {
                  fillOpacity: value,
                },
                'text',
                '',
              )
            }}
          />
        </div>
        <div className={`${PREFIX}-node-editor-style`}>
          <Checkbox
            style={{ color: '#888' }}
            checked={nodeEdgeConfig.showTextBgColor}
            onChange={e => {
              onConfigChange('showTextBgColor', e.target.checked)
            }}
          >
            字体背景
          </Checkbox>
          {nodeEdgeConfig.showTextBgColor && (
            <ColorPicker
              value={nodeEdgeConfig.textBgColor}
              onChange={(value: string) => {
                onConfigChange('textBgColor', value)
              }}
            />
          )}
        </div>
        <div className={`${PREFIX}-node-editor-style`}>
          <Checkbox
            style={{ color: '#888' }}
            checked={nodeEdgeConfig.showTextBdColor}
            onChange={e => {
              onConfigChange('showTextBdColor', e.target.checked)
            }}
          >
            字体边框
          </Checkbox>
          {nodeEdgeConfig.showTextBdColor && (
            <ColorPicker
              value={nodeEdgeConfig.textBdColor}
              onChange={(value: string) => {
                onConfigChange('textBdColor', value)
              }}
            />
          )}
        </div>
        <div className={`${PREFIX}-icon-container`}>
          <BoldOutlined
            className={
              nodeEdgeConfig.isBold
                ? `${PREFIX}-icon-select-style`
                : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              const isBold = !nodeEdgeConfig.isBold
              onConfigChange('isBold', isBold)
              updateEdge(
                {
                  fontWeight: isBold ? 'bold' : 'normal',
                },
                'text',
                '',
              )
            }}
          />
          <ItalicOutlined
            className={
              nodeEdgeConfig.isItalic
                ? `${PREFIX}-icon-select-style`
                : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              const isItalic = !nodeEdgeConfig.isItalic
              onConfigChange('isItalic', isItalic)
              updateEdge(
                {
                  fontStyle: isItalic ? 'italic' : 'normal',
                },
                'text',
                '',
              )
            }}
          />
          <UnderlineOutlined
            className={
              nodeEdgeConfig.isUnderline
                ? `${PREFIX}-icon-select-style`
                : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              const isUnderline = !nodeEdgeConfig.isUnderline
              onConfigChange('isUnderline', isUnderline)
              updateEdge(
                {
                  textDecoration: isUnderline ? 'underline' : '',
                },
                'text',
                '',
              )
            }}
          />
        </div>
        <div className={`${PREFIX}-icon-container`}>
          <VerticalAlignTopOutlined
            className={
              nodeEdgeConfig.verticalAlign === 'top'
                ? `${PREFIX}-icon-select-style`
                : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onConfigChange('verticalAlign', 'top')
            }}
          />
          <VerticalAlignMiddleOutlined
            className={
              nodeEdgeConfig.verticalAlign === 'middle'
                ? `${PREFIX}-icon-select-style`
                : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onConfigChange('verticalAlign', 'middle')
            }}
          />
          <VerticalAlignBottomOutlined
            className={
              nodeEdgeConfig.verticalAlign === 'bottom'
                ? `${PREFIX}-icon-select-style`
                : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onConfigChange('verticalAlign', 'bottom')
            }}
          />
        </div>
        <div className={`${PREFIX}-icon-container`}>
          <AlignLeftOutlined
            className={
              nodeEdgeConfig.horizontalAlign === 'left'
                ? `${PREFIX}-icon-select-style`
                : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onConfigChange('horizontalAlign', 'left')
              updateEdge(
                {
                  textAnchor: 'end',
                },
                'text',
                '',
              )
            }}
          />
          <AlignCenterOutlined
            className={
              nodeEdgeConfig.horizontalAlign === 'middle'
                ? `${PREFIX}-icon-select-style`
                : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onConfigChange('horizontalAlign', 'middle')
              updateEdge(
                {
                  textAnchor: 'middle',
                },
                'text',
                '',
              )
            }}
          />
          <AlignRightOutlined
            className={
              nodeEdgeConfig.horizontalAlign === 'right'
                ? `${PREFIX}-icon-select-style`
                : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onConfigChange('horizontalAlign', 'right')
              updateEdge(
                {
                  textAnchor: 'start',
                },
                'text',
                '',
              )
            }}
          />
        </div>
      </div>
    </div>
  )
}

export const NodeEdgeText: React.FC<any> = props => {
  return (
    <FlowchartFormWrapper {...props}>
      {(config, plugin) => <NodeEdgeComponent {...props} plugin={plugin} config={config} />}
    </FlowchartFormWrapper>
  )
}
