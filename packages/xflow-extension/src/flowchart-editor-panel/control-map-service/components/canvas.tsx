import React, { useState } from 'react'
import { XFlowGraphCommands } from '@antv/xflow-core'
import { Checkbox, Upload, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { ColorPicker, InputNumberFiled, SelectField, Size } from './fields'
import { SolidIcon, DottedLine } from './edit-style/index'
import { PREFIX } from './constants'
import { usePanelContext } from '../../../base-panel/context'
import type { ICanvasConfig, IBackground, IGrid } from './interface'
import { getGraphInstance } from '../../../flowchart-canvas/utils'

export const CanvasService: React.FC = () => {
  const { commandService } = usePanelContext()
  const X6Graph = getGraphInstance()
  const grid = X6Graph.options.grid as IGrid
  const background = X6Graph.options.background as IBackground
  const [canvasConfig, setCanvasConfig] = useState<ICanvasConfig>({
    grid,
    background,
  } as ICanvasConfig)
  const onCanvasConfigChange = (
    type: 'grid' | 'background',
    key: string,
    value: string | number | boolean,
  ) => {
    setCanvasConfig({
      ...canvasConfig,
      [type]: {
        ...canvasConfig[type],
        [key]: value,
      },
    })

    commandService.executeCommand(XFlowGraphCommands.GRAPH_UPDATE.id, {
      [type]: {
        [key]: value,
      },
    })
  }

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    })
  }

  const handleUpload = async ({ file }) => {
    if (file.status === 'done') {
      const image = await getBase64(file.originFileObj)
      onCanvasConfigChange('background', 'image', image as string)
    }
  }

  return (
    <div className={`${PREFIX}-panel-body`}>
      <div className={`${PREFIX}-panel-group`}>
        <Checkbox
          checked={canvasConfig.grid.visible}
          onChange={e => {
            onCanvasConfigChange('grid', 'visible', e.target.checked)
          }}
        >
          网格
        </Checkbox>
        {canvasConfig.grid.visible && (
          <ColorPicker
            label="网格填充"
            value={canvasConfig.grid.color || canvasConfig.grid.args.color}
            onChange={(value: string) => {
              onCanvasConfigChange('grid', 'color', value)
            }}
          />
        )}
        {canvasConfig.grid.visible && (
          <InputNumberFiled
            label="网格大小"
            value={canvasConfig.grid.size}
            step={1}
            width={70}
            onChange={(value: number) => {
              onCanvasConfigChange('grid', 'size', value)
            }}
          />
        )}
        {canvasConfig.grid.visible && (
          <SelectField
            label="线形"
            width={69}
            value={canvasConfig.grid.type}
            options={[
              {
                label: SolidIcon,
                value: 'mesh',
              },
              {
                label: DottedLine,
                value: 'dot',
              },
            ]}
            onChange={(value: string) => {
              onCanvasConfigChange('grid', 'type', value)
            }}
          />
        )}
      </div>
      <div className={`${PREFIX}-panel-group`}>
        <ColorPicker
          label="背景"
          value={canvasConfig.background.color}
          onChange={(value: string) => {
            onCanvasConfigChange('background', 'color', value)
          }}
        />
        <Upload
          maxCount={1}
          onChange={handleUpload}
          onRemove={() => {
            onCanvasConfigChange('background', 'image', '')
          }}
        >
          <Button icon={<UploadOutlined />}>背景图片</Button>
        </Upload>
        {canvasConfig.background.image && (
          <InputNumberFiled
            label="图片透明度"
            value={canvasConfig.background.opacity}
            max={1}
            min={0}
            step={0.1}
            width={70}
            onChange={(value: number) => {
              console.log(typeof value)
              onCanvasConfigChange('background', 'opacity', value)
            }}
          />
        )}
      </div>
    </div>
  )
}
