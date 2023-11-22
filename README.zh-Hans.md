[English (US)](README.md) | 简体中文

<p align="center"><strong>用于构建图编辑应用的 React 组件</strong></p>

## 特性

- 🌱 　 简单的使用方式: 提供了更贴合 React 组件的使用方式。
- 🚀 　 统一的状态管理: 业务数据和图数据可以统一管理。
- 🧲 　 支持多画布模式: 每个画布组件拥有单独的状态和实例。
- 💯 　 开箱即用的配套功能: 提供大量的开箱即用的图编辑组件。 |

## 安装

```shell
# npm
$ npm install @antv/xflow --save

# yarn
$ yarn add @antv/xflow

# pnpm
$ pnpm add @antv/xflow
```

## 示例

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

## 文档

XFlow 2.0 的文档还在紧急开发中，如果你想了解使用方式，可以参
考[代码示例](https://github.com/antvis/XFlow/tree/2.0/apps/basic/src/pages)。

## 本地开发

```shell
$ pnpm bootstrap
$ pnpm dev
```

## 参与共建

如果希望参与到 XFlow 的开发中，请遵从我们的[贡献指南](/CONTRIBUTING.zh-CN.md)。如果你贡
献度足够活跃，你可以申请成为社区协作者。

<a href="https://github.com/antvis/xflow/graphs/contributors">
  <img src="/CONTRIBUTORS.svg" alt="Contributors" width="740" />
</a>

## 开源协议

该项目的代码和文档基于 [MIT License](/LICENSE) 开源协议。
