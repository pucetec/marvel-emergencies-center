import React, { forwardRef } from "react";
import Textfield from '@mui/material/TextField';

const Input = forwardRef(({ label, value, onChange,fullWidth }, ref)  => {
    return <Textfield ref ={ref} label={label} fullWidth={fullWidth} value={value} onChange={onChange} />;
});

export default Input;