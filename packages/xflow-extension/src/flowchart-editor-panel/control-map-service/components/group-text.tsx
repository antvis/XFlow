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
} from '@ant-design/icons';
import { DefaultGroupConfig } from '../../../flowchart-node-panel'
import { FlowchartFormWrapper } from '../../form-wrapper'
import { InputFiled, ColorPicker, InputNumberFiled, InputOpacity, InputFontSpacing, InputFontPosition, SelectField } from './fields';

import { PREFIX } from './constants'

export interface IGroupTextConfig {
  label?: string;
  fontSize?: number;
  fontFill?: string;
  isBold?: boolean;
  isItalic?: boolean;
  isUnderline?: boolean;
  verticalAlign?: 'top' | 'middle' | 'bottom';
  horizontalAlign?: 'left' | 'middle' | 'right';
  name: string;
  isSelected?: boolean;
  textOpacity: number;
  letterSpacing: number;
  opacity: number;
  dy: number;
  dx: number;
  textBgColor: string;
  textBdColor: string;
  fontFamily: 'fangsong' | 'kaiti' | 'microsoftYahei' | 'nsimSun' | 'youyuan' | 'lisu';
}

const GroupComponent = props => {
  const { config, plugin = {} } = props
  const { updateGroup } = plugin

  const [groupConfig, setGroupConfig] = useState<IGroupTextConfig>({
    ...DefaultGroupConfig,
    ...config,
  })

  const onGroupConfigChange = (key: string, value: number | string | boolean) => {
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
        <InputFiled
          label="标题"
          value={groupConfig.label}
          onChange={(value) => {
            onGroupConfigChange('label', value);
          }}
        />
      </div>
      <div className={`${PREFIX}-panel-group`}>
        <SelectField
          label="字体"
          width={150}
          value={groupConfig.fontFamily}
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
          onChange={(value) => {
            onGroupConfigChange('fontFamily', value);
          }}
        />
      </div>
      <div className={`${PREFIX}-panel-group`}>
        <div className={`${PREFIX}-node-text-style`}>
          <InputNumberFiled
            label="字号"
            value={groupConfig.fontSize}
            width={50}
            onChange={(value) => {
              onGroupConfigChange('fontSize', value);
            }}
          />
          <InputFontSpacing
            label="间距"
            value={groupConfig.letterSpacing}
            min={0}
            step={1}
            width={50}
            onChange={(value) => {
              onGroupConfigChange('letterSpacing', value);
            }}
          />
        </div>
        <div className={`${PREFIX}-node-text-style`}>
          <label style={{ color: '#888' }}>颜色</label>
          <ColorPicker
            value={groupConfig.fontFill}
            onChange={(value: string) => {
              onGroupConfigChange('fontFill', value);
            }}
          />
          <InputOpacity
            label="透明度"
            value={groupConfig.textOpacity}
            max={1}
            min={0}
            step={0.1}
            width={65}
            onChange={(value) => {
              onGroupConfigChange('textOpacity', value);
            }}
          />
        </div>
        <div className={`${PREFIX}-node-text-style`}>
          <label style={{ color: '#888' }}>字体背景</label>
          <ColorPicker
            value={groupConfig.textBgColor}
            onChange={(value: string) => {
              onGroupConfigChange('textBgColor', value);
            }}
          />
          <label style={{ color: '#888' }}>字体边框</label>
          <ColorPicker
            value={groupConfig.textBdColor}
            onChange={(value: string) => {
              onGroupConfigChange('textBdColor', value);
            }}
          />
        </div>
        <div className={`${PREFIX}-icon-container`}>
          <BoldOutlined
            className={groupConfig.isBold ? `${PREFIX}-icon-select-style` : `${PREFIX}-icon-noselect-style`}
            onClick={() => {
              onGroupConfigChange('isBold', !groupConfig.isBold);
            }}
          />
          <ItalicOutlined
            className={groupConfig.isItalic ? `${PREFIX}-icon-select-style` : `${PREFIX}-icon-noselect-style`}
            onClick={() => {
              onGroupConfigChange('isItalic', !groupConfig.isItalic);
            }}
          />
          <UnderlineOutlined
            className={groupConfig.isUnderline ? `${PREFIX}-icon-select-style` : `${PREFIX}-icon-noselect-style`}
            onClick={() => {
              onGroupConfigChange('isUnderline', !groupConfig.isUnderline);
            }}
          />
          <label style={{ color: '#888' }}>文本位置</label>
        </div>
        <div className={`${PREFIX}-icon-container`}>
          <VerticalAlignTopOutlined
            className={
              groupConfig.verticalAlign === 'top'
                ? `${PREFIX}-icon-select-style`
                : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onGroupConfigChange('verticalAlign', 'top');
            }}
          />
          <VerticalAlignMiddleOutlined
            className={
              groupConfig.verticalAlign === 'middle'
                ? `${PREFIX}-icon-select-style`
                : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onGroupConfigChange('verticalAlign', 'middle');
            }}
          />
          <VerticalAlignBottomOutlined
            className={
              groupConfig.verticalAlign === 'bottom'
                ? `${PREFIX}-icon-select-style`
                : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onGroupConfigChange('verticalAlign', 'bottom');
            }}
          />
          <InputFontPosition
            label="Y"
            value={groupConfig.dy}
            step={1}
            width={60}
            onChange={(value) => {
              onGroupConfigChange('dy', value);
            }}
          />
        </div>
        <div className={`${PREFIX}-icon-container`}>
          <AlignLeftOutlined
            className={
              groupConfig.horizontalAlign === 'left' ? `${PREFIX}-icon-select-style` : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onGroupConfigChange('horizontalAlign', 'left');
            }}
          />
          <AlignCenterOutlined
            className={
              groupConfig.horizontalAlign === 'middle' ? `${PREFIX}-icon-select-style` : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onGroupConfigChange('horizontalAlign', 'middle');
            }}
          />
          <AlignRightOutlined
            className={
              groupConfig.horizontalAlign === 'right' ? `${PREFIX}-icon-select-style` : `${PREFIX}-icon-noselect-style`
            }
            onClick={() => {
              onGroupConfigChange('horizontalAlign', 'right');
            }}
          />
          <InputFontPosition
            label="X"
            value={groupConfig.dx}
            step={1}
            width={60}
            onChange={(value) => {
              onGroupConfigChange('dx', value);
            }}
          />
        </div>
      </div>
    </div>
  )
}

export const GroupText: React.FC<any> = props => {
  return (
    <FlowchartFormWrapper {...props}>
      {(config, plugin) => <GroupComponent {...props} plugin={plugin} config={config} />}
    </FlowchartFormWrapper>
  )
}
