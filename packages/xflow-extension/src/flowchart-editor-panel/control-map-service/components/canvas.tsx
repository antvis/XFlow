import React, { useState } from 'react'
import { XFlowGraphCommands } from '@antv/xflow-core'
import { Checkbox, Modal, Button, Input, Form } from 'antd'
import { UploadOutlined, CloseOutlined } from '@ant-design/icons'
import { ColorPicker, InputNumberFiled, SelectField } from './fields'
import { SolidLine, DottedLine } from './edit-icon/index'
import { PREFIX } from './constants'
import { usePanelContext } from '../../../base-panel/context'
import type { ICanvasConfig, IBackground, IGrid } from './interface'
import { getGraphInstance } from '../../../flowchart-canvas/utils'

export const CanvasService: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const { commandService } = usePanelContext()
  const X6Graph = getGraphInstance()
  const grid = X6Graph.options.grid as IGrid
  const background = X6Graph.options.background as IBackground
  const [imageUrl, setImageUrl] = useState<string>(background.image)
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
                label: <SolidLine />,
                value: 'mesh',
              },
              {
                label: <DottedLine />,
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
        <div>
          <Button
            icon={<UploadOutlined />}
            onClick={() => {
              setVisible(true)
            }}
          >
            背景图片
          </Button>
        </div>
        <Modal
          visible={visible}
          title="背景图片"
          okText="确定"
          cancelText="取消"
          onCancel={() => {
            setVisible(false)
          }}
          onOk={() => {
            setVisible(false)
            onCanvasConfigChange('background', 'image', imageUrl)
          }}
        >
          <Form.Item wrapperCol={{ span: 16 }}>
            <Input
              value={imageUrl}
              allowClear
              size="middle"
              placeholder="请输入图片 url"
              onChange={e => {
                setImageUrl(e.target.value)
              }}
            />
          </Form.Item>
        </Modal>
        {canvasConfig.background.image && (
          <div>
            <Button
              icon={<CloseOutlined />}
              onClick={() => {
                onCanvasConfigChange('background', 'image', '')
              }}
            >
              清除背景图片
            </Button>
          </div>
        )}
        {canvasConfig.background.image && (
          <InputNumberFiled
            label="图片透明度"
            value={canvasConfig.background.opacity}
            max={1}
            min={0}
            step={0.1}
            width={70}
            onChange={(value: number) => {
              onCanvasConfigChange('background', 'opacity', value)
            }}
          />
        )}
        {canvasConfig.background.image && (
          <SelectField
            label="尺寸"
            width={100}
            value={canvasConfig.background.size}
            options={[
              {
                label: '自适应',
                value: 'auto auto',
              },
              {
                label: '铺满',
                value: 'cover',
              },
            ]}
            onChange={(value: string) => {
              onCanvasConfigChange('background', 'size', value)
            }}
          />
        )}
        {canvasConfig.background.image && (
          <SelectField
            label="排列"
            width={100}
            value={canvasConfig.background.repeat}
            options={[
              {
                label: 'no-repeat',
                value: 'no-repeat',
              },
              {
                label: 'repeat',
                value: 'repeat',
              },
              {
                label: 'repeat-x',
                value: 'repeat-x',
              },
              {
                label: 'repeat-y',
                value: 'repeat-y',
              },
            ]}
            onChange={(value: string) => {
              onCanvasConfigChange('background', 'repeat', value)
            }}
          />
        )}
      </div>
    </div>
  )
}
