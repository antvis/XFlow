---
title: DAG 解决方案
order: 1
group:
  path: /tutorial/solutions
  title: 解决方案
  order: 3
nav:
  title: 教程
  path: /docs
  order: 1
---

## DAG 图编辑解决方案

<code src="./demos/basic/index.tsx" compact transform classname="dag-solution" />

## DAG

### what is DAG：

DAG: 在图论中，如果一个有向图从任意顶点出发无法经过若干条边回到该点，则这个图是一个有向无环图（DAG, Directed Acyclic Graph）。利用 DAG 图的数据结构可以使用算法解决拓扑排序/构建子图/路径查找等问题，因被应用在任务调度/因果结构/族谱血缘等场景。

## 功能介绍

### 节点交互（Node）

图由节点和连接这些节点的边所构成, 图编辑的第一步需要实现节点的的新建和删除，XFlow 流程图解决方案内置节点面板组件和事件封装来实现节点的增删改查交互。

<img src="https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*_-PERKth6egAAAAAAAAAAAAAARQnAQ" style="display: block;padding: 12px 0;width: 61.88%;"/>

### 连线交互（Edge）

图编辑的第二步需要实现节点间连线的增，删，改，查的交互
<img src="https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*xKGASoivL-wAAAAAAAAAAAAAARQnAQ" style="display: block;padding: 12px 0;width: 61.88%;" />

### 群组交互（Group）

在节点和边的基础上我们还可以把有逻辑关系的节点组装成组
<img src="https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*lgNQRYOtEI8AAAAAAAAAAAAAARQnAQ" style="display: block;padding: 12px 0;width: 61.88%;" />

### 画布交互（Graph）

XFlow 内置累常用的画布缩放，复制粘贴，撤销重做，MiniMap 等能力。
<img src="https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*cRchRaLf_6gAAAAAAAAAAAAAARQnAQ" style="display: block;padding: 12px 0;width: 61.88%;"/>

### DAG 交互（Graph）

内置 DAG 特需的执行/停止执行/轮询更新画布节点状态的交互
<img src="https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*4SkDRpv79goAAAAAAAAAAAAAARQnAQ" style="display: block;padding: 12px 0;width: 61.88%;"/>

## FAQ

### 定制连线交互逻辑

<code src="./demos/port-config/index.tsx" compact transform classname="dag-solution" />

### 定制动态链接桩

<code src="./demos/dynamic-ports/index.tsx" compact transform classname="dag-solution" />

### 支持左右布局

<code src="./demos/layout/index.tsx" compact transform classname="dag-solution" />
