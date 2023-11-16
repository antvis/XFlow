/* eslint-disable */
import { DiffGraph } from '@antv/xflow-diff';

// 变更前数据
const originalData = {
  nodes: [
    {
      id: '1',
      shape: 'rect',
      x: 100,
      y: 100,
      width: 100,
      height: 40,
      data: {
        a: 'test',
      },
      attrs: {
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6,
        },
      },
      label: 'svg',
    },
    {
      id: '2',
      shape: 'rect',
      x: 50,
      y: 200,
      width: 100,
      height: 40,
      label: 'dog',
      attrs: {
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6,
        },
      },
      data: {
        animal: {
          name: 'dog',
          age: 1,
        },
      },
    },
    {
      id: '3',
      shape: 'rect',
      x: 180,
      y: 200,
      width: 100,
      height: 40,
      label: 'cat',
      attrs: {
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6,
        },
      },
      data: {
        animal: {
          name: 'cat',
          age: 1,
        },
      },
    },
  ],
  edges: [
    {
      id: 'edge-1',
      source: '1',
      target: '2',
      attrs: {
        line: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
        },
      },
    },
    {
      id: 'edge-2',
      source: '1',
      target: '3',
      data: {
        a: 'test',
      },
      attrs: {
        line: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
        },
      },
    },
  ],
};

// 变更后数据
const currentData = {
  nodes: [
    {
      id: '1',
      shape: 'rect',
      x: 100,
      y: 100,
      width: 100,
      height: 40,
      data: {
        a: 'test1',
      },
      attrs: {
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6,
        },
      },
      label: 'svg',
    },
    {
      id: '3',
      shape: 'rect',
      x: 180,
      y: 200,
      width: 100,
      height: 40,
      label: 'cat',
      attrs: {
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6,
        },
      },
      data: {
        animal: {
          name: 'cat',
          age: 1,
        },
      },
    },
    {
      id: '4',
      shape: 'rect',
      x: 250,
      y: 300,
      width: 100,
      height: 40,
      label: 'fish',
      attrs: {
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6,
        },
      },
      data: {
        animal: {
          name: 'fish',
          age: 1,
        },
      },
    },
  ],
  edges: [
    {
      id: 'edge-3',
      source: '3',
      target: '4',
      attrs: {
        line: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
        },
      },
    },
    {
      id: 'edge-2',
      source: '1',
      target: '3',
      data: {
        a: 'test1',
      },
      attrs: {
        line: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
        },
      },
    },
  ],
};

const Page = () => {
  return (
    <div style={{ height: 500 }}>
      <DiffGraph originalData={originalData} currentData={currentData} />
    </div>
  );
};

export default Page;
