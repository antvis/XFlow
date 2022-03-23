import React from 'react'
import { Item } from './position'

interface IProps {
  width?: number
  height?: number
  label?: string
  onChange?: (key: string, value: number) => void
}

const Size: React.FC<IProps> = props => {
  const { width, height, label = '尺寸', onChange } = props

  return (
    <div className="group">
      <label>{label}</label>
      <div className="split">
        <Item
          addonBefore="W"
          value={width}
          onChangeItem={(value: number) => {
            onChange?.('width', value)
          }}
        />
        <Item
          addonBefore="H"
          value={height}
          onChangeItem={(value: number) => {
            onChange?.('height', value)
          }}
        />
      </div>
    </div>
  )
}

export default Size
