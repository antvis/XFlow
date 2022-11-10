import React, {
  useContext,
  useRef,
  useEffect,
  FC,
  useLayoutEffect,
} from 'react'
import { GraphContext } from '../context/GraphContext'
import { Graph } from '@antv/x6'
import { GraphOptions } from '../types'
import { Util } from '../util'

const XFlowGraph: FC<GraphOptions> = (props) => {
  const container = useRef<HTMLDivElement>(null)
  const { graph, setGraph } = useContext(GraphContext)

  useEffect(() => {
    const graph = new Graph({
      container: container.current!,
      autoResize: true,
      ...props.configs,
    })

    setGraph(graph)
  }, [])

  useLayoutEffect(() => {
    if (graph && props.data.length > 0) {
      const { data, defaultNodeOptions, defaultEdgeOptions, centerContent } =
        props
      const model = Util.preprocess(
        data,
        defaultNodeOptions,
        defaultEdgeOptions,
      )
      graph.fromJSON(model)

      if (centerContent) {
        graph.centerContent()
      }
    }
  }, [graph, props.data])

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div ref={container} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

export default XFlowGraph
