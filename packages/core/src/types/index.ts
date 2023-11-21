import type { Node, Edge, Cell, Graph, Options, Rectangle, CellView } from '@antv/x6';
import type { Scroller } from '@antv/x6-plugin-scroller';
import type { Selection } from '@antv/x6-plugin-selection';

export type { Node, Edge, Cell };
export interface NodeOptions extends Node.Metadata {
  selected?: boolean;
  draggable?: boolean;
}

export interface EdgeOptions extends Edge.Metadata {
  selected?: boolean;
  draggable?: boolean;
  animated?: boolean;
}

export type GraphModel = { nodes: NodeOptions[]; edges: EdgeOptions[] };

export interface GraphOptions {
  // graph
  className?: string;
  style?: React.CSSProperties;
  readonly?: boolean;
  virtual?: boolean;
  minScale?: number;
  maxScale?: number;
  zoomable?: boolean;
  zoomOptions?: Omit<Graph.MouseWheel.Options, 'enabled'>;
  pannable?: boolean;
  panOptions?: Omit<Graph.PanningManager.Options, 'enabled'>;
  centerView?: boolean;
  centerViewOptions?: Graph.TransformManager.CenterOptions;
  fitView?: boolean;
  fitViewOptions?: Graph.TransformManager.ScaleContentToFitOptions;
  scroller?: boolean;
  scrollerOptions?: Omit<Scroller.Options, 'enabled'>;

  // node & edge
  connectionEdgeOptions?: Partial<EdgeOptions>;

  // interactive
  embedable?: boolean;
  embedOptions?: Partial<Omit<Options.Embedding, 'enabled'>>;
  restrict?: boolean;
  restrictOptions?: {
    bound:
      | Rectangle.RectangleLike
      | ((arg: CellView | null) => Rectangle.RectangleLike | null);
  };
  connectionOptions?: Partial<Omit<Options.Connecting, 'createEdge'>>;
  selectOptions?: Omit<Selection.Options, 'enabled'>;
  keyboardOptions?: {
    global?: boolean;
    format?: (key: string) => string;
    guard?: (e: KeyboardEvent) => boolean;
  };

  // highlight
  defaultHighlightOptions?: Graph.HighlightManager.Options;
  embedHighlightOptions?: Graph.HighlightManager.Options;
  nodeAvailableHighlightOptions?: Graph.HighlightManager.Options;
  magnetAvailableHighlightOptions?: Graph.HighlightManager.Options;
  magnetAdsorbedHighlightOptions?: Graph.HighlightManager.Options;
}
