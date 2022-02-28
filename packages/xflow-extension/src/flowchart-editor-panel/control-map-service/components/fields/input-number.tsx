import React from 'react'
import { InputNumber } from 'antd'
import { FormItemHeight } from '../constants'

export interface IProps {
  label?: string
  value?: number
  min?: number
  max?: number
  width?: number
  step?: number
  onChange?: (value: number) => void
}

const InputNumberFiled: React.FC<IProps> = props => {
  const { label, value, onChange, min,max ,width, step } = props
  return (
    <div className="group">
      {label && <label>{label}</label>}
      <InputNumber
        value={value}
        min={min}
        max={max}
        step={step}
        style={{
          width,
          height: FormItemHeight,
        }}
        onChange={(v: number) => {
          onChange?.(v)
        }}
      />
    </div>
  )
}

export default InputNumberFiled
