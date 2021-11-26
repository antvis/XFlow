import React, { useCallback } from 'react'
import type { NsGraphCmd } from '@antv/xflow-core'
import { XFlowGraphCommands, MODELS, XFlowNodeCommands, XFlowEdgeCommands } from '@antv/xflow-core'
import { onConfigChange } from '../flowchart-canvas/utils'
import { FormItemWrapper } from '../canvas-json-schema-form'
import { usePanelContext } from '../base-panel/context'
import useAsync from './useAsync'
import type { IFlowchartFormWrapperProps } from './interface'

export const FlowchartFormWrapper: React.FC<IFlowchartFormWrapperProps & { type: string }> =
  props => {
    const { controlSchema, children, type: formType = 'node' } = props
    const { commandService, modelService } = usePanelContext()

    const getSelectNode = useCallback(async () => {
      const { data } = await MODELS.SELECTED_NODE.useValue(modelService)
      return data as object
    }, [modelService])

    const getSelectEdge = useCallback(async () => {
      const cell = await MODELS.SELECTED_CELL.useValue(modelService)
      const data = cell.getData()
      return {
        id: cell.id,
        ...(data as any),
      }
    }, [modelService])

    const { data, loading } = useAsync(formType === 'edge' ? getSelectEdge : getSelectNode)

    React.useEffect(() => {
      commandService.executeCommand(XFlowGraphCommands.SAVE_GRAPH_DATA.id, {
        saveGraphDataService: async (meta, graph) => {
          return { err: null, data: graph, meta }
        },
      } as NsGraphCmd.SaveGraphData.IArgs)
    }, [commandService])

    const updateNode = async (value: object) => {
      const currentNodeData = await getSelectNode()
      const nodeConfig = { ...currentNodeData, ...value }
      await commandService.executeCommand(XFlowNodeCommands.UPDATE_NODE.id, {
        nodeConfig,
      })
      onConfigChange({ type: 'update:node', config: nodeConfig })
    }

    const updateEdge = async (value: object, type: 'text' | 'line' = 'line', key?: string) => {
      const currentEdgeData = await getSelectEdge()
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
    }

    const updateGroup = async (value: object) => {
      const currentGroupData = await getSelectNode()
      const nodeConfig = { ...currentGroupData, ...value }
      await commandService.executeCommand(XFlowNodeCommands.UPDATE_NODE.id, {
        nodeConfig,
      })
      onConfigChange({ type: 'update:group', config: nodeConfig })
    }

    if (loading) {
      return null
    }

    return (
      <FormItemWrapper schema={controlSchema}>
        {() => {
          return children({ ...(data as object) }, { updateNode, updateEdge, updateGroup })
        }}
      </FormItemWrapper>
    )
  }
