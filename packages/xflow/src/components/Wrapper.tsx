import React, { FC, PropsWithChildren } from 'react'
import { useGraph } from '../hooks/graph'

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  const graph = useGraph()

  if (graph) {
    return <>{children}</>
  }

  return null
}

export default Wrapper
