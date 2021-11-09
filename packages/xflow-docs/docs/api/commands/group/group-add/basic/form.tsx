import type { IFormSchema } from '@antv/xflow'
import type { NsGraph, NsGroupCmd } from '@antv/xflow'
import React from 'react'
import { Card, Form, Input, message, Button } from 'antd'
import { usePanelContext, WorkspacePanel, FormBuilder, uuidv4 } from '@antv/xflow'
import { XFlowGroupCommands } from '@antv/xflow'
import { GROUP_NODE_RENDER_ID, GROUP_COLLAPSED_SIZE } from './constant'
export const width = 100
export const height = 40

interface IFormValues extends NsGraph.IGroupConfig {
  id: string
  label: string
  renderKey: string
}

/**
  // 子节点元素集合  
  groupChildren?: string[]
  // group Header 
  groupHeaderHeight?: number
  // group 内边距  
  groupPadding?: number
 */
const formItems: IFormSchema[] = [
  {
    name: 'id',
    label: 'id',
    rules: [{ required: true }],
    renderProps: { disabled: true },
    render: Input,
  },
  {
    name: 'groupChildren',
    label: 'groupChildren',
    rules: [{ required: true }],
    renderProps: { disabled: true },
    render: Input,
  },
  {
    name: 'renderKey',
    label: 'renderKey',
    rules: [{ required: true }],
    renderProps: { disabled: true },
    render: Input,
  },
  {
    name: 'groupHeaderHeight',
    label: 'groupHeaderHeight',
    rules: [{ required: true }],
    render: Input,
  },
  {
    name: 'groupPadding',
    label: 'groupPadding',
    render: Input,
  },
  {
    name: 'label',
    label: 'label',
    render: Input,
  },
]

export const CmdForm = () => {
  const { commandService } = usePanelContext()
  const [form] = Form.useForm<IFormValues>()
  const [hasGroup, setGroup] = React.useState(false)
  const onFinish = async (values: IFormValues) => {
    const nodeConfig = {
      ...values,
      groupHeaderHeight: parseInt(values.groupHeaderHeight as any, 10),
      groupPadding: parseInt(values.groupPadding as any, 10),
      groupCollapsedSize: GROUP_COLLAPSED_SIZE,
    }
    setGroup(true)
    console.log(nodeConfig)
    await commandService.executeCommand<NsGroupCmd.AddGroup.IArgs>(
      XFlowGroupCommands.ADD_GROUP.id,
      {
        nodeConfig: nodeConfig,
      },
    )

    message.success(`${XFlowGroupCommands.ADD_GROUP.label}: 命令执行成功`)
  }

  return (
    <FormBuilder<IFormValues>
      form={form}
      formItems={formItems}
      onFinish={onFinish}
      initialValues={{
        id: uuidv4(),
        groupChildren: ['node1', 'node2', 'node3', 'node4'],
        label: 'Group_1',
        groupHeaderHeight: 40,
        groupPadding: 12,
        renderKey: GROUP_NODE_RENDER_ID,
      }}
      submitButton={
        <Button type="primary" htmlType="submit" style={{ width: '100%' }} disabled={hasGroup}>
          执行命令
        </Button>
      }
    />
  )
}

export const FormPanel = () => {
  return (
    <WorkspacePanel position={{ top: 0, left: 0, bottom: 0, width: 230 }} className="panel">
      <Card title="Group Options" size="small" bordered={false}>
        <CmdForm />
      </Card>
    </WorkspacePanel>
  )
}
