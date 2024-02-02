import React from 'react'
import { TextField as MaterialTextField} from '@mui/material';

export const TextField = ({id, label, variant}) => {
  return (
    <div className='InputEmergency'>
      <MaterialTextField  
        id={id}
        label={label}
        variant={variant}>
      </MaterialTextField>
    </div>
  )
}
