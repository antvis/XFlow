/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-shadow */
/**
 * @author 星翊
 * @description 层级节点
 */

import React, { useState, useEffect, useLayoutEffect } from 'react'
import type { NsGraph } from '@antv/xflow'
import { Input, message, Tooltip, Popover, Pagination, Spin } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import _ from 'lodash'
import type { LineageGraph } from '../../type'
import { StreamType } from '../../type'
import './index.less'

type LineageLayerType = NsGraph.IReactNodeProps<any>

const LineageLayer: React.FC<LineageLayerType> = props => {
  /** 搜索内容 */
  const [searchData, setSearchData] = useState(null)
  /** 展开的节点 */
  const [unfoldNode, setUnfoldNode] = useState(undefined)
  /** 滚动加载 loading */
  const [scrollLoading, setScrollLoading] = useState(false)
  /** 展示的节点数据 */
  const [dataSource, setDataSource] = useState<LineageGraph.LayerNodeType>(null)
  /** 无数据 */
  const [isEmpty, setIsEmpty] = useState(false)

  const [index, setIndex] = useState(undefined)

  const [hoverNode, setHoverNode] = useState(null)

  /** 输入框 ref */
  const inputRef = React.useRef(null)

  const {
    data: {
      id,
      data: { data, openNode, closeNodeByLevel, unfoldNodeId, showSearch },
    },
  } = props

  /** 节点层级，从 id 中获取 */
  const level: number = id && Number(id.split('_')?.[1])
  /** 是否是中心节点 */
  const isCenterNode: boolean = level === 0

  useEffect(() => {
    const ds = data?.records?.map(item => {
      return {
        type: item?.type,
        text: item?.id,
        originalData: item,
      }
    })
    setDataSource({
      count: data?.totalCount,
      data: ds,
      index: data?.pageIndex,
    })
  }, [])

  useEffect(() => {
    if (dataSource?.data?.length === 0) {
      setIsEmpty(true)
    } else {
      setIsEmpty(false)
    }
  }, [dataSource])

  /**
   * 获取血缘层级数据
   * @param isScroll 是否是滚动加载
   * @returns
   */
  const getLineageLayerData = async (currentPage?: number) => {
    return await props.loadLineageLayerData({
      id: unfoldNodeId,
      stream: level > 0 ? StreamType.DOWN : StreamType.UP,
      pageSize: 12,
      keyword: searchData || '',
      currentPage: currentPage || 1, // 每次滚动，分页 + 1
    })
  }

  /** 分页 */
  useEffect(() => {
    const searchLayerData = async () => {
      setScrollLoading(true)
      const searchResult = await getLineageLayerData(1)
      setScrollLoading(false)
      closeNodeByLevel(level, true)
      setIndex(undefined)
      // 上下游节点取值不同
      const nodeKey = level > 0 ? 'downStream' : 'upStream'

      if (searchResult[nodeKey].records.length > 0) {
        setDataSource({
          count: searchResult[nodeKey]?.totalCount,
          data: searchResult[nodeKey]?.records?.map(item => {
            return {
              type: item.type,
              text: item?.id,
              originalData: item,
            }
          }),
          index: searchResult[nodeKey]?.pageIndex,
        })
      } else {
        setDataSource({
          count: 0,
          data: [],
          index: 1,
        })
      }
    }

    if (searchData !== null) {
      searchLayerData()
    }
  }, [searchData])

  useLayoutEffect(() => {
    if (unfoldNode) {
      openNode(level, unfoldNode, id, index)
    }
    if (unfoldNode === null) {
      closeNodeByLevel && closeNodeByLevel(level, true, true)
    }
  }, [unfoldNode])

  /** 列表滚动加载数据 */
  const scrollLoadData = async (currentPage: number) => {
    setScrollLoading(true)
    // 加载下一页数据
    const scrollData = await getLineageLayerData(currentPage)
    setScrollLoading(false)

    // 上下游节点取值不同
    const nodeKey = level > 0 ? 'downStream' : 'upStream'

    if (scrollData[nodeKey].records.length > 0) {
      closeNodeByLevel(level, true)
      setDataSource({
        count: scrollData[nodeKey]?.totalCount,
        data: scrollData[nodeKey]?.records?.map(item => {
          return {
            type: item.type,
            text: item?.id,
            originalData: item,
          }
        }),
        index: scrollData[nodeKey]?.pageIndex,
      })
    }
  }

  const handleInput = _.debounce(val => {
    setSearchData(val)
  }, 500)

  /** 获取层级标题 */
  const getLeyerTitle = () => {
    if (isCenterNode) {
      return <>血缘中心</>
    }
    return (
      <>{`${Math.abs(level)}层${level > 0 ? '下游' : '上游'} | 实体数量（${data?.totalCount}）`}</>
    )
  }

  /** hover 列表事件 */
  const onPopoverVisibleChange = (visible: boolean, node: LineageGraph.NodeItemType, index) => {
    if (visible) {
      setHoverNode({ ...node.originalData, index })
    } else {
      setHoverNode(null)
    }
  }

  const resetNextLayer = () => {
    setUnfoldNode(null)
    setIndex(undefined)
  }

  /**
   *  点击节点
   * @param itemData 节点数据
   * @param index 节点索引
   * @param isUnfoldNode 是否是展开的节点
   * @returns
   */
  const handleClickNodeItem = (itemData, index: number, isUnfoldNode: boolean) => {
    // 中心节点，不展开下游
    if (isCenterNode) {
      return
    }
    // 点击的是展开的节点
    if (isUnfoldNode) {
      // 重置下游节点
      resetNextLayer()
    } else if (itemData.originalData?.hasLeaf) {
      // 下游有节点
      setIndex(index)
      setUnfoldNode(itemData)
    } else {
      message.info('无可展开节点')
    }
  }

  /**
   * 渲染节点
   * @param itemData 节点数据
   * @param index 所在列表 index
   * @param isUnfoldNode 是否是展开的节点
   * @returns
   */
  const renderNodeItems = (
    itemData: LineageGraph.NodeItemType,
    index: number,
    isUnfoldNode?: boolean,
  ) => {
    const itemNode = (
      <div
        className={classNames('layer-node-item', {
          fixed: isUnfoldNode,
          'is-center': isCenterNode,
        })}
        key={`${itemData.text}--${index}`}
        onClick={e => handleClickNodeItem(itemData, index, isUnfoldNode)}
      >
        {props.renderNodeItem({ data: itemData.originalData })}
      </div>
    )

    return (
      <Popover
        key={`${itemData?.text}-${index}-popver`}
        content={hoverNode ? () => props.renderPopover({ data: hoverNode }) : null}
        placement="rightTop"
        onVisibleChange={e => onPopoverVisibleChange(e, itemData, index)}
        overlayClassName="xflow-lineage-popover-container"
      >
        {itemNode}
      </Popover>
    )
  }

  /** 分页更改 */
  const onPageChange = val => {
    // 获取指定页数据
    scrollLoadData(val)
    setIndex(undefined)
  }

  /**
   * 1. 节点的数据、位置信息通过props取
   * 2. 当节点被触发更新时, props返回的数据也会动态更新, 触发节点重新渲染
   */
  return (
    <div className="node-lineage-layer">
      <div className="layer-title-container">
        <div>{getLeyerTitle()}</div>
        {!isCenterNode && (
          <div className="layer-title-actions">
            <div className="action-item">
              <Tooltip title="搜索">
                {/* <Icon type="search" /> */}
                <SearchOutlined />
              </Tooltip>
            </div>
          </div>
        )}
      </div>
      <div className={'layer-subtitle-container'}>
        {!isCenterNode && showSearch && (
          <div className="layer-subtitle-actions">
            <span className="subtitle-name">搜索：</span>
            <span className="subtitle-item">
              <Input
                autoFocus
                ref={inputRef}
                defaultValue={searchData}
                style={{ width: 245 }}
                onChange={e => handleInput(e.target.value)}
                placeholder={'请输入关键字'}
                className="actions-input"
                onClick={() => {
                  if (inputRef) {
                    inputRef.current.focus()
                  }
                }}
              />
            </span>
          </div>
        )}
      </div>
      <div className="layer-node-container">
        <div className={`node-list dp-scroll-list-${level}`}>
          {/* 节点 */}
          {dataSource?.data?.map((i, idx) => renderNodeItems(i, idx, idx === index))}
          {/* 分页器 */}
          {dataSource?.count > 12 && (
            <Pagination
              size="small"
              pageSize={12}
              onChange={onPageChange}
              className="layer-pagination"
              defaultCurrent={1}
              total={dataSource?.count}
            />
          )}
          {/* 层级loading */}
          <Spin
            spinning={scrollLoading}
            style={{ position: 'absolute', top: '300px', left: '150px' }}
          />
          {/* 搜索无数据展示内容 */}
          {isEmpty && (
            <div className="layer-node-item">
              <div className="loading">无数据，请更改搜索或筛选条件试试</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default LineageLayer
