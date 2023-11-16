import type { EdgeOptions, NodeOptions, useGraphInstance } from '@antv/xflow';
import { XFlow, XFlowGraph } from '@antv/xflow';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

import type { DiffGraphOptions } from '@/types';
import { compare, syncGraph } from '@/util';

import '../../styles/index.less';
import Tool from './tool';

const DiffGraph: FC<DiffGraphOptions> = (props) => {
  const {
    originalData, // 变更前数据
    currentData, // 变更后数据
    addColor = '#50a14f', // 新增节点的颜色
    addExtAttr,
    delColor = '#ff7875', // 删除节点的颜色
    delExtAttr,
    changeColor = '#ffc069', // 变更节点的颜色
    changeExtAttr,
    graphOptions,
  } = props;

  const [originalDataWithDiffInfo, setOriginalDataWithDiffInfo] = useState<{
    nodes: NodeOptions[];
    edges: EdgeOptions[];
  }>({ nodes: [], edges: [] });
  const [currentDataWithDiffInfo, setCurrentDataWithDiffInfo] = useState<{
    nodes: NodeOptions[];
    edges: EdgeOptions[];
  }>({ nodes: [], edges: [] });
  const [status, setStatus] = useState<'init' | 'computing' | 'done'>('init');
  const [graphs, setGraphs] = useState<ReturnType<typeof useGraphInstance>[]>([]);

  useEffect(() => {
    // 获取 diff 信息，注入 attr
    setStatus('computing');
    const {
      originalDataWithDiffInfo: originalDataWithDiffInfoRe,
      currentDataWithDiffInfo: currentDataWithDiffInfoRe,
    } = compare(
      originalData,
      currentData,
      addColor,
      delColor,
      changeColor,
      addExtAttr,
      delExtAttr,
      changeExtAttr,
    );

    setOriginalDataWithDiffInfo(originalDataWithDiffInfoRe);
    setCurrentDataWithDiffInfo(currentDataWithDiffInfoRe);
    setStatus('done');
  }, []); // eslint-disable-line

  useEffect(() => {
    // 关联双图的缩放和移动
    if (graphs.length === 2) {
      syncGraph(graphs[0], graphs[1]);
    }
  }, [graphs]);

  const addGraph = (graph: ReturnType<typeof useGraphInstance>) => {
    setGraphs((pre) => {
      return [...pre, graph];
    });
  };

  return (
    <div style={{ height: '100%' }} className="xflow-diff">
      {/* 左图 */}
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <XFlow>
        {status === 'done' && (
          <Tool data={originalDataWithDiffInfo} addGraph={addGraph} />
        )}
        <XFlowGraph
          zoomable
          pannable
          connectionEdgeOptions={{
            attrs: {
              line: {
                stroke: '#8f8f8f',
                strokeWidth: 1,
              },
            },
          }}
          {...graphOptions}
        />
      </XFlow>

      {/* 右图 */}
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <XFlow>
        {status === 'done' && (
          <Tool data={currentDataWithDiffInfo} addGraph={addGraph} />
        )}
        <XFlowGraph
          zoomable
          pannable
          connectionEdgeOptions={{
            attrs: {
              line: {
                stroke: '#8f8f8f',
                strokeWidth: 1,
              },
            },
          }}
          {...graphOptions}
        />
      </XFlow>
    </div>
  );
};

export { DiffGraph };
