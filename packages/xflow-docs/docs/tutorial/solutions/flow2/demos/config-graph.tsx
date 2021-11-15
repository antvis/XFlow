import type { NsGraph } from '@antv/xflow'
import { createGraphConfig } from '@antv/xflow'
import { DndNode } from './react-node/dnd-node'
import { DND_RENDER_ID } from './constant'

// 控制连接桩显示/隐藏
const showPorts = (ports: NodeListOf<SVGElement>, show: boolean) => {
  for (let i = 0, len = ports.length; i < len; i = i + 1) {
    ports[i].style.visibility = show ? 'visible' : 'hidden'
  }
}

/**  graphConfig    */
export const useGraphConfig = createGraphConfig(config => {
  config.setNodeTypeParser(node => node?.renderKey)
  config.setEdgeTypeParser(edge => edge?.renderKey)
  config.setNodeRender(DND_RENDER_ID, DndNode)
  config.setX6Config({
    grid: true,
    history: true,
  })
  config.setEvents([
    {
      eventName: 'node:mouseenter',
      callback: () => {
        const container = document.querySelector('.user-custom-clz')!
        const ports = container.querySelectorAll('.x6-port-body') as NodeListOf<SVGElement>
        showPorts(ports, true)
      },
    } as NsGraph.IEvent<'node:mouseenter'>,
    {
      eventName: 'node:mouseleave',
      callback: () => {
        const container = document.querySelector('.user-custom-clz')!
        const ports = container.querySelectorAll('.x6-port-body') as NodeListOf<SVGElement>
        showPorts(ports, false)
      },
    } as NsGraph.IEvent<'node:mouseleave'>,
  ])
})
