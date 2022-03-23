import React from 'react'
import { InputNumber } from 'antd'
import { FormItemHeight } from '../constants'

interface IProps {
  x?: number
  y?: number
  label?: string
  onChange?: (key: string, value: number) => void
}

export const Item = ({ value, onChangeItem, addonBefore }) => (
  <div className="addon-before-group">
    <InputNumber
      value={value}
      style={{ height: FormItemHeight, border: 'none' }}
      onChange={(v: number) => {
        onChangeItem(v)
      }}
    />
    <span>{addonBefore}</span>
  </div>
)

const Position: React.FC<IProps> = props => {
  const { label = '位置', x, y, onChange } = props

  return (
    <div className="group">
      <label>{label}</label>
      <div className="split">
        <Item
          addonBefore="X"
          value={x}
          onChangeItem={(value: number) => {
            onChange?.('x', value)
          }}
        />
        <Item
          addonBefore="Y"
          value={y}
          onChangeItem={(value: number) => {
            onChange?.('y', value)
          }}
        />
      </div>
    </div>
  )
}

export default Position
