import { useEffect } from 'react'
import { Export } from '@antv/x6-plugin-export'
import { Graph } from '@antv/x6'
import { useGraph } from '../graph'

class XFlowExport {
  protected export: Export
  protected options: Export.ToImageOptions

  init(graph: Graph, options?: Export.ToImageOptions) {
    if (!this.export) {
      this.export = new Export()
    }

    this.export.init(graph)

    if (options) {
      this.options = options
    }
  }

  exportPng = (fileName: string) => {
    this.export.exportPNG(fileName, this.options)
  }

  exportJPEG = (fileName: string) => {
    this.export.exportJPEG(fileName, this.options)
  }
}

export const SINGLETON = new XFlowExport()

export const useFormat = (options?: Export.ToImageOptions) => {
  const graph = useGraph()

  useEffect(() => {
    SINGLETON.init(graph, options)
  }, [graph, options])

  return {
    exportPng: SINGLETON.exportPng,
    exportJPEG: SINGLETON.exportJPEG,
  }
}
