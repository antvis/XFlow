import React from 'react'
import { NsGraph, uuidv4 } from '@antv/xflow-core'
import * as nodePathMap from './paths'
import { NODE_HEIGHT, NODE_WIDTH,DefaultNodeConfig  } from './constants'
import { GradientComponent } from './gradient-component'

export const NodeComponent: NsGraph.INodeRender = props => {
  const { size = { width: NODE_WIDTH, height: NODE_HEIGHT }, data = {}, name } = props

  const {
    stroke = DefaultNodeConfig .stroke,
    label = DefaultNodeConfig .label,
    fill: startColor = DefaultNodeConfig .fill,
    fontFill = DefaultNodeConfig .fontFill,
    fontSize = DefaultNodeConfig .fontSize,
    strokeWidth = DefaultNodeConfig .strokeWidth,
    strokeDasharray = DefaultNodeConfig .strokeDasharray,
    fillOpacity = DefaultNodeConfig .fillOpacity,
    angel = DefaultNodeConfig .angel,
    rounded = DefaultNodeConfig .rounded,
    isGradient = DefaultNodeConfig .rounded,
    gradientDirection = DefaultNodeConfig .gradientDirection,
    endColor = DefaultNodeConfig .endColor,
    isBold = DefaultNodeConfig .isBold,
    isItalic = DefaultNodeConfig .isItalic,
    isUnderline = DefaultNodeConfig .isUnderline,
    alignmentBaseline = DefaultNodeConfig .alignmentBaseline,
    textAnchor = DefaultNodeConfig .textAnchor,
    textOpacity = DefaultNodeConfig .textOpacity,
    letterSpacing = DefaultNodeConfig .letterSpacing,
    dy = DefaultNodeConfig .dy,
    dx = DefaultNodeConfig .dx,
  } = data

  const { width, height } = size
  const scale = name === 'Text' ? 2 : 1
  const getNodePath = nodePathMap[`${name.replace(/\s+/g, '')}NodePath`]
  const nodePath = getNodePath(props, rounded)

  //用于解决无法动态修改渐变颜色
  let uuid = ''
  if (isGradient) uuid = uuidv4()
  const fill = isGradient ? `url(#${gradientDirection}-${uuid})` : startColor
  const fontWeight = isBold ? 'bold' : 'normal'
  const fontStyle = isItalic ? 'italic' : 'normal'
  const textDecoration = isUnderline ? 'underline' : 'none'

  //文本初始位置
  let textX
  if (textAnchor === 'start') {
    textX = 0
  } else if (textAnchor === 'middle') {
    textX = width / (scale * 2)
  } else {
    textX = width
  }

  return (
    <svg
      viewBox={`0 0 ${width / scale} ${height / scale}`}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      style={{ transform: `rotate(${angel}deg)` }}
    >
      <GradientComponent
        startColor={startColor}
        endColor={endColor}
        uuid={uuid}
      ></GradientComponent>
      {nodePath.map(path => {
        return (
          <path
            key={path}
            d={path}
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            fillOpacity={fillOpacity}
          ></path>
        )
      })}
      <text
        x={textX}
        y={height / (scale * 2)}
        fill={fontFill}
        textAnchor={textAnchor}
        alignmentBaseline={alignmentBaseline}
        fontSize={fontSize}
        fontWeight={fontWeight}
        fontStyle={fontStyle}
        textDecoration={textDecoration}
        opacity={textOpacity}
        letterSpacing={letterSpacing}
        dy={dy}
        dx={dx}
      >
        {label}
      </text>
      Sorry, your browser does not support inline SVG.
    </svg>
  )
}
