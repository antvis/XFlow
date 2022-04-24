import React from 'react'
import { useXFlowApp, DisposableCollection, createComponentModel } from '@antv/xflow-core'
import type { NsModelServiceCmd, IGraphCommandService, IModelService } from '@antv/xflow-core'
import { XFlowModelCommands, Disposable, MODELS } from '@antv/xflow-core'
import type { IProps, ISchema, TargetType, TargetData } from './interface'
import type { Cell } from '@antv/x6'

export namespace NsJsonSchemaFormModel {
  export const id = 'XFLOW_JSON_SCHEMA_FORM'
  export interface IState {
    loading: boolean
    schema: ISchema
    targetType: TargetType
    targetData: TargetData
    targetCells: Cell[]
  }
  export const useModel = async (model: IModelService) => {
    return model.awaitModel<IState>(id)
  }
}

/** 方便其他组件执行Command改变Panel内部状态 */
export const executeJsonSchemaFormCommand = (
  cmds: IGraphCommandService,
  updateModel: (state: NsJsonSchemaFormModel.IState) => Promise<void>,
) => {
  cmds.executeCommand<NsModelServiceCmd.UpdateModelCommand.IArgs<NsJsonSchemaFormModel.IState>>(
    XFlowModelCommands.UPDATE_MODEL.id,
    {
      getModel: async modelService => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return NsJsonSchemaFormModel.useModel(modelService)
      },
      updateModel: updateModel,
    },
  )
}

export const useJsonSchemaFormModel = (props: IProps) => {
  const app = useXFlowApp()
  const { commandService, modelService, getGraphInstance } = app
  const { formSchemaService } = props

  const [state, setState, model, isModelReady] = createComponentModel<NsJsonSchemaFormModel.IState>(
    {
      schema: { tabs: [] },
      targetType: null,
      targetData: null,
      targetCells: [],
      loading: false,
    },
  )
  /** 注册全局的model */
  React.useEffect(() => {
    if (!app || !app.modelService) {
      return
    }
    const toDispose = new DisposableCollection()
    const deferredModel = app.modelService.findDeferredModel(NsJsonSchemaFormModel.id)
    if (!deferredModel) {
      const d = app.modelService.registerModel<NsJsonSchemaFormModel.IState>({
        id: NsJsonSchemaFormModel.id,
        modelFactory: () => model,
        /** 监听SELECTED_CELL的变化 */
        watchChange: async (self, modelSerccie) => {
          const selectedCellsModel = await MODELS.SELECTED_CELLS.getModel(modelSerccie)
          const nodeDisposable = selectedCellsModel.watch(async cells => {
            const updateState = async (targetCells: Cell[] | null, type: TargetType) => {
              self.setValue(m => {
                m.loading = true
                m.schema = { tabs: [] }
                m.targetType = null
                m.targetData = null
                m.targetCells = []
              })
              const targetData =
                targetCells && targetCells.length > 0 ? targetCells[0].getData() : null
              if (!formSchemaService) {
                return
              }
              const graph = await getGraphInstance()
              const schema = await formSchemaService({
                commandService,
                modelService,
                targetData,
                cells: targetCells,
                targetType: type,
                graph,
              })
              self.setValue({
                loading: false,
                schema: schema,
                targetType: type,
                targetCells: targetCells,
                targetData: targetData,
              })
            }
            const getCellType = (targetCells: Cell[]): TargetType => {
              if (!targetCells || targetCells.length === 0) {
                return 'canvas'
              } else {
                const targetSet = new Set<TargetType>()
                targetCells.forEach(cell => {
                  if (cell.isNode && cell.isNode()) {
                    targetSet.add('node')
                  } else if (cell.isEdge && cell.isEdge()) {
                    targetSet.add('edge')
                  }
                })
                if (targetSet.size === 2) {
                  return 'node-edge'
                } else {
                  return Array.from(targetSet)[0]
                }
              }
            }
            const targetCellType = getCellType(cells)
            if ((props.targetType || ['node', 'canvas']).includes(targetCellType)) {
              await updateState(cells, targetCellType)
            }
          })
          return Disposable.create(() => {
            nodeDisposable.dispose()
            toDispose.push(nodeDisposable)
          })
        },
      })
      toDispose.push(d)
    }
    return () => {
      toDispose.dispose()
    }
    /* eslint-disable-next-line  */
  }, [])

  return { commandService, modelService, state, setState, model, isModelReady }
}
