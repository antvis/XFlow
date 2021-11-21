---
title: 如何扩展
order: 1
group:
  path: /tutorial-advanced
  title: 自定义组件
  order: 6
nav:
  title: 教程
  path: /docs
  order: 1
---

### XFlow 核心模块

<img loading="lazy" class="ne-image ne-image-preview" src="https://intranetproxy.alipay.com/skylark/lark/0/2021/png/27869/1631779236425-7c9cb2c8-080d-4f27-80fb-b390e3ebdac3.png?x-oss-process=image%2Fresize%2Cw_1072%2Climit_0" alt="image.png" title="image.png" width="536">

### UI 组件 和 Graph 的调用关系

<img src="https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*_74NSZjuTTQAAAAAAAAAAAAAARQnAQ" style="display: block;padding: 12px 0;width: 75%"/>

## 核心模块

|                                       名称 |                   配置项 | 描述                                    |
| -----------------------------------------: | -----------------------: | --------------------------------------- |
|     [Model](/docs/tutorial-advanced/model) | createModelServiceConfig | 使用全局状态                            |
| [Command](/docs/tutorial-advanced/command) |          createCmdConfig | 使用 Command 执行 X6 api/改变 全局 状态 |
|       [Hook](/docs/tutorial-advanced/hook) |         createHookConfig | 使用 Hook 扩展 Command 逻辑             |
