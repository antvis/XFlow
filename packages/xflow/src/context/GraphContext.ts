import { createContext } from 'react'
import type { Graph } from '@antv/x6'

interface GraphContextValue {
  graph: Graph | null
  setGraph: (graph: Graph) => void
}

const defaultValue: GraphContextValue = { graph: null, setGraph: () => {} }

export const GraphContext = createContext<GraphContextValue>(defaultValue)
export const Provider = GraphContext.Provider
export const Consumer = GraphContext.Consumer

export default GraphContext
