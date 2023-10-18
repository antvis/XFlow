[English (US)](CONTRIBUTING.md) | 简体中文

# 贡献指南

## 开发

请确保有安装 [pnpm](https://pnpm.io/installation) 和
[Nx](https://turbo.build/repo/docs/installing)

```bash
npm -g install pnpm nx
npm -g exec pnpm setup
```

### 首次运行

```bash
pnpm bootstrap
```

> 这会 `pnpm install` 安装依赖，然后 `nx run-many --target=setup` 初始化所有包。

### 启动开发服务器

```bash
pnpm dev
```

默认在 http://localhost:8000 启动

### 代码格式化

```bash
pnpm fix
# 运行 ESLint/Stylelint/Prettier 并且尝试自动修正问题
```

### 检查及测试

```bash
pnpm lint
pnpm test
```

### 构建

```bash
pnpm build
```

构建产物可以通过 `pnpm serve` 命令进行预览。

### 对单个 package 进行操作

[https://pnpm.io/filtering](https://pnpm.io/filtering)

使用 package 的名称（`package.json` 中的 `"name"` 字段）或者 **相对路径**（必须以 `./`
开头）来指定要操作的 package.

```bash
pnpm --filter <package> <command> [...]

pnpm --filter web add react react-dom
pnpm --filter ./apps/web add react react-dom
# 将 react 和 react-dom 作为 dependencies 加到名为 web 的 package 中，其路径为 ./apps/web

pnpm --filter "@scope/*" run clean
pnpm --filter "./packages/*" run clean
# 使用 glob 来选择多个 package，表达式必须使用双引号包裹
```

#### 安装新依赖

[https://pnpm.io/cli/add](https://pnpm.io/cli/add)

使用以下命令：

`add` 安装普通依赖 `dependencies`

```bash
pnpm --filter <package> add [dependency ...]
# pnpm --filter web add react react-dom
```

`add -D` 安装开发依赖 `devDependencies`

```bash
pnpm --filter <package> add -D [dependency ...]
# pnpm --filter web add -D jest
```

`add --save-peer` 安装同伴依赖 `peerDependencies`

```bash
pnpm --filter <package> add --save-peer [dependency ...]
# pnpm --filter ui add --save-peer react "monaco-editor@^0.31.0"
```

💡 将内部 package 作为依赖，请使用与上面相同的命令并在命令末尾加上 `--workspace`

```bash
pnpm --filter <package> add [--save-dev|--save-peer] [dependency ...] --workspace
# pnpm --filter web add -D eslint-config-project --workspace
```

## 协作

### 提交信息

我们使用
[Angular 的提交规范](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commit-message-format)。

标题的格式是 `type: subject`:

- `type` 一个标签，表明这是一个什么提交（涉及什么样的变化）
- `subject` 提交内容的一句话描述
  - 使用英文的祈使句（这个提交会做什么）；首字母小写；不使用句号
- （我们暂时不使用 `scope`）

常用的 `type`:

- `fix` 这是一个修复缺陷的提交
- `feat` 这是一个添加新功能的提交
- `refactor` 这是一个对现有功能进行重构的提交
- `docs` 这个提交会更新文档（README/注释/...）
- `ci` 这个提交会对 CI 造成变化（改变了 ESLint 规则/升级了测试工具/更新了 GitHub
  Actions...）
- `chore` 其它不满足以上描述的变化（比如常规的依赖更新）

**如果你发现你的提交同时满足多个标签，你的提交需要被拆分成多个。**

示例：

```
feat: add ahooks
ci: update tooling config
refactor: remove useless ide-scql
docs: make issues/PR templates bilingual
```

### 来源分支

分支命名采用和提交信息相似的规范。格式是 `type/subject`，其中 `subject` 使用
`kebab-case` （全小写，使用 - 作为连字符），**分支名不需要加入你的名字。**
