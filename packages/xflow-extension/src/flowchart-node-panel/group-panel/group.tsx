import React from 'react'
import { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons'
import type { NsGraph } from '@antv/xflow-core'
import { useXFlowApp, XFlowGroupCommands } from '@antv/xflow-core'
import { DefaultNodeConfig as DefaultGroupConfig } from '../constants'
import { colorTransform } from '../utils'

export const GroupNode: NsGraph.INodeRender = props => {
  const {
    cell,
    data: {
      label = DefaultGroupConfig.label,
      stroke = DefaultGroupConfig.stroke,
      strokeWidth = DefaultGroupConfig.strokeWidth,
      strokeDasharray = DefaultGroupConfig.strokeDasharray,
      fill: startColor = DefaultGroupConfig.fill,
      isGradient = DefaultGroupConfig.rounded,
      gradientDirection = DefaultGroupConfig.gradientDirection,
      endColor = DefaultGroupConfig.endColor,
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
      letterSpacing = DefaultGroupConfig.letterSpacing,
      showTextBdColor = DefaultGroupConfig.showTextBdColor,
      textBgColor = DefaultGroupConfig.textBdColor,
      showTextBgColor = DefaultGroupConfig.showTextBgColor,
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

  let fill
  if (!isGradient) {
    fill = startColor
  } else {
    switch (gradientDirection) {
      case 'radial':
        fill = `radial-gradient(${startColor}, ${endColor})`
        break
      case 'top-bottom':
        fill = `linear-gradient(to bottom, ${startColor}, ${endColor})`
        break
      case 'bottom-top':
        fill = `linear-gradient(to top, ${startColor}, ${endColor})`
        break
      case 'left-right':
        fill = `linear-gradient(to right, ${startColor}, ${endColor})`
        break
      case 'right-left':
        fill = `linear-gradient(to left, ${startColor}, ${endColor})`
        break
      default:
        console.error('invalid gradientDirection')
    }
  }
  
  return (
    <div
      className="xflow-group-node"
      style={{
        borderColor: stroke,
        borderWidth: strokeWidth,
        borderStyle: strokeDasharray === '5 5' ? 'dotted' : 'solid',
        backgroundColor: fill,
        background: fill,
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
            <span
              className="flowchart-text"
              style={{
                //maxWidth: `${width % 2 === 1 ? width - 2 : width - 3}px`,
                //maxHeight: `${height % 2 === 1 ? height - 2 : height - 3}px`,
                backgroundColor: showTextBgColor ? textBgColor : 'rgba(0, 0, 0, 0)',
                fontSize,
                letterSpacing: letterSpacing,
                color: textColor,
                fontWeight,
                fontStyle,
                textDecoration,
                border: showTextBdColor ? `1px solid ${textBdColor}` : 'none',
                left: dx,
                top: dy,
                fontFamily,
              }}
            >
              {label}
            </span>
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
