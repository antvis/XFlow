import { Graph, Path, Registry, Shape } from '@antv/x6'
import { EDGE_PATH_TYPE, XFLOW_SHAPE } from '../constants'

if (!Registry.Connector.registry.exist(EDGE_PATH_TYPE.VERTICAL_NODE)) {
  Graph.registerConnector(
    EDGE_PATH_TYPE.VERTICAL_NODE,
    (s, e) => {
      const offset = 16
      const deltaY = Math.abs(e.y - s.y)
      const control = Math.floor((deltaY / 3) * 2)
      const v1 = { x: s.x, y: s.y + offset + control }
      const v2 = { x: e.x, y: e.y - offset - control }

      return Path.normalize(
        `M ${s.x} ${s.y}
         L ${s.x} ${s.y + offset}
         C ${v1.x} ${v1.y} ${v2.x} ${v2.y} ${e.x} ${e.y - offset}
         L ${e.x} ${e.y}
        `,
      )
    },
    true,
  )
}
if (!Registry.Connector.registry.exist(EDGE_PATH_TYPE.VERTICAL_GROUP)) {
  Graph.registerConnector(
    EDGE_PATH_TYPE.VERTICAL_GROUP,
    (s, t) => {
      const offset = 4
      const control = Math.abs(t.y - s.y)
      const v1 = { x: s.x, y: s.y + offset + control }
      const v2 = { x: t.x, y: t.y - offset - control }

      return Path.normalize(
        `M ${s.x} ${s.y}
       L ${s.x} ${s.y + offset}
       C ${v1.x} ${v1.y} ${v2.x} ${v2.y} ${t.x} ${t.y - offset}
       L ${t.x} ${t.y}
      `,
      )
    },
    true,
  )
}

// TODO: fix this vertical function
if (!Registry.Connector.registry.exist(EDGE_PATH_TYPE.HORIRONTAL_NODE)) {
  Graph.registerConnector(
    EDGE_PATH_TYPE.HORIRONTAL_NODE,
    (s, e) => {
      const offset = 4
      // const control = 80;
      const deltaY = Math.abs(e.y - s.y)
      const control = Math.floor((deltaY / 3) * 2)
      const v1 = { x: s.x, y: s.y + offset + control }
      const v2 = { x: e.x, y: e.y - offset - control }

      return Path.normalize(
        `M ${s.x} ${s.y}
         L ${s.x} ${s.y + offset}
         C ${v1.x} ${v1.y} ${v2.x} ${v2.y} ${e.x} ${e.y - offset}
         L ${e.x} ${e.y}
        `,
      )
    },
    true,
  )
}

let XFlowEdge = Shape.Edge.registry.get(XFLOW_SHAPE.EDGE)

if (!Shape.Edge.registry.exist(XFLOW_SHAPE.EDGE)) {
  XFlowEdge = Shape.Edge.registry.register(
    XFLOW_SHAPE.EDGE,
    Shape.Edge.define({
      zIndex: 1,
      highlight: false,
      shape: XFLOW_SHAPE.EDGE,
      // https://x6.antv.vision/zh/docs/api/registry/node-anchor
      // source: {
      //   anchor: {
      //     name: 'bottom',
      //   },
      // },
      // target: {
      //   anchor: {
      //     name: 'center',
      //   },
      // },
    }),
    true,
  )
}

export { EDGE_PATH_TYPE, XFlowEdge }
