import React from 'react'
import { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons'
import type { NsGraph } from '@antv/xflow-core'
import { useXFlowApp, XFlowGroupCommands } from '@antv/xflow-core'
import { DefaultNodeConfig as DefaultGroupConfig} from '../constants'
import { colorTransform } from '../utils'

export const GroupNode: NsGraph.INodeRender = props => {
  const {
    cell,
    data: {
      label = DefaultGroupConfig.label,
      stroke = DefaultGroupConfig.stroke,
      strokeWidth = DefaultGroupConfig.strokeWidth,
      strokeDash = DefaultGroupConfig.strokeDash,
      fill = DefaultGroupConfig.fill,
      fillOpacity = DefaultGroupConfig.fillOpacity,
      fontSize = DefaultGroupConfig.fontSize,
      fontFill = DefaultGroupConfig.fontFill,
      width = 200,
      isCollapsed = false,
      isBold = DefaultGroupConfig.isBold,
      isItalic = DefaultGroupConfig.isItalic,
      isUnderline = DefaultGroupConfig.isUnderline,
      verticalAlign = DefaultGroupConfig.verticalAlign,
      horizontalAlign = DefaultGroupConfig.horizontalAlign,
      textOpacity = DefaultGroupConfig.textOpacity,
      letterSpacing = DefaultGroupConfig.letterSpace,
      textBgColor = DefaultGroupConfig.textBdColor,
      textBdColor = DefaultGroupConfig.textBgColor,
      dx = DefaultGroupConfig.dx,
      dy = DefaultGroupConfig.dy,
      fontFamily = DefaultGroupConfig.fontFamily,
    },
  } = props
  const app = useXFlowApp()
  const onExpand = () => {
    app.executeCommand(XFlowGroupCommands.COLLAPSE_GROUP.id, {
      nodeId: cell.id,
      isCollapsed: false,
      collapsedSize: { width, height: 40 },
    })
  }
  const onCollapse = () => {
    app.executeCommand(XFlowGroupCommands.COLLAPSE_GROUP.id, {
      nodeId: cell.id,
      isCollapsed: true,
      collapsedSize: { width, height: 40 },
      gap: 3,
    })
  }

  const fontWeight = isBold ? 'bold' : 'normal'
  const fontStyle = isItalic ? 'italic' : 'normal'
  const textDecoration = isUnderline ? 'underline' : 'none'
  const textColor = colorTransform(fontFill, textOpacity)

  return (
    <div
      className="xflow-group-node"
      style={{
        borderColor: stroke,
        borderWidth: strokeWidth,
        borderStyle: strokeDash === 'dash' ? 'dotted' : 'solid',
        backgroundColor: fill,
        opacity: fillOpacity,
        fontSize,
        color: fontFill,
      }}
    >
      <div className="xflow-group-header">
        <div className="header-left flowchart-text-editor-container">
          <div
            className={`flowchart-text-editor-wrapper horizontal-${horizontalAlign} y-${verticalAlign}`}
          >
            <div
              className="flowchart-text"
              style={{
                //maxWidth: `${width % 2 === 1 ? width - 2 : width - 3}px`,
                //maxHeight: `${height % 2 === 1 ? height - 2 : height - 3}px`,
                backgroundColor: textBgColor,
                fontSize,
                letterSpacing: letterSpacing,
                color: textColor,
                fontWeight,
                fontStyle,
                textDecoration,
                border: `1px solid ${textBdColor}`,
                left: dx,
                top: dy,
                fontFamily,
              }}
            >
              {label}
            </div>
          </div>
        </div>
        <div className="header-right">
          {isCollapsed && <PlusSquareOutlined onClick={onExpand} />}
          {!isCollapsed && <MinusSquareOutlined onClick={onCollapse} />}
        </div>
      </div>
    </div>
  )
}
