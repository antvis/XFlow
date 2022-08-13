import type { TooltipPlacement } from 'antd/es/tooltip'
import type { IEvent, NsGraph } from '@antv/xflow-core'
import type { Edge } from '@antv/x6'
import React from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import { ConfigProvider, Tooltip } from 'antd'
import merge from 'lodash/merge'
import { createGraphConfig } from '@antv/xflow-core'
import { Shape } from '@antv/x6'
import {
  NODE_HEIGHT,
  ASPECTRATIONODE,
  setNodeRender,
  setGroupRender,
} from '../flowchart-node-panel'
import { movedNode, resizeNode, changePortsVisible, addTools, removeTools, setProps } from './utils'
import type { IFlowchartGraphProps } from './interface'

/** 临时边 */
const TEMP_EGDE = 'flowchart-connecting-edge'
/** 自定义React节点 */
const ANT_PREFIX = 'ant'
export namespace NsAddEdgeEvent {
  export const EVENT_NAME = 'ADD_FLOWCHART_EDGE_CMD_EVENT'
  export interface IArgs {
    targetPortId: string
    sourcePortId: string
    source: string
    target: string
    edge: Edge
    tempEdgeId?: string
    attrs?: NsGraph.IEdgeConfig['attrs']
  }
}

const defaultEdgeConfig = {
  attrs: {
    line: {
      stroke: '#A2B1C3',
      targetMarker: {
        name: 'block',
        width: 12,
        height: 8,
      },
      strokeDasharray: '5 5',
      strokeWidth: 1,
    },
  },
}

const XFlowEdge = Shape.Edge.registry.register(
  'xflow',
  Shape.Edge.define({
    zIndex: 1,
    highlight: true,
    name: TEMP_EGDE,
    label: '',
    anchor: {
      name: 'midSide',
      args: {
        dx: 10,
      },
    },
    attrs: defaultEdgeConfig.attrs,
    data: {
      label: '',
    },
  }),
  true,
)

export const useGraphConfig = createGraphConfig<IFlowchartGraphProps>((config, proxy) => {
  const {
    config: canvasConfig = {},
    useConfig,
    mode = 'edit',
    showPortsOnNodeSelected = false,
    edgeConfig = {},
  } = proxy.getValue()
  config.setEdgeTypeParser(edge => edge?.renderKey as string)
  /** 这里比较黑，props 共享*/
  setProps({
    ...proxy.getValue(),
    graphConfig: config,
  })
  setNodeRender(config)
  setGroupRender(config)

  config.setX6Config(
    merge(
      {
        grid: true,
        history: true,
        resizing: {
          enabled: true,
          minWidth: NODE_HEIGHT,
          minHeight: NODE_HEIGHT,
          preserveAspectRatio: shape => {
            const { data } = shape
            return ASPECTRATIONODE.includes(data.name)
          },
        },
        snapline: {
          enabled: true,
        },
        connecting: {
          router: 'manhattan',
          connector: {
            name: 'rounded',
            args: {
              radius: 8,
            },
          },
          anchor: 'center',
          connectionPoint: 'anchor',
          allowBlank: false,
          snap: {
            radius: 20,
          },
          createEdge() {
            const tempEdge = new XFlowEdge({})
            this.once('edge:connected', args => {
              const { edge, isNew } = args
              /** 没有edge:connected时，会导致graph.once的事件没有执行 */
              if (isNew && edge && edge.isEdge() && tempEdge === edge) {
                const targetNode = edge.getTargetCell()
                if (targetNode && targetNode.isNode()) {
                  const targetPortId = edge.getTargetPortId()
                  const sourcePortId = edge.getSourcePortId()
                  const sourceCellId = edge.getSourceCellId()
                  const targetCellId = edge.getTargetCellId()
                  const customEdgeConfig =
                    typeof edgeConfig === 'function' ? edgeConfig(edge) : edgeConfig
                  this.trigger(NsAddEdgeEvent.EVENT_NAME, {
                    targetPortId,
                    sourcePortId,
                    source: sourceCellId,
                    target: targetCellId,
                    edge: edge,
                    tempEdgeId: tempEdge.id,
                    ...merge(defaultEdgeConfig, customEdgeConfig),
                  } as NsAddEdgeEvent.IArgs)
                }
              }
            })
            return tempEdge
          },
          validateEdge: args => {
            const { edge } = args
            return !!(edge?.target as any)?.port
          },
          // 是否触发交互事件
          validateMagnet() {
            // 所有锚点均可触发
            return true
          },
          // 显示可用的链接桩
          validateConnection({ sourceView, targetView, targetMagnet }) {
            // 不允许连接到自己
            if (sourceView === targetView) {
              return false
            }
            const node = targetView!.cell as any
            // 判断目标链接桩是否可连接
            if (targetMagnet) {
              const portId = targetMagnet.getAttribute('port')
              const port = node.getPort(portId)
              return !(port && port.connected)
            }
            return
          },
        },
        highlighting: {
          nodeAvailable: {
            name: 'className',
            args: {
              className: 'available',
            },
          },
          magnetAvailable: {
            name: 'className',
            args: {
              className: 'available',
            },
          },
          magnetAdsorbed: {
            name: 'className',
            args: {
              className: 'adsorbed',
            },
          },
        },
        onPortRendered(args) {
          const { port } = args
          const { contentSelectors } = args
          const container = contentSelectors && contentSelectors.content
          const placement = port.group as TooltipPlacement
          const clz = classnames('xflow-port', { connected: (port as any).connected })
          if (container) {
            ReactDOM.render(
              (
                <ConfigProvider prefixCls={ANT_PREFIX}>
                  <Tooltip title={(port as any).tooltip} placement={placement}>
                    <span className={clz} />
                  </Tooltip>
                </ConfigProvider>
              ) as React.ReactElement,
              container as HTMLElement,
            )
          }
        },
      },
      canvasConfig,
    ),
  )
  /** 内交互，上层通过实例绑定 */
  config.setEvents([
    {
      eventName: 'node:selected',
      callback: () => {
        mode === 'edit' && changePortsVisible(false)
      },
    } as IEvent<'node:selected'>,
    {
      eventName: 'edge:dblclick',
      callback: e => {
        addTools(e)
      },
    } as IEvent<'edge:dblclick'>,
    {
      eventName: 'edge:mouseleave',
      callback: (e, cmds) => {
        removeTools(e, cmds)
      },
    } as IEvent<'edge:mouseleave'>,
    {
      eventName: 'node:mouseenter',
      callback: e => {
        mode === 'edit' && changePortsVisible(true, e, showPortsOnNodeSelected)
      },
    } as IEvent<'node:mouseenter'>,
    {
      eventName: 'node:mouseleave',
      callback: e => {
        changePortsVisible(false, e)
      },
    } as IEvent<'node:mouseleave'>,
    {
      eventName: 'node:moved',
      callback: (e, cmds) => {
        movedNode(e, cmds)
      },
    } as IEvent<'node:moved'>,
    {
      eventName: 'node:resized',
      callback: (e, cmds) => {
        resizeNode(e, cmds)
      },
    } as IEvent<'node:resized'>,
  ])
  if (typeof useConfig === 'function') {
    useConfig(config)
  }
})
