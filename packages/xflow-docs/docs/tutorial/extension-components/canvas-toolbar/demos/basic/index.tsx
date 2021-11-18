/**
 * title: 基础使用方法
 * desc: 通过position定位Toolbar,通过config属性配置toolbar, 查看toolbar-config.tsx文件了解如何配置toolbar
 */
import React from 'react'
import type { IAppLoad } from '@antv/xflow'
import { XFlow, createGraphConfig, XFlowCanvas, CanvasToolbar } from '@antv/xflow'
import { useToolbarConfig } from './toolbar-config'
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
  const toolbarConfig = useToolbarConfig(props)

  const onLoad: IAppLoad = async app => {
    console.log(app)
  }

  return (
    <XFlow onLoad={onLoad} className="xflow-workspace">
      <CanvasToolbar
        layout="horizontal"
        config={toolbarConfig}
        position={{ top: 0, left: 0, right: 0, height: 40 }}
      />
      <XFlowCanvas config={graphConfig} position={{ top: 40, bottom: 0, left: 0, right: 0 }} />
    </XFlow>
  )
}

export default XFlowDemo
