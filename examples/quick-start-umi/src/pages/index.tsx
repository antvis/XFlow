import React, { useState } from 'react';
/** 图核心组件 & 类型定义 */
import type { IAppLoad, NsGraph } from '@antv/xflow';
import { XFlow, XFlowCanvas } from '@antv/xflow';
/** 图的各种扩展交互组件 */
import { CanvasMiniMap, CanvasScaleToolbar, CanvasSnapline } from '@antv/xflow';
/** 图的配置项 */
import { useGraphConfig } from './config-graph';
import { message } from 'antd';

import './index.less';
import '@antv/xflow/dist/index.css';
import 'antd/dist/antd.css';

export interface IProps {}

const Demo: React.FC<IProps> = () => {
  /** 画布配置 */
  const graphConfig = useGraphConfig();

  /** 画布渲染数据 */
  const [graphData, setGraphData] = useState<NsGraph.IGraphData>();

  /** XFlow初始化完成的回调 */
  const onLoad: IAppLoad = async (app) => {
    const nodes: NsGraph.INodeConfig[] = [
      {
        id: 'root1',
        width: 150,
        height: 40,
        renderKey: 'NODE1',
        info: { text: 'root1' },
      },
      {
        id: 'down1',
        width: 150,
        height: 40,
        renderKey: 'NODE2',
        info: { text: 'down1' },
      },
      {
        id: 'down2',
        width: 150,
        height: 40,
        renderKey: 'NODE2',
        info: { text: 'down2' },
      },
      {
        id: 'down3',
        width: 150,
        height: 40,
        renderKey: 'NODE2',
        info: { text: 'down3' },
      },
    ];
    const edges: NsGraph.IEdgeConfig[] = [
      {
        id: 'root1-down1',
        source: 'root1',
        target: 'down1',
        renderKey: 'EDGE1',
        edgeContentWidth: 60,
        edgeContentHeight: 30,
        info: { line: 'root1-down1' },
      },
      {
        id: 'root1-down2',
        source: 'root1',
        target: 'down2',
        renderKey: 'EDGE2',
        edgeContentWidth: 60,
        edgeContentHeight: 30,
        info: { line: 'root1-down2' },
      },
      {
        id: 'root1-down3',
        source: 'root1',
        target: 'down3',
        label: '1:N(纯文本)',
        info: { line: 'root1-down3' },
      },
    ];
    const newGraphData = { nodes, edges };
    setGraphData(newGraphData);

    const graph = await app.getGraphInstance();
    graph.on('node:click', ({ node }) => {
      const nodeData: NsGraph.INodeConfig = node.getData();
      message.success(`${nodeData.id}节点被点击了`);
    });
    graph.on('edge:click', ({ edge }) => {
      edge.toFront();
      const edgeData: NsGraph.IEdgeConfig = edge.getData();
      message.success(`${edgeData.id}连线被点击了`);
    });
  };

  return (
    <XFlow
      className="xflow-user-container"
      graphData={graphData}
      graphLayout={{
        layoutType: 'dagre',
        layoutOptions: {
          type: 'dagre',
          rankdir: 'TB',
          nodesep: 60,
          ranksep: 40,
        },
      }}
      onLoad={onLoad}
      isAutoCenter={true}
    >
      <XFlowCanvas config={graphConfig}>
        <CanvasScaleToolbar position={{ top: 12, left: 12 }} />
        <CanvasMiniMap
          miniMapClz="xflow-custom-minimap"
          nodeFillColor="#ccc"
          minimapOptions={{
            width: 200,
            height: 120,
          }}
          position={{ top: 12, right: 12 }}
        />
        <CanvasSnapline color="#1890ff" />
      </XFlowCanvas>
    </XFlow>
  );
};

export default Demo;
