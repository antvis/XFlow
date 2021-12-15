/**
 * title: 字段联动
 * desc: |
 *  使用 dependencies 字段来控制表单控件的enable和visible状态 <br>
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
            name: '字段联动显隐',
            groups: [
              {
                name: 'Group1',
                controls: [
                  {
                    name: 'isDisabled',
                    tooltip: '是否禁用联动',
                    label: '是否禁用联动',
                    shape: ControlShape.CHECKBOX,
                    defaultValue: false,
                  },
                  {
                    name: 'col2',
                    label: '根据Checkbox状态联动Disable状态',
                    shape: ControlShape.INPUT,
                    // 联动规则
                    dependencies: [
                      { name: 'isDisabled', condition: true, disabled: true, hidden: false },
                      { name: 'isDisabled', condition: false, disabled: false, hidden: false },
                    ],
                  },
                  {
                    name: 'isHidden',
                    tooltip: '是否显示/隐藏字段',
                    label: '是否隐藏字段',
                    shape: ControlShape.CHECKBOX,
                    defaultValue: true,
                  },
                  {
                    name: 'col2',
                    label: '根据Checkbox状态联动显示状态',
                    shape: ControlShape.INPUT,
                    // 联动规则
                    dependencies: [
                      { name: 'isHidden', condition: false, disabled: false, hidden: false },
                      { name: 'isHidden', condition: true, disabled: false, hidden: true },
                    ],
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
