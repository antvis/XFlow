import type { Graph } from '@antv/x6';

export const getSuperGraph = (graph: Graph, nodeId: string, nodeIds: string[] = []) => {
  nodeIds.push(nodeId);
  const incomingEdges = graph.getIncomingEdges(nodeId);
  incomingEdges?.forEach((edge) => {
    const source = edge.getSourceCellId();
    getSuperGraph(graph, source, nodeIds);
  });
  return nodeIds;
};

export const getSubGraph = (graph: Graph, nodeId: string, nodeIds: string[] = []) => {
  nodeIds.push(nodeId);
  const outgoingEdges = graph.getOutgoingEdges(nodeId);
  outgoingEdges?.forEach((edge) => {
    const target = edge.getTargetCellId();
    getSubGraph(graph, target, nodeIds);
  });
  return nodeIds;
};
