/**
 * @description 节点的右键菜单
 */

import { Menu } from '@antv/x6-react-components';
import type { Cell } from '@antv/xflow';
// 不引入组件样式的话，节点右键菜单样式会有问题
import '@antv/x6-react-components/es/menu/style/index.css';

import { useGraphEvent } from '@antv/xflow';
import React, { useState, useMemo, useCallback } from 'react';
import ReactDOM from 'react-dom';

import { Utils } from '../utils';

import styles from './index.less';

// https://g6.antv.antgroup.com/manual/advanced/coordinate-system
// 获取到位置后将 dom 节点挂到 body 上定位，否则可能 dom 展示位位置和鼠标点击的位置有偏差
const contextMenuRoot = document.createElement('div');
document.body.appendChild(contextMenuRoot);

interface IProps {
  // 重命名群组
  renameCombineGroup: (
    cell: Cell,
    confirmPosition: { confirmX: number; confirmY: number },
  ) => void;
  // 解散群组
  removeCombineGroup: (
    cell: Cell,
    confirmPosition: { confirmX: number; confirmY: number },
  ) => void;
}
const ContextMenu = (props: IProps) => {
  const { renameCombineGroup, removeCombineGroup } = props;
  const [contextMenuPosition, setContextMenuPosition] = useState<{
    contextMenuX: number;
    contextMenuY: number;
  } | null>(null);
  // 当前操作的 cell
  const [currentCell, setCurrnetCell] = useState<Cell | null>();

  // 取消右键菜单
  const cancelCellContextMenu = () => {
    setCurrnetCell(null);
    setContextMenuPosition(null);
  };

  useGraphEvent('cell:contextmenu', ({ e, x, y, cell, view }) => {
    if (cell.isNode()) {
      const nodeType = cell?.getData()?.originData?.conceptType;
      // 除组合节点内部的普通子节点外，其它节点右键都会有操作
      if (!(cell.getParent() && !Utils.isCombineGroup(nodeType))) {
        setCurrnetCell(cell);
        setContextMenuPosition({ contextMenuX: e.pageX, contextMenuY: e.pageY });
      }
    } else {
      setCurrnetCell(cell);
      setContextMenuPosition({ contextMenuX: e.pageX, contextMenuY: e.pageY });
    }
  });

  // 取消右键菜单
  useGraphEvent('blank:click', () => {
    setCurrnetCell(null);
    setContextMenuPosition(null);
  });

  useGraphEvent('cell:click', () => {
    setCurrnetCell(null);
    setContextMenuPosition(null);
  });

  // 解散组
  const handleRemoveCombineGroup = useCallback(() => {
    removeCombineGroup(currentCell as Cell, {
      confirmX: contextMenuPosition?.contextMenuX || 0,
      confirmY: contextMenuPosition?.contextMenuY || 0,
    });
    cancelCellContextMenu();
  }, [currentCell, contextMenuPosition, removeCombineGroup]);

  // 重命名组
  const handleRenameCombineGroup = useCallback(() => {
    renameCombineGroup(currentCell as Cell, {
      confirmX: contextMenuPosition?.contextMenuX || 0,
      confirmY: contextMenuPosition?.contextMenuY || 0,
    });
    cancelCellContextMenu();
  }, [currentCell, contextMenuPosition, renameCombineGroup]);

  // 获取右键菜单操作
  const rightMenuItem = useMemo(() => {
    let menuItem: {
      key: string;
      dom: React.ReactNode;
    }[] = [];
    if (
      currentCell?.isNode() &&
      Utils.isCombineGroup(currentCell?.getData()?.nodeType)
    ) {
      menuItem = [
        {
          key: 'removeCombineGroup',
          dom: (
            <Menu.Item key="removeCombineGroup" onClick={handleRemoveCombineGroup}>
              解除组
            </Menu.Item>
          ),
        },
        {
          key: 'renameCombineGroup',
          dom: (
            <Menu.Item key="renameCombineGroup" onClick={handleRenameCombineGroup}>
              重命名组
            </Menu.Item>
          ),
        },
      ];
    }
    return menuItem;
  }, [currentCell, handleRemoveCombineGroup, handleRenameCombineGroup]);

  return ReactDOM.createPortal(
    currentCell?.isNode() &&
      Utils.isCombineGroup(currentCell?.getData()?.nodeType) &&
      contextMenuPosition ? (
      <div
        className={styles['context-menu-wrapper']}
        style={{
          left: contextMenuPosition?.contextMenuX,
          top: contextMenuPosition?.contextMenuY,
        }}
      >
        <Menu>{rightMenuItem.map((item) => item.dom)}</Menu>
      </div>
    ) : null,
    contextMenuRoot,
  );
};

export default ContextMenu;
