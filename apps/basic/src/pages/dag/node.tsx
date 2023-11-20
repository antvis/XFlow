import { useGraphStore } from '@antv/xflow';
import { useCallback, useEffect } from 'react';

import { DAG_EDGE, DAG_NODE } from './shape';

const InitShape = () => {
  const addNodes = useGraphStore((state) => state.addNodes);
  const addEdges = useGraphStore((state) => state.addEdges);

  const initEdge = useCallback(() => {
    addEdges([
      {
        shape: DAG_EDGE,
        source: {
          cell: 'initNode1',
          port: 'initNode1-1',
        },
        target: {
          cell: 'initNode2',
          port: 'initNode2-1',
        },
      },
      {
        shape: DAG_EDGE,
        source: {
          cell: 'initNode2',
          port: 'initNode2-2',
        },
        target: {
          cell: 'initNode3',
          port: 'initNode3-1',
        },
      },
      {
        shape: DAG_EDGE,
        source: {
          cell: 'initNode2',
          port: 'initNode2-3',
        },
        target: {
          cell: 'initNode4',
          port: 'initNode4-1',
        },
      },
    ]);
  }, [addEdges]);

  const addNodeInit = useCallback(() => {
    addNodes([
      {
        id: 'initNode1',
        shape: DAG_NODE,
        x: 490,
        y: 200,
        data: {
          label: '读数据',
          status: 'success',
        },
        ports: [
          {
            id: 'initNode1-1',
            group: 'bottom',
          },
        ],
      },
      {
        id: 'initNode2',
        shape: DAG_NODE,
        x: 490,
        y: 350,
        data: {
          label: '逻辑回归',
          status: 'success',
        },
        ports: [
          {
            id: 'initNode2-1',
            group: 'top',
          },
          {
            id: 'initNode2-2',
            group: 'bottom',
          },
          {
            id: 'initNode2-3',
            group: 'bottom',
          },
        ],
      },
      {
        id: 'initNode3',
        shape: DAG_NODE,
        x: 320,
        y: 500,
        data: {
          label: '模型预测',
          status: 'failed',
        },
        ports: [
          {
            id: 'initNode3-1',
            group: 'top',
          },
          {
            id: 'initNode3-2',
            group: 'bottom',
          },
        ],
      },
      {
        id: 'initNode4',
        shape: DAG_NODE,
        x: 670,
        y: 500,
        data: {
          label: '读取参数',
          status: 'running',
        },
        ports: [
          {
            id: 'initNode4-1',
            group: 'top',
          },
          {
            id: 'initNode4-2',
            group: 'bottom',
          },
        ],
      },
    ]);
  }, [addNodes]);

  useEffect(() => {
    addNodeInit();
    initEdge();
  }, [addNodeInit, initEdge]);

  return null;
};

export { InitShape };
