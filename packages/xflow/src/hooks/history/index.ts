import { History } from '@antv/x6-plugin-history'
import { useGraph } from '../graph'

export const useHistory = (options?: History.Options) => {
  const graph = useGraph()

  const history = graph.getPlugin(History.name)

  if (options) {
    if (history) {
      // TODO: add setOptions function
      // history.setOptions(options)
    } else {
      graph.use(new History(options))
    }
  }

  return graph.getPlugin<History>(History.name)
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
