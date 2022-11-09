import { useEffect, useState, useCallback } from 'react'
import { Export } from '@antv/x6-plugin-export'
import { useGraph } from '../graph'

export const useFormat = (formatOptions?: Export.ToImageOptions) => {
  const [options, setOptions] = useState<Export.ToImageOptions>()
  const graph = useGraph()

  const initFormat = useCallback(() => {
    const format = new Export()

    format.init(graph)

    graph.use(format)

    return format
  }, [graph])

  const graphFormat = graph.getPlugin<Export>(Export.name) || initFormat()

  useEffect(() => {
    if (formatOptions) {
      setOptions(formatOptions)
    }
  }, [formatOptions])

  return {
    exportPng: (fileName: string) => graphFormat.exportPNG(fileName, options),
    exportJPEG: (fileName: string) => graphFormat.exportJPEG(fileName, options),
  }
}
