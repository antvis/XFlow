/* eslint-disable */
import { DiffGraph } from '@antv/xflow-diff';

// 变更前数据
const originalData = {
  nodes: [
    {
      id: '1',
      shape: 'rect',
      x: 500,
      y: 100,
      width: 100,
      height: 40,
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
      x: 400,
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
      x: 600,
      y: 200,
      width: 100,
      height: 40,
      label: 'cat(change)',
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
        cat: 'cat1',
      },
    },
    {
      id: '5',
      shape: 'rect',
      x: 325,
      y: 300,
      width: 100,
      height: 40,
      label: 'dog-1(del)',
      attrs: {
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6,
        },
      },
    },
    {
      id: '6',
      shape: 'rect',
      x: 450,
      y: 300,
      width: 100,
      height: 40,
      label: 'dog-2(del)',
      attrs: {
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6,
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
      attrs: {
        line: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
        },
      },
    },
    {
      id: 'edge-4',
      source: '2',
      target: '5',
      attrs: {
        line: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
        },
      },
    },
    {
      id: 'edge-5',
      source: '2',
      target: '6',
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
      x: 500,
      y: 100,
      width: 100,
      height: 40,
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
      x: 400,
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
      x: 600,
      y: 200,
      width: 100,
      height: 40,
      label: 'cat(change)',
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
        data: {
          cat: 'cat2',
        },
      },
    },
    {
      id: '4',
      shape: 'rect',
      x: 550,
      y: 300,
      width: 100,
      height: 40,
      label: 'fish-1(add)',
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
    {
      id: '7',
      shape: 'rect',
      x: 675,
      y: 300,
      width: 100,
      height: 40,
      label: 'fish-2(add)',
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
      attrs: {
        line: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
        },
      },
    },
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
      id: 'edge-6',
      source: '3',
      target: '7',
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
