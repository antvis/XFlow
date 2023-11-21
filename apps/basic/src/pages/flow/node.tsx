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

const InitNode = () => {
  const addNodes = useGraphStore((state) => state.addNodes);

  const addNodeInit = useCallback(() => {
    addNodes([
      {
        id: 'initNode1',
        shape: BASICFLOWNODE,
        x: 20,
        y: 65,
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
        x: 180,
        y: 60,
        label: 'Add to Cart',
      },
      {
        id: 'initNode3',
        shape: CUSTOMCOURSENODE,
        x: 370,
        y: 60,
        label: 'Checkout \n items',
      },
      {
        id: 'initNode4',
        shape: CUSTOMCOURSENODE,
        x: 570,
        y: 60,
        label: 'Add \n Shipping',
      },
      {
        id: 'initNode5',
        shape: CUSTOMCOURSENODE,
        x: 570,
        y: 260,
        label: 'Add \n Payment',
      },
      {
        id: 'initNode6',
        shape: CUSTOMPROCESSNODE,
        x: 550,
        y: 470,
        label: 'Valid Payment?',
      },
      {
        id: 'initNode7',
        shape: CUSTOMVERIFYNODE,
        x: 790,
        y: 482,
        label: 'No',
      },
      {
        id: 'initNode8',
        shape: CUSTOMCOURSENODE,
        x: 860,
        y: 260,
        label: 'Present \n Error',
      },
      {
        id: 'initNode9',
        shape: CUSTOMVERIFYNODE,
        x: 400,
        y: 482,
        label: 'Yes',
      },
      {
        id: 'initNode10',
        shape: CUSTOMCOURSENODE,
        x: 180,
        y: 470,
        label: 'Send Order \n to',
      },
      {
        id: 'initNode11',
        shape: CUSTOMVERIFYNODE,
        x: 10,
        y: 852,
        width: 80,
        height: 36,
        label: 'Not Ok',
      },
      {
        id: 'initNode12',
        shape: CUSTOMCOURSENODE,
        x: 180,
        y: 660,
        label: 'Pack Order',
      },
      {
        id: 'initNode13',
        shape: CUSTOMPROCESSNODE,
        x: 160,
        y: 840,
        label: 'Quality Check?',
      },
      {
        id: 'initNode14',
        shape: CUSTOMVERIFYNODE,
        x: 410,
        y: 852,
        label: 'Yes',
      },
      {
        id: 'initNode15',
        shape: CUSTOMCOURSENODE,
        x: 570,
        y: 840,
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
  CUSTOMCOURSENODE,
  CUSTOMVERIFYNODE,
  BASICFLOWNODE,
  CUSTOMPROCESSNODE,
};
