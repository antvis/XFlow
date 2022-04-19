---
title: 血缘图 解决方案
order: 4
group:
  path: /tutorial/solutions
  title: 解决方案
  order: 2
nav:
  title: 教程
  path: /docs
  order: 1
---

# 血缘图解决方案

## 效果演示

```tsx
import React from 'react'
import { uuidv4 } from '@antv/xflow'
import { LineageRelation, LoadLineageLayerDataType, StreamType, GraphServiceType } from './demos'

/** 获取血缘层级数据 */
const loadLineageLayerData: GraphServiceType = async (params: LoadLineageLayerDataType) => {
  const getLayerData = () => {
    return {
      pageIndex: 1,
      pageSize: 12,
      totalCount: 30,
      records: [...new Array(12)].map((i, index) => {
        return {
          // 下游节点列表
          downStream: null,
          hasLeaf: true,
          id: uuidv4(),
          upStream: null,
        }
      }),
    }
  }

  const { stream, id } = params
  // 首次加载 双向展开
  if (stream === 'TWO_WAY') {
    return {
      id: uuidv4(),
      downStream: getLayerData(),
      upStream: getLayerData(),
    }
  }
  // 展开上游
  if (stream === 'UP') {
    return {
      id: id,
      downStream: null,
      upStream: getLayerData(),
    }
  }
  // 展开下游
  if (stream === 'DOWN') {
    return {
      id: id,
      downStream: getLayerData(),
      upStream: null,
    }
  }
}

export default () => {
  /** x6 的图形配置 **/
  const x6Config = {
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
  }

  /** 血缘图配置 **/
  const graphConfig = {
    /** 节点高度 **/
    nodeHeight: 50,
    /** 层级宽度 **/
    layerWidth: 346,
    /** 层级间隔，两个节点之间的距离 **/
    offsetX: 390,
    /** 节点 Y 方向偏移量 **/
    offsetY: -100,
    /** 展示底部层级定位 **/
    showBottomToolbar: true,
    /** 展示顶部的层级搜索 **/
    showSearch: true,
  }

  const legend = {
    PHYSICAL: {
      color: '#6ca0f5',
      name: '物理表',
    },
    ODM: {
      color: '#68b6b0',
      name: '贴源逻辑表',
    },
    DIM: {
      color: '#2bc048',
      name: '维度逻辑表',
    },
    FACT: {
      color: '#eaba19',
      name: '事实逻辑表',
    },
    SUM: {
      color: '#ad95ff',
      name: '汇总逻辑表',
    },
  }

  /**
   * 自定义 hover 内容
   * @param data 当前 hover 的节点数据
   */
  const renderPopover = ({ data }) => {
    return (
      <div>
        <div>hover的节点ID：{data.id}</div>
      </div>
    )
  }

  /**
   * 自定义节点
   * @param data 每个节点的数据
   */
  const renderNodeItem = ({ data }) => {
    return (
      <>
        <div className="icon" style={{ backgroundColor: '#6ca0f5' }}></div>
        <div className="text">{data.id}</div>
        <div className="count empty">{10}</div>
      </>
    )
  }

  const onload = () => {
    console.log('初始化完成')
  }

  return (
    <div>
      <LineageRelation
        tableId="center-node-id"
        x6Config={x6Config}
        graphConfig={graphConfig}
        onload={onload}
        legend={legend}
        renderPopover={renderPopover}
        renderNodeItem={renderNodeItem}
        loadLineageLayerData={loadLineageLayerData}
      />
    </div>
  )
}
```

## 功能概览

### 资产管理

通过颜色标识管理不同的资产，具有各自的卡片进行内容展示。

### 交互能力

支持画布拖拽移动、画布按住 ctrl 缩放(也可配置成滚轮缩放)。

<img src=https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*esXuRoyD9fAAAAAAAAAAAAAAARQnAQ width='50%' />

&nbsp;

### 列表分页和搜索

字段清晰展示下游节点数量，节点展开收齐流畅，支持分页和搜索，数据再多也可以流畅展示和查找。

<img src=https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*6qVVSroMB1QAAAAAAAAAAAAAARQnAQ width='50%' />

&nbsp;

### 事件监听

支持监听节点点击事件，点击展示下一层级，支持层级快速移动定位，并自动进行滚动。

<img src=https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*c_IiR7h0iCMAAAAAAAAAAAAAARQnAQ width='50%' />

&nbsp;

### 画布缩放

支持画布缩放, 允许画布放大、缩小、回归 1:1 并画布居中、画布内容适配可视区域。

<img src=https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*q-EKTqq34r8AAAAAAAAAAAAAARQnAQ width='50%' />

&nbsp;

### 全屏与恢复默认

支持全屏幕展示，并自动将图形定位在页面中央。点击恢复默认自动恢复到初始状态。

<img src=https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*Ev65QbdSR50AAAAAAAAAAAAAARQnAQ width='50%' />

&nbsp;
