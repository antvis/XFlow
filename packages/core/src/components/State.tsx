import { useEffect, FC } from 'react';
import { useGraphInstance, useGraphStore } from '../hooks';
import type { Graph } from '@antv/x6';
import type { ChangeItem } from '../hooks';
import type { GraphOptions, NodeOptions, EdgeOptions } from '../types';
import { ObjectExt } from '@antv/x6';
import { useSelectionChanged, usePositionChanged, useEdgeConnected } from '../hooks';

const XFlowState: FC<
  Pick<
    GraphOptions,
    | 'centerView'
    | 'centerViewOptions'
    | 'fitView'
    | 'fitViewOptions'
    | 'connectionEdgeOptions'
  >
> = (props) => {
  const { centerView, centerViewOptions, fitView, fitViewOptions } = props;
  const graph = useGraphInstance();
  const updateNodeSilent = useGraphStore((state) => state.updateNodeSilent);
  const updateEdgeSilent = useGraphStore((state) => state.updateEdgeSilent);
  const addEdgesSilent = useGraphStore((state) => state.addEdgesSilent);
  const changeList = useGraphStore((state) => state.changeList);
  const clearChangeList = useGraphStore((state) => state.clearChangeList);

  const setSelectionStatus = (status: { id: string; selected: boolean }[]) => {
    if (graph) {
      const added = status.filter((item) => item.selected);
      const removed = status.filter((item) => !item.selected);
      graph.select(added.map((item) => item.id));
      graph.unselect(removed.map((item) => item.id));
    }
  };

  const setAnimatedStatus = (status: { id: string; animated: boolean }[]) => {
    if (graph) {
      status.forEach((item) => {
        const cell = graph.getCellById(item.id);
        if (cell) {
          if (item.animated) {
            cell.attr('line/strokeDasharray', 5);
            cell.attr('line/style/animation', 'animated-line 30s infinite linear');
          } else {
            cell.attr('line/strokeDasharray', 0);
            cell.attr('line/style/animation', '');
          }
        }
      });
    }
  };

  const handleSpecialPropChange = (
    id: string,
    data: Partial<NodeOptions> | Partial<EdgeOptions>,
  ) => {
    if (graph) {
      const keys = Object.keys(data);
      if (keys.includes('selected')) {
        const selected = !!data.selected;
        setSelectionStatus([{ id, selected }]);
      } else if (keys.includes('animated')) {
        const animated = !!data.animated;
        setAnimatedStatus([{ id, animated }]);
      }
    }
  };

  const handleGraphChange = (graph: Graph, changeList: ChangeItem[]) => {
    changeList.forEach((changeItem) => {
      const { command, data } = changeItem;
      switch (command) {
        case 'init':
          graph.fromJSON(ObjectExt.cloneDeep(data));
          if (centerView) {
            graph.centerContent(centerViewOptions);
          }
          if (fitView) {
            graph.zoomToFit({ maxScale: 1, ...fitViewOptions });
          }
          const { nodes, edges }: { nodes: NodeOptions[]; edges: EdgeOptions[] } = data;
          setSelectionStatus([
            ...nodes
              .filter((item) => item.selected)
              .map((item) => ({ id: item.id!, selected: true })),
            ...edges
              .filter((item) => item.selected)
              .map((item) => ({ id: item.id!, selected: true })),
          ]);
          setAnimatedStatus(
            edges
              .filter((item) => item.animated)
              .map((item) => ({
                id: item.id,
                animated: true,
              })),
          );
          break;
        case 'addNodes':
          graph.addNodes(ObjectExt.cloneDeep(data));
          break;
        case 'removeNodes':
          graph.removeCells(data);
          break;
        case 'updateNode':
          const { id: nodeId, data: changedNodeData } = data;
          const node = graph.getCellById(nodeId);
          if (node) {
            node.prop(changedNodeData);
            handleSpecialPropChange(nodeId, changedNodeData);
          }
          break;
        case 'addEdges':
          graph.addEdges(ObjectExt.cloneDeep(data));
          break;
        case 'removeEdges':
          graph.removeCells(data);
          break;
        case 'updateEdge':
          const { id: edgeId, data: changedEdgeData } = data;
          const edge = graph.getCellById(edgeId);
          if (edge) {
            edge.prop(changedEdgeData);
            handleSpecialPropChange(edgeId, changedEdgeData);
          }
          break;
        default:
          break;
      }
    });
    clearChangeList();
  };

  useEffect(() => {
    if (graph && changeList.length) {
      handleGraphChange(graph, changeList);
    }
  }, [changeList]);

  useSelectionChanged(({ added, removed }) => {
    added.forEach((item) => {
      if (item.isNode()) {
        updateNodeSilent(item.id, { selected: true });
      } else if (item.isEdge()) {
        updateEdgeSilent(item.id, { selected: true });
      }
    });

    removed.forEach((item) => {
      if (item.isNode()) {
        updateNodeSilent(item.id, { selected: false });
      } else if (item.isEdge()) {
        updateEdgeSilent(item.id, { selected: false });
      }
    });
  });

  usePositionChanged(({ node }) => {
    const { x, y } = node.position();
    updateNodeSilent(node.id, { x, y });
  });

  useEdgeConnected(({ isNew, edge }) => {
    const source = edge.getTerminal('source');
    const target = edge.getTerminal('target');
    if (source && target) {
      if (isNew) {
        addEdgesSilent([
          { ...props.connectionEdgeOptions, id: edge.id, source, target },
        ]);
      } else {
        updateEdgeSilent(edge.id, { source: source, target: target });
      }
    }
  });

  return null;
};

export { XFlowState };
