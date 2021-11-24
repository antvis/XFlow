import React from 'react'
import type { IAppLoad, NsNodeCmd } from '@antv/xflow'
import { XFlow, XFlowCanvas, createGraphConfig, XFlowNodeCommands } from '@antv/xflow'
import { FormPanel } from './form'
import './index.less'

export const useGraphConfig = createGraphConfig(graphConfig => {
  graphConfig.setX6Config({ grid: true })
  graphConfig.setDefaultNodeRender(props => {
    return <div className="react-node"> {props.data.label} </div>
  })
})

const Demo: React.FC<{}> = () => {
  const onLoad: IAppLoad = async app => {
    app.executeCommand(XFlowNodeCommands.ADD_NODE.id, {
      nodeConfig: { id: 'node1', x: 280, y: 130, width: 120, height: 40, label: 'Hello World' },
    } as NsNodeCmd.AddNode.IArgs)
  }

  return (
    <XFlow onLoad={onLoad} meta={{ flowId: 'node-update-demo' }} className="xflow-workspace">
      <FormPanel />
      <XFlowCanvas
        config={useGraphConfig()}
        position={{ top: 0, left: 230, right: 0, bottom: 0 }}
      />
    </XFlow>
  )
}

export default Demo
