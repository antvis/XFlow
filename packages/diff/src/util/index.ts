import { useGraphInstance } from '@antv/xflow';
import { GraphData, GraphDataWithDiffInfo } from '..';

export const compare: (
  originalData: GraphData,
  currentData: GraphData,
  addColor: string,
  delColor: string,
  changeColor: string,
  addExtAttr?: object,
  delExtAttr?: object,
  changeExtAttr?: object,
) => {
  originalDataWithDiffInfo: GraphDataWithDiffInfo;
  currentDataWithDiffInfo: GraphDataWithDiffInfo;
} = (
  originalData,
  currentData,
  addColor,
  delColor,
  changeColor,
  addExtAttr = {},
  delExtAttr = {},
  changeExtAttr = {},
) => {
  const originalDataWithDiffInfo = {
    nodes: [...originalData.nodes],
    edges: [...originalData.edges],
  };
  const currentDataWithDiffInfo = {
    nodes: [...currentData.nodes],
    edges: [...currentData.edges],
  };

  // 寻找 currentData 中 originalData 没有的数据，即为新增的
  const originalIds = originalData.nodes
    .map((node) => node.id)
    .concat(originalData.edges.map((edge) => edge.id));
  for (let i = 0; i < currentData.nodes.length; i++) {
    if (!originalIds.includes(currentData.nodes[i].id)) {
      currentDataWithDiffInfo.nodes[i].diffType = 'ADD';
      currentDataWithDiffInfo.nodes[i].attrs = {
        ...currentDataWithDiffInfo.nodes[i].attrs,
        body: {
          ...currentDataWithDiffInfo.nodes[i].attrs?.body,
          fill: addColor,
        },
        ...addExtAttr,
      };
    }
  }
  for (let i = 0; i < currentData.edges.length; i++) {
    if (!originalIds.includes(currentData.edges[i].id)) {
      currentDataWithDiffInfo.edges[i].diffType = 'ADD';
      currentDataWithDiffInfo.edges[i].attrs = {
        ...currentDataWithDiffInfo.edges[i].attrs,
        line: {
          ...currentDataWithDiffInfo.edges[i].attrs?.line,
          stroke: addColor,
        },
        ...addExtAttr,
      };
    }
  }

  // 寻找 originalData 中 currentData 没有的数据，即为新增的
  const currentIds = currentData.nodes
    .map((node) => node.id)
    .concat(currentData.edges.map((edge) => edge.id));
  for (let i = 0; i < originalData.nodes.length; i++) {
    if (!currentIds.includes(originalData.nodes[i].id)) {
      originalDataWithDiffInfo.nodes[i].diffType = 'DEL';
      originalDataWithDiffInfo.nodes[i].attrs = {
        ...originalDataWithDiffInfo.nodes[i].attrs,
        body: {
          ...originalDataWithDiffInfo.nodes[i].attrs?.body,
          fill: delColor,
        },
        ...delExtAttr,
      };
    }
  }
  for (let i = 0; i < originalData.edges.length; i++) {
    if (!currentIds.includes(originalData.edges[i].id)) {
      originalDataWithDiffInfo.edges[i].diffType = 'DEL';
      originalDataWithDiffInfo.edges[i].attrs = {
        ...originalDataWithDiffInfo.edges[i].attrs,
        line: {
          ...originalDataWithDiffInfo.edges[i].attrs?.line,
          stroke: delColor,
        },
        ...delExtAttr,
      };
    }
  }

  // 寻找 originalData 中和 currentData 中同 id 的节点或边中的 data 不一样的节点和边
  for (let i = 0; i < originalData.nodes.length; i++) {
    for (let j = 0; j < currentData.nodes.length; j++) {
      if (
        originalData.nodes[i].id === currentData.nodes[j].id &&
        JSON.stringify(originalData.nodes[i].data) !==
          JSON.stringify(currentData.nodes[j].data)
      ) {
        originalDataWithDiffInfo.nodes[i].diffType = 'CHG';
        originalDataWithDiffInfo.nodes[i].attrs = {
          ...originalDataWithDiffInfo.nodes[i].attrs,
          body: {
            ...originalDataWithDiffInfo.nodes[i].attrs?.body,
            fill: changeColor,
          },
          ...changeExtAttr,
        };
        currentDataWithDiffInfo.nodes[j].diffType = 'CHG';
        currentDataWithDiffInfo.nodes[i].attrs = {
          ...currentDataWithDiffInfo.nodes[i].attrs,
          body: {
            ...currentDataWithDiffInfo.nodes[i].attrs?.body,
            fill: changeColor,
          },
          ...changeExtAttr,
        };
      }
    }
  }
  for (let i = 0; i < originalData.edges.length; i++) {
    for (let j = 0; j < currentData.edges.length; j++) {
      if (
        originalData.edges[i].id === currentData.edges[j].id &&
        JSON.stringify(originalData.edges[i].data) !==
          JSON.stringify(currentData.edges[j].data)
      ) {
        originalDataWithDiffInfo.edges[i].diffType = 'CHG';
        originalDataWithDiffInfo.edges[i].attrs = {
          ...originalDataWithDiffInfo.edges[i].attrs,
          line: {
            ...originalDataWithDiffInfo.edges[i].attrs?.line,
            stroke: changeColor,
          },
          ...changeExtAttr,
        };
        currentDataWithDiffInfo.edges[j].diffType = 'CHG';
        currentDataWithDiffInfo.edges[i].attrs = {
          ...currentDataWithDiffInfo.edges[i].attrs,
          line: {
            ...currentDataWithDiffInfo.edges[i].attrs?.line,
            stroke: changeColor,
          },
          ...changeExtAttr,
        };
      }
    }
  }

  return { originalDataWithDiffInfo, currentDataWithDiffInfo };
};

// 同步两图的缩放和移动
export const syncGraph = (
  graph1: ReturnType<typeof useGraphInstance>,
  graph2: ReturnType<typeof useGraphInstance>,
) => {
  if (!graph1 || !graph2) {
    return;
  }

  let isSyncing = false;
  graph1.on('scale', ({ sx }) => {
    if (!isSyncing) {
      isSyncing = true;
      graph2.zoomTo(sx);
      isSyncing = false;
    }
  });

  graph1.on('translate', ({ tx, ty }) => {
    if (!isSyncing) {
      isSyncing = true;
      graph2.translate(tx, ty);
      isSyncing = false;
    }
  });

  graph2.on('scale', ({ sx }) => {
    if (!isSyncing) {
      isSyncing = true;
      graph1.zoomTo(sx);
      isSyncing = false;
    }
  });

  graph2.on('translate', ({ tx, ty }) => {
    if (!isSyncing) {
      isSyncing = true;
      graph1.translate(tx, ty);
      isSyncing = false;
    }
  });
};
