import { Dnd } from '@antv/x6-plugin-dnd'
import { useGraph } from '../graph'

class XFlowDnd {
  protected dnd: Dnd

  init(options: ConstructorParameters<typeof Dnd>[0]) {
    if (this.dnd) {
      this.dnd.dispose()
    }

    this.dnd = new Dnd(options)
  }

  getDnd = () => {
    return this.dnd
  }
}

export const SINGLETON = new XFlowDnd()

export const useDnd = (options?: Dnd.Options) => {
  const graph = useGraph()

  if (options || !SINGLETON.getDnd()) {
    const dndOptions = { target: graph, ...(options || {}) }

    SINGLETON.init(dndOptions)
  }

  return SINGLETON.getDnd()
}
