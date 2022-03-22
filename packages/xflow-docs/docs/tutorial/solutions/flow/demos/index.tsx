import type {
  IAppLoad,
  NsGraphCmd,
  IGraphCommandService,
  IModelService,
  IToolbarOptions,
} from '@antv/xflow'
import React, { useRef, useEffect } from 'react'
/** 交互组件 */
import {
  /** XFlow 核心组件 */
  XFlow,
  /** 流程图画布组件 */
  FlowchartCanvas,
  /** 流程图配置扩展 */
  FlowchartExtension,
  /** 流程图节点组件 */
  FlowchartNodePanel,
  /** 流程图表单组件 */
  FlowchartFormPanel,
  /** 流程图 toolbar 组件 */
  FlowchartToolbar,
  /** 通用组件：快捷键 */
  KeyBindings,
  /** 通用组件：画布缩放 */
  CanvasScaleToolbar,
  /** 通用组件：右键菜单 */
  CanvasContextMenu,
  /** 通用组件：工具栏 */
  //CanvasToolbar,
  /** 通用组件：对齐线 */
  CanvasSnapline,
  /** 通用组件：节点连接桩 */
  CanvasNodePortTooltip,
  //CanvasToolbar,
  XFlowGraphCommands,
} from '@antv/xflow'
import type { Graph } from '@antv/x6'
/** 配置Command*/
import { useCmdConfig } from './config-cmd'
/** 配置Menu */
import { useMenuConfig } from './config-menu'
/** 配置Toolbar */
//import { useToolbarConfig } from './config-toolbar'
/** 配置快捷键 */
import { useKeybindingConfig } from './config-keybinding'
/** 配置Dnd组件面板 */
import { DndNode } from './react-node/dnd-node'

//import {FlowchartToolbar} from '@antv/xflow-extension'

import './index.less'

import { Modal } from 'antd'
import { ClearOutlined, CopyOutlined, SnippetsOutlined } from '@ant-design/icons'

export interface IProps {
  meta: { flowId: string }
}

interface ICustomToolbar {
  commandService: IGraphCommandService
  modelService: IModelService
  config: IToolbarOptions
}

export const customToolbar: React.FC<ICustomToolbar> = props => {
  const { commandService, modelService, config } = props
  return (
    <div style={{
      height:'100%',
      paddingLeft: '4px',
      display: 'flex',
      gridGap: '4px',
      alignItems: 'center'
    }}>
      <CopyOutlined
        onClick={() => {
          commandService.executeCommand<NsGraphCmd.GraphCopySelection.IArgs>(
            XFlowGraphCommands.GRAPH_COPY.id,
            {},
          )
        }}
      />
      <SnippetsOutlined
        onClick={() => {
          commandService.executeCommand<NsGraphCmd.GraphPasteSelection.IArgs>(
            XFlowGraphCommands.GRAPH_PASTE.id,
            {},
          )
        }}
      />
    </div>
  )
}

export const Demo: React.FC<IProps> = props => {
  const { meta } = props
  //const toolbarConfig = useToolbarConfig()
  const menuConfig = useMenuConfig()
  const keybindingConfig = useKeybindingConfig()
  const graphRef = useRef<Graph>()
  const commandConfig = useCmdConfig()
  /**
   * @param app 当前XFlow工作空间
   * @param extensionRegistry 当前XFlow配置项
   */

  const onLoad: IAppLoad = async app => {
    graphRef.current = await app.getGraphInstance()
  }

  useEffect(() => {
    if (graphRef.current) {
      graphRef.current.on('node:click', (...arg) => {
        console.log(arg)
      })
    }
  }, [graphRef])

  return (
    <XFlow
      className="flow-user-custom-clz"
      commandConfig={commandConfig}
      onLoad={onLoad}
      meta={meta}
    >
      <FlowchartExtension />
      <FlowchartNodePanel
        registerNode={[
          {
            title: '测试1',
            type: 'test1',
            nodes: [
              {
                component: DndNode,
                popover: () => <div>自定义节点</div>,
                name: 'custom-node-indicator',
                width: 100,
                height: 40,
                label: '自定义节点',
              },
            ],
          },
          {
            title: '测试2',
            type: 'test2',
            nodes: [
              {
                component: DndNode,
                popover: () => <div>自定义节点</div>,
                name: 'custom-node-indicator',
                width: 100,
                height: 40,
                label: '自定义节点',
              },
            ],
          },
        ]}
        position={{ width: 162, top: 40, bottom: 0, left: 0 }}
      />
      {/* <CanvasToolbar
        className="xflow-workspace-toolbar-top"
        layout="horizontal"
        config={toolbarConfig}
        position={{ top: 0, left: 0, right: 0, bottom: 0 }}
      /> */}
      <FlowchartToolbar
        className="xflow-workspace-toolbar-top"
        layout="horizontal"
        position={{ top: 0, left: 0, right: 0, bottom: 0 }}
        getCustomRenderComponent={(modelService, commandService) => {
          console.log(modelService, commandService, '@')
          return customToolbar
        }}
        registerToolbarItems={
          [
            /* {
            tooltip: '清空画布',
            icon: <ClearOutlined />,
            id: 'clearGraph',
            onClick: async ({ commandService }) => {
              Modal.confirm({
                content: '是否确定清空画布?',
                okText: '确定',
                cancelText: '取消',
                onOk: () => {
                  commandService.executeCommand<NsGraphCmd.GraphRender.IArgs>(
                    XFlowGraphCommands.GRAPH_RENDER.id,
                    {
                      graphData: { nodes: [], edges: [] },
                    },
                  )
                },
              })
            },
          }, */
          ]
        }
      />
      <FlowchartCanvas position={{ top: 40, left: 0, right: 0, bottom: 0 }}>
        <CanvasScaleToolbar
          layout="horizontal"
          position={{ top: -40, right: 0 }}
          style={{
            width: 120,
            left: 'auto',
            height: 39,
          }}
        />
        <CanvasContextMenu config={menuConfig} />
        <CanvasSnapline color="#faad14" />
        <CanvasNodePortTooltip />
      </FlowchartCanvas>
      <FlowchartFormPanel show={true} position={{ width: 200, top: 40, bottom: 0, right: 0 }} />
      <KeyBindings config={keybindingConfig} />
    </XFlow>
  )
}

export default Demo
