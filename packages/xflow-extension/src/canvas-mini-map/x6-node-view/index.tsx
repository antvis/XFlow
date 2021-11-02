import { NodeView } from '@antv/x6'

export class SimpleNodeView extends NodeView {
  static nodeFillColor: string = '#31d0c6'

  static setNodeFillColor = (color: string) => {
    SimpleNodeView.nodeFillColor = color
  }

  protected renderMarkup() {
    return this.renderJSONMarkup({
      tagName: 'rect',
      selector: 'body',
    })
  }

  update() {
    super.update({
      body: {
        refWidth: '100%',
        refHeight: '100%',
        fill: SimpleNodeView.nodeFillColor,
      },
    })
  }
}
