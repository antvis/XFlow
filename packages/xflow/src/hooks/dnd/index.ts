import { Dnd } from '@antv/x6-plugin-dnd'
import { useGraph } from '../graph'

export const useDnd = (options: Omit<Dnd.Options, 'target'>) => {
  const graph = useGraph()

  return new Dnd({ ...options, target: graph })
}
