/**
 * title: 配置联动对象
 * desc: |
 *  支持 'edge' 选中时更新表单  <br>
 *  默认支持['node', 'canvas']选中时，更新表单的渲染。 <br>
 *  可以通过 targetType 属性来支持更多元素的选中时更新表单：'edge','group' <br>
 */
import React from 'react'
import type { NsNodeCmd, NsEdgeCmd, NsGraph } from '@antv/xflow'
import {
  XFlow,
  XFlowCanvas,
  JsonSchemaForm,
  createGraphConfig,
  NsJsonSchemaForm,
  XFlowNodeCommands,
  XFlowEdgeCommands,
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
    const updateEdge = (edge: NsGraph.IEdgeConfig) => {
      return commandService.executeCommand<NsEdgeCmd.UpdateEdge.IArgs>(
        XFlowEdgeCommands.UPDATE_EDGE.id,
        { edgeConfig: edge },
      )
    }
    const data = {
      ...targetData,
    }
    values.forEach(val => {
      set(data, val.name, val.value)
    })
    console.log('formValueUpdateService  values:', values, data)
    if (args.targetType === 'edge') {
      updateEdge(data as NsGraph.IEdgeConfig)
    } else if (args.targetType === 'node') {
      updateNode(data as NsGraph.INodeConfig)
    }
  }

  /** 根据选中的节点更新formSchema */
  export const formSchemaService: NsJsonSchemaForm.IFormSchemaService = async args => {
    const { targetData, targetType } = args
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
    if (targetType === 'edge') {
      return {
        /** 配置一个Tab */
        tabs: [
          {
            /** Tab的title */
            name: '边配置',
            groups: [
              {
                name: 'group1',
                controls: [
                  {
                    name: 'label',
                    label: 'Edge Label',
                    shape: ControlShape.INPUT,
                    value: targetData.label,
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
        targetType={['node', 'edge', 'canvas']}
        formSchemaService={NsJsonForm.formSchemaService}
        formValueUpdateService={NsJsonForm.formValueUpdateService}
        position={{ top: 0, bottom: 0, right: 0, width: 290 }}
      />
    </XFlow>
  )
}

export default XFlowDemo
