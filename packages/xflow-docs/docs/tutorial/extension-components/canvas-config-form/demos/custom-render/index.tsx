/**
 * title: 自定义渲染
 * desc: |
 *   支持使用自定义渲染来支持更复杂的业务场景 <br>
 *   配置一个函数决定是否用自定义组件代替form的渲染 <br>
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
export interface IDemoProps {}

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
    if (!targetData) {
      return
    }
    const updateNode = (node: NsGraph.INodeConfig) => {
      return commandService.executeCommand<NsNodeCmd.UpdateNode.IArgs>(
        XFlowNodeCommands.UPDATE_NODE.id,
        { nodeConfig: node },
      )
    }
    console.log('formValueUpdateService  values:', values)
    const nodeConfig: NsGraph.INodeConfig = {
      ...targetData,
    }
    values.forEach(val => {
      set(nodeConfig, val.name, val.value)
    })
    updateNode(nodeConfig)
  }

  export const getCustomRenderComponent: NsJsonSchemaForm.ICustomRender = (
    targetType,
    targetData,
  ) => {
    console.log(targetType, targetData)
    if (targetType === 'node') {
      return () => (
        <div className="custom-form-component"> node: {targetData?.label} custom componnet </div>
      )
    }
    if (targetType === 'canvas') {
      return () => <div className="custom-form-component"> canvas custom componnet </div>
    }

    return null
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
      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 0, right: 290 }} />
      <JsonSchemaForm
        formSchemaService={NsJsonForm.formSchemaService}
        getCustomRenderComponent={NsJsonForm.getCustomRenderComponent}
        position={{ top: 0, bottom: 0, right: 0, width: 290 }}
      />
    </XFlow>
  )
}

export default XFlowDemo
