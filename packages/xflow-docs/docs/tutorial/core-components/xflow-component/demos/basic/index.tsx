import React from 'react'
import type { IAppLoad, NsNodeCmd } from '@antv/xflow'
import { XFlow, createGraphConfig, XFlowNodeCommands } from '@antv/xflow'
import './index.less'

/**  Demo Props  */
export interface IDemoProps {
  anything: string
}
/**  graphConfig：配置Graph  */
export const useGraphConfig = createGraphConfig<IDemoProps>((graphConfig, getProps) => {
  const props: IDemoProps = getProps()
  console.log(props)
  graphConfig.setX6Config({ grid: true })
  graphConfig.setDefaultNodeRender(props => {
    return <div className="react-node"> {props.data.label} </div>
  })
})

const XFlowDemo: React.FC<IDemoProps> = props => {
  const graphConfig = useGraphConfig(props)
  const onLoad: IAppLoad = async app => {
    // 在appReadyCallback中可以通过app执行command
    app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {
      nodeConfig: {
        id: 'node1',
        x: 100,
        y: 100,
        label: 'Hello World',
        width: 200,
        height: 40,
      },
    })
    return app
  }

  return <XFlow graphConfig={graphConfig} onLoad={onLoad} className="xflow-workspace" />
}

export default XFlowDemo
