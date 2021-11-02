import React from 'react'
import {
  XFlow,
  IAppLoad,
  XFlowCanvas,
  createGraphConfig,
  XFlowNodeCommands,
  NsNodeCmd,
} from '@antv/xflow'
import { FormPanel } from './form'
import './index.less'

export const useGraphConfig = createGraphConfig(graphConfig => {
  graphConfig.setX6Config({ grid: true })
  graphConfig.setDefaultNodeRender(props => {
    return <div className="react-node"> {props.data.info} </div>
  })
})

const Demo: React.FC<{}> = () => {
  const onLoad: IAppLoad = async app => {
    app.executeCommand(XFlowNodeCommands.ADD_NODE.id, {
      nodeConfig: { id: 'node1', x: 280, y: 130, width: 120, height: 40, info: 'Hello World' },
    } as NsNodeCmd.AddNode.IArgs)

    setTimeout(() => {
      app.executeCommand(XFlowNodeCommands.UPDATE_NODE.id, {
        nodeConfig: {
          id: 'node1',
          x: 180,
          y: 80,
          width: 220,
          height: 140,
          info: 'Hello World New',
        },
      })
    }, 2000)
    return app
  }

  return (
    <XFlow onLoad={onLoad} className="xflow-node-update-demo" meta={{ flowId: 'node-update-demo' }}>
      <FormPanel />
      <XFlowCanvas
        config={useGraphConfig()}
        position={{ top: 0, left: 230, right: 0, bottom: 0 }}
      />
    </XFlow>
  )
}

export default Demo
