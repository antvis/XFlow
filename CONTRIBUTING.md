English (US) | [简体中文](CONTRIBUTING.zh-Hans.md)

# Contributing

## Development

Make sure you have [pnpm](https://pnpm.io/installation) and
[Turborepo](https://turbo.build/repo/docs/installing) installed globally.

```bash
npm -g install pnpm nx
npm -g exec pnpm setup
```

### First time setup

```bash
pnpm bootstrap
```

> This will install deps with `pnpm install`, ant then setup all packages with
> `nx run-many setup`.

### Starting the dev server

```bash
pnpm dev
```

The example app will be available at http://localhost:8000 by default.

### Formatting

```bash
pnpm fix
# run ESLint/Stylelint/Prettier and attempt to fix found issues
```

### Linting and testing

```bash
pnpm lint
pnpm test
```

### Building

```bash
pnpm build
```

You may then serve the built app with `pnpm serve`.

### Per-package operations

[https://pnpm.io/filtering](https://pnpm.io/filtering)

Use either the package name (the `"name"` field in `package.json`) or the **relative**
path to the package's folder (must be prefixed with `./`) to specify the package(s) on
which the command should be run.

```bash
pnpm --filter <package> <command> [...]

pnpm --filter web add react react-dom
pnpm --filter ./apps/web add react react-dom
# add react and react-dom as dependencies to the package named "web"
# whose folder is located at ./apps/web

pnpm --filter "@scope/*" run clean
pnpm --filter "./packages/*" run clean
# use glob to select multiple packages, the pattern must be quoted
```

#### Adding dependencies

[https://pnpm.io/cli/add](https://pnpm.io/cli/add)

`add` for normal dependencies `dependencies`

```bash
pnpm --filter <package> add [dependency ...]
# pnpm --filter web add react react-dom
```

`add -D` for development dependencies `devDependencies`

```bash
pnpm --filter <package> add -D [dependency ...]
# pnpm --filter web add -D jest
```

`add --save-peer` for peer dependencies `peerDependencies`

```bash
pnpm --filter <package> add --save-peer [dependency ...]
# pnpm --filter ui add --save-peer react "monaco-editor@^0.31.0"
```

💡 for adding workspace packages as dependencies, use the same command as above, but
append `--workspace`

```bash
pnpm --filter <package> add [--save-dev|--save-peer] [dependency ...] --workspace
# pnpm --filter web add -D eslint-config-project --workspace
```
