import React from 'react';
import MuiButton from '@mui/material/Button';

const MyButton = ({ onClick, children }) => {
    return <MuiButton variant="contained" onClick={onClick}>{children}</MuiButton>
}

export default MyButton;