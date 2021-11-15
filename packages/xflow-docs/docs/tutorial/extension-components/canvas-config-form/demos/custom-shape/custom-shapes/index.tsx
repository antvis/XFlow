import type { NsJsonSchemaForm } from '@antv/xflow'
import { EditorShape } from './custom-editor'
import { LinkShape } from './custom-link'

/** 自定义form控件 */
export enum ControlShapeEnum {
  'EDITOR_SHAPE' = 'EDITOR',
  'LINK_SHAPE' = 'LINKSHAPE',
}

export const controlMapService: NsJsonSchemaForm.IControlMapService = controlMap => {
  controlMap.set(ControlShapeEnum.EDITOR_SHAPE, EditorShape)
  controlMap.set(ControlShapeEnum.LINK_SHAPE, LinkShape)
  return controlMap
}
