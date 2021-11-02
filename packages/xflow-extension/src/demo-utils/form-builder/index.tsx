import type { ComponentClass, FunctionComponent } from 'react'
import React from 'react'
import type { FormInstance } from 'antd'
import { Form, Button } from 'antd'
import type { Rule } from 'rc-field-form/es/interface'

export interface IFormSchema {
  name: string
  label: string
  rules?: Rule[]
  render: string | FunctionComponent<any> | ComponentClass<any, any>
  renderProps?: any
}

interface IProps<T> {
  onFinish: (values: T) => Promise<void>
  initialValues: T
  form: FormInstance
  formItems: IFormSchema[]
}

export function FormBuilder<T>(props: IProps<T>) {
  const { initialValues, form, formItems = [], onFinish } = props
  if (!form) {
    return null
  }
  return (
    <Form<T>
      size="small"
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      initialValues={initialValues}
      style={{ padding: '8px 12px' }}
    >
      {formItems.map(item => (
        <Form.Item label={item.label} name={item.name} rules={item.rules}>
          {React.createElement(item.render, item.renderProps)}
        </Form.Item>
      ))}
      <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          执行命令
        </Button>
      </Form.Item>
    </Form>
  )
}
