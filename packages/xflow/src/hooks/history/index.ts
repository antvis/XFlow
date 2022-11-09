import { History } from '@antv/x6-plugin-history'
import { useGraph } from '../graph'

export const useHistory = (options?: History.Options) => {
  const graph = useGraph()
  const history = graph.getPlugin<History>(History.name)

  if (options) {
    if (history) {
      // TODO: add setOptions function
      // history.setOptions(options)
    } else {
      const graphHistory = new History(options)

      graph.use(graphHistory)

      return graphHistory
    }
  }

  return history
}

export const useOnHistoryUndo = (callback: () => void) => {
  const history = useHistory()

  if (history) {
    history.on('undo', callback)
  }
}

export const useOnHistoryRedo = (callback: () => void) => {
  const history = useHistory()

  if (history) {
    history.on('redo', callback)
  }
}
