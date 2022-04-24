// import type { NsJsonSchemaForm } from '@antv/xflow'
import { EditorShape } from './custom-editor'
import { LinkShape } from './link'

// js 实现类似 typescript enum
const makeEnum = obj => {
  Object.entries(obj).forEach(([key, value]) => {
    obj[value] = value
  })

  return obj
}

/**
 * 自定义 form 控件
 *
 * 效果如下：
 * ControlShapeEnum.EDITOR == 'EditorShape'
 * ControlShapeEnum['EditorShape'] == 'EditorShape'
 *
 * */
export const ControlShapeEnum = makeEnum({
  EDITOR: 'EditorShape',
  LINKSHAPE: 'LinkShape',
})

export const controlMapService = controlMap => {
  controlMap.set(ControlShapeEnum.EDITOR, EditorShape)
  controlMap.set(ControlShapeEnum.LINKSHAPE, LinkShape)
  return controlMap
}
