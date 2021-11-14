/**
 * title: 工具栏布局
 * desc: 支持三种布局：'vertical'|'horizontal'|'horizontal-center'
 */
import React from 'react'
import { XFlow, createGraphConfig, XFlowCanvas, CanvasToolbar } from '@antv/xflow'
import { useToolbarConfig1, useToolbarConfig2, useToolbarConfig3 } from './toolbar-config'
import type { IAppLoad } from '@antv/xflow'
import './index.less'
import '@antv/xflow/dist/index.css'
/**  Demo Props  */
export interface IDemoProps {
  anything: string
}
/**  graphConfig：配置Graph  */
export const useGraphConfig = createGraphConfig<IDemoProps>(graphConfig => {
  graphConfig.setDefaultNodeRender(props => {
    return <div className="react-node"> {props.data.label} </div>
  })
})

const XFlowDemo: React.FC<IDemoProps> = props => {
  const graphConfig = useGraphConfig(props)
  const toolbarConfig1 = useToolbarConfig1(props)
  const toolbarConfig2 = useToolbarConfig2(props)
  const toolbarConfig3 = useToolbarConfig3(props)

  const onLoad: IAppLoad = async app => {
    console.log(app)
  }

  return (
    <XFlow onLoad={onLoad} className="xflow-workspace">
      <CanvasToolbar
        layout={'vertical'}
        config={toolbarConfig1}
        position={{ top: 48, left: 8, bottom: 48 }}
      />
      <CanvasToolbar
        layout="horizontal"
        config={toolbarConfig2}
        position={{ top: 0, left: 0, right: 0, height: 40 }}
      />
      <CanvasToolbar
        layout={'horizontal-center'}
        config={toolbarConfig3}
        position={{ bottom: 0, left: 0, right: 0, height: 40 }}
      />

      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 0, right: 0 }} />
    </XFlow>
  )
}

export default XFlowDemo
