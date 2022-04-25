import React from 'react'
import { createModule } from '../module'
import type { IPosition } from '@antv/xflow-core'
import { insertCss } from '@antv/xflow-core'
import { XFlowAppExtensionModule, usePositionStyle } from '@antv/xflow-core'
import { SimpleNodeView } from '../x6-node-view'
import type { IMinimapOptions } from '../interface'

/** 配置类型 */
export const CONFIG_TYPE = 'CanvasMiniMap'

/** 获取默认配置 */
export const getDefaultMinimapOptions = () => {
  return {
    grid: false,
    enabled: true,
    width: 200,
    height: 120,
    padding: 8,
    graphOptions: {
      async: true,
      getCellView(cell) {
        if (cell.isNode()) {
          return SimpleNodeView
        }
      },
      createCellView(cell) {
        if (cell.isEdge()) {
          return null
        }
      },
    },
  }
}

/** minimap 配置项目*/
export interface IProps {
  minimapOptions?: IMinimapOptions
  nodeFillColor?: string
  borderColor?: string
  handlerColor?: string
  miniMapClz?: string
  position?: IPosition
}

export const CanvasMiniMap: React.FC<IProps> = props => {
  const {
    nodeFillColor,
    borderColor = '#ced4de',
    handlerColor = 'rgba(0,0,0,.3)',
    miniMapClz = '',
    position = { bottom: 12, right: 12 },
    minimapOptions = {} as IMinimapOptions,
  } = props
  /** x6画布的dom节点 */
  const minimapRef = React.useRef<HTMLDivElement>(null)
  const minimapConfigRef = React.useRef<IMinimapOptions>(props.minimapOptions)
  const classNameSet = React.useMemo(() => {
    return new Set<string>([
      miniMapClz,
      'xflow-minimap',
      'minimap-instacne-' + Date.now().toString(),
    ])
  }, [miniMapClz])
  const getConfig = React.useMemo(
    () => async () => {
      return {
        ...getDefaultMinimapOptions(),
        ...minimapConfigRef.current,
        container: minimapRef.current,
      }
    },
    [minimapRef],
  )
  const style = usePositionStyle(position)

  React.useEffect(() => {
    /** 设置minimap容器 */
    minimapConfigRef.current = minimapOptions
  }, [minimapConfigRef, minimapOptions])

  React.useEffect(() => {
    /** 设置Node样式 */
    if (nodeFillColor) {
      SimpleNodeView.setNodeFillColor(nodeFillColor)
    }
  }, [nodeFillColor])

  React.useEffect(() => {
    const containerSelector = Array.from(classNameSet).reduce(
      (acc, clz) => (clz ? `${acc}.${clz}` : acc),
      '',
    )
    const cssString = `
      ${containerSelector} .x6-widget-minimap-viewport {
        border: 1px solid ${borderColor};
        margin: 0;
      }
      ${containerSelector} .x6-widget-minimap-viewport-zoom {
        border: 1px solid ${handlerColor};
      }
    `
    const $style = insertCss(cssString)

    return () => {
      document.head.removeChild($style)
    }
  }, [borderColor, classNameSet, handlerColor])

  const clzName = Array.from(classNameSet).join(' ')

  return (
    <XFlowAppExtensionModule<IMinimapOptions>
      config={{
        getConfig,
        CONFIG_TYPE,
      }}
      createModule={createModule}
    >
      <div ref={minimapRef} className={clzName} style={style} />
    </XFlowAppExtensionModule>
  )
}
