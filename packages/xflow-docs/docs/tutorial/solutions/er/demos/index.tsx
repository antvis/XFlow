import React, { useState } from 'react'
import type { IAppLoad, NsGraph, IApplication } from '@antv/xflow'
import { XFlow, XFlowCanvas, KeyBindings } from '@antv/xflow'
import { XFlowAppProvider, useXFlowApp } from '@antv/xflow'
import type { NsGraphCmd, NsNodeCmd, NsEdgeCmd } from '@antv/xflow'
import { XFlowGraphCommands, XFlowNodeCommands, XFlowEdgeCommands } from '@antv/xflow'
import { CanvasMiniMap, CanvasScaleToolbar, CanvasSnapline } from '@antv/xflow'
import GraphToolbar from './GraphToolbar/index'

/** 配置画布 */
import { useGraphConfig } from './config-graph'
/** 配置Command */
import { useCmdConfig } from './config-cmd'
/** 配置快捷键 */
import { useKeybindingConfig } from './config-keybinding'

import { message } from 'antd'
import type { EntityCanvasModel } from './interface'
import CreateRelationModal from './CreateRelationModal'
import Entity from './react-node/Entity'
import Relation from './react-edge/Relation'

import './index.less'

/** Mock所有与服务端交互的接口 */
import { MockApi } from './service'

interface IProps {}

const Demo: React.FC<IProps> = (props: IProps) => {
  /** XFlow应用实例 */
  const app = useXFlowApp()

  /** 画布配置项 */
  const graphConfig = useGraphConfig()
  /** 预设XFlow画布需要渲染的React节点 / 边 */
  graphConfig.setNodeRender('NODE1', props => <Entity {...props} />)
  graphConfig.setEdgeRender('EDGE1', props => {
    return <Relation {...props} deleteRelation={handleDeleteEdge} />
  })
  /** 命令配置项 */
  const cmdConfig = useCmdConfig()
  /** 快捷键配置项 */
  const keybindingConfig = useKeybindingConfig()

  /** 是否展示新建关联关系弹窗 */
  const [isShowCreateRelationModal, setIsShowCreateRelationModal] = useState<boolean>(false)
  /** 连线source数据 */
  const [relationSourceData, setRelationSourceData] = useState<EntityCanvasModel>(undefined)
  /** 连线target数据 */
  const [relationTargetData, setRelationTargetData] = useState<EntityCanvasModel>(undefined)

  /** XFlow初始化完成的回调 */
  const onLoad: IAppLoad = async app => {
    const graph = await app.getGraphInstance()
    graph.zoom(-0.2)

    /** Mock从服务端获取数据 */
    const graphData = await MockApi.loadGraphData()

    /** 渲染画布数据 */
    await app.executeCommand(XFlowGraphCommands.GRAPH_RENDER.id, {
      graphData,
    } as NsGraphCmd.GraphRender.IArgs)

    /** 设置监听事件 */
    await watchEvent(app)
  }

  /** 监听事件 */
  const watchEvent = async (appRef: IApplication) => {
    if (appRef) {
      const graph = await appRef.getGraphInstance()
      graph.on('node:mousedown', ({ e, x, y, node, view }) => {
        appRef.executeCommand(XFlowNodeCommands.FRONT_NODE.id, {
          nodeId: node?.getData()?.id,
        } as NsNodeCmd.FrontNode.IArgs)
      })
      graph.on('edge:connected', ({ edge }) => {
        const relationSourceData = edge?.getSourceNode()?.data
        const relationTargetData = edge?.getTargetNode()?.data
        setRelationSourceData(relationSourceData)
        setRelationTargetData(relationTargetData)
        setIsShowCreateRelationModal(true)
        /** 拖拽过程中会生成一条无实际业务含义的线, 需要手动删除 */
        const edgeData: NsGraph.IEdgeConfig = edge?.getData()
        if (!edgeData) {
          appRef.executeCommand(XFlowEdgeCommands.DEL_EDGE.id, {
            x6Edge: edge as any,
          } as NsEdgeCmd.DelEdge.IArgs)
        }
      })
      graph.on('node:mouseenter', ({ e, node, view }) => {
        changePortsVisible(true)
      })
      graph.on('node:mouseleave', ({ e, node, view }) => {
        changePortsVisible(false)
      })
    }
  }

  const changePortsVisible = (visible: boolean) => {
    const ports = document.body.querySelectorAll('.x6-port-body') as NodeListOf<SVGElement>
    for (let i = 0, len = ports.length; i < len; i = i + 1) {
      ports[i].style.visibility = visible ? 'visible' : 'hidden'
    }
  }

  /** 创建画布节点 */
  const handleCreateNode = async (values: any) => {
    // const res = await app.executeCommand(XFlowNodeCommands.ADD_NODE.id, {
    //   // nodeConfig
    // } as NsNodeCmd.AddNode.IArgs)
    // // const res = await app.executeCommand(
    // //   XFlowNodeCommands.ADD_NODE.id,
    // //   {} as NsNodeCmd.AddNode.IArgs,
    // // )
  }

  /** 删除画布节点 */
  const handleDeleteNode = async () => {}

  /** 创建关联关系 */
  const handleCreateEdge = async (values: any) => {
    const { cb, ...rest } = values
    const res = await app.executeCommand(XFlowEdgeCommands.ADD_EDGE.id, {
      edgeConfig: {
        id: 'fact1-dim1',
        source: 'fact1',
        target: 'dim1',
        renderKey: 'EDGE1',
        edgeContentWidth: 20,
        edgeContentHeigt: 20,
        /** 设置连线样式 */
        attrs: {
          line: {
            stroke: '#d8d8d8',
            strokeWidth: 1,
            targetMarker: {
              name: 'classic',
            },
          },
        },
      },
    } as NsEdgeCmd.AddEdge.IArgs)

    if (res) {
      cb && cb()
      setIsShowCreateRelationModal(false)
      message.success('添加连线成功!')
    }
  }

  /** 删除关联关系 */
  const handleDeleteEdge = async (relationId: string) => {
    const res = await app.executeCommand(XFlowEdgeCommands.DEL_EDGE.id, {
      edgeConfig: { id: relationId },
    } as NsEdgeCmd.DelEdge.IArgs)
    if (res) {
      message.success('删除连线成功!')
    }
  }

  return (
    <XFlow className="xflow-er-solution-container" commandConfig={cmdConfig} onLoad={onLoad}>
      <GraphToolbar
        onAddNodeClick={() => {
          message.info('鼠标移动到画布空白位置, 再次点击鼠标完成创建', 2)
        }}
        onDeleteNodeClick={() => {}}
        onConnectEdgeClick={() => {
          console.log('gjy111111')
          setIsShowCreateRelationModal(true)
        }}
      />
      <XFlowCanvas config={graphConfig}>
        <CanvasMiniMap nodeFillColor="#00ff00" minimapOptions={{}} />
        <CanvasScaleToolbar position={{ bottom: 12, left: 20 }} />
        <CanvasSnapline />
        {/** 占位空节点 */}

        {/** 创建节点 */}

        {/** 创建关联关系弹窗 */}
        <CreateRelationModal
          visible={isShowCreateRelationModal}
          sourceEntity={relationSourceData}
          targetEntity={relationTargetData}
          onOk={handleCreateEdge}
          onCancel={() => {
            setIsShowCreateRelationModal(false)
          }}
        />
      </XFlowCanvas>
      <KeyBindings config={keybindingConfig} />
    </XFlow>
  )
}

export default (props: IProps) => (
  <XFlowAppProvider>
    <Demo {...props} />
  </XFlowAppProvider>
)
