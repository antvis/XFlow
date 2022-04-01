import React from 'react'

export const LinkShape = props => {
  const { controlSchema } = props
  return (
    <div style={{ padding: '8px 0px', marginBottom: '8px' }}>
      <a href={controlSchema.value} target="_blank" style={{ color: '#3057e3' }} rel="noreferrer">
        {controlSchema.label}
      </a>
    </div>
  )
}
