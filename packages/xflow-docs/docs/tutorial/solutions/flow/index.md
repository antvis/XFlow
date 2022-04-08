---
title: 流程图 解决方案
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

# 流程图解决方案

## 效果演示

<code src="./demos/index.tsx" compact transform classname="flowchart-demo" />

## 功能概览

流程图解决方案开发了 4 个组件：

- FlowchartCanvas
- FlowchartExtension
- FlowchartNodePanel
- FlowchartFormPanel

并集成了以下的通用组件：

- KeyBindings
- CanvasContextMenu
- CanvasToolbar
- CanvasScaleToolbar
- CanvasSnapline

与 DAG 解决方案相比，差异点在于内置了流程图特有的`流程图节点`,`节点缩放`,`节点样式调节`,`边样式调节`等特性。

### 节点交互（Node）

图由节点和连接这些节点的边所构成, 图编辑的第一步需要实现节点的的新建和删除，XFlow 流程图解决方案内置节点面板组件和事件封装来实现节点的增删改查交互。

<img src="https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*ivjRTqegTV0AAAAAAAAAAAAAARQnAQ" style="display: block;padding: 12px 0;width: 61.88%;"/>

### 连线交互（Edge）

图编辑的第二步需要实现节点间连线的增，删，改，查的交互
<img src="https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*56aISblpGsEAAAAAAAAAAAAAARQnAQ" style="display: block;padding: 12px 0;width: 61.88%;" />

### 群组交互（Group）

在节点和边的基础上我们还可以把有逻辑关系的节点组装成组
<img src="https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*-xcrQ5GAQzcAAAAAAAAAAAAAARQnAQ" style="display: block;padding: 12px 0;width: 61.88%;" />

### 画布交互（Graph）

XFlow 内置累常用的画布缩放，复制粘贴，撤销重做，MiniMap 等能力。
<img src="https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*CvWXToI0KuYAAAAAAAAAAAAAARQnAQ" style="display: block;padding: 12px 0;width: 61.88%;"/>

### 通用流程图组件-FlowchartNodePanel

FlowchartNodePanel 除了内置的常用节点外，提供了便捷的自定义能力，可快速定制业务节点。

节点面板配置

| 属性名           | 类型                             | 描述                                                   | 默认值       | 是否必填   |
| ---------------- | -------------------------------- | ------------------------------------------------------ | ------------ | ---------- |
| show             | boolean                          | 是否展示节点面板、常用于阅读态                         | -            | true       |
| showHeader       | boolean                          | 是否展示 header                                        | true         | false      |
| showOfficial     | boolean                          | 是否展示 通用面板                                      | true         | false      |
| defaultActiveKey | string[]                         | 默认展开的面板，custom: 自定义节点；official: 内置节点 | ['official'] | ['custom'] |
| registerNode     | `RegisterNode \| RegisterNode[]` | 自定义节点                                             | -            | false      |

_RegisterNode_

| 属性名 | 类型         | 描述                             | 默认值     | 是否必填 |
| ------ | ------------ | -------------------------------- | ---------- | -------- |
| title  | string       | 自定义节分组标题                 | 自定义节点 | false    |
| key    | string       | 自定义节分组 KEY                 | -          | true     |
| hidden | boolean      | 隐藏节点分组（方便用于注册节点） | false      | false    |
| nodes  | CustomNode[] | 节点数组                         | -          | true     |

```ts
interface CustomNode {
  /** 节点名称，唯一 */
  name: string
  /** 节点 React 组件 */
  component: NsGraph.INodeRender<any>
  /** popover 组件 */
  popover?: React.Component<any>
  /** 默认标签 */
  label?: string
  /** 默认宽度 */
  width?: number
  /** 默认高度 */
  height?: number
  /** 连接锚点配置，默认上下左右四个 */
  ports?: NsGraph.INodeConfig['ports']
}
```

### 表单组件-FlowchartFormPanel

