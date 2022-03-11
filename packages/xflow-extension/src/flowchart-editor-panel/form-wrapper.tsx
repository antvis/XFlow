import React, { useCallback } from 'react'
import type { NsGraphCmd } from '@antv/xflow-core'
import type { Node, Edge } from '@antv/x6'
import { XFlowGraphCommands, MODELS, XFlowNodeCommands, XFlowEdgeCommands } from '@antv/xflow-core'
import { onConfigChange } from '../flowchart-canvas/utils'
import { FormItemWrapper } from '../canvas-json-schema-form'
import { usePanelContext } from '../base-panel/context'
import useAsync from './useAsync'
import type { IFlowchartFormWrapperProps } from './interface'

export const FlowchartFormWrapper: React.FC<
  IFlowchartFormWrapperProps & { type: string }
> = props => {
  const { controlSchema, children, type: formType = 'node' } = props
  const { commandService, modelService } = usePanelContext()

  const getSelectNodes = useCallback(async () => {
    const nodes = await MODELS.SELECTED_NODES.useValue(modelService)
    return nodes as Node[]
  }, [modelService])

  const getSelectEdges = useCallback(async () => {
    const edges = await MODELS.SELECTED_CELLS.useValue(modelService)
    return edges as Edge[]
  }, [modelService])

  const { data, loading } = useAsync(formType === 'edge' ? getSelectEdges : getSelectNodes)

  React.useEffect(() => {
    commandService.executeCommand(XFlowGraphCommands.SAVE_GRAPH_DATA.id, {
      saveGraphDataService: async (meta, graph) => {
        return { err: null, data: graph, meta }
      },
    } as NsGraphCmd.SaveGraphData.IArgs)
  }, [commandService])

  const updateNode = async (value: object) => {
    const selectNodes = await getSelectNodes()
    selectNodes.forEach(async (node: Node) => {
      const currentNodeData = node.data
      const nodeConfig = { ...currentNodeData, ...value }
      await commandService.executeCommand(XFlowNodeCommands.UPDATE_NODE.id, {
        nodeConfig,
      })
      onConfigChange({ type: 'update:node', config: nodeConfig })
    })
  }

  const updateEdge = async (value: object, type: 'text' | 'line' = 'line', key?: string) => {
    const selectEdges = await getSelectEdges()
    selectEdges.forEach(async (edge: Edge) => {
      const currentEdgeData = edge.data
      // 更新线、文本样式
      const edgeConfig = {
        ...currentEdgeData,
        ...(key ? value[key] : value),
        attrs: {
          ...currentEdgeData.attrs,
          [type]: {
            ...currentEdgeData.attrs?.[type],
            ...(key ? value[key] : value),
          },
        },
      }
      await commandService.executeCommand(XFlowEdgeCommands.UPDATE_EDGE.id, { edgeConfig })
      onConfigChange({ type: 'update:edge', config: edgeConfig })
    })
  }

  if (loading) {
    return null
  }

  return (
    <FormItemWrapper schema={controlSchema}>
      {() => {
        return children({ ...(data[0].data as object) }, { updateNode, updateEdge })
      }}
    </FormItemWrapper>
  )
}
