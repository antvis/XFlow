import React, { useState, useEffect } from 'react';
import { DefaultNodeConfig } from '../../../flowchart-node-panel'
import { FlowchartFormWrapper } from '../../form-wrapper';
import { Position, Size, Rotate } from './fields';
import { PREFIX } from './constants';
import type { IControlProps } from './interface';
import './style.less';
interface INodeArrangeConfig {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  angel?: number;
}

const NodeComponent: React.FC<IControlProps> = (props) => {
  const { config, plugin } = props;
  const { updateNode } = plugin;

  const [nodeConfig, setNodeConfig] = useState<INodeArrangeConfig>({
    ...DefaultNodeConfig,
    ...config,
  });

  const onNodeConfigChange = (key: string, value: number | string | boolean) => {
    setNodeConfig({
      ...nodeConfig,
      [key]: value,
    });
    updateNode({
      [key]: value,
    });
  };

  useEffect(() => {
    setNodeConfig({
      ...DefaultNodeConfig,
      ...config,
    });
  }, [config]);

  return (
    <div className={`${PREFIX}-panel-body`}>
      <div className={`${PREFIX}-panel-group`}>
        <Position
          value={[nodeConfig.x, nodeConfig.y]}
          onChange={(key, value) => {
            onNodeConfigChange(key, value);
          }}
        />
        <Size
          value={[nodeConfig.width, nodeConfig.height]}
          onChange={(key, value) => {
            onNodeConfigChange(key, value);
          }}
        />
        <Rotate
          angel={nodeConfig.angel}
          onChange={(key, value) => {
            onNodeConfigChange(key, value);
          }}
          onRotate={(key) => {
            onNodeConfigChange(key, nodeConfig.angel + 90);
          }}
        />
      </div>
    </div>
  );
};

export const NodeArrange: React.FC<any> = (props) => {
  return (
    <FlowchartFormWrapper {...props}>
      {(config, plugin) => <NodeComponent {...props} plugin={plugin} config={config} />}
    </FlowchartFormWrapper>
  );
};
