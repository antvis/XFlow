import { useEffect } from 'react'
import { Clipboard } from '@antv/x6-plugin-clipboard'
import { Graph } from '@antv/x6'
import { useGraph } from '../graph'

class XFlowClipboard {
  protected clipboard: Clipboard

  init(graph: Graph, options: Clipboard.Options) {
    if (this.clipboard) {
      this.clipboard.dispose()
    }

    this.clipboard = new Clipboard(options)
    this.clipboard.init(graph)
  }

  getClipboard = () => this.clipboard
}

export const SINGLETON = new XFlowClipboard()

export const useClipboard = (options: Clipboard.Options) => {
  const graph = useGraph()

  useEffect(() => {
    if (options) {
      SINGLETON.init(graph, options)
    }
  }, [graph, options])

  return SINGLETON.getClipboard()
}
