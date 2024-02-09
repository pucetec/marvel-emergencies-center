import React from "react";
import { Button } from "@mui/material";

function ButtonAsignH({ onClick }) {
  return (
    <Button variant="contained" color="primary" onClick={onClick} fullWidth>
      Asignar Heroe
    </Button>
  );
}

export default ButtonAsignH;
