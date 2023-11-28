import { NodeView } from '@antv/x6';
import { MiniMap as M } from '@antv/x6-plugin-minimap';
import React, { useEffect, useRef } from 'react';

import { useGraphInstance } from '../hooks/useGraphInstance';

type IProps = Partial<Omit<M.Options, 'container'>> & {
  style?: React.CSSProperties;
  className?: string;
  simple?: boolean;
  simpleNodeBackground?: string;
};

class SimpleNodeView extends NodeView {
  static nodeBackground = '#8f8f8f';

  protected renderMarkup() {
    const tag = this.cell.shape === 'circle' ? 'circle' : 'rect';
    return this.renderJSONMarkup({
      tagName: tag,
      selector: 'body',
    });
  }

  update() {
    super.update({
      body: {
        refWidth: '100%',
        refHeight: '100%',
        fill: SimpleNodeView.nodeBackground,
      },
    });
  }
}

const Minimap = (props: IProps) => {
  const { style, className, simple, simpleNodeBackground, ...others } = props;
  const ref = useRef<HTMLDivElement>(null);
  const graph = useGraphInstance();

  useEffect(() => {
    if (graph && ref.current) {
      if (graph.getPlugin('minimap')) {
        graph.disposePlugins('minimap');
      }
      SimpleNodeView.nodeBackground =
        simpleNodeBackground || SimpleNodeView.nodeBackground;
      graph.use(
        new M({
          container: ref.current,
          width: 200,
          height: 160,
          padding: 10,
          graphOptions: simple
            ? {
                createCellView(cell) {
                  if (cell.isEdge()) {
                    return null;
                  }
                  if (cell.isNode()) {
                    return SimpleNodeView;
                  }
                  return undefined;
                },
              }
            : undefined,
          ...others,
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [graph, others]);

  return <div ref={ref} style={{ ...style }} className={className} />;
};

export { Minimap };
