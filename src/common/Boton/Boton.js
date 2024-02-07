import React from "react";
import Button from '@mui/material/Button';

const Boton = ({texto, variant, onClick}) => {
    return (
        <Button variant={variant} onClick={onClick}>{texto}</Button>
    )
}
export default Boton