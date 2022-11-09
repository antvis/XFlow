import { useEffect, useState, useCallback, useMemo } from 'react'
import { Export } from '@antv/x6-plugin-export'
import { useGraph } from '../graph'

export const useFormat = (formatOptions?: Export.ToImageOptions) => {
  const [options, setOptions] = useState<Export.ToImageOptions>()
  const graph = useGraph()

  const initFormat = useCallback(() => {
    if (graph) {
      const format = new Export()

      format.init(graph)

      graph.use(format)

      return format
    }
  }, [graph])

  useEffect(() => {
    if (formatOptions) {
      setOptions(formatOptions)
    }
  }, [formatOptions])

  return useMemo(() => {
    if (graph) {
      const graphFormat = graph.getPlugin<Export>(Export.name) || initFormat()

      return (
        graphFormat && {
          exportPng: (fileName: string) =>
            graphFormat.exportPNG(fileName, options),
          exportJPEG: (fileName: string) =>
            graphFormat.exportJPEG(fileName, options),
        }
      )
    }
  }, [graph, options, initFormat])
}
