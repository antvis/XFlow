import React from 'react'
import { Select } from 'antd'
import { FormItemHeight } from '../constants'

interface IProps {
  label?: string
  value?: string
  options?: {
    label: string | number
    value: string | number
  }[]
  width?: number | string
  onChange?: (value: string) => void
}

const SelectField: React.FC<IProps> = props => {
  const { label = '箭头', value, onChange, options = [], width } = props
  return (
    <div className="group">
      <label>{label}</label>
      <Select
        size="small"
        value={value}
        style={{
          width,
          height: FormItemHeight,
        }}
        getPopupContainer={trigger => trigger.parentNode}
        optionFilterProp="children"
        onChange={(v: string) => {
          onChange?.(v)
        }}
        filterOption={(input, option) => {
          const { label: text = '' } = option
          if (typeof text === 'string') {
            return text.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          return text.toString().indexOf(input.toLowerCase()) >= 0
        }}
        options={options}
      />
    </div>
  )
}

export default SelectField
