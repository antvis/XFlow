English (US) | [简体中文](README.zh-Hans.md)

<p align="center"><strong>React component for building interactive diagrams</strong></p>

## Features

- 🌱 　 Easy-to-use: Provides a more appropriate way to use React components.
- 🚀 　 Unified state management: Service data and graph data can be managed in a
  unified manner.
- 🧲 　 Supports multi-graph mode: Each graph component has a separate state and graph
  instance.
- 💯 　 Out of the box features: There are a lot of diagram components out of the box.

## Installation

```shell
# npm
$ npm install @antv/xflow --save

# yarn
$ yarn add @antv/xflow

# pnpm
$ pnpm add @antv/xflow
```

## Usage

```tsx
const Page = () => {
  return (
    <XFlow>
      <XFlowGraph
        zoomable
        pannable
        centerView
        fitView
        connectionEdgeOptions={{
          attrs: {
            line: {
              stroke: '#8f8f8f',
              strokeWidth: 1,
            },
          },
        }}
      />
      <Grid type="mesh" options={{ color: '#ccc', thickness: 1 }} />
      <Clipboard />
      <History />
      <Snapline sharp />
      <Transform resizing rotating />
    </XFlow>
  );
};
```

## Documentation

The documentation for XFlow 2.0 is still being developed urgently, so if you want to
know how to use it, you can refer to the
[code examples](https://github.com/antvis/XFlow/tree/2.0/apps/basic/src/pages).

## Development

```shell
$ pnpm bootstrap
$ pnpm dev
```

## Contributing

To become a contributor, please follow our [contributing guide](/CONTRIBUTING.md). If
you are an active contributor, you can apply to be a outside collaborator.

<a href="https://github.com/antvis/xflow/graphs/contributors">
  <img src="/CONTRIBUTORS.svg" alt="Contributors" width="740" />
</a>

## License

The scripts and documentation in this project are released under the
[MIT License](/LICENSE).
