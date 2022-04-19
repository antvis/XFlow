/* eslint-disable no-param-reassign */
/**
 * @file 公共函数
 * @author 星翊
 */
import * as _ from 'lodash';

/**
 * 没找到xflow怎么实现动画，自己简单封装了个js平移动画
 * @param direction 平移方向 LR 表示横向移动
 * @param distance 平移距离
 * @param speed 移动速度，每个帧移动px
 * @param fps 帧率
 * @param todo 
 */
export const translateAnimation = (direction: string, distance: number, speed: number, fps: number, graphInstance: any) => {
  let it = 0;
  const currentTranslate = graphInstance?.translate();
  const timer = setInterval(() => {
    if (Math.abs(it) >= Math.abs(distance)) {
      clearInterval(timer);
    } else {
      // 速度
      it = distance > 0 ? it + speed : it - speed;
      if (direction === 'LR') {
        graphInstance?.translate(currentTranslate.tx + it, currentTranslate.ty);
      } else {
        graphInstance?.translate(currentTranslate.tx, currentTranslate.ty + it);
      }
    }
  }, 1000 / fps)
};
