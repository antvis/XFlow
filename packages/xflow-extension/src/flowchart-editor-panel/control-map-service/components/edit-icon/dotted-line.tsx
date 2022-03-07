import React from 'react';
import { ICON_WIDTH, ICON_HEIGHT, ICON_COLOR } from './constants';
import { createPath } from './utils';

const path = [
  ['M', 0, ICON_HEIGHT / 2],
  ['L', ICON_WIDTH, ICON_HEIGHT / 2],
]

//虚线
const DottedLine = (
  <svg width={ICON_WIDTH} height={ICON_HEIGHT} xmlns="http://www.w3.org/2000/svg" version="1.1">
      <path strokeDasharray="6,5" d={createPath(path)} stroke={ICON_COLOR}/>
  </svg>
);

export default DottedLine;
