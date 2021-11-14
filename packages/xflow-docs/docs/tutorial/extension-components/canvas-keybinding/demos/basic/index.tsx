/**
 * title: 基础使用
 * desc:  通过keybinding字段配置键盘的快捷键：https://craig.is/killing/mice
 */
import React from 'react'
import type { IAppLoad, NsGraphCmd } from '@antv/xflow'
import {
  XFlow,
  XFlowCanvas,
  KeyBindings,
  XFlowGraphCommands,
  createGraphConfig,
  createKeybindingConfig,
} from '@antv/xflow'
import '@antv/xflow/dist/index.css'
import { getGraphData } from './mock'
import './index.less'

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

/**  keybindings  */
export const useKeybindingConfig = createKeybindingConfig(config => {
  config.setKeybindingFunc(reg => {
    return reg.registerKeybinding([
      {
        id: 'basic',
        keybinding: ['command+c', 'ctrl+c'],
        callback: async function (item, modelService, cmd, e) {
          console.log('keyboard event is triggered', e)
        },
      },
    ])
  })
})

const XFlowDemo: React.FC<IDemoProps> = props => {
  const graphConfig = useGraphConfig(props)
  const keybindingConfig = useKeybindingConfig(props)

  const onLoad: IAppLoad = async app => {
    // 计算布局
    const res = await app.executeCommand<
      NsGraphCmd.GraphLayout.IArgs,
      NsGraphCmd.GraphLayout.IResult
    >(XFlowGraphCommands.GRAPH_LAYOUT.id, {
      layoutType: 'dagre',
      layoutOptions: {
        type: 'dagre',
        /** 布局方向 */
        rankdir: 'TB',
        /** 节点间距 */
        nodesep: 60,
        /** 层间距 */
        ranksep: 30,
      },
      graphData: getGraphData(),
    })
    const { graphData } = res.contextProvider().getResult()
    // render
    await app.executeCommand<NsGraphCmd.GraphRender.IArgs>(XFlowGraphCommands.GRAPH_RENDER.id, {
      graphData: graphData,
    })
    // 居中
    await app.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {
      factor: 'real',
    })
  }

  return (
    <XFlow onLoad={onLoad} className="xflow-workspace">
      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 0, right: 0 }}>
        <KeyBindings config={keybindingConfig} />
      </XFlowCanvas>
    </XFlow>
  )
}

export default XFlowDemo
