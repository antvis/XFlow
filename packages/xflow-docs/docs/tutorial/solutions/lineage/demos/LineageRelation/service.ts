/* eslint-disable @typescript-eslint/no-namespace */
/**
 * @author 星翊
 * @description 血缘图数据请求层
 */

import { uuidv4 } from '@antv/xflow';
import { LineageGraph, StreamType } from './type'

export class GraphService {
  static getLayerData = () => {
    return {
      pageIndex: 1,
      pageSize: 12,
      totalCount: 30,
      records: [...new Array(12)].map((i, index) => {
        return {
          downStream: null,
          hasLeaf: true,
          id: uuidv4(),
          upStream: null,
        }
      })

    }
  }

  /** 获取血缘层级数据 包含表血缘和字段血缘 */
  static loadLineageLayerData = async (params: LineageGraph.LoadLineageLayerDataType) => {
    const { stream, id } = params;
    // 首次加载 双向展开
    if (stream === StreamType.TWO_WAY) {
      return {
        id: uuidv4(),
        downStream: this.getLayerData(),
        upStream: this.getLayerData()
      }
    }
    // 展开上游
    if (stream === StreamType.UP) {
      return {
        id: id,
        downStream: null,
        upStream: this.getLayerData()
      }
    }
    // 展开下游
    if (stream === StreamType.DOWN) {
      return {
        id: id,
        downStream: this.getLayerData(),
        upStream: null,
      }
    }
  }
}

