import Tippy from '@tippyjs/react';
import classNames from 'classnames';
import { Plus, Minus, Minimize, Dice5 } from 'lucide-react';
import { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css';

import { useGraphEvent, useGraphInstance } from '@/hooks';

import '../styles/index.less';

export enum ControlEnum {
  ZoomTo = 'zoomTo',
  ZoomIn = 'zoomIn',
  ZoomOut = 'zoomOut',
  ZoomToFit = 'zoomToFit',
  ZoomToOrigin = 'zoomToOrigin',
}

const dropDownItems = [
  {
    key: '1',
    label: '50%',
  },
  {
    key: '2',
    label: '75%',
  },
  {
    key: '3',
    label: '100%',
  },
  {
    key: '4',
    label: '125%',
  },
  {
    key: '5',
    label: '150%',
  },
];

const ControlToolMap = {
  [ControlEnum.ZoomIn]: {
    label: '放大',
    icon: <Plus color="#545456" size={20} />,
  },
  [ControlEnum.ZoomOut]: {
    label: '缩小',
    icon: <Minus color="#545456" size={20} />,
  },
  [ControlEnum.ZoomTo]: {
    label: '缩放至',
    icon: <Plus color="#545456" size={20} />,
  },
  [ControlEnum.ZoomToFit]: {
    label: '自适应窗口大小',
    icon: <Minimize color="#545456" size={20} />,
  },
  [ControlEnum.ZoomToOrigin]: {
    label: '实际像素展示',
    icon: <Dice5 color="#545456" size={20} />,
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
  placement?: 'top' | 'right' | 'bottom' | 'left';
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
      className={classNames('toolButton', {
        toolbuttonVertical: direction === 'vertical',
      })}
    >
      {items.map((tool) => {
        if (tool === 'zoomTo') {
          return (
            <Tippy
              key={tool}
              content={
                <div className="tippyBtnContent">
                  {dropDownItems.map((item) => {
                    return (
                      <button key={item.key} onClick={() => changeZoom(tool, item.key)}>
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              }
              interactive
              placement="top"
              arrow={false}
              theme="light-border"
            >
              <button className="dropDownBtn">{`${Math.floor(zoom * 100)}%`}</button>
            </Tippy>
          );
        } else if (ControlActionList.includes(tool)) {
          return (
            <Tippy
              key={tool}
              content={ControlToolMap[tool].label}
              placement={placement}
              arrow
            >
              <button
                onClick={() => changeZoom(tool)}
                disabled={!isToolButtonEnabled(tool as ControlEnum)}
              >
                {ControlToolMap[tool].icon}
              </button>
            </Tippy>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export { Control };
