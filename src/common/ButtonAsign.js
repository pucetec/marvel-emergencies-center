import React from "react";
import { Button } from "@mui/material";

function ButtonAsign({ onClick }) {
  return (
    <Button variant="contained" color="primary" onClick={onClick} fullWidth>
      Asignar
    </Button>
  );
}

export default ButtonAsign;
