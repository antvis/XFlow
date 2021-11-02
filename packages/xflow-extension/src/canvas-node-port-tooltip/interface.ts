import type { NsGraph, IModelService } from '@antv/xflow-core'

export namespace NsPortEvent {
  export const MOUSE_ENTER = 'node-port:mouseenter'
  export interface IPortEvent {
    e: MouseEvent
    portId: string
    nodeId: string
    portData: NsGraph.INodeAnchor
    nodeData: NsGraph.INodeConfig
    tooltip: string
    placement: 'top' | 'bottom'
  }
  export const MOUSE_LEAVE = 'node-port:mouseleave'
}

export namespace ACTIVE_NODE_PORT {
  export const id = 'ACTIVE_NODE_PORT'
  export interface IState {
    e: MouseEvent
    position: { x: number; y: number }
    portId: string
    nodeId: string
    portData: NsGraph.INodeAnchor
    nodeData: NsGraph.INodeConfig
    tooltip: string
    placement: 'top' | 'bottom'
  }
  export const useModel = async (modelService: IModelService) => {
    const model = await modelService.awaitModel<IState>(id)
    const data = await model.getValidValue()
    return { data, model }
  }
}

export interface IConfigProps {
  getTooltip?: (args: ACTIVE_NODE_PORT.IState) => React.ReactNode
}
