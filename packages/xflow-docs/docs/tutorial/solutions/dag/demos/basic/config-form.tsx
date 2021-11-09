import { controlMapService, ControlShapeEnum } from './form-controls'
import type { NsJsonSchemaForm } from '@antv/xflow'
import { MODELS } from '@antv/xflow'

export function delay(ms: number) {
  return new Promise(resolve => setTimeout(() => resolve(true), ms))
}

let i = 0
export const formSchemaService: NsJsonSchemaForm.IFormSchemaService = async args => {
  const { targetData, modelService, targetType } = args
  /** 可以使用获取 graphMeta */
  const graphMeta = await MODELS.GRAPH_META.useValue(modelService)
  console.log('formSchemaService', graphMeta, args)

  if (targetType === 'canvas') {
    return {
      tabs: [
        {
          name: 'GraphMeta',
          groups: [],
        },
      ],
    }
  }

  const nodeSchema: NsJsonSchemaForm.ISchema = {
    tabs: [
      {
        name: 'Tab1',
        groups: [
          {
            name: 'groupName',
            controls: [
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
                label: 'Link',
                name: 'Tab1-1',
                /** 使用自定义shape */
                shape: ControlShapeEnum.LINKSHAPE,
                disabled: false,
                required: true,
                tooltip: 'hello world',
                extra: 'hello world extra',
                placeholder: 'please write something',
                value: '',
                defaultValue: '', // 可以认为是默认值
                hidden: false,
                options: [{ title: '', value: '' }],
                originData: {}, // 原始数据
              },
              {
                label: 'Tab1-2',
                name: 'Tab1-2', // 也可以是数组
                shape: 'Input',
                disabled: false,
                required: true,
                tooltip: 'hello world',
                extra: 'hello world extra',
                placeholder: 'please write something',
                value: '',
                defaultValue: '', // 可以认为是默认值

                hidden: false,
                options: [{ title: '', value: '' }],
                originData: {}, // 原始数据
              },
              {
                label: 'Tab1-3',
                name: 'Tab1-3', // 也可以是数组
                shape: 'Input',
                disabled: false,
                required: true,
                tooltip: 'hello world',
                extra: 'hello world extra',
                placeholder: 'please write something',
                value: '',
                defaultValue: '', // 可以认为是默认值

                hidden: false,
                options: [{ title: '', value: '' }],
                originData: {}, // 原始数据
              },
              {
                label: 'Tab1-4',
                name: 'Tab1-4', // 也可以是数组
                shape: 'Input',
                disabled: false,
                required: true,
                tooltip: 'hello world',
                extra: 'hello world extra',
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
        name: 'Tab2',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                name: 'Tab2-1', // 也可以是数组
                label: 'Tab2-1',
                shape: 'Input',
                disabled: false,
                required: true,
                tooltip: 'hello world',
                extra: 'hello world extra',
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
                extra: 'hello world extra',
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
                extra: 'hello world extra',
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
          groups: [],
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

export const formValueUpdateService: NsJsonSchemaForm.IFormValueUpdateService = async args => {
  console.log('formValueUpdateService', args)
}

export { controlMapService }
