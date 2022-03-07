import React from 'react';
import { ICON_WIDTH, ICON_HEIGHT, ICON_COLOR } from './constants';

//虚线
const DottedLine = (
  <svg width={ICON_WIDTH} height={ICON_HEIGHT} xmlns="http://www.w3.org/2000/svg" version="1.1">
    <g style={{ stroke: ICON_COLOR }} strokeWidth={2}>
      <path strokeDasharray="6,5" d={`M${0},${ICON_HEIGHT / 2} L${ICON_WIDTH},${ICON_HEIGHT / 2}`} />
    </g>
  </svg>
);

export default DottedLine;
