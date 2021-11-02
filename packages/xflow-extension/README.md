# @antv/xflow-extension

## Getting Started

Install dependencies

```bash
$ npm i
```

watch file change

```bash
$ npm start
```

release version

```bash
$ npm run release
```

## 开发注意：

1. index 文件需要 named export， 不要使用 export \* from 'xxx'的 形式

2. 更新了 export 后还需要手动更新 xflow/src/extension.ts 的 export
