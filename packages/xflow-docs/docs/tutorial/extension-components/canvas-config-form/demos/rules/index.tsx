/**
 * title: 校验规则
 * desc: |
 *  支持rules，参考antd rules 配置 https://ant.design/components/form-cn/#Rule  <br>
 *  校验错误可以在formValueUpdateService中通过allFields数组的errors字段获取到
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
            name: '配置字段规则',
            groups: [
              {
                name: 'Group1',
                controls: [
                  {
                    name: 'field1',
                    label: '长度校验 ',
                    shape: ControlShape.INPUT,
                    rules: [{ message: 'min > 3 and max < 10', min: 3, max: 10 }],
                  },
                  {
                    name: 'field2',
                    label: 'email',
                    shape: ControlShape.INPUT,
                    rules: [{ type: 'email', message: '请输入email' }],
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
        formSchemaService={NsJsonForm.formSchemaService}
        formValueUpdateService={NsJsonForm.formValueUpdateService}
        position={{ top: 0, bottom: 0, right: 0, width: 290 }}
      />
    </XFlow>
  )
}

export default XFlowDemo
