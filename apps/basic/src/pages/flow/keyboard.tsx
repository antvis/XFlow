import { useKeyboard, useHistory, useClipboard, useGraphStore } from '@antv/xflow';
import { useCallback } from 'react';

const Keyboard = () => {
  const { copy, paste, cut } = useClipboard();
  const { undo, redo } = useHistory();
  const nodes = useGraphStore((state) => state.nodes);
  const edges = useGraphStore((state) => state.edges);
  const updateEdge = useGraphStore((state) => state.updateEdge);
  const updateNode = useGraphStore((state) => state.updateNode);

  const removeNodes = useGraphStore((state) => state.removeNodes);
  const removeEdges = useGraphStore((state) => state.removeEdges);

  const selectNodeIds = useCallback(() => {
    const nodeSelected = nodes.filter((node) => node.selected);
    const nodeIds: string[] = nodeSelected.map((node) => node.id!);
    return nodeIds;
  }, [nodes]);

  const selectEdgeIds = useCallback(() => {
    const edgesSelect = edges.filter((edge) => edge.selected);
    const edgeIds: string[] = edgesSelect.map((edge) => edge.id!);
    return edgeIds;
  }, [edges]);

  const selectShapeIds = () => {
    return [...selectEdgeIds(), ...selectNodeIds()];
  };

  useKeyboard(['meta+c', 'ctrl+c'], () => {
    copy(selectShapeIds());
  });

  useKeyboard(['meta+v', 'ctrl+v'], () => {
    paste({ offset: 48 });
  });

  useKeyboard(['meta+x', 'ctrl+x'], () => {
    cut(selectShapeIds());
  });

  useKeyboard('backspace', () => {
    removeNodes(selectNodeIds());
    removeEdges(selectEdgeIds());
  });

  useKeyboard(['meta+z', 'ctrl+z'], () => {
    undo();
  });
  useKeyboard(['meta+shift+z', 'ctrl+shift+z'], () => {
    redo();
  });

  useKeyboard(['meta+a', 'ctrl+a'], () => {
    nodes.map((node) => updateNode(node.id!, { selected: true }));
    edges.map((edge) => updateEdge(edge.id, { selected: true }));
  });

  return null;
};

export { Keyboard };
