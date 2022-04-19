/* eslint-disable @typescript-eslint/no-use-before-define */
/**
 * @author 星翊
 * @description 新血缘图
 */
import React, { useState, useRef } from 'react'
import type { IAppLoad, NsGraph } from '@antv/xflow'
import { XFlow, XFlowCanvas, CanvasScaleToolbar } from '@antv/xflow'
import { uuidv4 } from '@antv/xflow';
import _ from 'lodash'
import classNames from 'classnames'
import { useGraphConfig } from './config-graph'
import { translateAnimation } from './util'
import { GraphService } from './service'
import { StreamType, LineageGraph, LoadLineageLayerDataType } from './type'
import './index.less'

export interface IProps {
  /** 表guid */
  tableId: string
  tableType: string
  /** 是否隐藏顶部操作栏 */
  hideTopBar?: boolean

  /** x6 config */
  x6Config?: any

  /** 血缘图配置 */
  graphConfig: {
    /** 节点高度 **/
    nodeHeight: number
    /** 层级宽度 **/
    layerWidth: number
    /** 层级间隔，两个节点之间的距离 **/
    offsetX: number
    /** 节点 Y 方向偏移量 **/
    offsetY: number
    /** 展示底部工具栏 */
    showBottomToolbar?: boolean
    /** 展示层级的顶部搜索 */
    showSearch?: boolean
  }

  /** 图形初始化回调 */
  onload: () => void

  /** 图例 */
  legend: { [key: string]: { color: string; name: string } }

  /** popover 组件 */
  renderPopover?: React.FC

  renderNodeItem?: React.FC

  loadLineageLayerData: (params: LoadLineageLayerDataType) => Promise<any>
}

