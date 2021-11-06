/**
 * title: 基础使用
 * desc: |
 *  使用 formSchemaService 函数返回的数据作为form的schema <br>
 *  schema 中的 shape 字段决定渲染的组件 <br>
 *  用户修改表单项后会触发 formValueUpdateService 的回调，回调中可以保存数据 <br>
 */
import React from 'react'
import type { NsNodeCmd, NsGraph } from '@antv/xflow'
import {
  XFlow,
  XFlowCanvas,
  JsonSchemaForm,
  createGraphConfig,
  NsJsonSchemaForm,
  XFlowNodeCommands,
} from '@antv/xflow'
import { set } from 'lodash'
import { onLoad } from './graph-config'
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
  /** ControlShape的Enum */
  const { ControlShape } = NsJsonSchemaForm

  /** 保存form的values */
  export const formValueUpdateService: NsJsonSchemaForm.IFormValueUpdateService = async args => {
    const { values, commandService, targetData } = args
    const updateNode = (node: NsGraph.INodeConfig) => {
      return commandService.executeCommand<NsNodeCmd.UpdateNode.IArgs>(
        XFlowNodeCommands.UPDATE_NODE.id,
        { nodeConfig: node },
      )
    }
    console.log('formValueUpdateService  values:', values, args)
    const nodeConfig: NsGraph.INodeConfig = {
      ...targetData,
    }
    values.forEach(val => {
      set(nodeConfig, val.name, val.value)
    })
    updateNode(nodeConfig)
  }

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
            groups: [],
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
          groups: [
            {
              name: 'group1',
              controls: [
                {
                  name: 'label',
                  label: '节点Label',
                  shape: ControlShape.INPUT,
                  value: targetData.label,
                },
                {
                  name: 'x',
                  label: 'x',
                  shape: ControlShape.FLOAT,
                  value: targetData.x,
                },
                {
                  name: 'y',
                  label: 'y',
                  shape: ControlShape.FLOAT,
                  value: targetData.y,
                },
              ],
            },
          ],
        },
      ],
    }
  }
}

const XFlowDemo: React.FC<IDemoProps> = props => {
  const graphConfig = useGraphConfig(props)

  return (
    <XFlow onLoad={onLoad} className="xflow-workspace">
      <XFlowCanvas
        config={graphConfig}
        position={{ top: 0, bottom: 0, left: 0, right: 290 }}
      ></XFlowCanvas>
      <JsonSchemaForm
        formSchemaService={NsJsonForm.formSchemaService}
        formValueUpdateService={NsJsonForm.formValueUpdateService}
        position={{ top: 0, bottom: 0, right: 0, width: 290 }}
      />
    </XFlow>
  )
}

export default XFlowDemo
