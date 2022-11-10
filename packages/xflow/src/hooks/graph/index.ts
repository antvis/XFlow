import { useContext } from 'react'
import { GraphContext } from '../../context/GraphContext'

export const useGraph = () => {
  const { graph } = useContext(GraphContext)

  return graph
}
