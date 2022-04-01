import React from 'react'
import styles from './dnd-node.module.less'

export const DndNode = props => {
  const { size = { width: 126, height: 104 }, data } = props
  const { width, height } = size
  const { label, stroke, fill, fontFill, fontSize } = data

  return (
    <div
      className={styles.container}
      style={{
        width,
        height,
        borderColor: stroke,
        backgroundColor: fill,
        color: fontFill,
        fontSize,
      }}
    >
      <span>{label}</span>
    </div>
  )
}
