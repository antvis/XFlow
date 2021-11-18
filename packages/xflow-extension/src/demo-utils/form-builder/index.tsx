import type { ComponentClass, FunctionComponent } from 'react'
import type { FormInstance, ButtonProps } from 'antd'
import type { Rule } from 'rc-field-form/es/interface'
import React from 'react'
import { Form, Button } from 'antd'

export interface IFormSchema {
  name: string
  label: string
  rules?: Rule[]
  render: string | FunctionComponent<any> | ComponentClass<any, any>
  renderProps?: any
  itemProps?: any
}

interface IProps<T> {
  className?: string
  onFinish: (values: T) => Promise<void>
  initialValues: T
  layout?: 'horizontal' | 'inline' | 'vertical'
  form: FormInstance
  formItems: IFormSchema[]
  buttonProps?: ButtonProps
  submitButton?: React.ReactNode
}

export function FormBuilder<T>(props: IProps<T>) {
  const {
    className,
    layout,
    initialValues,
    form,
    formItems = [],
    onFinish,
    submitButton,
    buttonProps,
  } = props
  if (!form) {
    return null
  }
  const style = layout === 'vertical' ? { padding: '0px 12px' } : { padding: '8px 12px' }
  return (
    <Form<T>
      size="small"
      form={form}
      style={style}
      layout={layout}
      onFinish={onFinish}
      className={className}
      initialValues={initialValues}
      labelCol={layout === 'vertical' ? { span: 24 } : { span: 8 }}
      wrapperCol={layout === 'vertical' ? { span: 24 } : { span: 16 }}
    >
      {formItems.map(item => (
        <Form.Item label={item.label} name={item.name} rules={item.rules} {...item.itemProps}>
          {React.createElement(item.render, item.renderProps)}
        </Form.Item>
      ))}
      <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
        {submitButton ? (
          submitButton
        ) : (
          <Button type="primary" htmlType="submit" style={{ width: '100%' }} {...buttonProps}>
            执行命令
          </Button>
        )}
      </Form.Item>
    </Form>
  )
}
