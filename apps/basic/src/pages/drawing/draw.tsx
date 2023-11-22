/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Dom } from '@antv/xflow';
import {
  useGraphEvent,
  useGraphInstance,
  useGraphStore,
  Vector,
  Rectangle,
  Line,
  Polyline,
} from '@antv/xflow';
import { useCallback } from 'react';

const Draw = ({ type }: { type: string }) => {
  const graph = useGraphInstance();
  const addNodes = useGraphStore((state) => state.addNodes);

  const onDragStart = useCallback(
    ({
      e,
      x,
      y,
    }: {
      e: Dom.MouseDownEvent<any, any, any, any>;
      x: number;
      y: number;
    }) => {
      const data: any = (e.data = {
        ox: x,
        oy: y,
      });
      switch (type) {
        case 'line': {
          e.data.x1 = x;
          e.data.y1 = y;
          e.data.x2 = x;
          e.data.y2 = y;
          data.vel = Vector.create('line', { x1: x, y1: y, x2: x, y2: y });
          break;
        }
        case 'rectangle': {
          data.vel = Vector.create('rect', {
            x: x,
            y: y,
            width: 1,
            height: 1,
          });
          break;
        }
        case 'ellipse': {
          data.vel = Vector.create('ellipse', {
            cx: x,
            cy: y,
            rx: 1,
            ry: 1,
          });
          break;
        }
        case 'free': {
          data.vel = Vector.create('polyline');
          e.data.points = [[x, y]];
          break;
        }
        default:
        case 'pointer': {
          return;
        }
      }
      if (graph) {
        data.vel.appendTo(graph.view.stage);
        data.vel.addClass('preview-shape');
      }
    },
    [graph, type],
  );

  const onDrag = useCallback(
    ({
      e,
      x,
      y,
    }: {
      e: Dom.MouseMoveEvent<any, any, any, any>;
      x: number;
      y: number;
    }) => {
      const { ox, oy, vel } = e.data;
      const bbox = Rectangle.create(ox, oy, x - ox, y - oy);
      if (bbox.width === 0) bbox.width = 1;
      if (bbox.height === 0) bbox.height = 1;
      bbox.normalize();
      e.data.bbox = bbox;
      switch (type) {
        case 'line': {
          e.data.x2 = x;
          e.data.y2 = y;
          vel.attr({ x2: x, y2: y });
          break;
        }
        case 'rectangle': {
          vel.attr(bbox.toJSON());
          break;
        }
        case 'ellipse': {
          vel.attr({
            rx: bbox.width / 2,
            ry: bbox.height / 2,
            cx: bbox.x + bbox.width / 2,
            cy: bbox.y + bbox.height / 2,
          });
          break;
        }
        case 'free': {
          const { points } = e.data;
          points.push([x, y]);
          vel.attr('points', points.join(' '));
          break;
        }
      }
    },
    [type],
  );

  const onDragEnd = useCallback(
    ({ e }: { e: Dom.MouseUpEvent<any, any, any, any> }) => {
      const { vel, bbox } = e.data;
      console.log(vel, bbox);
      if (!bbox || !vel) {
        return;
      }
      vel.remove();
      const { x, y, width, height } = bbox;
      switch (type) {
        case 'line': {
          const { x1, x2, y1, y2 } = e.data;
          const line = new Line({ x: x1, y: y1 }, { x: x2, y: y2 });
          const angle = line.angle();
          const { start } = line.clone().rotate(angle, line.center);
          const length = line.length();
          addNodes([
            {
              shape: 'path',
              angle,
              x: start.x,
              y: start.y,
              width: line.length(),
              height: 1,
              attrs: {
                body: {
                  d: `M 0 0.5 H ${length}`,
                },
              },
            },
          ]);
          break;
        }
        case 'rectangle': {
          addNodes([
            {
              shape: 'rect',
              x,
              y,
              width,
              height,
            },
          ]);
          break;
        }
        case 'ellipse': {
          addNodes([
            {
              shape: 'ellipse',
              x,
              y,
              width,
              height,
            },
          ]);
          break;
        }
        case 'free': {
          const { points } = e.data;
          const geometry = new Polyline(points.join(' '));
          geometry.simplify({ threshold: 0.8 });
          const geometryBBox = geometry.bbox();
          addNodes([
            {
              shape: 'polyline',
              x: geometryBBox.x,
              y: geometryBBox.y,
              width: geometryBBox.width,
              height: geometryBBox.height,
              attrs: {
                body: {
                  refPoints: geometry.serialize(),
                },
              },
            },
          ]);
          break;
        }
      }
    },
    [type, addNodes],
  );

  useGraphEvent('blank:mousedown', onDragStart);
  useGraphEvent('node:mousedown', onDragStart);
  useGraphEvent('blank:mousemove', onDrag);
  useGraphEvent('node:mousemove', onDrag);
  useGraphEvent('blank:mouseup', onDragEnd);
  useGraphEvent('node:mouseup', onDragEnd);

  return null;
};

export default Draw;
