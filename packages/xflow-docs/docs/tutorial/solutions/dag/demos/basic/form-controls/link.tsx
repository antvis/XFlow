import type { NsJsonSchemaForm } from '@antv/xflow'
import React from 'react'

export const LinkShape: React.FC<NsJsonSchemaForm.IControlProps> = props => {
  const { controlSchema } = props
  return (
    <div style={{ padding: '8px 0px', marginBottom: '8px' }}>
      <a href={controlSchema.value as string} target="_blank" style={{ color: '#3057e3' }}>
        {controlSchema.label}
      </a>
    </div>
  )
}
