// type
import type { Syringe } from 'mana-syringe'
import type { IGraphCommand } from '../../command/interface'
import type { HookHub } from '@antv/xflow-hook'
import type { IHooks } from '../../hooks/interface'
import type { Simplify } from '../../common/types'
// 数据相关
import { NsGraphMeta, GraphMetaCommand } from './graph-meta'
import { NsGraphSaveData, GraphSaveDataCommand } from './graph-save-data'
import { GraphLoadDataCommand, NsGraphLoadData } from './graph-load-data'
// 渲染相关
import { GraphLayoutCommand, NsGraphLayout } from './graph-layout'
import { GraphRenderCommand, NsGraphRender } from './graph-render'
import { GraphResizeCommand, NsGraphResize } from './graph-resize'
// 全屏
import { GraphFullscreenCommand, NsGraphFullscreen } from './graph-fulllscreen'
// 画布操作相关
import { NsGraphZoom, GraphZoomCommand } from './graph-zoom'
import { NsGraphCopySelection, GraphCopySelectionCommand } from './graph-copy'
import { NsGraphPasteSelection, GraphPasteSelectionCommand } from './graph-paste'
import {
  GraphToggleMultiSelectCommand,
  NsGraphToggleMultiSelect,
} from './graph-toggle-multi-select'
// history 相关
import { NsGraphHistoryUndo, GraphHistoryUndoCommand } from './graph-history-undo'
import { NsGraphHistoryRedo, GraphHistoryRedoCommand } from './graph-history-redo'
import { NsGraphHistoryToggle, GraphHistoryToggleCommand } from './graph-history-toggle'
import { NsGraphHistoryReset, GraphHistoryResetCommand } from './graph-history-reset'
// Tool相关
import { NsGraphAddTool, GraphAddToolCommand } from './graph-add-tool'
import { NsGraphDelTool, GraphDelToolCommand } from './graph-del-tool'
// xflow-command
import { NsRedoCmd, GraphRedoCommand } from './graph-cmd-redo'
import { NsUndoCmd, GraphUndoCommand } from './graph-cmd-undo'
/** 注册Command Handler Class */
export const registerGraphCommand = (register: Syringe.Register) => {
  // 数据
  register(GraphMetaCommand)
  register(GraphLoadDataCommand)
  register(GraphSaveDataCommand)
  // render
  register(GraphLayoutCommand)
  register(GraphRenderCommand)
  register(GraphResizeCommand)
  // hisotry
  register(GraphHistoryUndoCommand)
  register(GraphHistoryRedoCommand)
  register(GraphHistoryToggleCommand)
  register(GraphHistoryResetCommand)
  // xflow command
  register(GraphRedoCommand)
  register(GraphUndoCommand)
  // graph 操作
  register(GraphZoomCommand)
  register(GraphToggleMultiSelectCommand)
  register(GraphCopySelectionCommand)
  register(GraphPasteSelectionCommand)
  register(GraphFullscreenCommand)
  // tools
  register(GraphAddToolCommand)
  register(GraphDelToolCommand)
}

/** app onStart 时, 注册 Command Hooks */
export const hookhubList: {
  command: IGraphCommand
  hookKey: string
  createHook?: () => HookHub
}[] = [
  // 数据
  NsGraphMeta,
  NsGraphSaveData,
  NsGraphLoadData,
  // hisotry
  NsGraphHistoryUndo,
  NsGraphHistoryRedo,
  NsGraphHistoryReset,
  NsGraphHistoryToggle,
  // render
  NsGraphLayout,
  NsGraphRender,
  NsGraphResize,
  NsGraphFullscreen,
  // xflow command
  NsRedoCmd,
  NsUndoCmd,
  // graph 操作
  NsGraphZoom,
  NsGraphToggleMultiSelect,
  NsGraphCopySelection,
  NsGraphPasteSelection,
  // tools
  NsGraphAddTool,
  NsGraphDelTool,
]

