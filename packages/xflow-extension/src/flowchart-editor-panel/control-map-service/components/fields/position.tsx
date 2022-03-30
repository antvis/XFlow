import React from 'react'
import { InputNumber } from 'antd'
import { FormItemHeight } from '../constants'

interface IProps {
  value?: number[]
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
  const { value = [], onChange } = props
  const [x, y] = value

  return (
    <div className="group">
      <label>位置</label>
      <div className="split">
        <Item
          addonBefore="X"
          value={x}
          onChangeItem={(val: number) => {
            onChange?.('x', val)
          }}
        />
        <Item
          addonBefore="Y"
          value={y}
          onChangeItem={(val: number) => {
            onChange?.('y', val)
          }}
        />
      </div>
    </div>
  )
}

export default Position
