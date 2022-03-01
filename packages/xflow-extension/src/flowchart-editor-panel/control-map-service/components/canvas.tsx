import React, { useState } from 'react'
import { XFlowGraphCommands } from '@antv/xflow-core'
import { Checkbox, Button } from 'antd'
import { ColorPicker, InputNumberFiled, SelectField } from './fields'
import { SolidIcon, DottedLine } from './edit-style/index'
import { PREFIX } from './constants'
import { usePanelContext } from '../../../base-panel/context'
import type { ICanvasConfig, IBackground, IGrid } from './interface'
import { defaultCanvasConfig } from './constants'
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
    console.log(value)
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
          checked={grid.visible}
          onChange={e => {
            onCanvasConfigChange('grid', 'visible', e.target.checked)
          }}
        >
          网格
        </Checkbox>
        {grid.visible && <ColorPicker label="网格填充" value={grid.args.color} />}
        {grid.visible && (
          <InputNumberFiled
            label="网格大小"
            value={grid.size}
            step={1}
            width={70}
            onChange={value => {
              onCanvasConfigChange('grid', 'size', value)
            }}
          />
        )}
        {grid.visible && (
          <SelectField
            label="线形"
            width={69}
            value={grid.type}
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
            onChange={value => {}}
          />
        )}
        <Button
          onClick={() => {
            console.log(X6Graph)
            console.log(grid, background)
          }}
        >
          11111
        </Button>
      </div>
    </div>
  )
}
