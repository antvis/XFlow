import { XFlow, XFlowGraph, Background, Grid } from '@antv/xflow';
import { Radio } from 'antd';
import { useState } from 'react';

import Draw from './draw';
import styles from './index.less';

const options = [
  { label: 'Pointer', value: 'pointer' },
  { label: 'Line', value: 'line' },
  { label: 'Rectangle', value: 'rectangle' },
  { label: 'Ellipse', value: 'ellipse' },
  { label: 'Free Draw', value: 'free' },
];

const Page = () => {
  const [type, setType] = useState('pointer');

  return (
    <div className={styles.page}>
      <XFlow>
        <Radio.Group
          options={options}
          onChange={(e) => setType(e.target.value)}
          value={type}
          optionType="button"
          buttonStyle="solid"
        />
        <div className={styles.content}>
          <XFlowGraph />
          <Background color="#F3F7F6" />
          <Grid
            size={1}
            visible={false}
            type="dot"
            options={{ color: '#ccc', thickness: 1 }}
          />
        </div>
        <Draw type={type} />
      </XFlow>
    </div>
  );
};

export default Page;
