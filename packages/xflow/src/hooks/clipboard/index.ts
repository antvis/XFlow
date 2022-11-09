import { Clipboard } from '@antv/x6-plugin-clipboard'
import { useGraph } from '../graph'

export const useClipboard = (options?: Clipboard.Options) => {
  const graph = useGraph()
  const clipboard = graph.getPlugin<Clipboard>(Clipboard.name)

  if (options) {
    if (clipboard) {
      // TODO: add setOptions function
      // clipboard.setOptions(options)
    } else {
      const graphClipboard = new Clipboard(options)

      graphClipboard.init(graph)

      return graphClipboard
    }
  }

  return clipboard
}
