import React from 'react'
import { XFlowGraphCommands } from '@antv/xflow-core'
import { Button } from 'antd'
import { PREFIX } from './constants'
import { usePanelContext } from '../../../base-panel/context'

export const CanvasService: React.FC = () => {
  const { commandService, modelService } = usePanelContext()

  return (
    <div className={`${PREFIX}-canvas-panel`}>
      <span>未选中</span>
      <Button
        onClick={() => {
          commandService.executeCommand(XFlowGraphCommands.GRAPH_UPDATE.id, {
            grid: {
              visible: true,
              color: '#FF0000',
              size: 20,
              type: 'mesh',
            },
          })
        }}
      >
        111111
      </Button>
      <Button
        onClick={() => {
          commandService.executeCommand(XFlowGraphCommands.GRAPH_UPDATE.id, {
            grid: {
              size: 10,
              visible: true
            },
          })
        }}
      >
        22222
      </Button>
    </div>
  )
}
