import type { Node, Cell } from '@antv/xflow';
import { useGraphStore, useGraphInstance, useGraphEvent } from '@antv/xflow';
import { Button, Popover, Popconfirm, Input } from 'antd';
import * as _ from 'lodash';
import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { groupNodePadding } from './const';
import ContextMenu from './ContextMenu';
import styles from './index.less';
import type { INodeData, INode, IGraph, GRAPH_OPT_CONFIRM_CONTENT } from './type';
import { NodeRenderKey, NodeType, GRAPH_EDIT_OPT_TYPE } from './type';
import { Utils } from './utils';

const confirmRoot = document.createElement('div');
document.body.appendChild(confirmRoot);

const ToolsButton = () => {
  const addNodes = useGraphStore((state) => state.addNodes);
  const graph = useGraphInstance();
  const [gData, setGData] = useState<IGraph>({
    nodes: [],
    edges: [],
  });
  const addSquareNodeId = useRef(0);
  // 需要 input 的二次确认提示框
  const needInputOptConfirm = [
    GRAPH_EDIT_OPT_TYPE.MERGE_NODE,
    GRAPH_EDIT_OPT_TYPE.RENAME_COMBINE_GROUP,
  ];
  // 出现二次浮层的操作类型
  const [optTypeConfirm, setOptTypeConfirm] = useState<GRAPH_EDIT_OPT_TYPE>();
  // 组合名称
  const [combineGroupName, setCombineGroupName] = useState<string>('默认组');
  // 二次确认浮层是否可见
  const [optTypeConfirmVisible, setOptTypeConfirmVisible] = useState<boolean>(false);
  // 二次确认浮层的位置
  const [optTypeConfirmXY, setOptTypeConfirmXY] = useState<{
    x: number;
    y: number;
  } | null>();
  // 需要二次确认操作的内容：如果是合并节点，则操作内容中边为空
  const [optTypeConfirmContent, setOptTypeConfirmContent] =
    useState<GRAPH_OPT_CONFIRM_CONTENT>();

  /**
   * 添加节点
   */
  const onAddSingleNodes = () => {
    const addNodeData = [
      {
        id: `single_${String(addSquareNodeId.current)}`,
        data: {
          id: `single_${String(addSquareNodeId.current)}`,
          nodeType: NodeType.SINGLE,
          label: `single_${String(addSquareNodeId.current)}`,
        },
        shape: NodeRenderKey.NORMAL_NODE,
        width: 36,
        height: 36,
        x: 200,
        y: 200,
        zIndex: 2,
      },
    ];
    addNodes(addNodeData);
    addSquareNodeId.current++;
    setGData({
      nodes: [...gData.nodes, ...addNodeData],
      edges: gData.edges,
    });
  };

  /**
   * 节点移动
   */
  useGraphEvent('node:moving', ({ e, node }) => {
    if (!graph) return;
    // 如果当前移动的节点是群组的子节点，则不需要出现合并提示
    if (node.getParentId()) return;
    const nodeData: INodeData = node.getData();
    const nodeInArea = Utils.findInAreaNode(graph, node);
    if (_.isEmpty(nodeInArea)) return;
    const nodeInAreaData = nodeInArea?.getData();
    // 如果移动的是组合节点且被区域包裹的节点都是组合节点的子节点，则不需要做添加或合并的二次确认提示
    if (Utils.isCombineGroup(nodeData?.nodeType)) {
      // 所有后代节点（节点、边）
      const descendantNodes = _.filter(node?.getDescendants(), (cell: Cell) =>
        cell.isNode(),
      );
      const combineChildrenIds = _.map(descendantNodes, (cell: Cell) => cell.id);
      if (_.includes(combineChildrenIds, nodeInArea?.id)) return;
    }
    // 判断“待合并的节点”是不是当前移动的节点的祖先节点，如果是也不需要做合并提示
    // 所有祖先节点
    const parentIds = _.map(node.getAncestors(), (cell: Cell) => cell.id);
    if (_.includes(parentIds, nodeInArea?.id)) return;
    /**
     * 移动组合:
     * 1. 如果组合移到单独的节点上时，不支持嵌入和合并
     * 2. 如果被区域包裹的节点都是组合节点的子节点，则不需要做合并提示
     *
     * 移动非组合节点：
     * 1. 如果“待合并节点”是当前移动节点的祖先节点，则不支持合并提示
     * 2. 如果“待合并节点”是组合节点，则是“添加节点到组合”场景
     * 3. 如果“待合并节点”是普通节点，则是“合并新成组”场景
     */

    // 判断“待合并节点”的类型是否是组合节点：如果“待合并的节点”是组合节点，则不是节点合并，而是往组合节点中新增节点（即新增父子关系）
    const isTargetGroup = Utils.isCombineGroup(nodeInAreaData?.nodeType);

    // 拖动的节点是非组合节点，被覆盖的节点是组合节点
    if (!Utils.isCombineGroup(nodeData?.nodeType) && isTargetGroup) {
      setOptTypeConfirm(GRAPH_EDIT_OPT_TYPE.ADD_NODE_TO_COMBINE_GROUP);
    } else {
      setOptTypeConfirm(GRAPH_EDIT_OPT_TYPE.MERGE_NODE);
    }
    setOptTypeConfirmXY({ x: e.clientX, y: e.clientY });
    setOptTypeConfirmContent({
      source: node,
      // 可能覆盖的节点不止一个，此处处理的时候先取第一个节点
      target: nodeInArea,
    });
    setOptTypeConfirmVisible(true);
  });

  /**
   * 节点位置变化
   */
  useGraphEvent('node:change:position', ({ node, options }) => {
    if (options.skipParentHandler) {
      return;
    }

    const children = node.getChildren();
    if (children && children.length) {
      // 设置节点原始位置
      node.prop('originPosition', node.getPosition());
    }

    const parent = node.getParent();
    if (parent && parent.isNode()) {
      let originSize = parent.prop('originSize');
      if (originSize == null) {
        // originSize 默认是父节点初始 size
        originSize = parent.getSize();
        // 动态设置父节点的大小
        parent.prop('originSize', originSize);
      }

      let originPosition = parent.prop('originPosition');
      if (originPosition == null) {
        originPosition = parent.getPosition();
        parent.prop('originPosition', originPosition);
      }

      let x = originPosition.x;
      let y = originPosition.y;
      let cornerX = originPosition.x + originSize.width;
      let cornerY = originPosition.y + originSize.height;
      let hasChange = false;

      const pChildren = parent.getChildren();
      if (pChildren) {
        pChildren.forEach((child: Cell) => {
          // 子节点膨胀大小，给父节点留些内边距
          const bbox = child.getBBox().inflate(groupNodePadding);
          const corner = bbox.getCorner();

          if (bbox.x < x) {
            x = bbox.x;
            hasChange = true;
          }

          if (bbox.y < y) {
            y = bbox.y;
            hasChange = true;
          }

          // 限制只能在父节点内移动
          if (corner.x > cornerX) {
            cornerX = corner.x;
            hasChange = true;
          }

          if (corner.y > cornerY) {
            cornerY = corner.y;
            hasChange = true;
          }
        });
      }

      if (hasChange) {
        // 44 两行文本的高度；保证节点拖动的时候完全被父节点包裹（包括节点的文本），不会覆盖在父节点的收起展开icon，影响点击。
        const size = { width: cornerX - x + 44, height: cornerY - y + 56 };
        // 当父节点收起的时候，不需要更新size，保持组合节点收起时默认的size即可
        if (!parent.getProp('isFold')) {
          parent.prop(
            {
              position: { x, y },
              size,
            },
            { skipParentHandler: true },
          );
        }
      }
    }
  });

  /**
   * 节点展开、收起
   */
  useGraphEvent('group:node:collapse', ({ node }) => {
    if (!graph) return;
    const collapsed = !node.getProp('isFold');
    // 注意：先更新 isFold，后续 foldGroup、unFoldGroup 处理逻辑里才能获取到最新的 isFold 值
    Utils.updateGroupIsFold(node, collapsed);
    // 收起
    if (collapsed) {
      Utils.foldGroup(graph, node);
    } else {
      // 展开
      Utils.unFoldGroup(graph, node, gData);
    }
  });

  /**
   * 确认合并节点
   */
  const confirmMergeNode = () => {
    if (!graph) return;
    const { source, target } = optTypeConfirmContent || {};
    const sourceNodeData = source?.getData();
    const targetNodeData = target?.getData();
    const id = _.uniqueId('group_');
    const groupData: INodeData = {
      id,
      nodeType: NodeType.GROUP,
      label: combineGroupName,
    };

    const childrenNodes = [sourceNodeData, targetNodeData];
    const newGroupNode: INode = {
      id,
      data: groupData,
      // 父节点中添加子节点的数据
      childrenNodes,
      descendantsNumber:
        Utils.getDescendantsNodeByData(childrenNodes, gData)?.length || 0,
      // 新增的群组节点默认展开
      isFold: false,
      width: 36,
      height: 36,
      shape: NodeRenderKey.GROUP_NODE,
      zIndex: 0,
      ports: {},
      x: target?.getPosition()?.x,
      y: target?.getPosition()?.y,
    };

    let newGData = gData;
    if (_.isEmpty(_.find(gData.nodes, { id: newGroupNode.id }))) {
      // 新增加的群组节点需要添加到 gData 中，这样才能在 unFoldGroup 展开的时候在 gData 中找到该节点，不然在群组与群组嵌套成组的时候会报错
      const newGDataNodes = _.map(gData.nodes, (u: INode) => {
        if ([source?.id, target?.id].includes(u.id)) {
          return {
            ...u,
            parentNodes: groupData,
            // 子节点收起
            isFold: true,
          };
        }
        return { ...u };
      });
      newGData = {
        nodes: [...newGDataNodes, newGroupNode],
        edges: gData.edges,
      };

      setGData(newGData);
    }

    // 子节点中添加父节点的数据
    source?.setProp('parentNodes', groupData);
    target?.setProp('parentNodes', groupData);
    /**
     * 如果 source、target 是群组节点，则：
     * （1）设置 isFold 为 true，无论这两个组合节点在合并之前是收起还是展开状态，合并之后都收起
     * （2）同时移除这两个组合节点的后代（包括后代节点、边）
     */
    const isSourceGroupNode = Utils.isCombineGroup(sourceNodeData?.nodeType);
    const isTargetGroupNode = Utils.isCombineGroup(targetNodeData?.nodeType);
    // 注意：先更新 isFold，后续 unFoldGroup 处理逻辑里才能获取到最新的 isFold 值
    isSourceGroupNode && Utils.updateGroupIsFold(source, true);
    isTargetGroupNode && Utils.updateGroupIsFold(target, true);

    // 以下处理可不依赖isTargetGroupNode，无后代节点则是[]
    const sourceChildren: Cell[] = Utils.getDescendants(source);
    const targetChildren: Cell[] = Utils.getDescendants(target);
    graph.removeCells([...sourceChildren, ...targetChildren]);

    const groupNode = graph.createNode({
      ...newGroupNode,
    });
    // 1. create group，group 的 childrenNodes 就是当前这两个节点，group 展开
    graph.addNode(groupNode);
    // 2. 组合节点创建成功的同时移除图上这两个节点，放到组合节点中，当组合节点展开的时候会重新计算x、y
    graph.removeNode(source?.id);
    graph.removeNode(target?.id);

    // 默认展开子节点：先移除子节点，再展开子节点，为了重新基于父节点的 x、y 计算子节点的 x、y，让父节点能够包裹子节点
    // 这里传入的 gData 需要是最新的，因为会用到 gData nodes 最新的属性值，比如 parentNode、isFold
    Utils.unFoldGroup(graph, groupNode, newGData);
    setCombineGroupName('默认组');
    // 4. 确认浮层隐藏
    handleEditConfirmCancel();
  };

  /**
   * 确认往组合中添加节点
   */
  const confirmAddNodeToCombineGroup = () => {
    if (!graph) return;
    const { source, target } = optTypeConfirmContent || {};
    const sourceNodeOriginData = source?.getData();
    const targetNodeOriginData = target?.getData();
    // 更新目标节点的子节点
    const children = [
      ...(target?.getProp('childrenNodes') || []),
      sourceNodeOriginData,
    ];
    target?.setProp('childrenNodes', children);
    source?.setProp('parentNodes', targetNodeOriginData);
    // 更新 gData 节点的 parentNodes、childrenNodes
    const newGDataNodes = _.map(gData.nodes, (u: INode) => {
      if (u.id === source?.id) {
        return {
          ...u,
          parentNodes: targetNodeOriginData,
        };
      }
      if (u.id === target?.id) {
        return {
          ...u,
          childrenNodes: children,
        };
      }
      return { ...u };
    });
    const newGData = {
      nodes: newGDataNodes,
      edges: gData.edges,
    };
    setGData(newGData);
    const descendantsNumber =
      Utils.getDescendantsNodeByData(children, newGData)?.length || 0;
    target?.setProp('descendantsNumber', descendantsNumber);
    // 往组合节点添加子节点时无论组合节点是展开还是收起状态，当添加子节点后都默认展开该组合节点
    // 注意：先更新 isFold，后续 unFoldGroup 处理逻辑里才能获取到最新的 isFold 值
    Utils.updateGroupIsFold(target, false);
    graph?.removeNode(source?.id);
    Utils.unFoldGroup(graph, target, gData);
    handleEditConfirmCancel();
  };

  /**
   * 确认重命名组
   */
  const confirmRenameCombineGroup = () => {
    // 当前操作的组合节点 source
    const { source: curNode } = optTypeConfirmContent || {};
    curNode?.updateData({
      ...(curNode?.getData() || {}),
      label: combineGroupName,
    });
    setCombineGroupName('默认组');
    handleEditConfirmCancel();
  };

  /**
   * 确认解散组
   */
  const confirmRemoveCombineGroup = () => {
    if (!graph) return;
    // 当前操作的组合节点
    const { source: currentOptCombineNode } = optTypeConfirmContent || {};
    // 解散组之前先把子节点都展示，先更新节点的 isFold 状态再展开节点
    Utils.updateGroupIsFold(currentOptCombineNode, false);
    Utils.unFoldGroup(graph, currentOptCombineNode, gData);

    // 当前操作的组合节点的父节点
    const nodeParent: Node = currentOptCombineNode?.getParent();
    const nodeParentOriginData = nodeParent?.getData();

    // 当前操作的组合节点的子节点
    const children = currentOptCombineNode?.getChildren();
    const childrenIds = _.map(children, (v: Cell) => v.id);
    // 解除当前操作的组合节点（父节点）和子节点的关系：需要在父节点的 childrenNodes 移除子节点数据，需要在子节点的 parentNodes 移除父节点
    _.forEach(
      _.filter(children, (ch: Cell) => ch.isNode()),
      (child: Cell) => {
        // 如果当前操作的组合节点有父节点，则需要将其子节点与其父节点建立父子关系
        if (!_.isEmpty(nodeParent)) {
          child.setProp('parentNodes', nodeParentOriginData);
          child?.setParent(nodeParent);
          nodeParent.addChild(child);
        } else {
          // 移除父节点数据
          child.setProp('parentNodes', null);
          // 处理掉父子关系，不要用 currentOptCombineNode.removeChild(child); 处理，会直接将节点从图中 remove 掉
          child?.setParent(null);
        }
      },
    );
    if (!_.isEmpty(nodeParent)) {
      const nodeParentChildren: INodeData[] = nodeParent.getProp('childrenNodes');
      _.remove(nodeParentChildren, (v: INodeData) => v.id === currentOptCombineNode.id);
      const newNodeParentChildren = nodeParentChildren.concat(
        currentOptCombineNode.getProp('childrenNodes') || [],
      );
      nodeParent.setProp('childrenNodes', newNodeParentChildren || []);
      const childrenCells = _.map(newNodeParentChildren, (u: INodeData) =>
        graph?.getCellById(String(u.id)),
      );
      nodeParent.setChildren(childrenCells as Cell[]);
    }
    currentOptCombineNode?.setProp('childrenNodes', []);
    // removeChild
    currentOptCombineNode?.setChildren(null);
    // remove 组合节点，将组合节点从图中删除
    graph?.removeNode(currentOptCombineNode?.id);

    // gData 里的 parentNodes 也需要更新下，不然解除组再成组之后获取的父节点还是解除组之前的父节点
    const newGDataNodes = _.map(gData.nodes, (u: INode) => {
      if (_.includes(childrenIds, u.id)) {
        return {
          ...u,
          parentNodes: _.isEmpty(nodeParent) ? null : nodeParentOriginData,
        };
      }
      return { ...u };
    });

    // 更新 gData
    setGData({
      nodes: _.reject(newGDataNodes, (it) => it.id === currentOptCombineNode?.id),
      edges: gData.edges,
    });
    handleEditConfirmCancel();
  };

  // 操作类二次确认弹窗 - 点击确定按钮
  const handleEditConfirm = () => {
    switch (optTypeConfirm) {
      // 合并节点
      case GRAPH_EDIT_OPT_TYPE.MERGE_NODE:
        confirmMergeNode();
        break;
      // 往组合中添加节点，只需要在action中添加操作：新增关系即可
      case GRAPH_EDIT_OPT_TYPE.ADD_NODE_TO_COMBINE_GROUP:
        confirmAddNodeToCombineGroup();
        break;
      // 重命名组
      case GRAPH_EDIT_OPT_TYPE.RENAME_COMBINE_GROUP:
        confirmRenameCombineGroup();
        break;
      // 解散组
      case GRAPH_EDIT_OPT_TYPE.REMOVE_COMBINE_GROUP:
        confirmRemoveCombineGroup();
        break;
      default:
        break;
    }
  };

  // 编辑 - 带 input 的二次确认浮层 - Popover
  const renderConfirmContent = () => {
    return (
      <>
        {needInputOptConfirm.includes(optTypeConfirm!) ? (
          <div className={styles['group-name-input']}>
            <span>组合名称：</span>
            <Input
              value={combineGroupName}
              onInput={(e) => {
                setCombineGroupName(e.target.value);
              }}
            />
          </div>
        ) : null}
        <div className={styles['confirm-footer']}>
          <Button onClick={handleEditConfirmCancel} className={styles['cancel-btn']}>
            取消
          </Button>
          <Button onClick={handleEditConfirm} type="primary">
            确定
          </Button>
        </div>
      </>
    );
  };

  // 二次确认浮层隐藏
  const handleEditConfirmCancel = () => {
    setOptTypeConfirmVisible(false);
    setOptTypeConfirmXY(null);
    setCombineGroupName('默认组');
  };

  // 右键操作通用处理逻辑
  const handleContextMenuOptionCom = (
    cell: Cell,
    confirmPosition: { confirmX: number; confirmY: number },
  ) => {
    setOptTypeConfirmXY({ x: confirmPosition?.confirmX, y: confirmPosition?.confirmY });
    if (cell.isNode()) {
      setOptTypeConfirmContent({
        source: cell,
      });
      setOptTypeConfirmVisible(true);
    }
  };

  // 重命名群组
  const handleRenameCombineGroup = (
    cell: Cell,
    confirmPosition: { confirmX: number; confirmY: number },
  ) => {
    setOptTypeConfirm(GRAPH_EDIT_OPT_TYPE.RENAME_COMBINE_GROUP);
    handleContextMenuOptionCom(cell, confirmPosition);
    setCombineGroupName(cell?.getData()?.originData?.cn || '默认组');
  };

  // 解散群组
  const handleRemoveCombineGroup = (
    cell: Cell,
    confirmPosition: { confirmX: number; confirmY: number },
  ) => {
    setOptTypeConfirm(GRAPH_EDIT_OPT_TYPE.REMOVE_COMBINE_GROUP);
    handleContextMenuOptionCom(cell, confirmPosition);
  };

  // 二次确认浮层
  const renderPopoverConfirm = () => {
    const { source, target } = optTypeConfirmContent || {};
    const sourceText = source?.getData()?.label;
    const targetText = target?.getData()?.label;
    let title = '';
    switch (optTypeConfirm) {
      case GRAPH_EDIT_OPT_TYPE.MERGE_NODE:
        title = `是否要将节点 “${sourceText}” 和节点 “${targetText}” 成组？`;
        break;
      case GRAPH_EDIT_OPT_TYPE.ADD_NODE_TO_COMBINE_GROUP:
        title = `是否要将节点 “${sourceText}” 合并到 “${targetText}” 节点组？`;
        break;
      case GRAPH_EDIT_OPT_TYPE.RENAME_COMBINE_GROUP:
        title = `重命名组合 “${sourceText}” `;
        break;
      case GRAPH_EDIT_OPT_TYPE.REMOVE_COMBINE_GROUP:
        title = `确定解散组合 “${sourceText}” 吗？`;
        break;
      default:
        break;
    }

    const confirmChildDom = (
      <div
        style={{
          width: '2px',
          height: '2px',
          position: 'absolute',
          left: optTypeConfirmXY?.x || 0,
          top: optTypeConfirmXY?.y || 0,
        }}
      />
    );

    const commonProps = {
      title,
      open: true,
      overlayClassName: styles['edit-popconfirm-wrapper'],
      style: {
        left: (optTypeConfirmXY?.x || 0) + 10 || 0,
        top: (optTypeConfirmXY?.y || 0) + 10 || 0,
      },
    };

    const popoverConfirm = (
      <Popover content={renderConfirmContent()} {...commonProps} placement="right">
        {confirmChildDom}
      </Popover>
    );

    const popConfirm = (
      <Popconfirm
        onConfirm={handleEditConfirm}
        onCancel={handleEditConfirmCancel}
        okText="确定"
        cancelText="取消"
        {...commonProps}
        placement="right"
      >
        {confirmChildDom}
      </Popconfirm>
    );
    return ReactDOM.createPortal(
      needInputOptConfirm.includes(optTypeConfirm!) ? popoverConfirm : popConfirm,
      confirmRoot,
    );
  };

  return (
    <>
      <div className={styles.tools}>
        <Button onClick={onAddSingleNodes}>addSingleNode</Button>
      </div>
      {optTypeConfirmVisible ? renderPopoverConfirm() : null}
      <ContextMenu
        renameCombineGroup={handleRenameCombineGroup}
        removeCombineGroup={handleRemoveCombineGroup}
      />
    </>
  );
};

export { ToolsButton };