/** Command hook类型*/
export interface ICmdHooks
  extends IHooks,
    // 数据
    NsGraphMeta.ICmdHooks,
    NsGraphLoadData.ICmdHooks,
    NsGraphSaveData.ICmdHooks,
    // render
    NsGraphLayout.ICmdHooks,
    NsGraphRender.ICmdHooks,
    NsGraphResize.ICmdHooks,
    // hisotry
    NsGraphHistoryUndo.ICmdHooks,
    NsGraphHistoryRedo.ICmdHooks,
    NsGraphHistoryReset.ICmdHooks,
    NsGraphHistoryToggle.ICmdHooks,
    // xflow-command
    NsRedoCmd.ICmdHooks,
    NsUndoCmd.ICmdHooks,
    // graph 操作
    NsGraphZoom.ICmdHooks,
    NsGraphToggleMultiSelect.ICmdHooks,
    NsGraphCopySelection.ICmdHooks,
    NsGraphPasteSelection.ICmdHooks,
    // tool
    NsGraphAddTool.ICmdHooks,
    NsGraphDelTool.ICmdHooks {}

/** Command 参数类型*/
export namespace NsGraphCmd {
  // 数据
  export namespace GraphMeta {
    export type IArgs = Simplify<NsGraphMeta.IArgs>
    export type IResult = Simplify<NsGraphMeta.IResult>
  }
  export namespace GraphLoadData {
    export type IArgs = Simplify<NsGraphLoadData.IArgs>
    export type IResult = Simplify<NsGraphLoadData.IResult>
  }
  export namespace SaveGraphData {
    export type IArgs = Simplify<NsGraphSaveData.IArgs>
    export type IResult = Simplify<NsGraphSaveData.IResult>
  }

  // 渲染
  export namespace GraphRender {
    export type IArgs = Simplify<NsGraphRender.IArgs>
    export type IResult = Simplify<NsGraphRender.IResult>
  }
  export namespace GraphLayout {
    export type IArgs = Simplify<NsGraphLayout.IArgs>
    export type IResult = Simplify<NsGraphLayout.IResult>
  }

  export namespace GraphResize {
    export type IArgs = Simplify<NsGraphResize.IArgs>
    export type IResult = Simplify<NsGraphResize.IResult>
  }

  // history

  export namespace GraphHistoryRedo {
    export type IArgs = Simplify<NsGraphHistoryRedo.IArgs>
    export type IResult = Simplify<NsGraphHistoryRedo.IResult>
  }
  export namespace GraphHistoryUndo {
    export type IArgs = Simplify<NsGraphHistoryUndo.IArgs>
    export type IResult = Simplify<NsGraphHistoryUndo.IResult>
  }
  export namespace GraphHistoryReset {
    export type IArgs = Simplify<NsGraphHistoryReset.IArgs>
    export type IResult = Simplify<NsGraphHistoryReset.IResult>
  }
  export namespace GraphHistoryToggle {
    export type IArgs = Simplify<NsGraphHistoryToggle.IArgs>
    export type IResult = Simplify<NsGraphHistoryToggle.IResult>
  }
  // xflow command
  export namespace UndoCmd {
    export type IArgs = Simplify<NsUndoCmd.IArgs>
    export type IResult = Simplify<NsUndoCmd.IResult>
  }
  export namespace RedoCmd {
    export type IArgs = Simplify<NsRedoCmd.IArgs>
    export type IResult = Simplify<NsRedoCmd.IResult>
  }

  // 画布操作
  export namespace GraphZoom {
    export type IArgs = Simplify<NsGraphZoom.IArgs>
    export type IResult = Simplify<NsGraphZoom.IResult>
  }

  // 全屏
  export namespace GraphFullscreen {
    export type IArgs = Simplify<NsGraphFullscreen.IArgs>
    export type IResult = Simplify<NsGraphFullscreen.IResult>
  }

  export namespace GraphToggleMultiSelect {
    export type IArgs = Simplify<NsGraphToggleMultiSelect.IArgs>
    export type IResult = Simplify<NsGraphToggleMultiSelect.IResult>
  }
  export namespace GraphCopySelection {
    export type IArgs = Simplify<NsGraphCopySelection.IArgs>
    export type IResult = Simplify<NsGraphCopySelection.IResult>
  }
  export namespace GraphPasteSelection {
    export type IArgs = Simplify<NsGraphPasteSelection.IArgs>
    export type IResult = Simplify<NsGraphPasteSelection.IResult>
  }
  // Tool
  export namespace GraphAddTool {
    export type IArgs = Simplify<NsGraphAddTool.IArgs>
    export type IResult = Simplify<NsGraphAddTool.IResult>
  }
  export namespace GraphDelTool {
    export type IArgs = Simplify<NsGraphDelTool.IArgs>
    export type IResult = Simplify<NsGraphDelTool.IResult>
  }
}
