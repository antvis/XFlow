import { Graph, useGraphStore } from '@antv/xflow';
import { useCallback, useEffect } from 'react';

const CUSTOM_EDGE = 'custom-edge';

const InitEdge = () => {
  const addEdges = useGraphStore((state) => state.addEdges);

  const initEdge = useCallback(() => {
    addEdges([
      {
        shape: CUSTOM_EDGE,
        source: 'initNode1',
        target: 'initNode2',
      },
      {
        shape: CUSTOM_EDGE,
        source: 'initNode2',
        target: 'initNode3',
      },
      {
        shape: CUSTOM_EDGE,
        source: 'initNode3',
        target: 'initNode4',
      },
      {
        shape: CUSTOM_EDGE,
        source: 'initNode4',
        target: 'initNode5',
      },
      {
        shape: CUSTOM_EDGE,
        source: 'initNode5',
        target: 'initNode6',
      },
      {
        shape: CUSTOM_EDGE,
        source: 'initNode6',
        target: 'initNode7',
      },
      {
        shape: CUSTOM_EDGE,
        source: 'initNode7',
        target: 'initNode8',
      },
      {
        shape: CUSTOM_EDGE,
        source: {
          cell: 'initNode8',
          port: 'group4',
        },
        target: {
          cell: 'initNode5',
          port: 'group2',
        },
      },
      {
        shape: CUSTOM_EDGE,
        source: 'initNode6',
        target: 'initNode9',
      },
      {
        shape: CUSTOM_EDGE,
        source: 'initNode9',
        target: 'initNode10',
      },
      {
        shape: CUSTOM_EDGE,
        source: 'initNode10',
        target: {
          cell: 'initNode11',
          port: 'group1',
        },
      },
      {
        shape: CUSTOM_EDGE,
        source: 'initNode10',
        target: 'initNode12',
      },
      {
        shape: CUSTOM_EDGE,
        source: {
          cell: 'initNode12',
          port: 'group3',
        },
        target: {
          cell: 'initNode13',
          port: 'group1',
        },
      },
      {
        shape: CUSTOM_EDGE,
        source: {
          cell: 'initNode11',
          port: 'group2',
        },
        target: {
          cell: 'initNode13',
          port: 'group4',
        },
      },
      {
        shape: CUSTOM_EDGE,
        source: 'initNode13',
        target: 'initNode14',
      },
      {
        shape: CUSTOM_EDGE,
        source: 'initNode14',
        target: 'initNode15',
      },
    ]);
  }, [addEdges]);

  useEffect(() => {
    initEdge();
  }, [initEdge]);

  return null;
};

Graph.registerEdge(CUSTOM_EDGE, {
  attrs: {
    line: {
      stroke: 'rgb(72, 203, 164)',
      strokeWidth: 2,
      targetMarker: {
        name: 'block',
        width: 14,
        height: 10,
      },
    },
  },
});

export { InitEdge, CUSTOM_EDGE };
