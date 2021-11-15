import type { IApplication, IAppLoad } from '@antv/xflow'
import React from 'react'
/** app 核心组件 */
import { XFlow, XFlowCanvas, KeyBindings } from '@antv/xflow'
/** 交互组件 */
import {
  /** 触发Command的交互组件 */
  CanvasScaleToolbar,
  WorkspacePanel,
  NodeTreePanel,
  JsonSchemaForm,
  CanvasToolbar,
  CanvasContextMenu,
  /** Graph的扩展交互组件 */
  CanvasSnapline,
  CanvasMiniMap,
  CanvasNodePortTooltip,
  FlowGraphExtension,
  FlowchartNodePanel,
  FlowchartCanvas,
  FlowchartFormPanel,
} from '@antv/xflow'
import { DND_RENDER_ID } from './constant'

/** app 组件配置  */
/** 配置画布 */
import { useGraphConfig } from './config-graph'
/** 配置Command */
import { useCmdConfig, initGraphCmds } from './config-cmd'
/** 配置Model */
import { useModelServiceConfig } from './config-ctx-service'
/** 配置Menu */
import { useMenuConfig } from './config-menu'
/** 配置Toolbar */
import { useToolbarConfig } from './config-toolbar'
/** 配置快捷键 */
import { useKeybindingConfig } from './config-keybinding'
/** 配置Dnd组件面板 */
import { onNodeDrop, searchService } from './config-dnd-panel'
/** 配置JsonConfigForm */
import { formSchemaService, formValueUpdateService, controlMapService } from './config-form'

import './index.less'

export interface IProps {
  meta: { flowId: string }
}

const IndicatorNode = props => {
  const { size = { width: 126, height: 104 }, data } = props
  const { width, height } = size
  const { label, stroke, fill, fontFill, fontSize } = data

  return (
    <div
      className="indicator-container"
      style={{
        width,
        height,
        borderColor: stroke,
        backgroundColor: fill,
        color: fontFill,
        fontSize,
      }}
    >
      <span>{label}</span>
    </div>
  )
}

export const Demo: React.FC<IProps> = props => {
  const { meta } = props
  const graphConfig = useGraphConfig()
  const toolbarConfig = useToolbarConfig()
  const menuConfig = useMenuConfig()
  const cmdConfig = useCmdConfig()
  const modelConfig = useModelServiceConfig()
  const keybindingConfig = useKeybindingConfig()

  const cache = React.useMemo<{ app: IApplication } | null>(
    () => ({
      app: null,
    }),
    [],
  )
  /**
   * @param app 当前XFlow工作空间
   * @param extensionRegistry 当前XFlow配置项
   */

  const onLoad: IAppLoad = async (app, extensionRegistry) => {
    cache.app = app
    // initGraphCmds(cache.app)
  }

  /** 父组件meta属性更新时,执行initGraphCmds */
  React.useEffect(() => {
    if (cache.app) {
      // initGraphCmds(cache.app)
    }
  }, [cache.app, meta])

  return (
    <XFlow
      className="user-custom-clz"
      modelServiceConfig={modelConfig}
      commandConfig={cmdConfig}
      onLoad={onLoad}
      meta={meta}
    >
      <FlowGraphExtension />
      <FlowchartNodePanel
        registerNode={{
          title: '自定义节点',
          nodes: [
            {
              component: IndicatorNode,
              popover: () => <div>自定义节点</div>,
              name: 'custom-node-indicator',
              width: 210,
              height: 130,
              label: '自定义节点',
            },
          ],
        }}
        onNodeDrop={onNodeDrop}
        position={{ width: 162, top: 40, bottom: 0, left: 0 }}
      />
      <CanvasToolbar
        className="xflow-workspace-toolbar-top"
        layout="horizontal"
        config={toolbarConfig}
        position={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <FlowchartCanvas config={graphConfig} position={{ top: 40, left: 0, right: 0, bottom: 0 }}>
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

Demo.defaultProps = {
  meta: { flowId: 'test-meta-flowchart-id' },
}
