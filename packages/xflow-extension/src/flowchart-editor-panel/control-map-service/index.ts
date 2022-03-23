import { NodeStyle } from './components/node-style'
import { NodeText } from './components/node-text'
import { NodeArrange } from './components/node-arrange'
import { EdgeStyle } from './components/edge-style'
import { EdgeText } from './components/edge-text'
import { NodeEdgetyle } from './components/node-edge-style'
import { NodeEdgeText } from './components/node-edge-text'
import { CanvasService } from './components/canvas'
import { EditorPanels } from './components/fields'

/** 默认支持修改标签和重命名功能 */
export const defaultControlMapService = controlMap => {
  controlMap.set('node-style', NodeStyle)
  controlMap.set('node-text', NodeText)
  controlMap.set('node-arrange', NodeArrange)
  controlMap.set('edge-service', EdgeStyle)
  controlMap.set('edge-text', EdgeText)
  controlMap.set('node-edge-style', NodeEdgetyle)
  controlMap.set('node-edge-text', NodeEdgeText)
  controlMap.set('canvas-service', CanvasService)
  return controlMap
}

export {
  NodeStyle,
  NodeText,
  NodeArrange,
  EditorPanels,
  EdgeStyle,
  EdgeText,
  NodeEdgetyle,
  NodeEdgeText,
  CanvasService,
}
