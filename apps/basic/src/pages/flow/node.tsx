import { Graph, useGraphStore } from '@antv/xflow';
import { useCallback, useEffect } from 'react';

const ports = {
  groups: {
    group1: {
      position: 'top',
      attrs: {
        circle: {
          stroke: '#D06269',
          strokeWidth: 1,
          r: 4,
          magnet: true,
        },
      },
    },
    group2: {
      position: 'right',
      attrs: {
        circle: {
          stroke: '#D06269',
          strokeWidth: 1,
          r: 4,
          magnet: true,
        },
      },
    },
    group3: {
      position: 'bottom',
      attrs: {
        circle: {
          stroke: '#D06269',
          strokeWidth: 1,
          r: 4,
          magnet: true,
        },
      },
    },
    group4: {
      position: 'left',
      attrs: {
        circle: {
          stroke: '#D06269',
          strokeWidth: 1,
          r: 4,
          magnet: true,
        },
      },
    },
  },
  items: [
    { id: 'group1', group: 'group1' },
    { id: 'group2', group: 'group2' },
    { id: 'group3', group: 'group3' },
    { id: 'group4', group: 'group4' },
  ],
};

const CUSTOMIMAGE = 'custom-image';
const BASICFLOWNODE = 'basic-flow-node';
const CUSTOMPROCESSNODE = 'custom-process-node';
const CUSTOMCOURSENODE = 'custom-course-node';
const CUSTOMVERIFYNODE = 'custom-verify-node';

Graph.registerNode(BASICFLOWNODE, {
  inherit: 'rect',
  attrs: {
    text: {
      fontSize: 14,
      fill: '#fff',
    },
  },
  ports: { ...ports },
});

Graph.registerNode(CUSTOMVERIFYNODE, {
  inherit: BASICFLOWNODE,
  width: 36,
  height: 36,
  attrs: {
    body: {
      rx: 5,
      ry: 5,
      strokeWidth: 2,
      stroke: 'rgb(72, 203, 164)',
      fill: 'rgb(72, 203, 164)',
    },
  },
});

Graph.registerNode(CUSTOMCOURSENODE, {
  inherit: BASICFLOWNODE,
  width: 100,
  height: 60,
  attrs: {
    body: {
      rx: 0,
      ry: 0,
      strokeWidth: 2,
      stroke: 'rgb(74, 123, 203)',
      fill: 'rgb(74, 123, 203)',
    },
    text: {
      wordBreak: 'break-all',
    },
  },
});

Graph.registerNode(CUSTOMPROCESSNODE, {
  inherit: 'polygon',
  width: 140,
  height: 60,
  attrs: {
    body: {
      strokeWidth: 1,
      stroke: 'rgb(128, 170, 255)',
      fill: 'rgb(128, 170, 255)',
      refPoints: '0,10 10,0 20,10 10,20',
    },
    text: {
      fontSize: 14,
      fill: '#fff',
    },
  },
  ports: {
    ...ports,
  },
});

Graph.registerNode(
  CUSTOMIMAGE,
  {
    inherit: 'rect',
    width: 52,
    height: 52,
    markup: [
      {
        tagName: 'rect',
        selector: 'body',
      },
      {
        tagName: 'image',
      },
      {
        tagName: 'text',
        selector: 'label',
      },
    ],
    attrs: {
      body: {
        stroke: '#5F95FF',
        fill: '#5F95FF',
      },
      image: {
        width: 26,
        height: 26,
        refX: 13,
        refY: 16,
      },
      label: {
        refX: 3,
        refY: 2,
        textAnchor: 'left',
        textVerticalAnchor: 'top',
        fontSize: 12,
        fill: '#fff',
      },
    },
    ports: { ...ports },
  },
  true,
);

const InitNode = () => {
  const addNodes = useGraphStore((state) => state.addNodes);

  const addNodeInit = useCallback(() => {
    addNodes([
      {
        id: 'initNode1',
        shape: BASICFLOWNODE,
        x: 100,
        y: 100,
        width: 80,
        height: 50,
        attrs: {
          body: {
            rx: 25,
            ry: 25,
            strokeWidth: 2,
            stroke: 'rgb(255, 149, 128)',
            fill: 'rgb(255, 149, 128)',
          },
        },
        label: '开始',
      },
      {
        id: 'initNode2',
        shape: CUSTOMCOURSENODE,
        x: 300,
        y: 95,
        label: 'Add to Cart',
      },
      {
        id: 'initNode3',
        shape: CUSTOMCOURSENODE,
        x: 500,
        y: 95,
        label: 'Checkout \n items',
      },
      {
        id: 'initNode4',
        shape: CUSTOMCOURSENODE,
        x: 700,
        y: 95,
        label: 'Add \n Shipping',
      },
      {
        id: 'initNode5',
        shape: CUSTOMCOURSENODE,
        x: 700,
        y: 220,
        label: 'Add \n Payment',
      },
      {
        id: 'initNode6',
        shape: CUSTOMPROCESSNODE,
        x: 680,
        y: 380,
        label: 'Valid Payment?',
      },
      {
        id: 'initNode7',
        shape: CUSTOMVERIFYNODE,
        x: 900,
        y: 392,
        label: 'No',
      },
      {
        id: 'initNode8',
        shape: CUSTOMCOURSENODE,
        x: 1050,
        y: 380,
        label: 'Present \n Error',
      },
      {
        id: 'initNode9',
        shape: CUSTOMVERIFYNODE,
        x: 500,
        y: 392,
        label: 'Yes',
      },
      {
        id: 'initNode10',
        shape: CUSTOMCOURSENODE,
        x: 300,
        y: 380,
        label: 'Send Order \n to',
      },
      {
        id: 'initNode11',
        shape: CUSTOMVERIFYNODE,
        x: 100,
        y: 592,
        width: 80,
        height: 36,
        label: 'Not Ok',
      },
      {
        id: 'initNode12',
        shape: CUSTOMCOURSENODE,
        x: 300,
        y: 580,
        label: 'Pack Order',
      },
      {
        id: 'initNode13',
        shape: CUSTOMPROCESSNODE,
        x: 280,
        y: 800,
        label: 'Quality Check?',
      },
      {
        id: 'initNode14',
        shape: CUSTOMVERIFYNODE,
        x: 500,
        y: 812,
        label: 'Yes',
      },
      {
        id: 'initNode15',
        shape: CUSTOMCOURSENODE,
        x: 700,
        y: 799,
        label: 'Ship Items \n to Customer ',
      },
    ]);
  }, [addNodes]);

  useEffect(() => {
    addNodeInit();
  }, [addNodeInit]);

  return null;
};

export {
  InitNode,
  CUSTOMIMAGE,
  CUSTOMCOURSENODE,
  CUSTOMVERIFYNODE,
  BASICFLOWNODE,
  CUSTOMPROCESSNODE,
};
