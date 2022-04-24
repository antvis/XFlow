import { controlMapService, ControlShapeEnum } from './form-controls'
import { MODELS /* , XFlowNodeCommands */ } from '@antv/xflow'
// import { set } from 'lodash'

export function delay(ms) {
  return new Promise(resolve => setTimeout(() => resolve(true), ms))
}

let i = 0
export const formSchemaService = async args => {
  const { targetData, modelService, targetType } = args
  /** 可以使用获取 graphMeta */
  const graphMeta = await MODELS.GRAPH_META.useValue(modelService)
  console.log('formSchemaService', graphMeta, args)

  if (targetType === 'canvas') {
    return {
      tabs: [
        {
          name: 'GraphMeta',
          groups: [
            {
              name: 'groupName',
              controls: [
                {
                  name: 'Tab2-1',
                  label: '项目名',
                  shape: 'Input', // /**  Form控件 shape的类型 */ https://github.com/antvis/XFlow/blob/master/packages/xflow-extension/src/canvas-json-schema-form/interface.tsx#L176
                  disabled: false,
                  required: true,
                  tooltip: '图的业务项目名',
                  extra: '和图的ID对应',
                  placeholder: 'please write something',
                  value: graphMeta.name,
                  defaultValue: '', // 可以认为是默认值
                  hidden: false,
                  options: [{ title: '', value: '' }],
                  originData: {}, // 原始数据
                },
                {
                  label: '图数据',
                  name: 'Tab1-0',
                  /** 使用自定义shape */
                  shape: ControlShapeEnum.EDITOR,
                  disabled: false,
                  required: true,
                  tooltip: 'JSON 数据',
                  placeholder: 'please write something',
                  value: '',
                  defaultValue: '', // 可以认为是默认值
                  hidden: false,
                  options: [{ title: '', value: '' }],
                  originData: {}, // 原始数据
                },
                {
                  label: '查看日志链接',
                  name: 'Tab1-1',
                  /** 使用自定义shape */
                  shape: ControlShapeEnum.LINKSHAPE,
                  disabled: false,
                  required: true,
                  tooltip: 'hello world',
                  placeholder: 'please write something',
                  value: '',
                  defaultValue: '', // 可以认为是默认值
                  hidden: false,
                  options: [{ title: '', value: '' }],
                  originData: {}, // 原始数据
                },
              ],
            },
          ],
        },
      ],
    }
  }

  const nodeSchema = {
    tabs: [
      {
        name: '基础设置',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: '流程名称',
                name: 'flowName',
                shape: 'Input',
                disabled: false,
                required: true,
                placeholder: '请输入流程名称',
                value: targetData.label,
              },
              {
                label: 'GraphEditor',
                name: 'Tab1-0',
                /** 使用自定义shape */
                shape: ControlShapeEnum.EDITOR,
                disabled: false,
                required: true,
                tooltip: 'hello world',
                placeholder: 'please write something',
                value: '',
                defaultValue: '', // 可以认为是默认值
                hidden: false,
                options: [{ title: '', value: '' }],
                originData: {}, // 原始数据
              },
              {
                label: 'Tab1-2',
                name: 'Tab1-2',
                shape: 'Input',
                disabled: false,
                required: true,
                tooltip: 'hello world',
                placeholder: 'please write something',
                value: '',
                defaultValue: '', // 可以认为是默认值
                hidden: false,
                options: [{ title: '', value: '' }],
                originData: {}, // 原始数据
              },
              {
                label: 'Tab1-3',
                name: 'Tab1-3',
                shape: 'Input',
                disabled: false,
                required: true,
                tooltip: 'hello world',
                placeholder: 'please write something',
                value: '',
                defaultValue: '', // 可以认为是默认值
                hidden: false,
                options: [{ title: '', value: '' }],
                originData: {}, // 原始数据
              },
              {
                label: 'Tab1-4',
                name: 'Tab1-4',
                shape: 'Input',
                disabled: false,
                required: true,
                tooltip: 'hello world',
                placeholder: 'please write something',
                value: '',
                defaultValue: '', // 可以认为是默认值
                hidden: false,
                options: [{ title: '', value: '' }],
                originData: {}, // 原始数据
              },
            ],
          },
        ],
      },
      {
        name: '高级设置',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                name: 'Tab2-1',
                label: 'Tab2-1',
                shape: 'Input',
                disabled: false,
                required: true,
                tooltip: 'hello world',
                placeholder: 'please write something',
                value: '',
                defaultValue: '', // 可以认为是默认值
                hidden: false,
                options: [{ title: '', value: '' }],
                originData: {}, // 原始数据
              },
              {
                label: 'Tab2-2',
                name: 'Tab2-2', // 也可以是数组
                shape: 'Input',
                disabled: false,
                required: true,
                tooltip: 'hello world',
                placeholder: 'please write something',
                value: '',
                defaultValue: '', // 可以认为是默认值
                hidden: false,
                options: [{ title: '', value: '' }],
                originData: {}, // 原始数据
              },
              {
                label: 'Tab2-3',
                name: 'Tab2-3', // 也可以是数组
                shape: 'Input',
                disabled: false,
                required: true,
                tooltip: 'hello world',
                placeholder: 'please write something',
                value: '',
                defaultValue: '', // 可以认为是默认值
                hidden: false,
                options: [{ title: '', value: '' }],
                originData: {}, // 原始数据
              },
            ],
          },
        ],
      },
    ],
  }

  await delay(100)
  if (targetData && i === 0) {
    i = 1
    return nodeSchema
  }

  if (targetData) {
    i = 0
    return {
      tabs: [
        {
          name: 'Tab3',
          groups: [
            {
              name: '',
              controls: [
                {
                  name: 'Tab3-1',
                  label: '算法配置1',
                  shape: 'Input',
                  disabled: false,
                  required: true,
                  tooltip: '算法配置1',
                  placeholder: 'please write something',
                  value: '',
                  defaultValue: '', // 可以认为是默认值
                  hidden: false,
                  options: [{ title: '', value: '' }],
                  originData: {}, // 原始数据
                },
                {
                  name: 'Tab3-2',
                  label: '算法配置2',
                  shape: 'Input',
                  disabled: false,
                  required: true,
                  tooltip: '算法配置2',
                  placeholder: 'please write something',
                  value: '',
                  defaultValue: '', // 可以认为是默认值
                  hidden: false,
                  options: [{ title: '', value: '' }],
                  originData: {}, // 原始数据
                },
              ],
            },
          ],
        },
      ],
    }
  }

  if (targetData) {
    return nodeSchema
  }

  return {
    tabs: [],
  }
}

export const formValueUpdateService = async args => {
  console.log('formValueUpdateService', args)
  // const { values, commandService, targetData } = args
  // const updateNode = (node) => {
  //   return commandService.executeCommand(
  //     XFlowNodeCommands.UPDATE_NODE.id,
  //     { nodeConfig: node },
  //   )
  // }
  // console.log('formValueUpdateService  values:', values, args)
  // const nodeConfig = {
  //   ...targetData,
  // }
  // values.forEach(val => {
  //   set(nodeConfig, val.name, val.value)
  // })
  // updateNode(nodeConfig)
}

export { controlMapService }
