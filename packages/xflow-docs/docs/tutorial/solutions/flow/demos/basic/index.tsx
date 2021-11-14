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
} from '@antv/xflow'

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
import { onNodeDrop, searchService, treeDataService } from './config-dnd-panel'
/** 配置JsonConfigForm */
import { formSchemaService, formValueUpdateService, controlMapService } from './config-form'

import './index.less'
import '@antv/xflow/dist/index.css'

export interface IProps {
  meta: { flowId: string }
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

  const onLoad: IAppLoad = async app => {
    cache.app = app
    initGraphCmds(cache.app)
  }

  /** 父组件meta属性更新时,执行initGraphCmds */
  React.useEffect(() => {
    if (cache.app) {
      initGraphCmds(cache.app)
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
      <NodeTreePanel
        searchService={searchService}
        treeDataService={treeDataService}
        onNodeDrop={onNodeDrop}
        position={{ width: 290, top: 0, bottom: 0, left: 0 }}
      />
      <CanvasToolbar
        className="xflow-workspace-toolbar-top"
        layout="horizontal"
        config={toolbarConfig}
        position={{ top: 0, left: 290, right: 290, bottom: 0 }}
      />
      <XFlowCanvas config={graphConfig} position={{ top: 40, left: 290, right: 290, bottom: 40 }}>
        <CanvasScaleToolbar position={{ top: 12, right: 12 }} />
        <CanvasContextMenu config={menuConfig} />
        <CanvasMiniMap />
        <CanvasSnapline color="#faad14" />
        <CanvasNodePortTooltip />
      </XFlowCanvas>
      <WorkspacePanel
        className="xflow-workspace-toolbar-bottom"
        position={{ bottom: 0, left: 290, right: 290, height: 40, lineHeight: 40 }}
      >
        <div> Bottom Toolbar </div>
      </WorkspacePanel>
      <JsonSchemaForm
        controlMapService={controlMapService}
        formSchemaService={formSchemaService}
        formValueUpdateService={formValueUpdateService}
        position={{ width: 290, top: 0, bottom: 0, right: 0 }}
      />
      <KeyBindings config={keybindingConfig} />
    </XFlow>
  )
}

export default Demo

Demo.defaultProps = {
  meta: { flowId: 'test-meta-flow-id' },
}
