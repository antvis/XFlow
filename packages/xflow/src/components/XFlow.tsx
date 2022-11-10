import React, { useState, PropsWithChildren, FC } from 'react'
import { Provider } from '../context/GraphContext'
import type { Graph } from '@antv/x6'

const XFlow: FC<PropsWithChildren> = ({ children }) => {
  const [graph, setGraph] = useState<Graph | null>(null)

  return <Provider value={{ graph, setGraph }}>{children}</Provider>
}

export default XFlow
