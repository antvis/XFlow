/* eslint-disable @typescript-eslint/lines-between-class-members */
import { ReactShape } from '@antv/x6-react-shape'
import { Node } from '@antv/x6'
import { XFLOW_NODE_SHAPE, NODE_DEFAULT_WIDTH, NODE_DEFAULT_HEIGHT } from '../constants'
import { NsGraph, XFlowConstants } from '@antv/xflow-core'

let XFlowNode: Node.Definition

const { AnchorGroup } = NsGraph

const portAttrs = {
  circle: {
    r: 4,
    magnet: true,
    stroke: '#5F95FF',
    strokeWidth: 1,
    fill: '#fff',
    style: {
      visibility: 'hidden',
    },
  },
}

if (Node.registry.exist(XFLOW_NODE_SHAPE)) {
  XFlowNode = Node.registry.get(XFLOW_NODE_SHAPE)
} else {
  XFlowNode = ReactShape.define({
    width: NODE_DEFAULT_WIDTH,
    height: NODE_DEFAULT_HEIGHT,
    shape: XFLOW_NODE_SHAPE,
    // X6_NODE_PORTAL_NODE_VIEW
    view: XFlowConstants.X6_NODE_PORTAL_NODE_VIEW,
    ports: {
      groups: {
        top: {
          position: AnchorGroup.TOP,
          attrs: portAttrs,
        },
        bottom: {
          position: AnchorGroup.BOTTOM,
          attrs: portAttrs,
        },
        right: {
          position: AnchorGroup.RIGHT,
          attrs: portAttrs,
        },
        left: {
          position: AnchorGroup.LEFT,
          attrs: portAttrs,
        },
      },
    },
    attrs: {
      body: {
        magnet: false,
        fill: 'none',
        stroke: 'none',
        refWidth: '100%',
        refHeight: '100%',
      },
    },
  })
}

export { XFlowNode, AnchorGroup }
