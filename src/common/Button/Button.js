import React from 'react'
import { Button as MaterialButton }  from '@mui/material'
export const Button = ({variant, onClick, href, className, value }) => {
  return (
    <div className='ButtonSing'>
      <MaterialButton 
        variant={variant}
        onClick={onClick}
        href={href}
        className={className}
      >
        {value}</MaterialButton> 
    </div>
  )
}
