import { useGraphEvent, useGraphInstance } from '@antv/xflow';

const Connector = () => {
  const graph = useGraphInstance();

  useGraphEvent('node:mouseenter', () => {
    const ports = graph?.container.querySelectorAll(
      '.x6-port-body',
    ) as NodeListOf<SVGElement>;
    showPorts(ports, true);
  });

  useGraphEvent('node:mouseleave', () => {
    const ports = graph?.container.querySelectorAll(
      '.x6-port-body',
    ) as NodeListOf<SVGElement>;
    showPorts(ports, false);
  });

  function showPorts(ports: NodeListOf<SVGElement>, show: boolean) {
    for (let i = 0, len = ports.length; i < len; i = i + 1) {
      ports[i].style.visibility = show ? 'visible' : 'hidden';
    }
  }
  return null;
};

export { Connector };
