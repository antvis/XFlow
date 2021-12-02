import React from 'react'
import type { IGraphCommandService } from '../../command'
import type { IModelService } from '../../model-service'
import type { Graph as X6Graph, Node as X6Node, Edge as X6Edge } from '@antv/x6'
import type { NsGraph } from '../../interface'
interface IAppContext {
  cell: X6Node | X6Edge
  x6Graph: X6Graph
  commands: IGraphCommandService
  modelService: IModelService
}

export const AppContext = React.createContext<IAppContext>({
  cell: null,
  x6Graph: null,
  commands: null,
  modelService: null,
})

export const useAppContext = () => React.useContext(AppContext)

export function getNodeReactComponent(
  Component: React.ComponentType<NsGraph.IReactNodeProps>,
  commands: IGraphCommandService,
  modelService: IModelService,
) {
  return function (x6Node: X6Node) {
    /* eslint-disable-next-line  */
    const x6Graph: X6Graph = this
    const nodeData = x6Node?.getData<any>()
    const size = x6Node?.getSize()
    const position = x6Node?.getPosition()

    const WrappedComponent: React.FC = () => {
      return (
        <AppContext.Provider
          value={{
            cell: x6Node,
            x6Graph,
            commands,
            modelService,
          }}
        >
          {React.createElement<NsGraph.IReactNodeProps>(Component, {
            cell: x6Node,
            data: nodeData,
            size,
            position,
          } as any)}
        </AppContext.Provider>
      )
    }
    return <WrappedComponent />
  }
}

export function getEdgeReactComponent(
  Component: React.ComponentType<NsGraph.IReactEdgeProps>,
  commands: IGraphCommandService,
  modelService: IModelService,
) {
  return function (x6Edge: X6Edge) {
    /* eslint-disable-next-line  */
    const x6Graph = this
    const edgeData = x6Edge?.getData<any>()
    const WrappedComponent = () => {
      return (
        <AppContext.Provider
          value={{
            cell: x6Edge,
            x6Graph,
            commands,
            modelService,
          }}
        >
          {React.createElement<NsGraph.IReactEdgeProps>(Component, {
            data: edgeData,
            cell: x6Edge,
          } as any)}
        </AppContext.Provider>
      )
    }
    return <WrappedComponent />
  }
}

/** 获取节点选中状态 */
export const useIsNodeSelected = () => {
  const [isSelected, setIsSelected] = React.useState(false)
  const { x6Graph, cell } = useAppContext()
  React.useEffect(() => {
    const handler = ({ added, removed }) => {
      const isAdded = added
        .filter(selectedCell => selectedCell.isNode())
        .some(node => {
          node.id === cell.id
        })
      if (isAdded) {
        cell.setData({ ...cell.getData(), isNodeSelected: true })
        setIsSelected(true)
        return
      }
      const isRemoved = removed
        .filter(selectedCell => selectedCell.isNode())
        .some(node => {
          node.id === cell.id
        })
      if (isRemoved) {
        cell.setData({ ...cell.getData(), isNodeSelected: false })
        setIsSelected(false)
        return
      }
    }
    x6Graph.on('selection:changed', handler)
    return () => {
      x6Graph.off('selection:changed', handler)
    }
    /* eslint-disable-next-line  */
  }, [x6Graph])
  return [isSelected]
}
