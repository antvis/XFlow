---
title: GraphZoom 画布缩放
order: 39
group:
  path: /api/commands
  title: Command 命令
  order: 2
nav:
  title: API
  path: /api
  order: 1
---

# 画布缩放

XFlow 提供画布缩放的命令 `XFlowGraphCommands.GRAPH_ZOOM`, 通过改命令可以实现画布的缩放。

## 画布缩放示例

<code src="./demos/index.tsx" />

## GraphZoom 命令参数(IArgs)

|                   名称 |                       类型 |  必选 |     默认值 | 描述               |
| --------------------: | -------------------------: | ---: | --------: | ------------------|
| factor                | number 、 'fit' 、'real' |    ✓ | undefined    | 缩放比例            |
| zoomOptions.absolute  | boolean                 |      | undefined     | 是否为绝对缩放  |
| zoomOptions.minScale  | number                  |      | undefined     | 最小缩放比例      |
| zoomOptions.maxScale  | number                  |      | undefined     | 最大缩放比例      |
| zoomOptions.scaleGrid | number                  |      | undefined     | 修正缩放比例为 scaleGrid 的整数倍 |
| zoomOptions.center    | Point.PointLike         |      | undefined     | 缩放中心      |
| zoomFitPadding        | number                  |      | undefined     | 自适应Padding参数(边距)   |


### factor为number

当 zoomOptions.absolute 为 true 时, 表示将画布缩放到 factor 代表的值, 否则 factor 表示放大/缩小的因子, 当 factor 为正数时表示放大画布, 当 factor 为负数时表示缩小画布。

### factor为real

画布缩放比例为1, 同时画布内容居中。

### factor为fit

缩放画布内容, 使画布内容充满视口。