内置表单组件，用于节点、边、群组等样式和数据绑定，包括常用的标签、位置、尺寸、字号等，可通过 FlowchartFormPanel 快速自定义。

| 属性名            | 类型              | 描述                           | 默认值                                        | 是否必填 |
| ----------------- | ----------------- | ------------------------------ | --------------------------------------------- | -------- |
| show              | boolean           | 是否展示节点面板、常用于阅读态 | true                                          | false    |
| position          | IPosition         | 表单位置配置                   | `{ width: 240, top: 0, bottom: 0, right: 0 }` | false    |
| controlMapService | ControlMapService | 注册自定义`Form`组件，参考 DAG | -                                             | false    |
| formSchemaService | FormSchemaService | 控制面板切换逻辑，参考 DAG     | -                                             | false    |

&nbsp;

<!-- 竟然不支持 tsx -->

```ts
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Input } from 'antd'
import { FlowchartFormPanel, FormWrapper } from '@antv/xflow'

const InputComponent = props => {
  const { config, plugin = {} } = props
  const { updateNode, updateEdge, updateGroup } = plugin
  const onLabelChange = e => {
    updateNode({
      label: e.target.value,
    })
  }
  return <Input value={label} onChange={onLabelChange} />
}

const RenameService = props => {
  return (
    <FormWrapper {...props}>
      {(config, plugin) => <InputComponent {...props} plugin={plugin} config={config} />}
    </FormWrapper>
  )
}
const CanvasService = props => {
  return <p style={{ textAlign: 'center' }}>主画布</p>
}
export const controlMapService = controlMap => {
  controlMap.set('rename-service', RenameService)
  controlMap.set('canvas-service', CanvasService)
  return controlMap
}

const formSchemaService = async args => {
  const { targetType } = args
  const isGroup = args.targetData?.isGroup
  const nodeSchema = {
    tabs: [
      {
        name: '设置',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: '节点名',
                name: '自定义form',
                shape: 'rename-service',
              },
            ],
          },
        ],
      },
    ],
  }
  if (isGroup) {
    // TODO
  }
  if (targetType === 'edge') {
    // TODO
  }
  if (targetType === 'node') {
    return nodeSchema
  }
  return {
    tabs: [
      {
        name: '设置',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: '',
                name: 'canvas-service',
                shape: 'canvas-service',
              },
            ],
          },
        ],
      },
    ],
  }
}

const CustomFlowchartFormPanel = () => {
  return (
    <FlowchartFormPanel
      position={{ width: 200, top: 40, bottom: 0, right: 0 }}
      controlMapService={controlMapService}
      formSchemaService={formSchemaService}
    ></FlowchartFormPanel>
  )
}
```

### 主画布-FlowchartCanvas

主画布内置了一些常用的交互事件和默认配置，可通过 config 进行调整。

| 属性名         | 类型                                | 描述                   | 默认值                                          | 是否必填 |
| -------------- | ----------------------------------- | ---------------------- | ----------------------------------------------- | -------- |
| config         | CanvasConfig                        | 画布配置               | -                                               | false    |
| position       | IPosition                           | 位置配置               | `{ top: 40, left: 240, right: 240, bottom: 0 }` | false    |
| onAddNode      | (node: NsGraph.INodeConfig) => void | 新增节点时回调         | -                                               | false    |
| onAddEdge      | (node: NsGraph.IEdgeConfig) => void | 新增边时回调           | -                                               | false    |
| onConfigChange | `IOnConfigChange`                   | 节点或边更新数据时调用 | -                                               | false    |

&nbsp;

```ts
type IOnConfigChange = (params: {                          |
    data: Datum
    type: string
    config?: NsGraph.INodeConfig | NsGraph.IEdgeConfig
}) => void

<FlowchartCanvas config={{ grid: false }} />
```

## 最后

更多功能请参考 [DAG](/docs/tutorial/solutions/dag) 解决方案，如有问题可加群或导致 [GitHub](https://github.com/antvis/XFlow/issues) 反馈。
