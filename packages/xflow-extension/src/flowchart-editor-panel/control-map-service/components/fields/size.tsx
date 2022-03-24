import React from 'react'
import { Item } from './position'

interface IProps {
  value: number[]
  onChange?: (key: string, value: number) => void
}

const Size: React.FC<IProps> = props => {
  const { value = [], onChange } = props
  const [width, height] = value

  return (
    <div className="group">
      <label>尺寸</label>
      <div className="split">
        <Item
          addonBefore="W"
          value={width}
          onChangeItem={(val: number) => {
            onChange?.('width', val)
          }}
        />
        <Item
          addonBefore="H"
          value={height}
          onChangeItem={(val: number) => {
            onChange?.('height', val)
          }}
        />
      </div>
    </div>
  )
}

export default Size
