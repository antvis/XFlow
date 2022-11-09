import React, { FC, useRef, useEffect, useCallback } from 'react'
import { MiniMap } from '@antv/x6-plugin-minimap'
import { useGraph } from '../../hooks/graph'

export const Minimap: FC<Omit<MiniMap.Options, 'container'>> = (props) => {
  const graph = useGraph()
  const mapRef = useRef<HTMLDivElement | null>(null)

  const initMinimap = useCallback(() => {
    if (mapRef.current && graph) {
      const options = { ...props, container: mapRef.current }
      const minimap = graph.getPlugin<MiniMap>(MiniMap.name)

      if (minimap) {
        minimap.dispose()
        // TODO: add setOption function
        // minimap.setOptions(options)

        minimap.init(graph)
      } else {
        const minimap = new MiniMap(options)

        minimap.init(graph)

        graph.use(minimap)
      }
    }
  }, [mapRef, props, graph])

  useEffect(() => {
    if (graph) {
      initMinimap()
    }
  }, [mapRef, graph])

  return <div ref={mapRef} />
}
