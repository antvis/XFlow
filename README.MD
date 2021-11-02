# XFlow

## Getting Started

1. 安装依赖

```
 yarn --registry=https://registry.npmjs.org
```

1. Bootstrap

完成 bootstrap

```bash
 yarn bootstrap
```

2. 启动文档网站

启动 xflow 文档站点

```bash
$ yarn start
```

## 开发

1. 安装依赖

```bash
yarn --registry=https://registry.npmjs.org
```

2. 启动 dev server

新建 terminal 监听 xflow-core 的文件变化，等待 watch 服务启动成功后执行下个命令。

```bash
 yarn run doc:core
```

新建 terminal 监听 xflow-extension 的文件变化，等待 watch 服务启动成功后执行下个命令。

```bash
 yarn run doc:ext
```

新建 terminal 监听 xflow 的文件变化，等待 watch 服务启动成功后执行下个命令。

```bash
 yarn run doc:main
```

3. 启动文档网站

启动 xflow 文档站点

```bash
$ yarn run dev:docs
```
