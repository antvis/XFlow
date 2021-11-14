/**
 * title: 基础使用
 * desc: |
 *  通过 Schema 中的 shape 字段和 controlMapService 配合可以渲染自定义的表单项目
 */
import React from 'react'
import type { NsJsonSchemaForm } from '@antv/xflow'
import { XFlow, XFlowCanvas, JsonSchemaForm, createGraphConfig } from '@antv/xflow'
import { controlMapService, ControlShapeEnum } from './custom-shapes'
import { onLoad } from './graph-config'
import '@antv/xflow/dist/index.css'
import './index.less'

/**  Demo Props  */
export interface IDemoProps {
  anything: string
}

/**  graphConfig：配置Graph  */
export const useGraphConfig = createGraphConfig<IDemoProps>(graphConfig => {
  graphConfig.setDefaultNodeRender(props => {
    return <div className="react-node"> {props.data.label} </div>
  })
})

namespace NsJsonForm {
  /** 根据选中的节点更新formSchema */
  export const formSchemaService: NsJsonSchemaForm.IFormSchemaService = async args => {
    const { targetData } = args
    console.log(`formSchemaService args:`, args)
    if (!targetData) {
      return {
        tabs: [
          {
            /** Tab的title */
            name: '画布配置',
            groups: [
              {
                name: 'group1',
                controls: [
                  {
                    name: 'link',
                    label: '这是一个自定义的Shape',
                    shape: ControlShapeEnum.LINK_SHAPE,
                  },
                  {
                    name: 'graph-json',
                    label: '自定义Shape: 展示Graph的JSON数据',
                    shape: ControlShapeEnum.EDITOR_SHAPE,
                  },
                ],
              },
            ],
          },
        ],
      }
    }

    return {
      /** 配置一个Tab */
      tabs: [
        {
          /** Tab的title */
          name: '节点配置',
          groups: [],
        },
      ],
    }
  }
}

const XFlowDemo: React.FC<IDemoProps> = props => {
  const graphConfig = useGraphConfig(props)

  return (
    <XFlow onLoad={onLoad} className="xflow-workspace">
      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 0, right: 290 }} />
      <JsonSchemaForm
        controlMapService={controlMapService}
        formSchemaService={NsJsonForm.formSchemaService}
        footerPosition={{ bottom: 0, left: 0, right: 0, height: 0 }}
        position={{ top: 0, bottom: 0, right: 0, width: 290 }}
      />
    </XFlow>
  )
}

export default XFlowDemo
