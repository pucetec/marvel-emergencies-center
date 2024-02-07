import React from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from "@mui/material";

const Tipografia = ({texto, variant}) => {
    return (
        <Typography variant={variant} gutterBottom>
        {texto}
      </Typography>
    )
}

export default Tipografia