const LineageRelation: React.FC<IProps> = props => {
  /** 画布配置 */
  const graphConfig = useGraphConfig(
    {
      /** 画布网格 */
      grid: false,
      /** 画布缩放等级 */
      scaling: {
        min: 0.2,
        max: 3,
      },
      interacting: false,
      /** 画布滚轮缩放 */
      connecting: {
        connector: {
          name: 'rounded',
          args: {
            radius: 50,
          },
        },
        router: {
          name: 'er',
          args: {
            direction: 'H',
          },
        },
      },
      ...props?.x6Config,
    },
    props.renderPopover,
    props.renderNodeItem,
    props.loadLineageLayerData,
  )
  /** 画布渲染数据 */
  const [graphData, setGraphData] = useState<NsGraph.IGraphData>()
  const [centerNodeId, setCenterNodeId] = useState(null)
  const [isFullScreen, setIsFullScreen] = useState(false)
  // const [initX, setInitX] = useState(0);
  const initX = useRef(null)
  const [hotIndex, setHotIndex] = useState(0)
  const appRef = useRef(null)
  const lineageData = useRef<any>(null)
  /**
   *  展开 上 下 游节点
   * @param level 当前节点所在层级
   * @param val 节点信息
   * @param id 当前节点 id
   * @param func 结束的回调
   */
  const openNode = async (level: number, val, id: string, index: number) => {
    if (!_.isNumber(index)) {
      return
    }
    const data = await props.loadLineageLayerData({
      id: val.text,
      stream: level > 0 ? StreamType.DOWN : StreamType.UP,
      keyword: '',
      pageSize: 12,
      currentPage: 1,
    })

    if (!data) {
      return
    }

    const uuid = uuidv4()
    console.log('gjy111111:', uuid);
    const node = {
      id: level > 0 ? `${uuid}_${level + 1}` : `${uuid}_${level - 1}`,
      width: props.graphConfig?.layerWidth,
      height: props.graphConfig?.nodeHeight,
      x:
        level > 0
          ? props.graphConfig?.offsetX + props.graphConfig?.offsetX * Math.abs(level)
          : -props.graphConfig?.offsetX - props.graphConfig?.offsetX * Math.abs(level),
      y: 0 + props.graphConfig?.offsetY,
      renderKey: 'LineageLayer',
      data: {
        data: level > 0 ? data.downStream : data.upStream,
        unfoldNodeId: data.id,
        openNode,
        closeNodeByLevel,
        tableGuid: props.tableId,
        showSearch: props.graphConfig.showSearch,
      },
    }

    // 虚拟的节点，用来定位当前层级节点的位置
    const vNode = {
      id: level > 0 ? `${uuid}_v_${level + 1}` : `${uuid}_v_${level - 1}`,
      width: props.graphConfig?.layerWidth,
      height: 1,
      x:
        level > 0
          ? props.graphConfig?.offsetX * Math.abs(level)
          : -props.graphConfig?.offsetX * Math.abs(level),
      y: 36 * (index + 1) + props.graphConfig?.offsetY + 62,
      renderKey: 'VirtualNode',
      data: {
        unfoldNodeId: data.id,
        tableGuid: props.tableId,
      },
    }

    const edge = {
      id: `${id}_0_${level > 0 ? `${uuid}_${level + 1}` : `${uuid}_${level - 1}`}`,
      source: {
        cell: vNode.id,
        anchor: {
          name: level > 0 ? 'bottomRight' : 'bottomLeft',
          args: {
            dy: 10,
          },
        },
      },
      target: {
        cell: level > 0 ? `${uuid}_${level + 1}` : `${uuid}_${level - 1}`,
      },
      attrs: {
        line: {
          stroke: '#aaaaaa',
          strokeWidth: 1,
        },
      },
    }
    const openNodeKey = level > 0 ? `${level + 1}` : `${level - 1}`
    const oldLineageData = _.cloneDeep(lineageData.current)
    closeNodeByLevel(level)
    lineageData.current = {
      ...lineageData.current,
      [openNodeKey]: { nodes: [node, vNode], edges: [edge] },
    }
    doRender()
    const graphInstance = await appRef.current.getGraphInstance()

    const sortLevel = _.orderBy(Object.keys(oldLineageData).map(i => Number(i)))
    // 获得当前
    const [minLevel, maxLevel] = [Number(sortLevel[0]), Number(sortLevel[sortLevel.length - 1])]

    if (level > 0) {
      if (maxLevel === 0 || level === maxLevel) {
        translateAnimation('LR', -props.graphConfig?.offsetX, 10, 120, graphInstance)
      }
    } else if (minLevel === 0 || level === minLevel) {
      translateAnimation('LR', props.graphConfig?.offsetX, 10, 120, graphInstance)
    }
  }

  /**
   * 关闭当前节点后的节点
   * @param level 节点层级
   * @param shouldRender 是否应该渲染，控制不必要的渲染
   */
  const closeNodeByLevel = async (level: number, shouldRender?: boolean, shouldMove?: boolean) => {
    // 清除多余节点
    Object.keys(lineageData.current).forEach(nodeKey => {
      // 下游
      if (level > 0) {
        if (Number(nodeKey) > level) {
          delete lineageData.current[nodeKey]
        }
      } else if (Number(nodeKey) < level) {
        delete lineageData.current[nodeKey]
      }
    })
    if (shouldRender) {
      doRender()
    }
    if (shouldMove) {
      const graphInstance = await appRef.current.getGraphInstance()
      if (level > 0) {
        translateAnimation('LR', props.graphConfig?.offsetX, 10, 120, graphInstance)
      } else {
        translateAnimation('LR', -props.graphConfig?.offsetX, 10, 120, graphInstance)
      }
    }
  }

  /** 触发图形渲染 */
  const doRender = () => {
    let nodes: any = []
    let edges: any = []
    // @ts-ignore
    Object.values(lineageData.current).forEach((item: LineageGraph.LineageLayerDataType) => {
      nodes = nodes.concat(item.nodes)
      edges = edges.concat(item.edges)
    })
    setGraphData(_.cloneDeep({ nodes, edges }))
  }

  const initLineageData = async () => {
    /** 初始化数据，加载双向数据 */
    const data = await GraphService.loadLineageLayerData({
      id: props.tableId,
      stream: StreamType.TWO_WAY,
      keyword: '',
      pageSize: 12,
      currentPage: 1,
    })

    const uuid = uuidv4()
    setCenterNodeId(`${uuid}_0`)
    const nodes: NsGraph.INodeConfig[] = [
      {
        id: `${uuid}_0`,
        width: props.graphConfig?.layerWidth,
        height: 40,
        x: 0,
        y: 0,
        renderKey: 'LineageLayer',
        data: {
          data: {
            records: [
              {
                id: props.tableId,
                name: props.tableId?.split('.')?.slice(1)?.join('.'),
                type: props.tableType,
                groupName: props.tableId,
              },
            ],
          },
        },
      },
      {
        id: `${uuid}_-1`,
        width: props.graphConfig?.layerWidth,
        height: props.graphConfig?.nodeHeight,
        x: -props.graphConfig?.offsetX,
        y: 0 + props.graphConfig?.offsetY,
        renderKey: 'LineageLayer',
        data: {
          data: data.upStream,
          unfoldNodeId: data.id,
          openNode,
          closeNodeByLevel,
          tableGuid: props.tableId,
          showSearch: props.graphConfig.showSearch,
        },
      },
      {
        id: `${uuid}_v_-1`,
        width: props.graphConfig?.layerWidth,
        height: 1,
        x: -props.graphConfig?.offsetX,
        y: 100 + props.graphConfig?.offsetY,
        renderKey: 'VirtualNode',
        data: {
          unfoldNodeId: data.id,
          tableGuid: props.tableId,
        },
      },
      {
        id: `${uuid}_1`,
        width: props.graphConfig?.layerWidth,
        height: props.graphConfig?.nodeHeight,
        x: props.graphConfig?.offsetX,
        y: 0 + props.graphConfig?.offsetY,
        renderKey: 'LineageLayer',
        data: {
          data: data.downStream,
          unfoldNodeId: data.id,
          openNode,
          closeNodeByLevel,
          tableGuid: props.tableId,
          showSearch: props.graphConfig.showSearch,
        },
      },
      {
        id: `${uuid}_v_1`,
        width: props.graphConfig?.layerWidth,
        height: 1,
        x: props.graphConfig?.offsetX,
        y: 100 + props.graphConfig?.offsetY,
        renderKey: 'VirtualNode',
        data: {
          unfoldNodeId: data.id,
          tableGuid: props.tableId,
        },
      },
    ]

    const edges: NsGraph.IEdgeConfig[] = [
      {
        id: `${uuid}_0_${uuid}_-1`,
        // xflow 类型不对
        // @ts-ignore
        source: {
          cell: `${uuid}_0`,
          anchor: {
            name: 'topLeft',
            args: {
              dy: 60,
            },
          },
        },
        // @ts-ignore
        target: {
          cell: `${uuid}_-1`,
        },
        attrs: {
          line: {
            stroke: '#aaaaaa',
            strokeWidth: 1,
          },
        },
      },
      {
        id: `${uuid}_0_${uuid}_1`,
        // @ts-ignore
        source: {
          cell: `${uuid}_0`,
          anchor: {
            name: 'topRight',
            args: {
              dy: 60,
            },
          },
        },
        target: `${uuid}_1`,
        attrs: {
          line: {
            stroke: '#aaaaaa',
            strokeWidth: 1,
          },
        },
      },
    ]
    lineageData.current = { '0': { nodes, edges } }
    return `${uuid}_0`
  }

  /** 打开全屏 */
  const fullScreen = async () => {
    setIsFullScreen(!isFullScreen)
    // 切换全屏时，自动定位到中心
    setTimeout(() => {
      positionToCenter()
    }, 100)
  }

  /** 恢复默认 */
  const reload = async () => {
    await onLoad(appRef.current)
    positionToCenter()
  }

  /** XFlow初始化完成的回调 */
  const onLoad: IAppLoad = async app => {
    appRef.current = app
    const cNode = await initLineageData()
    doRender()
    /** 主动平移画布 */
    const graphInstance = await app.getGraphInstance()

    setTimeout(() => {
      positionToCenter(cNode)
    }, 0)

    watchGraphResize(graphInstance)
    graphInstance.on('translate', ({ tx }) => {
      watchCanvasMove(tx)
    })

    props?.onload()
  }

  /** 监听画布移动 */
  const watchCanvasMove = (x: number) => {
    if (_.isNumber(initX?.current)) {
      setHotIndex(Math.round((initX.current - x) / props.graphConfig?.offsetX))
    }
  }

  /** 监听Graph resize */
  const watchGraphResize = graphInstance => {
    let resizeTimer = null
    const canvasRootDom = document.body.querySelector('.xflow-canvas-root') as HTMLDivElement
    const resizeObserver = new ResizeObserver(() => {
      if (resizeTimer) {
        clearTimeout(resizeTimer)
      }
      resizeTimer = setTimeout(async () => {
        const x6Graph = graphInstance
        const rootContainer = (await graphConfig.getConfig()).rootContainer
        if (x6Graph && rootContainer) {
          requestAnimationFrame(() => {
            const width = rootContainer.clientWidth
            const height = rootContainer.clientHeight
            x6Graph.resize(width, height)
          })
        }
      }, 50)
    })
    resizeObserver.observe(canvasRootDom)
  }

  /** 定位中心 */
  const positionToCenter = async (nodeId?: string) => {
    const graphInstance = await appRef.current.getGraphInstance()
    // 获取中心节点
    const selectNode = graphInstance.getCellById(centerNodeId || nodeId)
    if (selectNode) {
      // 将中心节点居中
      await graphInstance.centerCell(selectNode)
      // 向上偏移一点，体验会更好
      const currentTranslate = graphInstance.translate()
      // 画布中心点
      initX.current = currentTranslate.tx
      // 定位中心表
      setHotIndex(0)
      await graphInstance.translate(currentTranslate.tx, currentTranslate.ty - 220)
    }
  }

  const handleClickMiniNode = async index => {
    if (appRef) {
      const graphInstance = await appRef.current.getGraphInstance()
      translateAnimation(
        'LR',
        props.graphConfig?.offsetX * (hotIndex - index),
        20,
        120,
        graphInstance,
      )
    }
  }

  /** 渲染画布底部快速定位 */
  const renderBottomToolbar = () => {
    const miniList = []
    Object.keys(lineageData?.current || {})?.forEach(item => {
      const level = Number(item)
      if (level === 0) {
        miniList.push(
          <>
            <div
              className={classNames('mini-item', {
                hot: -1 === hotIndex,
              })}
              onClick={() => handleClickMiniNode(-1)}
            >
              1层上游表
            </div>
            <div
              className={classNames('mini-item', {
                hot: 0 === hotIndex,
              })}
              onClick={() => handleClickMiniNode(0)}
            >
              中心表
            </div>
            <div
              className={classNames('mini-item', {
                hot: 1 === hotIndex,
              })}
              onClick={() => handleClickMiniNode(1)}
            >
              1层下游表
            </div>
          </>,
        )
      } else if (level > 0) {
        miniList.push(
          <div
            className={classNames('mini-item', {
              hot: level === hotIndex,
            })}
            onClick={() => handleClickMiniNode(level)}
          >
            {`${level}层下游表`}
          </div>,
        )
      } else {
        miniList.unshift(
          <div
            className={classNames('mini-item', {
              hot: level === hotIndex,
            })}
            onClick={() => handleClickMiniNode(level)}
          >
            {`${Math.abs(level)}层上游表`}
          </div>,
        )
      }
    })
    return miniList
  }

  return (
    <div
      className={classNames('assets-lineage-container', {
        'full-screen': isFullScreen,
      })}
    >
      <div
        className={classNames('assets-lineage-top-bar', {
          'full-screen-topbar': isFullScreen,
        })}
      >
        <div className="tip-title">
          <div className="tip-name">操作和图例栏</div>
          <div className="legends">
            {Object.keys(props?.legend || {}).map((item, index) => {
              const { color, name } = props.legend[item]
              return (
                <div className="table-type-item" key={index} style={{ marginRight: '10px' }}>
                  <div className="color-block" style={{ background: color }} />
                  {name}
                </div>
              )
            })}
          </div>
        </div>

        <div className="tip-action">
          <a onClick={fullScreen} style={{ margin: '10px' }}>
            {isFullScreen ? '关闭全屏' : '打开全屏'}{' '}
          </a>
          <a onClick={() => positionToCenter()} style={{ margin: '10px' }}>
            定位中心
          </a>
          <a onClick={reload} style={{ margin: '10px' }}>
            恢复默认
          </a>
        </div>
      </div>
      <XFlow
        className="xflow-user-container"
        graphData={graphData}
        onLoad={onLoad}
        isAutoCenter={false}
      >
        <XFlowCanvas config={graphConfig}>
          <CanvasScaleToolbar position={{ top: 12, left: 12 }} />
          {props.graphConfig.showBottomToolbar && (
            <div className="bottom-toolbar">{renderBottomToolbar()}</div>
          )}
        </XFlowCanvas>
      </XFlow>
    </div>
  )
}

export default LineageRelation
