import { Graph, Options } from '@antv/x6';
import { Keyboard } from '@antv/x6-plugin-keyboard';
import { Scroller } from '@antv/x6-plugin-scroller';
import { Selection } from '@antv/x6-plugin-selection';
import React, { useContext, useRef, useEffect } from 'react';

import { GraphContext } from '../context';
import type { GraphOptions } from '../types';

import { XFlowState } from './State';
import { Wrapper } from './Wrapper';

const XFlowGraph = (props: GraphOptions) => {
  const container = useRef<HTMLDivElement>(null);
  const {
    className,
    style,
    readonly,
    virtual,
    minScale,
    maxScale,
    zoomable,
    zoomOptions,
    pannable,
    panOptions,
    embedable,
    embedOptions,
    restrict,
    restrictOptions,
    connectionOptions,
    selectOptions,
    keyboardOptions,
    scroller,
    scrollerOptions,
    connectionEdgeOptions,
    defaultHighlightOptions,
    embedHighlightOptions,
    nodeAvailableHighlightOptions,
    magnetAvailableHighlightOptions,
    magnetAdsorbedHighlightOptions,
  } = props;
  const { graph, setGraph } = useContext(GraphContext);

  useEffect(() => {
    const g = new Graph({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      container: container.current!,
      autoResize: true,
      virtual,
      scaling: {
        min: minScale,
        max: maxScale,
      },
      connecting: {
        ...connectionOptions,
        createEdge() {
          return this.createEdge({
            shape: 'edge',
            ...connectionEdgeOptions,
          });
        },
      },
      highlighting: {
        default: defaultHighlightOptions,
        embedding: embedHighlightOptions,
        nodeAvailable: nodeAvailableHighlightOptions,
        magnetAvailable: magnetAvailableHighlightOptions,
        magnetAdsorbed: magnetAdsorbedHighlightOptions,
      },
    });

    g.use(new Selection({ enabled: true, ...selectOptions }));
    g.use(new Keyboard({ enabled: true, ...keyboardOptions }));

    if (scroller) {
      g.use(new Scroller({ enabled: true, ...scrollerOptions }));
    }

    setGraph(g);

    return () => {
      if (g) {
        g.dispose();
        setGraph(null);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (graph) {
      if (readonly) {
        graph.options.interacting = false;
      } else {
        graph.options.interacting = {
          nodeMovable: (view) => {
            const cell = view.cell;
            return cell.prop('draggable') !== false;
          },
          edgeMovable: (view) => {
            const cell = view.cell;
            return cell.prop('draggable') !== false;
          },
        };
      }
    }
  }, [graph, readonly]);

  useEffect(() => {
    if (graph) {
      if (zoomable) {
        graph.enableMouseWheel();
        graph.options.mousewheel = {
          ...Options.defaults.mousewheel,
          ...zoomOptions,
          enabled: true,
        };
      } else {
        graph.disableMouseWheel();
      }
    }
  }, [graph, zoomable, zoomOptions]);

  useEffect(() => {
    if (graph) {
      if (pannable) {
        graph.options.panning = {
          ...Options.defaults.panning,
          enabled: true,
          ...panOptions,
        };
        graph.enablePanning();
      } else {
        graph.disablePanning();
      }
    }
  }, [graph, pannable, panOptions]);

  useEffect(() => {
    if (graph) {
      if (embedable) {
        graph.options.embedding = {
          ...Options.defaults.embedding,
          enabled: true,
          validate: () => true,
          ...embedOptions,
        };
      } else {
        graph.options.embedding = { enabled: false, validate: () => false };
      }
    }
  }, [graph, embedable, embedOptions]);

  useEffect(() => {
    if (graph) {
      if (restrict) {
        graph.options.translating = {
          restrict: restrictOptions ? restrictOptions.bound : restrict,
        };
      } else {
        graph.options.translating = { restrict: false };
      }
    }
  }, [graph, restrict, restrictOptions]);

  return (
    <div style={{ width: '100%', height: '100%', ...style }} className={className}>
      <div ref={container} style={{ width: '100%', height: '100%' }} />
      <Wrapper>
        <XFlowState
          connectionEdgeOptions={connectionEdgeOptions}
          centerView={props.centerView}
          centerViewOptions={props.centerViewOptions}
          fitView={props.fitView}
          fitViewOptions={props.fitViewOptions}
        />
      </Wrapper>
    </div>
  );
};

export { XFlowGraph };
