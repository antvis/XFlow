import { create } from 'zustand';
import { produce } from 'immer';
import type { NodeOptions, EdgeOptions } from '../types';

export type Command =
  | 'init'
  | 'addNodes'
  | 'removeNodes'
  | 'updateNode'
  | 'addEdges'
  | 'removeEdges'
  | 'updateEdge';

export type ChangeItem = {
  command: Command;
  data: any;
};

type State = {
  changeList: ChangeItem[];
  nodes: NodeOptions[];
  edges: EdgeOptions[];
};

type Actions = {
  initData: (data: { nodes: NodeOptions[]; edges: EdgeOptions[] }) => void;
  addNodes: (ns: NodeOptions[]) => void;
  removeNodes: (ids: string[]) => void;
  updateNode: (id: string, data: Partial<NodeOptions>) => void;
  updateNodeSilent: (id: string, data: Partial<NodeOptions>) => void;
  addEdges: (es: EdgeOptions[]) => void;
  removeEdges: (ids: string[]) => void;
  updateEdge: (id: string, data: Partial<EdgeOptions>) => void;
  updateEdgeSilent: (id: string, data: Partial<EdgeOptions>) => void;
  addEdgesSilent: (es: EdgeOptions[]) => void;
  clearChangeList: () => void;
};

export const useGraphStore = create<State & Actions>((set) => ({
  nodes: [],
  edges: [],
  changeList: [],

  initData: (data) =>
    set(
      produce((state: State) => {
        state.nodes = data.nodes;
        state.edges = data.edges;
        state.changeList.push({
          command: 'init',
          data,
        });
      }),
    ),

  addNodes: (ns: NodeOptions[]) =>
    set(
      produce((state: State) => {
        state.nodes.push(...ns);
        state.changeList.push({
          command: 'addNodes',
          data: ns,
        });
      }),
    ),

  removeNodes: (ids: string[]) =>
    set(
      produce((state: State) => {
        state.nodes = state.nodes.filter((n) => !ids.includes(n.id!));
        state.changeList.push({
          command: 'removeNodes',
          data: ids,
        });
      }),
    ),

  updateNode: (id: string, data: Partial<NodeOptions>) =>
    set(
      produce((state: State) => {
        const node = state.nodes.find((n) => n.id === id);
        if (node) {
          Object.assign(node, data);
        }
        state.changeList.push({
          command: 'updateNode',
          data: { id, data },
        });
      }),
    ),

  addEdges: (es: EdgeOptions[]) =>
    set(
      produce((state: State) => {
        state.edges.push(...es);
        state.changeList.push({
          command: 'addEdges',
          data: es,
        });
      }),
    ),

  removeEdges: (ids: string[]) =>
    set(
      produce((state: State) => {
        state.edges = state.edges.filter((n) => !ids.includes(n.id!));
        state.changeList.push({
          command: 'removeEdges',
          data: ids,
        });
      }),
    ),

  updateEdge: (id: string, data: Partial<EdgeOptions>) =>
    set(
      produce((state: State) => {
        const edge = state.edges.find((n) => n.id === id);
        if (edge) {
          Object.assign(edge, data);
        }
        state.changeList.push({
          command: 'updateEdge',
          data: { id, data },
        });
      }),
    ),

  updateNodeSilent: (id: string, data: Partial<NodeOptions>) =>
    set(
      produce((state: State) => {
        const node = state.nodes.find((n) => n.id === id);
        if (node) {
          Object.assign(node, data);
        }
      }),
    ),

  updateEdgeSilent: (id: string, data: Partial<EdgeOptions>) =>
    set(
      produce((state: State) => {
        const edge = state.edges.find((n) => n.id === id);
        if (edge) {
          Object.assign(edge, data);
        }
      }),
    ),

  addEdgesSilent: (es: EdgeOptions[]) =>
    set(
      produce((state: State) => {
        state.edges.push(...es);
      }),
    ),

  clearChangeList: () =>
    set(
      produce((state: State) => {
        state.changeList = [];
      }),
    ),
}));
