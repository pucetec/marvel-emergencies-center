import React from "react";
import TextField from '@mui/material/TextField';

const Barra = ({label,onChange}) => {
    return (
        <TextField label={label} onChange={onChange} variant="outlined" />
    )
}

export default Barra