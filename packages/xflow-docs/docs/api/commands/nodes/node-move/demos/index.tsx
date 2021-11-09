import React from 'react'
import type { IAppLoad, NsNodeCmd } from '@antv/xflow'
import { XFlow, createGraphConfig, XFlowCanvas, XFlowNodeCommands } from '@antv/xflow'
import { FormPanel } from './form'
import './index.less'

/**  graphConfig hook  */
export const useGraphConfig = createGraphConfig(graphConfig => {
  graphConfig.setX6Config({ grid: true })
  graphConfig.setDefaultNodeRender(props => {
    return <div className="react-node"> {props.data.label} </div>
  })
})

const NodeAddDemo: React.FC<{}> = () => {
  const graphConfig = useGraphConfig()
  const onLoad: IAppLoad = async app => {
    app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {
      nodeConfig: {
        id: 'node1',
        x: 100,
        y: 30,
        label: 'Hello World 1',
        width: 160,
        height: 32,
      },
    })
    return app
  }

  return (
    <XFlow onLoad={onLoad} className="xflow-workspace">
      <FormPanel />
      <XFlowCanvas
        className="app-main-content"
        config={graphConfig}
        position={{ top: 0, left: 230, right: 0, bottom: 0 }}
      />
    </XFlow>
  )
}

export default NodeAddDemo
