import React from "react";
import Button from '@mui/material/Button';

const Boton = ({texto, variant}) => {
    return (
        <Button variant={variant}>{texto}</Button>
    )
}
export default Boton