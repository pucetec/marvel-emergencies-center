import React from 'react'
import { Typography as MaterialTypography } from '@mui/material'

export const Typography = ({variant, align, paragraph, value, level, children}) => {
  return (
    <div>
      <MaterialTypography 
      variant={variant} 
      align={align} 
      paragraph={paragraph} 
      value={value} 
      level={level} 
      children={children} />
    </div>
  )
}
