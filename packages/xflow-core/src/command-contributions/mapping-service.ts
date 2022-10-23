import { injectable } from 'mana-syringe'
import type { NsGraph } from '../interface'

@injectable()
export class GraphMappingHelper {
  groupNodeMap = new Map<string, NsGraph.INodeConfig>()
  // node 的 mapping
  nodeMap = new Map<string, NsGraph.INodeConfig>()
  nodeMappingRecord = new Map<string, string>()
  // port 的 mapping
  portMap = new Map<string, NsGraph.INodeAnchor>()
  portMappingRecord = new Map<string, string>()
  // edge 的 mapping
  edgeMap = new Map<string, NsGraph.IEdgeConfig>()
  edgeMappingRecord = new Map<string, string>()

  // 区分类型
  getNodesByType = (nodes: NsGraph.INodeConfig[]) => {
    return nodes.reduce(
      (acc, node) => {
        if (node.isGroup) {
          acc.groupNodes.push(node)
        } else {
          acc.normalNodes.push(node)
        }
        return acc
      },
      { normalNodes: [] as NsGraph.INodeConfig[], groupNodes: [] as NsGraph.INodeConfig[] },
    )
  }
  // 增加已有节点
  getNodePorts = (node: NsGraph.INodeConfig) => {
    if (Array.isArray(node.ports)) {
      return node.ports
    }
    if (node.ports && Array.isArray(node.ports.items)) {
      return node.ports.items
    }
    return []
  }
  // 增加已有节点
  addNodes = (nodes: NsGraph.INodeConfig[]) => {
    nodes.forEach(node => {
      if (node.isGroup) {
        this.groupNodeMap.set(node.id, node)
      } else {
        const ports = this.getNodePorts(node)
        this.nodeMap.set(node.id, node)
        ports.forEach(port => {
          this.portMap.set(port.id, port as NsGraph.INodeAnchor)
        })
      }
    })
  }
  // 增加已有edge
  addEdge = (edges: NsGraph.IEdgeConfig[]) => {
    edges.forEach(edge => {
      this.edgeMap.set(edge.id, edge)
    })
  }
  // 添加node的映射关系
  buildNodeMapping = (currentNode: NsGraph.INodeConfig, nextNode: NsGraph.INodeConfig) => {
    const currentNodeId = currentNode.id || currentNode.originId
    const nextNodeId = nextNode.id
    this.nodeMappingRecord.set(currentNodeId, nextNodeId)
    const ports = this.getNodePorts(currentNode)
    ports.forEach((oldPort, index) => {
      const newPort = nextNode.ports[index]
      if (newPort) {
        this.portMap.set(newPort.id, newPort as NsGraph.INodeAnchor)
        this.portMappingRecord.set(oldPort.id, newPort.id)
      }
    })
  }
  // 更新Edge的NodeId和PortId
  createEdgeBetweenNodes = (edgeConfig: NsGraph.IEdgeConfig) => {
    const { source, sourcePortId, target, targetPortId } = edgeConfig
    return {
      ...edgeConfig,
      source: this.nodeMappingRecord.get(source),
      target: this.nodeMappingRecord.get(target),
      sourcePortId: this.portMappingRecord.get(sourcePortId),
      targetPortId: this.portMappingRecord.get(targetPortId),
      sourcePort: this.portMappingRecord.get(sourcePortId),
      targetPort: this.portMappingRecord.get(targetPortId),
    } as NsGraph.IEdgeConfig
  }
  // 更新GroupNode的NodeId
  buildGroupRelations = (groupNode: NsGraph.INodeConfig) => {
    const { groupChildren } = groupNode
    const newGroupChildren = groupChildren.map(id => {
      return this.nodeMappingRecord.get(id)
    })

    return {
      ...groupNode,
      groupChildren: newGroupChildren,
    } as NsGraph.INodeConfig
  }
}
