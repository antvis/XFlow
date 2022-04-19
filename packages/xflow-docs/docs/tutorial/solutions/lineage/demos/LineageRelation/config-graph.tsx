/**
 * @author 星翊
 * @description 画布配置
 */

import React from 'react';
import { createGraphConfig } from '@antv/xflow';
import LineageLayer from './nodes/LineageLayer';
import VirtualNode from './nodes/VirtualNode';
import type { LoadLineageLayerDataType } from './type';

export const useGraphConfig = (x6Config, renderPopover?: React.FC, renderNodeItem?: React.FC, loadLineageLayerData?: (params: LoadLineageLayerDataType) => Promise<any>) => {
  return createGraphConfig(config => {
    /** 预设XFlow画布配置项 */
    config.setX6Config({
      ...x6Config,
    });

    config.setNodeRender('LineageLayer', props => {
      return <LineageLayer {...props} renderPopover={renderPopover} renderNodeItem={renderNodeItem} loadLineageLayerData={loadLineageLayerData} />;
    });
    config.setNodeRender('VirtualNode', props => {
      return <VirtualNode {...props} />;
    });
  })();
}
