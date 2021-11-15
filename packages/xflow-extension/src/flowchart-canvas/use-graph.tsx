import React from 'react'
import { ConfigProvider, Tooltip } from 'antd'
import { TooltipPlacement } from 'antd/es/tooltip'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import {
  createGraphConfig,
  DisposableCollection,
  createHookConfig,
  XFlowEdgeCommands,
  NsGraph,
  IEvent,
} from '@antv/xflow'
import { Edge, Shape } from '@antv/x6'
import {
  NODE_HEIGHT,
  setNodeRender,
  ASPECTRATIONODE,
  setGroupRender,
} from '../flowchart-node-panel'

import {
  movedNode,
  resizeNode,
  changePortsVisible,
  setEdgeSelected,
  addTools,
  removeTools,
  setProps,
} from './utils'

/** 自定义React节点 */
const ANT_PREFIX = 'ant'

export namespace NsAddEdgeEvent {
  export const EVENT_NAME = 'ADD_EDGE_CMD_EVENT'
  export interface IArgs {
    targetPortId: string
    sourcePortId: string
    source: string
    target: string
    edge: Edge
  }
}

const XFlowEdge = Shape.Edge.registry.register(
  'xflow',
  Shape.Edge.define({
    zIndex: 1,
    highlight: true,
    shape: 'EDGE1',
    name: 'custom-edge',
    label: '',
    anchor: {
      name: 'midSide',
      args: {
        dx: 10,
      },
    },
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
    data: {
      label: '',
    },
  }),
  true,
)

export const useGraphHook = createHookConfig(config => {
  config.setRegisterHook(hooks => {
    const todo = new DisposableCollection()
    const edgeData = hooks.afterGraphInit.registerHook({
      name: 'call add edge to replace temp edge',
      handler: async args => {
        const { commandService, graph } = args
        graph.on(NsAddEdgeEvent.EVENT_NAME, async (args: NsAddEdgeEvent.IArgs) => {
          const { edge, ...edgeConfig } = args
          const config = {
            edgeConfig: {
              ...edgeConfig,
              // renderKey: FLOWCHART_EDGE, // 暂不支持
              source: {
                cell: edgeConfig.source,
                port: edgeConfig.sourcePortId,
              },
              target: {
                cell: edgeConfig.target,
                port: edgeConfig.targetPortId,
              },
              zIndex: 1,
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
              data: { ...edgeConfig },
            },
          }
          await commandService.executeCommand(XFlowEdgeCommands.ADD_EDGE.id, config)
          // const onAddEdge = getGlobalProps('onAddEdge');
          // if (typeof onAddEdge === 'function') {
          //   onAddEdge(config);
          // }
          // onConfigChange({ type: 'add:edge', config });
          args.edge.remove()
        })
      },
    })
    todo.push(edgeData)
    return todo
  })
})

/**  graphConfig hook  */
export const useGraphConfig = createGraphConfig((config, getProps) => {
  const { config: canvasConfig = {} } = getProps()
  config.setEdgeTypeParser(edge => edge?.renderKey as string)
  setNodeRender(config)
  setGroupRender(config)
  /** 这里比较黑，挂载之后在 flowchart-node-panel 里面消费*/
  setProps({
    ...getProps(),
    graphConfig: config,
  })
  config.setX6Config({
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
        const edge = new XFlowEdge({})
        const graph = this
        graph.once('edge:connected', args => {
          const { edge, isNew } = args
          if (isNew && edge.isEdge()) {
            const targetNode = edge.getTargetCell()
            if (targetNode && targetNode.isNode()) {
              const targetPortId = edge.getTargetPortId()
              const sourcePortId = edge.getSourcePortId()
              const sourceCellId = edge.getSourceCellId()
              const targetCellId = edge.getTargetCellId()
              graph.trigger(NsAddEdgeEvent.EVENT_NAME, {
                targetPortId,
                sourcePortId,
                source: sourceCellId,
                target: targetCellId,
                edge: edge,
              } as NsAddEdgeEvent.IArgs)
            }
          }
        })
        return edge
      },
      validateEdge: args => {
        const { edge } = args
        return !!(edge?.target as any)?.port
      },
      // 是否触发交互事件
      validateMagnet({ magnet }) {
        // 所有锚点均可触发
        return true
      },
      // 显示可用的链接桩
      validateConnection({ sourceView, targetView, sourceMagnet, targetMagnet }) {
        // 不允许连接到自己
        if (sourceView === targetView) {
          return false
        }
        const node = targetView!.cell as any
        // 判断目标链接桩是否可连接
        const portId = targetMagnet?.getAttribute('port')!
        const port = node.getPort(portId)
        return !(port && port.connected)
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
    ...canvasConfig,
  })

  config.setEvents([
    {
      eventName: 'node:selected',
      callback: (e, cmds, ctx) => {
        changePortsVisible(false)
      },
    } as IEvent<'node:selected'>,
    {
      eventName: 'edge:click',
      callback: (e, cmds, ctx) => {
        setEdgeSelected(e, cmds, ctx)
      },
    } as IEvent<'edge:click'>,
    {
      eventName: 'edge:dblclick',
      callback: (e, cmds, ctx) => {
        addTools(e, cmds, ctx)
      },
    } as IEvent<'edge:dblclick'>,
    {
      eventName: 'edge:mouseleave',
      callback: (e, cmds, ctx) => {
        removeTools(e, cmds, ctx)
      },
    } as IEvent<'edge:mouseleave'>,
    {
      eventName: 'node:mouseenter',
      callback: e => {
        changePortsVisible(true, e)
      },
    } as IEvent<'node:mouseenter'>,
    {
      eventName: 'node:mouseleave',
      callback: (e, cmds, ctx) => {
        changePortsVisible(false, e)
      },
    } as IEvent<'node:mouseleave'>,
    {
      eventName: 'node:moved',
      callback: (e, cmds, ctx) => {
        movedNode(e, cmds, ctx)
      },
    } as IEvent<'node:moved'>,
    {
      eventName: 'node:resized',
      callback: (e, cmds, ctx) => {
        resizeNode(e, cmds, ctx)
      },
    } as IEvent<'node:resized'>,
  ])
})
