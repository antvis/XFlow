import {
  OneToOneOutlined,
  BorderOuterOutlined,
  PlusOutlined,
  MinusOutlined,
} from '@ant-design/icons';
import { useGraphEvent, useGraphInstance } from '@antv/xflow';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Tooltip } from 'antd';
import type { TooltipPlacement } from 'antd/es/tooltip';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

import styles from './index.less';

export enum ControlEnum {
  ZoomTo = 'zoomTo',
  ZoomIn = 'zoomIn',
  ZoomOut = 'zoomOut',
  ZoomToFit = 'zoomToFit',
  ZoomToOrigin = 'zoomToOrigin',
}

const dropDownItems: MenuProps['items'] = [
  {
    key: 1,
    label: '50%',
  },
  {
    key: 2,
    label: '75%',
  },
  {
    key: 3,
    label: '100%',
  },
  {
    key: 4,
    label: '125%',
  },
  {
    key: 5,
    label: '150%',
  },
];

const ControlToolMap = {
  [ControlEnum.ZoomIn]: {
    label: '放大',
    icon: <PlusOutlined style={{ color: '#545456' }} />,
  },
  [ControlEnum.ZoomOut]: {
    label: '缩小',
    icon: <MinusOutlined style={{ color: '#545456' }} />,
  },
  [ControlEnum.ZoomTo]: {
    label: '缩放至',
    icon: <PlusOutlined style={{ color: '#545456' }} />,
  },
  [ControlEnum.ZoomToFit]: {
    label: '自适应窗口大小',
    icon: <BorderOuterOutlined style={{ color: '#545456' }} />,
  },
  [ControlEnum.ZoomToOrigin]: {
    label: '实际像素展示',
    icon: <OneToOneOutlined style={{ color: '#545456' }} />,
  },
};

const ControlActionList = [
  'zoomTo',
  'zoomIn',
  'zoomOut',
  'zoomToFit',
  'zoomToOrigin',
] as const;

type ControlAction = (typeof ControlActionList)[number];

interface ControlIProps {
  items: ControlAction[];
  direction?: 'horizontal' | 'vertical';
  placement?: TooltipPlacement;
}

const Control = (props: ControlIProps) => {
  const { items, direction = 'horizontal', placement = 'top' } = props;
  const graph = useGraphInstance();

  const [zoom, setZoom] = useState(1);

  useGraphEvent('scale', ({ sx }) => {
    setZoom(sx);
  });

  useEffect(() => {
    if (graph) {
      setZoom(graph.zoom());
    }
  }, [graph, props]);

  const changeZoom = (type: ControlAction, args?: string) => {
    if (!graph) return;
    const key = parseInt(args || '1', 10);
    const zoomNum = (0.25 * (key + 1)) as number;
    switch (type) {
      case ControlEnum.ZoomIn:
        if (zoom < 1.5) {
          graph.zoom(0.25);
        }
        break;
      case ControlEnum.ZoomOut:
        if (zoom > 0.5) {
          graph.zoom(-0.25);
        }
        break;
      case ControlEnum.ZoomToFit:
        graph.zoomToFit({ maxScale: 1 });
        break;
      case ControlEnum.ZoomToOrigin:
        graph.zoomTo(1);
        break;
      case ControlEnum.ZoomTo:
        graph.zoomTo(zoomNum);
        break;
      default:
        break;
    }
    setZoom(graph.zoom());
  };

  const isToolButtonEnabled = (type: ControlEnum) => {
    if (type == ControlEnum.ZoomIn) {
      return zoom < 1.5;
    } else if (type === ControlEnum.ZoomOut) {
      return zoom > 0.51;
    }
    return true;
  };

  return (
    <div
      className={classNames(styles.toolButton, {
        [styles.toolbuttonVertical]: direction === 'vertical',
      })}
    >
      {items.map((tool) => {
        if (tool === 'zoomTo') {
          return (
            <Dropdown
              menu={{
                items: dropDownItems,
                onClick: ({ key }) => changeZoom(tool, key),
              }}
              placement="top"
              key={tool}
              trigger={['click']}
            >
              <Button className={styles.dropDownBtn}>{`${Math.floor(
                zoom * 100,
              )}%`}</Button>
            </Dropdown>
          );
        } else if (ControlActionList.includes(tool)) {
          return (
            <Tooltip
              key={tool}
              title={ControlToolMap[tool].label}
              placement={placement}
            >
              <Button
                icon={ControlToolMap[tool].icon}
                onClick={() => changeZoom(tool)}
                disabled={!isToolButtonEnabled(tool as ControlEnum)}
              />
            </Tooltip>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export { Control };
