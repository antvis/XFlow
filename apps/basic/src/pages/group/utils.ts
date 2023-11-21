import type { Graph, Node, Cell } from '@antv/xflow';
import * as _ from 'lodash';

import { groupNodePadding, defaultGroupSize } from './const';
import { layoutDagre } from './dagreLayout';
import type { IGraph, INode, INodeData } from './type';
import { NodeType } from './type';

export const Utils = {
  // 是否是组合节点
  isCombineGroup: (type: NodeType) => type === NodeType.GROUP,
  /**
   * 获取节点的所有后代，包括节点和边
   * @param node
   * @returns
   */
  getDescendants: (node: Node): Cell[] => node?.getDescendants() || [],
  /**
   * 获取cell的可见性
   * @param graph
   * @param cell  Cell | number | string
   */
  getCellVisible: (graph: Graph, cell: Cell) => {
    return (
      (graph.findViewByCell(cell)?.container as HTMLElement)?.style?.display !== 'none'
    );
  },
  /**
   * 切换节点、边的隐藏和展示
   * 坑：1.x 不能直接用cell.hide()、cell.show() 处理，
   *    因为 cell.hide() 时和节点相关的边会直接在视图上边删掉，但是模型数据上还在，
   *    所以graph.cells()还是能获取到边，所以在此通过graph.cells() 处理 cell.show()时，边不会展示
   * 参考 2.x 的版本，通过修改cell容器的diplay样式处理
   * @param graph
   * @param cell
   * @param visible
   */
  toggleVisible: (graph: Graph, cell: Cell, visible: boolean) => {
    const viewItem = graph.findViewByCell(cell.id);
    if (viewItem && viewItem.container) {
      (viewItem.container as HTMLElement).style.display = visible ? 'unset' : 'none';
    }
  },
  /**
   * 隐藏cell
   * @param graph
   * @param cell
   */
  hideCell: (graph: Graph, cell: Cell) => {
    Utils.toggleVisible(graph, cell, false);
  },

  /**
   * 展示cell
   * @param graph
   * @param cell
   */
  showCell: (graph: Graph, cell: Cell) => {
    const isNode = cell.isNode();
    if (isNode) {
      const parentIsFold = cell.getParent()?.getProp('isFold');
      if (parentIsFold) {
        // 如果父节点收起，则当前节点隐藏
        Utils.toggleVisible(graph, cell, false);
      } else {
        // 如果父节点展开，则当前节点可以展示
        Utils.toggleVisible(graph, cell, true);
      }
    }
  },
  // 找到边缘碰撞的节点
  findInAreaNode: (graph: Graph, node: Node): Node | null => {
    let nodeInArea = null;
    // getNodesInArea 获取的节点会包括当前节点本身，需要处理掉
    const otherNodeInArea: Node[] = _.filter(
      graph.getNodesInArea(node?.getBBox()),
      (cell: Cell) => cell.id !== node.id,
    );
    // 如果在覆盖区域内找到图上的群组节点，则直接返回碰撞的第一个群组节点
    const parentNodeInArea = _.filter(
      otherNodeInArea,
      (dot: Node) => !_.isEmpty(dot.getChildren()),
    );

    if (parentNodeInArea?.length > 0) {
      // 返回第一个在图中展示的群组节点
      nodeInArea = parentNodeInArea?.[0];
    } else {
      // 如果在覆盖区域没有群组节点，只有普通的节点，则直接返回碰撞的第一个在图中展示的普通节点
      nodeInArea = otherNodeInArea?.[0];
    }
    return nodeInArea;
  },

  /**
   * 根据处理后的关系数据获取后代节点
   * 场景：后代节点未被 addNode 添加到graph时，只能从处理后的关系数据中获取后代节点
   * 注意：仅返回非 NodeType.GROUP 类型的后代节点
   * @param childrenNodes 后代节点，原始数据
   * @param graphData
   * @returns
   */
  getDescendantsNodeByData: (
    childrenNodes: INodeData[] = [],
    graphData: IGraph = {
      nodes: [],
      edges: [],
    },
  ): INodeData[] => {
    let allDescendants: INodeData[] = [];
    for (let i = 0; i < childrenNodes.length; i++) {
      // 组合节点：继续递归
      if (Utils.isCombineGroup(childrenNodes[i].nodeType)) {
        const childNode = _.find(
          graphData?.nodes,
          (u: INode) => String(u.id) === String(childrenNodes[i].id),
        );
        const offspring = Utils.getDescendantsNodeByData(
          childNode?.childrenNodes,
          graphData,
        );
        allDescendants = [...allDescendants, ...offspring];
      } else {
        allDescendants.push(childrenNodes[i]);
      }
    }
    return allDescendants;
  },

  // 更新节点的收起、展开属性
  updateGroupIsFold: (node: Node, isFold: boolean) => {
    node.setProp('isFold', isFold);
    // 如果 isFold 属性为true，表示收起节点，同时需要更新节点的大小为组合节点初始的大小
    isFold && node?.resize(36, 36);
  },
  /**
   * 展开群组
   * @param graph
   * @param node
   * @param withoutLayoutGData
   */
  unFoldGroup: (graph: Graph, node: Node, withoutLayoutGData: IGraph) => {
    const { nodes } = withoutLayoutGData || {};
    // ------ 处理节点 ------
    /**
     * 1. 对于图节点初始化场景：可能组合添加子节点后有的子节点展开过、有的子节点未被展开过（即未被添加到图中），
     *    因此需要区分子节点中哪些是之前展开过的（即经过了addChild）就不重复添加了，但是可以重新计算x、y，未被添加过的需要经过 addChild 处理
     * 2. 一个节点在图中是唯一的，所以 children 子节点不能重复被 createNode、addNode、addChild，除非被反向操作了即 removeChild、removeNode
     * 3. 不区分子节点之前被展开过还是未被展开过，即不通过 cell.show() 处理，因为通过cell.show()处理x、y不会变，
     *    但实际上在编辑场景可能存在往组合节点添加子节点的场景，需要重新计算组合所有节点的x、y
     *    然后，对已经添加过的子节点更新x、y，对未被添加过的子节点进行 addNode、addChild
     */
    // 图中已被添加到组合节点的子节点，且子节点被addChild处理过
    const addedChildrenCell = _.filter(node.getChildren(), (childCell: Cell) =>
      childCell.isNode(),
    );
    const addedChildrenCellIds = _.map(addedChildrenCell, (c: Cell) => String(c.id));
    // 从节点的 childrenNodes 属性中获取父节点的所有子节点数据（包括已经被addChild处理和未被addChild处理的子节点）。
    // 注意：注意，数据处理时，保证node.getProp('childrenNodes')不要有重复，避免在后续添加节点是被重复添加导致图展示问题
    const childrenNodes: INodeData[] = node.getProp('childrenNodes');
    // 从所有的子节点数据中找到未被添加过的子节点
    const notAddedChildren = _.filter(
      childrenNodes,
      (ch: INodeData) => !_.includes(addedChildrenCellIds, String(ch.id)),
    );
    const notAddedChildrenIds = _.map(notAddedChildren, (v: INodeData) => String(v.id));

    // 从节点原始配置数据中找到所有子节点数据进行布局计算x、y
    const originChildNode = _.filter(nodes, (it) =>
      _.includes(
        _.map(childrenNodes, (c: INodeData) => String(c.id)),
        it.id,
      ),
    );
    // 计算子节点的 x、y：用 dagre 布局计算 x、y，begin 是 父节点的 x + padding、y + padding
    const position = node.position();
    // 计算子节点的x、y需要所有子节点一起计算（added、notAdded）
    const layoutData: IGraph = layoutDagre(
      {
        nodes: _.cloneDeep(originChildNode),
        edges: [],
      },
      {
        // +16 防止布局后文案或子节点贴着父节点的边，父节点的左内边距和上内边距
        begin: [position.x + groupNodePadding + 16, position.y + groupNodePadding + 16],
      },
    );

    // 与父节点的右内边距，下内边距需要通过调整计算后的x、y实现。x + 16, y + 16
    const finalLayoutNodes = _.map(layoutData?.nodes, (n) => ({
      ...n,
      // 父节点的 padding-right 和 padding-bottom【保证节点拖动的时候完全被父节点包裹（包括节点的文本），不会覆盖在父节点的收起展开icon，影响点击。】
      x: (n.x || 0) - 16,
      y: (n.y || 0) - 16,
    }));
    // 已被添加过的子节点只更新x、y，不需要重新addChild
    _.forEach(addedChildrenCell, (addChild) => {
      const newCellXY = _.find(
        finalLayoutNodes,
        (it) => String(it.id) === String(addChild.id),
      );
      (addChild as Node).setPosition(newCellXY?.x, newCellXY?.y);
      Utils.showCell(graph, addChild);
    });

    // 未被添加过的子节点添加子节点、边到图中
    const notAddedChildrenWithXY = _.filter(finalLayoutNodes, (u) =>
      _.includes(notAddedChildrenIds, String(u.id)),
    );
    // 处理群组节点的子节点
    for (let k = 0; k < notAddedChildrenWithXY?.length; k++) {
      const currentNotAddedNode = notAddedChildrenWithXY[k];
      const newAddNode = graph.addNode(graph.createNode(currentNotAddedNode));
      node.addChild(newAddNode, { ignore: true });
    }

    // 递归更新节点 size，直至根节点
    Utils.updateNodeSize(graph, node);
  },

  /**
   * 收起群组节点
   * @param graph
   * @param node
   */
  foldGroup: (graph: Graph, node: Node) => {
    // 收起所有的后代节点以及连线
    Utils.getDescendants(node)?.forEach((cell) => {
      Utils.hideCell(graph, cell);
      // 如果后代节点是组合节点，则修改 isFold 属性为true，同时更新后代组合节点的大小为初始的组合节点大小
      if (cell.isNode() && Utils.isCombineGroup(cell.getData()?.nodeType)) {
        Utils.updateGroupIsFold(cell, true);
      }
    });
    // 向上递归更新节点 size，直至根节点
    Utils.updateNodeSize(graph, node, true);
  },

  /**
   * 计算节点的 size
   * @param node
   * @param children
   */
  getNodeSize: (node: Node, children: Node[]) => {
    // 过滤出节点的 child，cell 为边的 child 不需要计算也无 getPosition 方法
    const nodeChildren = _.filter(children, (ch: Node) => ch.isNode());
    const maxTopRightX =
      _.max(
        _.map(
          nodeChildren,
          (child: Node) => child.getPosition()?.x + child.size()?.width,
        ),
      ) || 0;
    const maxBottomRightY =
      _.max(
        _.map(
          nodeChildren,
          (child: Node) => child.getPosition()?.y + child.size()?.height,
        ),
      ) || 0;
    const { x: pOriginX, y: pOriginY } = node.getPosition();
    return {
      // 父节点的右内边距【16（padding-right）】和下内边距【48 = 16（padding-bottom） + 32（两行文本的高度）】
      // 保证节点拖动的时候完全被父节点包裹（包括节点的文本），不会覆盖在父节点的收起展开icon，影响点击。
      width: Math.floor(maxTopRightX - pOriginX + groupNodePadding + 16),
      height: Math.floor(maxBottomRightY - pOriginY + groupNodePadding + 48),
    };
  },

  /**
   * 更新节点 size
   *  从当前节点开始，递归更新节点size至父节点
   * @param graph
   * @param node
   * @param useDefaultGroupSize boolean 是否使用默认的群组size
   */
  updateNodeSize: (graph: Graph, node: Node, useDefaultGroupSize = false) => {
    let nodeSize = defaultGroupSize;
    if (!useDefaultGroupSize) {
      const children = node.getChildren();
      // 计算节点的 size
      nodeSize = Utils.getNodeSize(node, children as Node[]);
    }
    // 更新节点的 size
    node.resize(nodeSize.width, nodeSize.height);
    // 同时重新计算同层兄弟节点的x、y，并更新同层兄弟节点的x、y
    Utils.updateNodeXY(graph, node);
    // 如果不是根节点，则递归继续计算和更新父节点的 size
    if (node.getParent()) {
      Utils.updateNodeSize(graph, node.getParent() as Node);
    }
  },

  /**
   * 递归计算更新节点的x、y
   */
  updateNodeXY: (graph: Graph, node: Node) => {
    const parent = node.getParent();
    if (!parent) return;
    // 寻找兄弟节点
    const children = parent.getChildren();
    const position = (parent as Node).getPosition();
    const childrenNodesCell = _.filter(children, (cell: Cell): cell is Node =>
      cell.isNode(),
    );
    const childrenNodes = _.map(childrenNodesCell, (cell: Cell) => {
      return {
        id: cell.id,
        // 注意：dagre 布局是通过size获取节点宽高的，不是通过 width、height 计算的，所以如果通过width、height传入宽高的话计算出的节点位置x、y不会变
        size: [cell?.getBBox()?.width, cell?.getBBox()?.height],
      };
    });
    const layoutData = layoutDagre(
      {
        nodes: _.cloneDeep(childrenNodes),
        edges: [],
      },
      {
        begin: [position.x + groupNodePadding, position.y + groupNodePadding],
      },
    );

    _.forEach(childrenNodesCell, (cell: Node) => {
      const newCell = _.find(layoutData.nodes, (nd: INode) => nd.id === cell.id);
      cell.setPosition(newCell?.x || 0, newCell?.y || 0);
    });
  },
};
