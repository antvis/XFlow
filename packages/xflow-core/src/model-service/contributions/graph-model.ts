import type { IModelService } from '../interface'
import { singleton, inject } from 'mana-syringe'
import { IModelContribution } from '../interface'
import { DisposableCollection, Disposable } from '../../common/disposable'
import { disposableSubscribe } from '../../common/event-helper'
import { IGraphProvider } from '../../xflow-main/graph/graph-provider'
import * as MODELS from '../constant'

import type { EventArgs } from '@antv/x6/lib/graph/events'

@singleton({ contrib: IModelContribution })
export class GraphModelContribution implements IModelContribution {
  @inject(IGraphProvider)
  protected readonly graphProvider: IGraphProvider

  /** 获取画布实例 */
  getGraphInstance = async () => {
    const graphInstance = await this.graphProvider.getGraphInstance()
    const graphConfig = await this.graphProvider.getGraphOptions()
    return { graph: graphInstance, config: graphConfig }
  }

  registerModel(registry: IModelService): void {
    /** X6 GRAPH META */
    registry.registerModel<MODELS.GRAPH_META.IState>({
      id: MODELS.GRAPH_META.id,
      getInitialValue: () => ({
        flowId: '-1',
      }),
      watchChange: async self => {
        return Disposable.create(() => {
          self.setValue({ flowId: '-1' })
        })
      },
    })
    /** Graph 多选状态 */
    registry.registerModel<MODELS.GRAPH_ENABLE_MULTI_SELECT.IState>({
      id: MODELS.GRAPH_ENABLE_MULTI_SELECT.id,
      getInitialValue: () => ({
        isEnable: false,
      }),
      watchChange: async self => {
        return Disposable.create(() => {
          self.setValue({ isEnable: false })
        })
      },
    })
    /** Graph 全屏 */
    registry.registerModel<MODELS.GRAPH_FULLSCREEN.IState>({
      id: MODELS.GRAPH_FULLSCREEN.id,
      getInitialValue: () => false,
      watchChange: async (self, modelService) => {
        const handleFullScreenChange = async () => {
          const fullscreen = !!document.fullscreenElement
          const fullscreenModel = await MODELS.GRAPH_FULLSCREEN.getModel(modelService)
          fullscreenModel.setValue(fullscreen)
        }
        document.addEventListener('fullscreenchange', handleFullScreenChange, false)
        return Disposable.create(() => {
          document.removeEventListener('fullscreenchange', handleFullScreenChange)
          self.setValue(false)
        })
      },
    })
    /** 选中Cells状态 */
    registry.registerModel<MODELS.SELECTED_CELLS.IState>({
      id: MODELS.SELECTED_CELLS.id,
      getInitialValue: () => [],
      watchChange: async self => {
        const { graph } = await this.getGraphInstance()
        const onChange = (e: EventArgs['selection:changed']) => {
          const { selected } = e
          self.setValue(selected)
        }
        graph.on('selection:changed', onChange)
        return Disposable.create(() => graph.off('selection:changed', onChange))
      },
    })
    /** 选中Cell状态 */
    registry.registerModel<MODELS.SELECTED_CELL.IState>({
      id: MODELS.SELECTED_CELL.id,
      watchChange: async (self, modelService) => {
        const cellsModel = await MODELS.SELECTED_CELLS.getModel(modelService)
        return cellsModel.watch((cells = []) => {
          self.setValue([...cells].pop() || null)
        })
      },
    })
    /** 选中节点列表状态 */
    registry.registerModel({
      id: MODELS.SELECTED_NODES.id,
      getInitialValue: () => [],
      watchChange: async (self, modelService) => {
        const model = await MODELS.SELECTED_CELLS.getModel(modelService)
        return model.watch((cells = []) => {
          const nodes = cells.filter(cell => cell.isNode())
          self.setValue(nodes)
        })
      },
    })
    /** 选中节点状态 */
    registry.registerModel({
      id: MODELS.SELECTED_NODE.id,
      watchChange: async (self, modelService) => {
        const model = await MODELS.SELECTED_NODES.getModel(modelService)
        const disposable = model.watch(nodes => {
          self.setValue([...nodes].pop() || null)
        })
        return disposable
      },
    })
    /** 是否选中节点状态 */
    registry.registerModel({
      id: MODELS.IS_NODE_SELECTED.id,
      watchChange: async (self, modelService) => {
        const model = await MODELS.SELECTED_NODES.getModel(modelService)
        const disposable = model.watch(nodes => {
          self.setValue(nodes.length > 0)
        })
        return disposable
      },
    })
    /** 画布选中节点是否是Group */
    registry.registerModel({
      id: MODELS.IS_GROUP_SELECTED.id,
      getInitialValue: () => false,
      watchChange: async (self, modelService) => {
        const model = await MODELS.SELECTED_CELLS.getModel(modelService)
        const disposable = model.watch(cells => {
          const isGroup = cells.every(cell => {
            return cell && cell.getProp('isGroup') === true
          })
          self.setValue(isGroup)
        })
        return disposable
      },
    })
    /** 画布选中节点是否是Group */
    registry.registerModel<MODELS.SELECTED_GROUPS.IState>({
      id: MODELS.SELECTED_GROUPS.id,
      getInitialValue: () => [],
      watchChange: async (self, modelService) => {
        const model = await MODELS.SELECTED_NODES.getModel(modelService)
        const disposable = model.watch(cells => {
          const groups = cells.filter(cell => {
            return cell && cell.getProp('isGroup') === true
          })
          self.setValue(groups)
        })
        return disposable
      },
    })
    /** 画布选中节点是否是普通节点 */
    registry.registerModel({
      id: MODELS.IS_NORMAL_NODES_SELECTED.id,
      getInitialValue: () => false,
      watchChange: async (self, modelService) => {
        const model = await MODELS.SELECTED_CELLS.getModel(modelService)
        const disposable = model.watch(cells => {
          const isNormalNodesSelected = cells.every(cell => {
            const isNotGroup = !(cell && cell.getProp('isGroup'))
            const isNotGroupChild = !(cell && cell.getProp('group'))
            return isNotGroup && isNotGroupChild
          })
          const isNodeSelected = cells.length > 0 && isNormalNodesSelected
          self.setValue(isNodeSelected)
        })
        return disposable
      },
    })
    /** 画布缩放状态 */
    registry.registerModel<MODELS.GRAPH_SCALE.IState>({
      id: MODELS.GRAPH_SCALE.id,
      getInitialValue: () => ({ zoomFactor: -1 }),
      watchChange: async self => {
        const { graph } = await this.getGraphInstance()
        const onChange = (e: EventArgs['scale']) => {
          const factor = graph.zoom()
          self.setValue({ ...e, zoomFactor: factor })
        }
        graph.on('scale', onChange)
        return Disposable.create(() => graph.off('scale', onChange))
      },
    })
    /** 画布右键菜单状态 */
    registry.registerModel({
      id: MODELS.CONTEXTMENU_TARGET.id,
      watchChange: async self => {
        const { graph, config } = await this.getGraphInstance()
        const onContextMenu =
          (type: MODELS.CONTEXTMENU_TARGET.TargetType) =>
          (e: MODELS.CONTEXTMENU_TARGET.IState['data']) => {
            const { x, y } = e
            const pagePoint = graph.localToClient({ x, y })
            const clientRect = config.rootContainer.getBoundingClientRect()
            const anchor = {
              x: pagePoint.x - (clientRect?.x || 0),
              y: pagePoint.y - (clientRect?.y || 0),
            }
            self.setValue({
              type,
              anchor,
              data: e,
              cell: e.cell,
            })
          }
        const toDispose = new DisposableCollection()
        toDispose.pushAll([
          disposableSubscribe(graph, 'node:contextmenu', onContextMenu('node')),
          disposableSubscribe(graph, 'edge:contextmenu', onContextMenu('edge')),
          disposableSubscribe(graph, 'blank:contextmenu', onContextMenu('blank')),
        ])
        return toDispose
      },
    })

    /** 画布历史Redo */
    registry.registerModel<MODELS.HISTORY_REDOABLE.IState>({
      id: MODELS.HISTORY_REDOABLE.id,
      getInitialValue: () => false,
      watchChange: async self => {
        const { graph } = await this.getGraphInstance()
        const onChange = () => {
          const canRedo = graph.history.canRedo()
          self.setValue(canRedo)
        }
        if (graph.history) {
          graph.history.on('change', onChange)
        }

        return Disposable.create(() => graph.history.off('change', onChange))
      },
    })
    /** 画布历史undo */
    registry.registerModel<MODELS.HISTORY_UNDOABLE.IState>({
      id: MODELS.HISTORY_UNDOABLE.id,
      getInitialValue: () => false,
      watchChange: async self => {
        const { graph } = await this.getGraphInstance()
        const onChange = () => {
          const canUndo = graph.history.canUndo()
          self.setValue(canUndo)
        }
        if (graph.history) {
          graph.history.on('change', onChange)
        }
        return Disposable.create(() => graph.history.off('change', onChange))
      },
    })
  }
}
