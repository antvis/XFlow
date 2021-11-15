import { IGraphCommandService, IModelService, IPosition } from '@antv/xflow-core'
import { Cell } from '@antv/x6'
import { NsJsonSchemaForm } from '../canvas-json-schema-form'

export interface BaseProps {
  style?: React.CSSProperties
  className?: string
  /** 是否展示 */
  show?: boolean
  /** 节点位置 */
  position?: IPosition
}
export interface IDetailPanelProps extends BaseProps {
  controlMapService?: (editorMap: NsJsonSchemaForm.IControlMap) => NsJsonSchemaForm.IControlMap
  formSchemaService?: (args: {
    cell: Cell
    targetType: NsJsonSchemaForm.TargetType
    targetData: NsJsonSchemaForm.TargetData
    modelService: IModelService
    commandService: IGraphCommandService
  }) => Promise<NsJsonSchemaForm.ISchema>
  prefixClz?: string
  header?: React.ReactNode
  footer?: React.ReactNode
}
